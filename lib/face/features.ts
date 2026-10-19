import { LM, MIDLINE, SYMMETRIC_PAIRS } from "./landmarks";
import { angleAt, avg, clamp, closeness, dist, type Pt } from "./geometry";
import { measureFace } from "./faceShape";

const PHI = 1.618;

/* ------------------------------------------------------------------ eyes */

export function measureEyes(pts: Pt[]) {
  const side = (outer: number, inner: number, top: number, bottom: number, brow: number, isRight: boolean) => {
    const o = pts[outer];
    const i = pts[inner];
    const width = dist(o, i);
    const height = dist(pts[top], pts[bottom]);
    // Positive tilt = outer corner sits higher than the inner corner (y grows downward).
    const tilt = (Math.atan2(i.y - o.y, Math.abs(i.x - o.x)) * 180) / Math.PI;
    const browGap = (pts[top].y - pts[brow].y) / width;
    return { width, height, aspect: height / width, tilt, browGap, isRight };
  };
  const right = side(LM.eyeROuter, LM.eyeRInner, LM.eyeRTop, LM.eyeRBottom, LM.browRMid, true);
  const left = side(LM.eyeLOuter, LM.eyeLInner, LM.eyeLTop, LM.eyeLBottom, LM.browLMid, false);
  const eyeWidth = (right.width + left.width) / 2;
  const intercanthal = dist(pts[LM.eyeRInner], pts[LM.eyeLInner]);
  return {
    right,
    left,
    aspect: (right.aspect + left.aspect) / 2,
    tilt: (right.tilt + left.tilt) / 2,
    browGap: (right.browGap + left.browGap) / 2,
    spacing: intercanthal / eyeWidth,
    eyeWidth,
    intercanthal,
  };
}

/* ------------------------------------------------------------------ nose */

export function measureNose(pts: Pt[]) {
  const width = dist(pts[LM.alaRight], pts[LM.alaLeft]);
  const length = dist(pts[LM.noseBridge], pts[LM.subnasale]);
  const faceLength = dist(pts[LM.forehead], pts[LM.chin]);
  const intercanthal = dist(pts[LM.eyeRInner], pts[LM.eyeLInner]);
  // How far the tip sits above the base of the nose; larger = tip turned up, nostrils more visible.
  const tipLift = (pts[LM.subnasale].y - pts[LM.noseTip].y) / length;
  // Bridge profile from depth: positive = bridge bulges forward of the straight line root→tip.
  const root = pts[LM.noseBridge];
  const tip = pts[4];
  const bridge = [6, 197, 195, 5].map((i) => {
    const t = (pts[i].y - root.y) / (tip.y - root.y || 1);
    const lineZ = root.z + (tip.z - root.z) * t;
    return (lineZ - pts[i].z) / width;
  });
  const hump = Math.max(...bridge);
  // Projection: how far the tip comes forward relative to the cheeks.
  const projection = ((pts[LM.alaRight].z + pts[LM.alaLeft].z) / 2 - pts[LM.noseTip].z) / width;
  return { width, length, widthRatio: width / intercanthal, lengthRatio: length / faceLength, tipLift, hump, projection };
}

/* ------------------------------------------------------------------ lips */

export function measureLips(pts: Pt[]) {
  const width = dist(pts[LM.mouthRight], pts[LM.mouthLeft]);
  const upper = dist(pts[LM.upperLipTop], pts[LM.upperLipBottom]);
  const lower = dist(pts[LM.lowerLipTop], pts[LM.lowerLipBottom]);
  const noseWidth = dist(pts[LM.alaRight], pts[LM.alaLeft]);
  const peaks = (pts[LM.bowRight].y + pts[LM.bowLeft].y) / 2;
  // Cupid's bow depth: how far the centre dips below the two peaks, relative to upper lip height.
  const bowDepth = (pts[LM.upperLipTop].y - peaks) / upper;
  const centerY = (pts[LM.upperLipBottom].y + pts[LM.lowerLipTop].y) / 2;
  // Positive = corners sit above the centre line (upturned).
  const cornerLift = (centerY - (pts[LM.mouthRight].y + pts[LM.mouthLeft].y) / 2) / width;
  return {
    width,
    upper,
    lower,
    fullness: (upper + lower) / width,
    upperToLower: upper / lower,
    widthToNose: width / noseWidth,
    bowDepth,
    cornerLift,
  };
}

