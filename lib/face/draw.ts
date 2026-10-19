import { FACE_OVAL, LM } from "./landmarks";

type P = { x: number; y: number };
type Line = { a: number; b: number; label?: string };

/** Measurement guides shown on top of the photo. Indices refer to raw (unrotated) landmarks. */
export const GUIDES: Record<string, Line[]> = {
  face: [
    { a: LM.foreheadRight, b: LM.foreheadLeft, label: "Forehead" },
    { a: LM.cheekRight, b: LM.cheekLeft, label: "Cheekbones" },
    { a: LM.jawRight, b: LM.jawLeft, label: "Jaw" },
    { a: LM.forehead, b: LM.chin, label: "Length" },
  ],
  eyes: [
    { a: LM.eyeROuter, b: LM.eyeRInner },
    { a: LM.eyeLOuter, b: LM.eyeLInner },
    { a: LM.eyeRTop, b: LM.eyeRBottom },
    { a: LM.eyeLTop, b: LM.eyeLBottom },
  ],
  nose: [
    { a: LM.alaRight, b: LM.alaLeft, label: "Width" },
    { a: LM.noseBridge, b: LM.subnasale, label: "Length" },
  ],
  lips: [
    { a: LM.mouthRight, b: LM.mouthLeft, label: "Width" },
    { a: LM.upperLipTop, b: LM.upperLipBottom },
    { a: LM.lowerLipTop, b: LM.lowerLipBottom },
  ],
  jaw: [
    { a: LM.jawRight, b: LM.jawLeft, label: "Jaw" },
    { a: LM.chinRight, b: LM.chinLeft, label: "Chin" },
  ],
  proportions: [
    { a: LM.glabella, b: LM.glabella },
    { a: LM.cheekRight, b: LM.cheekLeft },
  ],
};

export function drawOverlay(
  ctx: CanvasRenderingContext2D,
  raw: { x: number; y: number }[],
  w: number,
  h: number,
  guide: keyof typeof GUIDES = "face",
) {
  const p = (i: number): P => ({ x: raw[i].x * w, y: raw[i].y * h });
  const unit = Math.max(w, h) / 400;
  ctx.save();
  ctx.lineWidth = 2 * unit;
  ctx.strokeStyle = "rgba(255,255,255,0.9)";
  ctx.shadowColor = "rgba(0,0,0,0.5)";
  ctx.shadowBlur = 4 * unit;
  ctx.beginPath();
  FACE_OVAL.forEach((i, k) => (k ? ctx.lineTo(p(i).x, p(i).y) : ctx.moveTo(p(i).x, p(i).y)));
  ctx.closePath();
  ctx.stroke();

  ctx.strokeStyle = "#f5b84b";
  ctx.fillStyle = "#f5b84b";
  ctx.font = `${Math.round(11 * unit)}px system-ui, sans-serif`;
  for (const g of GUIDES[guide] ?? []) {
    const a = p(g.a);
    const b = p(g.b);
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
    for (const q of [a, b]) {
      ctx.beginPath();
      ctx.arc(q.x, q.y, 3 * unit, 0, Math.PI * 2);
      ctx.fill();
    }
    if (g.label) ctx.fillText(g.label, Math.max(a.x, b.x) + 6 * unit, (a.y + b.y) / 2);
  }
  ctx.restore();
}
