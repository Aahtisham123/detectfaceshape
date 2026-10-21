"use client";

import type { FaceLandmarker } from "@mediapipe/tasks-vision";

/** Uncompressed sizes of the files we download, so progress works even when the server compresses them (tests keep these in sync). */
export const MODEL_BYTES = { simd: 13519922, nosimd: 12627509, model: 3758596 };

let instance: Promise<FaceLandmarker> | null = null;
let ready = false;
let mode: "IMAGE" | "VIDEO" = "IMAGE";
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

async function download(url: string): Promise<Uint8Array> {
  const res = await fetch(url);
  if (!res.ok || !res.body) throw new Error(`${url}: HTTP ${res.status}`);
  const reader = res.body.getReader();
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

/** Loads the face model once. Both files download in parallel and report progress; the browser caches them for a year. */
export function getLandmarker(): Promise<FaceLandmarker> {
  if (!instance) {
    loaded = 0;
    instance = (async () => {
      const { FaceLandmarker, FilesetResolver } = await import("@mediapipe/tasks-vision");
      const fileset = await FilesetResolver.forVisionTasks("/mediapipe/wasm");
      if (fileset.wasmBinaryPath.includes("nosimd")) total = MODEL_BYTES.nosimd + MODEL_BYTES.model;
      const [wasm, model] = await Promise.all([download(fileset.wasmBinaryPath), download("/models/face_landmarker.task")]);
      // Hand MediaPipe the bytes we already downloaded instead of letting it fetch them again.
      fileset.wasmBinaryPath = URL.createObjectURL(new Blob([wasm as BlobPart], { type: "application/wasm" }));
      const create = (delegate: "GPU" | "CPU") =>
        FaceLandmarker.createFromOptions(fileset, {
          baseOptions: { modelAssetBuffer: model, delegate },
          runningMode: "IMAGE",
          numFaces: 1,
        });
      // CPU (XNNPACK) starts much faster than the GPU delegate, which compiles shaders on first use,
      // and is quick enough for photos and the throttled live camera loop.
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
        loaded = 0;
        emit();
      },
    );
  }
  return instance;
}

/** Starts the download in the background, unless the visitor asked to save data or is on a very slow connection. */
export function preloadLandmarker() {
  const c = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  if (c?.saveData || /2g/.test(c?.effectiveType ?? "")) return;
  getLandmarker().catch(() => {});
}

export async function setMode(lm: FaceLandmarker, next: "IMAGE" | "VIDEO") {
  if (mode !== next) {
    await lm.setOptions({ runningMode: next });
    mode = next;
  }
}