/* ------------------------------------------------------------------ jaw */

export function measureJaw(pts: Pt[]) {
  const m = measureFace(pts);
  const chinLength = dist(pts[LM.lowerLipBottom], pts[LM.chin]) / m.faceLength;
  return { jawRatio: m.jawRatio, jawAngle: m.jawAngle, chinRatio: m.chinRatio, chinLength, jawToLength: m.jawWidth / m.faceLength };
}

/* ------------------------------------------------------------------ symmetry */

/**
 * Mirrors each landmark pair across the fitted facial midline and measures how far
 * the mirrored point lands from its partner, in units of interocular distance.
 */
export function measureSymmetry(pts: Pt[], iod: number) {
  const mids = MIDLINE.map((i) => pts[i]);
  // Midline as x = a + b*y (least squares) — the face is near-vertical after roll removal.
  const my = mids.reduce((s, p) => s + p.y, 0) / mids.length;
  const mx = mids.reduce((s, p) => s + p.x, 0) / mids.length;
  let num = 0;
  let den = 0;
  for (const p of mids) {
    num += (p.y - my) * (p.x - mx);
    den += (p.y - my) ** 2;
  }
  const b = den ? num / den : 0;
  const a = mx - b * my;
  const reflect = (p: Pt) => {
    const lineX = a + b * p.y;
    return { x: 2 * lineX - p.x, y: p.y, z: p.z };
  };
  const deviations = SYMMETRIC_PAIRS.map(([r, l]) => dist(reflect(pts[r]), pts[l]) / iod);
  const mean = deviations.reduce((s, d) => s + d, 0) / deviations.length;
  const region = (pairs: [number, number][]) => {
    const ds = pairs.map(([r, l]) => dist(reflect(pts[r]), pts[l]) / iod);
    return ds.reduce((s, d) => s + d, 0) / ds.length;
  };
  return {
    mean,
    regions: {
      eyes: region([[33, 263], [133, 362], [159, 386], [145, 374]]),
      brows: region([[70, 300], [105, 334], [107, 336]]),
      nose: region([[129, 358], [98, 327], [48, 278]]),
      mouth: region([[61, 291], [40, 270], [37, 267], [84, 314]]),
      jaw: region([[172, 397], [136, 365], [150, 379], [176, 400], [148, 377]]),
      cheeks: region([[234, 454], [93, 323], [50, 280]]),
    },
    midline: { a, b },
  };
}

/** Maps mean mirrored deviation (in IODs) to a 0–100 score. A straight-on photo of a typical face lands around 82–92. */
export const symmetryScore = (dev: number) => Math.round(clamp(100 - dev * 250, 0, 100));

/* ------------------------------------------------------------------ proportions */

export function measureProportions(pts: Pt[]) {
  const m = measureFace(pts);
  const glabella = pts[LM.glabella];
  const sub = pts[LM.subnasale];
  const chin = pts[LM.chin];
  const stomion = avg([pts[LM.upperLipBottom], pts[LM.lowerLipTop]]);
  // The mesh stops below the hairline, so the upper third is estimated from the top landmark.
  const upperThird = (glabella.y - pts[LM.forehead].y) * 1.9;
  const middleThird = sub.y - glabella.y;
  const lowerThird = chin.y - sub.y;
  const eyeR = dist(pts[LM.eyeROuter], pts[LM.eyeRInner]);
  const eyeL = dist(pts[LM.eyeLOuter], pts[LM.eyeLInner]);
  const eyeWidth = (eyeR + eyeL) / 2;
  const intercanthal = dist(pts[LM.eyeRInner], pts[LM.eyeLInner]);
  const mouthWidth = dist(pts[LM.mouthRight], pts[LM.mouthLeft]);
  const noseWidth = dist(pts[LM.alaRight], pts[LM.alaLeft]);
  const pupils = dist(pts[LM.irisR], pts[LM.irisL]);
  return {
    thirds: { upper: upperThird, middle: middleThird, lower: lowerThird },
    lowerSplit: (stomion.y - sub.y) / (chin.y - stomion.y),
    fifths: { eyeWidth, intercanthal, faceWidth: m.cheekWidth },
    ratios: {
      faceLengthToWidth: (upperThird + middleThird + lowerThird) / m.cheekWidth,
      mouthToNose: mouthWidth / noseWidth,
      cheekToJaw: m.cheekWidth / m.jawWidth,
      pupilsToMouth: (stomion.y - (pts[LM.irisR].y + pts[LM.irisL].y) / 2) / pupils,
      intercanthalToEye: intercanthal / eyeWidth,
      faceWidthToEyes: m.cheekWidth / eyeWidth,
    },
  };
}

