"use client";

import type { FaceLandmarker } from "@mediapipe/tasks-vision";

/** Uncompressed sizes, used for progress if a gzip copy can't be used and the server compresses on the fly (tests keep these in sync). */
export const MODEL_BYTES = { simd: 13519922, nosimd: 12627509, model: 3758596 };
const MODEL_PATH = "/models/face_landmarker.task";

let instance: Promise<FaceLandmarker> | null = null;
let ready = false;
let loaded = 0;
let total = MODEL_BYTES.simd + MODEL_BYTES.model;
const listeners = new Set<(fraction: number) => void>();

const fraction = () => (ready ? 1 : Math.min(0.99, loaded / total));
const emit = () => listeners.forEach((fn) => fn(fraction()));

/** Subscribe to download progress (0–1). Returns an unsubscribe function. */
export function onLoadProgress(fn: (fraction: number) => void) {
  listeners.add(fn);
  fn(fraction());
  return () => {
    listeners.delete(fn);
  };
}

export const isLandmarkerReady = () => ready;

/** Reads a response body, counting bytes toward the progress bar. */
async function read(res: Response): Promise<Uint8Array> {
  const reader = res.body!.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    size += value.length;
    loaded += value.length;
    emit();
  }
  const out = new Uint8Array(size);
  let at = 0;
  for (const c of chunks) {
    out.set(c, at);
    at += c.length;
  }
  return out;
}

const gunzip = async (bytes: Uint8Array) =>
  new Uint8Array(await new Response(new Blob([bytes as BlobPart]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer());

/**
 * Opens a file, preferring its pre-compressed .gz copy (about 3.5× smaller). If the browser can't
 * unpack gzip or the copy is missing, it falls back to the original file.
 */
async function open(url: string, gz: string) {
  if (typeof DecompressionStream !== "undefined") {
    const res = await fetch(gz).catch(() => null);
    if (res?.ok && res.body) return { res, unpack: true };
  }
  const res = await fetch(url);
  if (!res.ok || !res.body) throw new Error(`${url}: HTTP ${res.status}`);
  return { res, unpack: false };
}

async function download(file: { res: Response; unpack: boolean }) {
  const bytes = await read(file.res);
  // Unpack only real gzip data (0x1f 0x8b), in case a server already decoded it.
  return file.unpack && bytes[0] === 0x1f && bytes[1] === 0x8b ? gunzip(bytes) : bytes;
}

type ModelFiles = { fileset: Awaited<ReturnType<typeof import("@mediapipe/tasks-vision").FilesetResolver.forVisionTasks>>; model: Uint8Array };
let files: Promise<ModelFiles> | null = null;

/** Downloads (gzipped) and unpacks the runtime and model once, with progress. Network only: nothing runs yet. */
function fetchModelFiles(): Promise<ModelFiles> {
  if (!files) {
    loaded = 0;
    files = (async () => {
      const { FilesetResolver } = await import("@mediapipe/tasks-vision");
      const fileset = await FilesetResolver.forVisionTasks("/mediapipe/wasm");
      const wasmPath = fileset.wasmBinaryPath;
      const opened = await Promise.all([open(wasmPath, `${wasmPath}.gz`), open(MODEL_PATH, `/mediapipe${MODEL_PATH}.gz`)]);
      // Progress counts downloaded bytes; Content-Length is exact for the .gz copies (served as-is).
      const lengths = opened.map((f) => Number(f.res.headers.get("content-length")) || 0);
      total = lengths.every(Boolean) && opened.every((f) => f.unpack)
        ? lengths[0] + lengths[1]
        : (wasmPath.includes("nosimd") ? MODEL_BYTES.nosimd : MODEL_BYTES.simd) + MODEL_BYTES.model;
      const [wasm, model] = await Promise.all(opened.map(download));
      // Hand MediaPipe the bytes we already downloaded instead of letting it fetch them again.
      fileset.wasmBinaryPath = URL.createObjectURL(new Blob([wasm as BlobPart], { type: "application/wasm" }));
      return { fileset, model };
    })();
    files.catch(() => {
      files = null;
      loaded = 0;
      emit();
    });
  }
  return files;
}

/** Downloads (if needed) and starts the face model once. The browser caches the files for a year. */
export function getLandmarker(): Promise<FaceLandmarker> {
  if (!instance) {
    instance = (async () => {
      const [{ FaceLandmarker }, { fileset, model }] = await Promise.all([import("@mediapipe/tasks-vision"), fetchModelFiles()]);
      const create = (delegate: "GPU" | "CPU") =>
        FaceLandmarker.createFromOptions(fileset, {
          baseOptions: { modelAssetBuffer: model, delegate },
          runningMode: "IMAGE",
          numFaces: 1,
        });
      // CPU (XNNPACK) starts much faster than the GPU delegate, which compiles shaders on first use.
      try {
        return await create("CPU");
      } catch {
        return await create("GPU");
      }
    })();
    instance.then(
      () => {
        ready = true;
        emit();
      },
      () => {
        instance = null;
      },
    );
  }
  return instance;
}

/**
 * Downloads the model files in the background (it doesn't start the model, so the camera stays smooth),
 * unless the visitor asked to save data or is on a very slow connection.
 */
export function preloadModelFiles() {
  const c = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  if (c?.saveData || /2g/.test(c?.effectiveType ?? "")) return;
  fetchModelFiles().catch(() => {});
}
