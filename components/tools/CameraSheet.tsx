"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@/components/icons";
import { useT } from "@/lib/i18n/client";

type Mode = "starting" | "live" | "review" | "crop";
type Box = { x: number; y: number; w: number; h: number };
type Drag = { kind: "move" | "nw" | "ne" | "sw" | "se"; startX: number; startY: number; box: Box; rect: DOMRect };

const MIN = 0.15;
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/**
 * Full-screen camera: a plain preview with a framing guide (no face model runs here, so it stays smooth),
 * then a review step to retake, crop or use the photo. Calls onPhoto with the final picture.
 */
export default function CameraSheet({ onPhoto, onClose, onError }: { onPhoto: (photo: HTMLCanvasElement) => void; onClose: () => void; onError: (e: unknown) => void }) {
  const { t } = useT();
  const [mode, setMode] = useState<Mode>("starting");
  const [facing, setFacing] = useState<"user" | "environment">("user");
  const [canFlip, setCanFlip] = useState(false);
  const [shot, setShot] = useState<string>("");
  const [box, setBox] = useState<Box>({ x: 0.1, y: 0.08, w: 0.8, h: 0.84 });
  const sheetRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const photoRef = useRef<HTMLCanvasElement | null>(null);
  const dragRef = useRef<Drag | null>(null);

  const stop = useCallback(() => {
    streamRef.current?.getTracks().forEach((tr) => tr.stop());
    streamRef.current = null;
  }, []);

  const start = useCallback(async (side: "user" | "environment") => {
    stop();
    setMode("starting");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: side, width: { ideal: 1920 }, height: { ideal: 1920 } }, audio: false });
      streamRef.current = stream;
      const video = videoRef.current!;
      video.srcObject = stream;
      await video.play();
      setMode("live");
      const devices = await navigator.mediaDevices.enumerateDevices().catch(() => []);
      setCanFlip(devices.filter((d) => d.kind === "videoinput").length > 1);
    } catch (e) {
      stop();
      onError(e);
    }
  }, [onError, stop]);

  // Open: start the camera, take over the screen (true full screen where the browser allows it), lock scrolling.
  useEffect(() => {
    start("user");
    const sheet = sheetRef.current;
    sheet?.requestFullscreen?.().catch(() => {});
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      stop();
      html.style.overflow = prev;
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    };
  }, [start, stop]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const showPhoto = (canvas: HTMLCanvasElement) => {
    photoRef.current = canvas;
    setShot(canvas.toDataURL("image/jpeg", 0.92));
  };

  const takePhoto = () => {
    const video = videoRef.current!;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    // The preview is mirrored like a selfie, but the photo keeps true orientation so left/right labels
    // (eyes, symmetry) match the person's own left and right.
    canvas.getContext("2d")!.drawImage(video, 0, 0);
    stop();
    showPhoto(canvas);
    setMode("review");
  };

  const retake = () => {
    setShot("");
    photoRef.current = null;
    start(facing);
  };

  const flip = () => {
    const next = facing === "user" ? "environment" : "user";
    setFacing(next);
    start(next);
  };

  const applyCrop = () => {
    const src = photoRef.current!;
    const out = document.createElement("canvas");
    out.width = Math.round(box.w * src.width);
    out.height = Math.round(box.h * src.height);
    out.getContext("2d")!.drawImage(src, box.x * src.width, box.y * src.height, out.width, out.height, 0, 0, out.width, out.height);
    showPhoto(out);
    setMode("review");
  };

  const onDown = (kind: Drag["kind"]) => (e: ReactPointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const frame = (e.currentTarget as HTMLElement).closest(".crop-frame")!;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current = { kind, startX: e.clientX, startY: e.clientY, box, rect: frame.getBoundingClientRect() };
  };
  const onMove = (e: ReactPointerEvent) => {
    const d = dragRef.current;
    if (!d) return;
    const dx = (e.clientX - d.startX) / d.rect.width;
    const dy = (e.clientY - d.startY) / d.rect.height;
    const b = d.box;
    if (d.kind === "move") return setBox({ ...b, x: clamp(b.x + dx, 0, 1 - b.w), y: clamp(b.y + dy, 0, 1 - b.h) });
    let { x, y, w, h } = b;
    if (d.kind.includes("w")) { const nx = clamp(b.x + dx, 0, b.x + b.w - MIN); w = b.w + (b.x - nx); x = nx; }
    if (d.kind.includes("e")) w = clamp(b.w + dx, MIN, 1 - b.x);
    if (d.kind.includes("n")) { const ny = clamp(b.y + dy, 0, b.y + b.h - MIN); h = b.h + (b.y - ny); y = ny; }
    if (d.kind.includes("s")) h = clamp(b.h + dy, MIN, 1 - b.y);
    setBox({ x, y, w, h });
  };
  const onUp = () => {
    dragRef.current = null;
  };

  const sheet = (
    <div className="camera-sheet" ref={sheetRef} role="dialog" aria-modal="true" aria-label={t("Camera")}>
      <div className="camera-top">
        <button className="camera-round" onClick={onClose} aria-label={t("Close camera")}><Icon name="X" size={22} /></button>
        <p className="camera-title">
          {mode === "crop" ? t("Drag the box or its corners to frame your face") : mode === "review" ? t("Check your photo") : t("Fit your face inside the oval")}
        </p>
        {mode === "live" && canFlip ? (
          <button className="camera-round" onClick={flip} aria-label={t("Switch camera")}><Icon name="SwitchCamera" size={22} /></button>
        ) : (
          <span className="camera-round-spacer" />
        )}
      </div>

      <div className="camera-view">
        <video ref={videoRef} playsInline muted className={facing === "user" ? "camera-video mirror" : "camera-video"} hidden={mode === "review" || mode === "crop"} />
        {(mode === "live" || mode === "starting") && <div className="camera-guide" aria-hidden="true" />}
        {mode === "starting" && <p className="camera-status"><Icon name="LoaderCircle" size={20} className="spin" /> {t("Starting your camera…")}</p>}
        {(mode === "review" || mode === "crop") && shot && (
          <div className="crop-frame" onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={shot} alt={t("Your photo")} className="camera-shot" draggable={false} />
            {mode === "crop" && (
              <div
                className="crop-box"
                style={{ left: `${box.x * 100}%`, top: `${box.y * 100}%`, width: `${box.w * 100}%`, height: `${box.h * 100}%` }}
                onPointerDown={onDown("move")}
              >
                {(["nw", "ne", "sw", "se"] as const).map((k) => (
                  <span key={k} className={`crop-handle ${k}`} onPointerDown={onDown(k)} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="camera-bottom">
        {mode === "live" || mode === "starting" ? (
          <>
            <p className="camera-hint">{t("Hair back, look straight at the camera, even light")}</p>
            <button className="shutter" onClick={takePhoto} disabled={mode !== "live"} aria-label={t("Take photo")}><span /></button>
          </>
        ) : mode === "review" ? (
          <div className="camera-actions">
            <button className="btn camera-btn" onClick={retake}><Icon name="RotateCcw" size={18} /> {t("Retake")}</button>
            <button className="btn camera-btn" onClick={() => { setBox({ x: 0.1, y: 0.08, w: 0.8, h: 0.84 }); setMode("crop"); }}><Icon name="Crop" size={18} /> {t("Crop")}</button>
            <button className="btn primary" onClick={() => onPhoto(photoRef.current!)}><Icon name="Check" size={18} /> {t("Use photo")}</button>
          </div>
        ) : (
          <div className="camera-actions">
            <button className="btn camera-btn" onClick={() => setMode("review")}><Icon name="X" size={18} /> {t("Cancel")}</button>
            <button className="btn primary" onClick={applyCrop}><Icon name="Crop" size={18} /> {t("Apply crop")}</button>
          </div>
        )}
      </div>
    </div>
  );
  return createPortal(sheet, document.body);
}