export type RatioCheck = { label: string; value: number; ideal: number; score: number; note: string };

export function goldenRatioChecks(p: ReturnType<typeof measureProportions>): RatioCheck[] {
  const t = p.thirds;
  return [
    { label: "Face length ÷ face width", value: p.ratios.faceLengthToWidth, ideal: PHI, score: closeness(p.ratios.faceLengthToWidth, PHI, 0.3), note: "Classic golden-ratio face is about 1.6× as long as it is wide." },
    { label: "Mouth width ÷ nose width", value: p.ratios.mouthToNose, ideal: PHI, score: closeness(p.ratios.mouthToNose, PHI, 0.3), note: "The mouth is ideally about 1.6× the width of the nose." },
    { label: "Middle third ÷ lower third", value: t.middle / t.lower, ideal: 1, score: closeness(t.middle / t.lower, 1, 0.35), note: "Brow-to-nose and nose-to-chin should be roughly equal." },
    { label: "Upper third ÷ middle third", value: t.upper / t.middle, ideal: 1, score: closeness(t.upper / t.middle, 1, 0.4), note: "Hairline-to-brow ≈ brow-to-nose (estimated: the mesh stops below the hairline)." },
    { label: "Chin ÷ upper lip (lower face)", value: 1 / p.lowerSplit, ideal: 2, score: closeness(1 / p.lowerSplit, 2, 0.4), note: "Lips-to-chin is ideally about twice nose-to-lips." },
    { label: "Eye spacing ÷ eye width", value: p.ratios.intercanthalToEye, ideal: 1, score: closeness(p.ratios.intercanthalToEye, 1, 0.35), note: "Rule of fifths: the gap between the eyes equals one eye width." },
    { label: "Face width ÷ eye width", value: p.ratios.faceWidthToEyes, ideal: 5, score: closeness(p.ratios.faceWidthToEyes, 5, 0.3), note: "Rule of fifths: the face is about five eye-widths wide." },
  ];
}

export function ratioScore(checks: RatioCheck[]) {
  return Math.round(checks.reduce((s, c) => s + c.score, 0) / checks.length);
}

/* ------------------------------------------------------------------ compare */

/** Shape similarity of two faces after removing position, scale and rotation (Procrustes on 2D landmarks). */
export function faceSimilarity(a: Pt[], b: Pt[]) {
  const idx = [...new Set([...SYMMETRIC_PAIRS.flat(), ...MIDLINE])];
  const prep = (pts: Pt[]) => {
    const sel = idx.map((i) => pts[i]);
    const c = avg(sel);
    const centered = sel.map((p) => ({ x: p.x - c.x, y: p.y - c.y }));
    const s = Math.sqrt(centered.reduce((acc, p) => acc + p.x ** 2 + p.y ** 2, 0));
    return centered.map((p) => ({ x: p.x / s, y: p.y / s }));
  };
  const A = prep(a);
  const B = prep(b);
  // Optimal rotation of B onto A.
  let sxx = 0;
  let sxy = 0;
  for (let i = 0; i < A.length; i++) {
    sxx += A[i].x * B[i].x + A[i].y * B[i].y;
    sxy += A[i].y * B[i].x - A[i].x * B[i].y;
  }
  const theta = Math.atan2(sxy, sxx);
  const cos = Math.cos(theta);
  const sin = Math.sin(theta);
  let d2 = 0;
  for (let i = 0; i < A.length; i++) {
    const bx = B[i].x * cos - B[i].y * sin;
    const by = B[i].x * sin + B[i].y * cos;
    d2 += (A[i].x - bx) ** 2 + (A[i].y - by) ** 2;
  }
  return Math.sqrt(d2);
}

export { angleAt };
