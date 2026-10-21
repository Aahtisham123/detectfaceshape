"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { getLandmarker, isLandmarkerReady, onLoadProgress, preloadModelFiles } from "@/lib/face/landmarker";
import { normalizeFace, type FaceFrame } from "@/lib/face/normalize";
import { drawOverlay, GUIDES } from "@/lib/face/draw";
import { Icon } from "@/components/icons";
import { toast } from "@/lib/toast";
import { useT } from "@/lib/i18n/client";
import AnalysisPanel from "./AnalysisPanel";

const CameraSheet = dynamic(() => import("./CameraSheet"), { ssr: false });

type Raw = { x: number; y: number; z: number }[];
type Status = "idle" | "analyzing" | "done" | "error";

export type CaptureInput = { frame: FaceFrame; raw: Raw; canvas: HTMLCanvasElement };

type Props<R> = {
  analyze: (input: CaptureInput) => R | Promise<R>;
  render: (result: R, reset: () => void) => ReactNode;
  guide?: keyof typeof GUIDES;
  title?: string;
  /** Heading of the analysis screen, e.g. "Analyzing your face shape". */
  analyzingTitle?: string;
  onResult?: (result: R) => void;
};

const MAX_SIDE = 1280;
const PHOTO_TYPES = "image/jpeg,image/png,image/webp,image/heic,image/heif,image/avif,.jpg,.jpeg,.png,.webp,.heic,.heif,.avif";
/** Each analysis step stays on screen at least this long, so the steps can be read. */
const STEP_MS = 250;
/** Share of the progress bar used by the model download; the other steps fill the rest. */
const LOAD_SHARE = 0.7;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function FaceCapture<R>({ analyze, render, guide = "face", title, analyzingTitle, onResult }: Props<R>) {
  const { t } = useT();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [result, setResult] = useState<R | null>(null);
  const [dragging, setDragging] = useState(false);
  const [camera, setCamera] = useState(false);
  const [photo, setPhoto] = useState("");
  const [step, setStep] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);
  // Buttons stay disabled until hydration, so an early tap on a slow phone is never silently ignored.
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const [download, setDownload] = useState(0);
  useEffect(() => onLoadProgress(setDownload), []);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // Download the model files in the background once the tool is on screen and the page is idle,
  // so they're usually here before the visitor has a photo. The model itself starts only after.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    let idle = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
      idle = w.requestIdleCallback ? w.requestIdleCallback(preloadModelFiles, { timeout: 2500 }) : window.setTimeout(preloadModelFiles, 1200);
    }, { rootMargin: "200px" });
    io.observe(stage);
    return () => {
      io.disconnect();
      const w = window as Window & { cancelIdleCallback?: (id: number) => void };
      if (w.cancelIdleCallback) w.cancelIdleCallback(idle);
      else clearTimeout(idle);
    };
  }, []);

  useEffect(() => {
    if (status === "done") resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [status]);

  const fail = (msg: string) => {
    setError(msg);
    setStatus("error");
    toast("error", msg);
  };

  /** Runs one analysis step, keeping it visible for at least STEP_MS. */
  const runStep = async <T,>(n: number, work: () => T | Promise<T>): Promise<T> => {
    setStep(n);
    const started = performance.now();
    const out = await work();
    const left = STEP_MS - (performance.now() - started);
    if (left > 0) await sleep(left);
    setStepProgress(LOAD_SHARE + ((1 - LOAD_SHARE) * n) / 3);
    return out;
  };

  /** Draws a photo onto the analysis canvas (scaled down), then analyzes it. */
  const analyzePhoto = async (source: CanvasImageSource & { width: number; height: number }) => {
    const canvas = canvasRef.current!;
    const scale = Math.min(1, MAX_SIDE / Math.max(source.width, source.height));
    canvas.width = Math.round(source.width * scale);
    canvas.height = Math.round(source.height * scale);
    canvas.getContext("2d")!.drawImage(source, 0, 0, canvas.width, canvas.height);
    setPhoto(canvas.toDataURL("image/jpeg", 0.85));
    setError("");
    setResult(null);
    setStepProgress(0);
    setStep(0);
    setStatus("analyzing");
    try {
      const lm = await runStep(0, getLandmarker);
      const raw = await runStep(1, () => lm.detect(canvas).faceLandmarks[0] as Raw | undefined);
      if (!raw) return fail(t("We couldn't find a face. Use a clear, well-lit, front-facing photo with your whole face visible."));
      const frame = await runStep(2, () => normalizeFace(raw, canvas.width, canvas.height));
      const out = await runStep(3, () => analyze({ frame, raw, canvas }));
      drawOverlay(canvas.getContext("2d")!, raw, canvas.width, canvas.height, guide, t);
      setResult(out);
      onResult?.(out);
      setStatus("done");
      toast("success", t(frame.warnings.length ? "Done! See the tips below for a more accurate reading." : "Analysis complete. Your result is ready."));
    } catch (e) {
      console.error(e);
      fail(t("The face model couldn't run in this browser. Try an up-to-date Chrome, Safari, Edge or Firefox."));
    }
  };

  const loadFile = async (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith("image/") && !/\.(jpe?g|png|webp|heic|heif|avif)$/i.test(file.name)) return fail(t("Please choose an image file (JPG, PNG, WebP or HEIC)."));
    let bitmap: ImageBitmap;
    try {
      bitmap = await createImageBitmap(file);
    } catch {
      return fail(t("That image couldn't be opened. Try a JPG or PNG."));
    }
    await analyzePhoto(bitmap);
    bitmap.close();
  };

  const cameraError = (e: unknown) => {
    setCamera(false);
    fail(
      t((e as Error)?.name === "NotAllowedError"
        ? "Camera access was blocked. Allow the camera in your browser settings, or upload a photo instead."
        : "We couldn't start your camera. Upload a photo instead."),
    );
  };

  const reset = () => {
    setResult(null);
    setPhoto("");
    setStatus("idle");
    setError("");
    if (fileRef.current) fileRef.current.value = "";
  };

  // While the model downloads, step 1 fills most of the bar; later steps fill the rest.
  const progress = step === 0 ? (isLandmarkerReady() ? LOAD_SHARE : download * LOAD_SHARE) : stepProgress;
  const busy = status === "analyzing";

  return (
    <div className="capture">
      {title && <h2 className="capture-title">{title}</h2>}
      {busy && <AnalysisPanel photo={photo} step={step} progress={progress} title={analyzingTitle ?? t("Analyzing your face")} />}
      {/* The stage stays mounted (hidden while analyzing) so the photo on its canvas survives between screens. */}
      <div
        ref={stageRef}
        hidden={busy}
        className={`stage${dragging ? " dragging" : ""}${status === "done" ? " has-media" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          loadFile(e.dataTransfer.files[0]);
        }}
      >
        <canvas ref={canvasRef} className="stage-canvas" hidden={status !== "done"} aria-label={t("Your photo with measurement guides")} />
        {status !== "done" && (
          <div className="stage-empty">
            <FaceIcon />
            <p className="stage-hint">{t("Drop a photo here, upload one, or use your camera.")}</p>
            <p className="stage-tip">{t("Tip: face the camera straight on, hair pulled back, neutral expression, good light.")}</p>
          </div>
        )}
      </div>

      <div className="capture-actions" hidden={busy}>
        {status === "done" ? (
          <button className="btn" onClick={reset}><Icon name="RotateCcw" size={18} /> {t("Try another photo")}</button>
        ) : (
          <>
            <button className="btn primary" onClick={() => fileRef.current?.click()} disabled={!ready || busy}>
              <Icon name="Upload" size={18} /> {t("Upload a photo")}
            </button>
            <button className="btn" onClick={() => { setError(""); setCamera(true); }} disabled={!ready || busy}>
              <Icon name="Camera" size={18} /> {t("Use my camera")}
            </button>
          </>
        )}
        {/* Exact types instead of image/*: mobile browsers then open the photo picker without offering the
            system camera app; taking a photo always happens in the in-browser camera. */}
        <input ref={fileRef} type="file" accept={PHOTO_TYPES} hidden onChange={(e) => loadFile(e.target.files?.[0])} />
      </div>
      <p className="privacy-note"><Icon name="ShieldCheck" size={16} /> {t("Your photo never leaves your device. All analysis runs in your browser.")}</p>

      {camera && (
        <CameraSheet
          onClose={() => setCamera(false)}
          onError={cameraError}
          onPhoto={(shot) => {
            setCamera(false);
            analyzePhoto(shot);
          }}
        />
      )}

      {status === "error" && (
        <div className="alert" role="alert">
          <Icon name="TriangleAlert" size={22} />
          <div>
            <strong>{t("Something went wrong")}</strong>
            <p>{error}</p>
          </div>
          <button className="btn sm" onClick={reset}><Icon name="RotateCcw" size={16} /> {t("Try again")}</button>
        </div>
      )}
      {status === "done" && result !== null && (
        <div className="result" ref={resultRef}>
          <p className="success-banner"><Icon name="CircleCheck" size={18} /> {t("Analysis complete")}</p>
          {render(result, reset)}
        </div>
      )}
    </div>
  );
}

function FaceIcon() {
  return (
    <svg width="72" height="88" viewBox="0 0 72 88" aria-hidden="true" className="stage-icon">
      <ellipse cx="36" cy="44" rx="30" ry="40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 5" />
      <circle cx="25" cy="38" r="3" fill="currentColor" />
      <circle cx="47" cy="38" r="3" fill="currentColor" />
      <path d="M26 60 q10 7 20 0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
