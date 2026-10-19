"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { getLandmarker, setMode } from "@/lib/face/landmarker";
import { normalizeFace, type FaceFrame } from "@/lib/face/normalize";
import { drawOverlay, GUIDES } from "@/lib/face/draw";

type Raw = { x: number; y: number; z: number }[];
type Status = "idle" | "loading" | "live" | "analyzing" | "done" | "error";

export type CaptureInput = { frame: FaceFrame; raw: Raw; canvas: HTMLCanvasElement };

type Props<R> = {
  analyze: (input: CaptureInput) => R | Promise<R>;
  render: (result: R, reset: () => void) => ReactNode;
  /** Short text shown on the live camera feed, e.g. the current face shape. */
  liveLabel?: (frame: FaceFrame) => string;
  guide?: keyof typeof GUIDES;
  title?: string;
  onResult?: (result: R) => void;
};

const MAX_SIDE = 1280;

export default function FaceCapture<R>({ analyze, render, liveLabel, guide = "face", title, onResult }: Props<R>) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [result, setResult] = useState<R | null>(null);
  const [label, setLabel] = useState("");
  const [dragging, setDragging] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef(0);
  const resultRef = useRef<HTMLDivElement>(null);

  const stopCamera = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  useEffect(() => stopCamera, [stopCamera]);

  useEffect(() => {
    if (status === "done") resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [status]);

  const fail = (msg: string) => {
    stopCamera();
    setError(msg);
    setStatus("error");
  };

  /** Runs the landmark model on whatever is drawn on the main canvas. */
  const runOnCanvas = async () => {
    const canvas = canvasRef.current!;
    setStatus("analyzing");
    try {
      const lm = await getLandmarker();
      await setMode(lm, "IMAGE");
      const res = lm.detect(canvas);
      const raw = res.faceLandmarks[0] as Raw | undefined;
      if (!raw) return fail("We couldn't find a face. Use a clear, well-lit, front-facing photo with your whole face visible.");
      const frame = normalizeFace(raw, canvas.width, canvas.height);
      const out = await analyze({ frame, raw, canvas });
      drawOverlay(canvas.getContext("2d")!, raw, canvas.width, canvas.height, guide);
      setResult(out);
      onResult?.(out);
      setStatus("done");
    } catch (e) {
      console.error(e);
      fail("The face model couldn't run in this browser. Try an up-to-date Chrome, Safari, Edge or Firefox.");
    }
  };

  const loadFile = async (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) return fail("Please choose an image file (JPG, PNG, WebP or HEIC).");
    stopCamera();
    setStatus("loading");
    setError("");
    try {
      const bitmap = await createImageBitmap(file);
      const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
      const canvas = canvasRef.current!;
      canvas.width = Math.round(bitmap.width * scale);
      canvas.height = Math.round(bitmap.height * scale);
      canvas.getContext("2d")!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
      bitmap.close();
      await runOnCanvas();
    } catch {
      fail("That image couldn't be opened. Try a JPG or PNG.");
    }
  };

  const startCamera = async () => {
    setError("");
    setStatus("loading");
    try {
      const [stream, lm] = await Promise.all([
        navigator.mediaDevices.getUserMedia({ video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 960 } }, audio: false }),
        getLandmarker(),
      ]);
      streamRef.current = stream;
      const video = videoRef.current!;
      video.srcObject = stream;
      await video.play();
      await setMode(lm, "VIDEO");
      setStatus("live");
      let last = 0;
      const loop = (t: number) => {
        rafRef.current = requestAnimationFrame(loop);
        if (t - last < 80 || video.readyState < 2) return;
        last = t;
        const overlay = overlayRef.current;
        if (!overlay) return;
        overlay.width = video.videoWidth;
        overlay.height = video.videoHeight;
        const ctx = overlay.getContext("2d")!;
        ctx.clearRect(0, 0, overlay.width, overlay.height);
        const res = lm.detectForVideo(video, t);
        const raw = res.faceLandmarks[0] as Raw | undefined;
        if (!raw) {
          setLabel("Looking for your face…");
          return;
        }
        drawOverlay(ctx, raw, overlay.width, overlay.height, guide);
        if (liveLabel) setLabel(liveLabel(normalizeFace(raw, overlay.width, overlay.height)));
      };
      rafRef.current = requestAnimationFrame(loop);
    } catch (e) {
      const name = (e as Error).name;
      fail(
        name === "NotAllowedError"
          ? "Camera access was blocked. Allow the camera in your browser settings, or upload a photo instead."
          : "We couldn't start your camera. Upload a photo instead.",
      );
    }
  };

  const capture = async () => {
    const video = videoRef.current!;
    const canvas = canvasRef.current!;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d")!.drawImage(video, 0, 0);
    stopCamera();
    await runOnCanvas();
  };

  const reset = () => {
    stopCamera();
    setResult(null);
    setStatus("idle");
    setError("");
    if (fileRef.current) fileRef.current.value = "";
  };

  const showCanvas = status === "analyzing" || status === "done";

  return (
    <div className="capture">
      {title && <h2 className="capture-title">{title}</h2>}
      <div
        className={`stage${dragging ? " dragging" : ""}${showCanvas || status === "live" ? " has-media" : ""}`}
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
        <canvas ref={canvasRef} className="stage-canvas" hidden={!showCanvas} aria-label="Your photo with measurement guides" />
        <div className="live" hidden={status !== "live"}>
          <video ref={videoRef} playsInline muted className="mirror" />
          <canvas ref={overlayRef} className="mirror overlay" />
          {label && <div className="live-label">{label}</div>}
        </div>
        {(status === "idle" || status === "error" || status === "loading") && (
          <div className="stage-empty">
            <FaceIcon />
            <p className="stage-hint">Drop a photo here, upload one, or use your camera.</p>
            <p className="stage-tip">Tip: face the camera straight on, hair pulled back, neutral expression, good light.</p>
          </div>
        )}
        {(status === "loading" || status === "analyzing") && (
          <div className="stage-busy" role="status">
            <span className="spinner" /> {status === "loading" ? "Loading the face model…" : "Measuring your face…"}
          </div>
        )}
      </div>

      <div className="capture-actions">
        {status === "live" ? (
          <>
            <button className="btn primary" onClick={capture}>Capture &amp; analyze</button>
            <button className="btn" onClick={reset}>Stop camera</button>
          </>
        ) : status === "done" ? (
          <button className="btn" onClick={reset}>Try another photo</button>
        ) : (
          <>
            <button className="btn primary" onClick={() => fileRef.current?.click()} disabled={status === "loading" || status === "analyzing"}>
              Upload a photo
            </button>
            <button className="btn" onClick={startCamera} disabled={status === "loading" || status === "analyzing"}>
              Use my camera
            </button>
          </>
        )}
        <input ref={fileRef} type="file" accept="image/*" hidden onChange={(e) => loadFile(e.target.files?.[0])} />
      </div>
      <p className="privacy-note">🔒 Your photo never leaves your device. All analysis runs in your browser.</p>

      {status === "error" && <p className="alert" role="alert">{error}</p>}
      {status === "done" && result !== null && <div className="result" ref={resultRef}>{render(result, reset)}</div>}
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
