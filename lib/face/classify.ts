import { clamp, closeness, scorePrototypes } from "./geometry";
import type { FaceFrame } from "./normalize";
import { faceZScores, measureFace } from "./faceShape";
import {
  goldenRatioChecks, measureEyes, measureJaw, measureLips, measureNose, measureProportions, measureSymmetry,
  ratioScore, symmetryScore,
} from "./features";

type Norm = { mean: number; sd: number };
const z = (v: number, n: Norm) => (v - n.mean) / n.sd;

/** Means/SDs measured on 71 frontal photos with the same landmark model (see faceShape.ts). */
export const NORMS = {
  eyeAspect: { mean: 0.308, sd: 0.05 },
  canthalTilt: { mean: 4.2, sd: 3.0 },
  browGap: { mean: 0.652, sd: 0.09 },
  eyeSpacing: { mean: 1.247, sd: 0.098 },
  noseWidth: { mean: 1.279, sd: 0.09 },
  noseLength: { mean: 0.29, sd: 0.0146 },
  noseTip: { mean: 0.117, sd: 0.034 },
  noseHump: { mean: 0.068, sd: 0.008 },
  noseProjection: { mean: 0.655, sd: 0.046 },
  lipFullness: { mean: 0.265, sd: 0.066 },
  lipUpperLower: { mean: 0.576, sd: 0.108 },
  lipWidth: { mean: 1.377, sd: 0.111 },
  lipBow: { mean: 0.291, sd: 0.0875 },
  lipCorner: { mean: 0.064, sd: 0.06 },
  chinLength: { mean: 0.21, sd: 0.0225 },
};

const band = (zv: number, low: string, mid: string, high: string, cut = 1) => (zv <= -cut ? low : zv >= cut ? high : mid);

/* ------------------------------------------------------------------ eyes */

export type EyeShapeKey = "almond" | "round" | "hooded" | "monolid" | "upturned" | "downturned" | "protruding";

const EYE_PROTOTYPES: Record<EyeShapeKey, Record<string, number>> = {
  almond: { A: 0, T: 0, B: 0 },
  round: { A: 1.6, T: 0, B: 0.4 },
  hooded: { A: -0.3, T: 0, B: -1.6 },
  monolid: { A: -1.9, T: 0.5, B: -1.0 },
  upturned: { A: 0, T: 1.8, B: 0 },
  downturned: { A: 0, T: -2.3, B: 0 },
  protruding: { A: 1.0, T: 0, B: 1.5 },
};

export function analyzeEyes(frame: FaceFrame) {
  const m = measureEyes(frame.pts);
  const zs = {
    A: z(m.aspect, NORMS.eyeAspect),
    T: z(m.tilt, NORMS.canthalTilt),
    B: z(m.browGap, NORMS.browGap),
  };
  const ranking = scorePrototypes(zs, EYE_PROTOTYPES, { A: 1, T: 1, B: 0.8 }, 1.4);
  const spacingZ = z(m.spacing, NORMS.eyeSpacing);
  return {
    shape: ranking[0].key,
    ranking,
    measurements: m,
    traits: {
      spacing: band(spacingZ, "close-set", "average spacing", "wide-set"),
      tilt: m.tilt > 4 ? "positive canthal tilt" : m.tilt < 0 ? "negative canthal tilt" : "neutral canthal tilt",
      openness: band(zs.A, "narrow", "medium", "wide open"),
      lidSpace: band(zs.B, "little visible lid (hooded / deep-set)", "average lid space", "lots of visible lid"),
    },
    warnings: frame.warnings,
  };
}

/* ------------------------------------------------------------------ canthal tilt */

export function analyzeCanthalTilt(frame: FaceFrame) {
  const m = measureEyes(frame.pts);
  const classify = (t: number) => (t > 4 ? "positive" : t < 0 ? "negative" : "neutral");
  return {
    average: m.tilt,
    right: m.right.tilt,
    left: m.left.tilt,
    category: classify(m.tilt),
    asymmetry: Math.abs(m.right.tilt - m.left.tilt),
    warnings: frame.warnings,
  };
}

/* ------------------------------------------------------------------ nose */

export type NoseShapeKey = "greek" | "roman" | "hawk" | "nubian" | "button" | "snub" | "celestial" | "fleshy";

const NOSE_PROTOTYPES: Record<NoseShapeKey, Record<string, number>> = {
  greek: { W: -0.6, L: 0, T: 0, H: -0.5, P: 0 },
  roman: { W: 0, L: 1.0, T: 0, H: 1.4, P: 0.5 },
  hawk: { W: 0, L: 1.0, T: -1.5, H: 1.3, P: 1.0 },
  nubian: { W: 1.6, L: -0.3, T: 0, H: -0.5, P: -0.5 },
  button: { W: -0.6, L: -1.3, T: 0.7, H: -0.8, P: -0.8 },
  snub: { W: 0, L: -1.2, T: 1.6, H: -0.5, P: -0.3 },
  celestial: { W: -0.5, L: 0, T: 1.6, H: -0.3, P: 0 },
  fleshy: { W: 1.5, L: 1.0, T: -0.3, H: 0, P: 0.6 },
};

export function analyzeNose(frame: FaceFrame) {
  const m = measureNose(frame.pts);
  const zs = {
    W: z(m.widthRatio, NORMS.noseWidth),
    L: z(m.lengthRatio, NORMS.noseLength),
    T: z(m.tipLift, NORMS.noseTip),
    H: z(m.hump, NORMS.noseHump),
    P: z(m.projection, NORMS.noseProjection),
  };
  // Depth cues (hump, projection) are weaker from a front photo, so they count for less.
  const ranking = scorePrototypes(zs, NOSE_PROTOTYPES, { W: 1, L: 1, T: 0.9, H: 0.5, P: 0.4 }, 1.4);
  return {
    shape: ranking[0].key,
    ranking,
    measurements: m,
    traits: {
      width: band(zs.W, "narrow", "medium width", "wide"),
      length: band(zs.L, "short", "medium length", "long"),
      tip: band(zs.T, "downturned tip", "straight tip", "upturned tip"),
      bridge: band(zs.H, "flat / low bridge", "straight bridge", "prominent bridge"),
    },
    warnings: frame.warnings,
  };
}

/* ------------------------------------------------------------------ lips */

export type LipShapeKey =
  | "full" | "thin" | "heart" | "bow" | "top-heavy" | "bottom-heavy" | "wide" | "round" | "downturned" | "balanced";

const LIP_PROTOTYPES: Record<LipShapeKey, Record<string, number>> = {
  full: { F: 1.6, R: 0, W: 0, B: 0, C: 0 },
  thin: { F: -1.6, R: 0, W: 0, B: 0, C: 0 },
  heart: { F: 0.8, R: 0.2, W: -0.3, B: 1.4, C: 0 },
  bow: { F: -0.5, R: 0.5, W: 0, B: 1.6, C: 0 },
  "top-heavy": { F: 0, R: 1.7, W: 0, B: 0, C: 0 },
  "bottom-heavy": { F: 0.3, R: -1.6, W: 0, B: 0, C: 0 },
  wide: { F: 0, R: 0, W: 1.7, B: 0, C: 0 },
  round: { F: 1.0, R: 0, W: -1.4, B: 0, C: 0 },
  downturned: { F: 0, R: 0, W: 0, B: 0, C: -1.7 },
  balanced: { F: 0, R: 0, W: 0, B: 0, C: 0 },
};

export function analyzeLips(frame: FaceFrame) {
  const m = measureLips(frame.pts);
  const zs = {
    F: z(m.fullness, NORMS.lipFullness),
    R: z(m.upperToLower, NORMS.lipUpperLower),
    W: z(m.widthToNose, NORMS.lipWidth),
    B: z(m.bowDepth, NORMS.lipBow),
    C: z(m.cornerLift, NORMS.lipCorner),
  };
  const ranking = scorePrototypes(zs, LIP_PROTOTYPES, {}, 1.4);
  return {
    shape: ranking[0].key,
    ranking,
    measurements: m,
    traits: {
      fullness: band(zs.F, "thin", "medium fullness", "full"),
      balance: band(zs.R, "fuller lower lip", "balanced upper and lower", "fuller upper lip"),
      width: band(zs.W, "narrow mouth", "average width", "wide mouth"),
      bow: band(zs.B, "soft Cupid's bow", "defined Cupid's bow", "very pronounced Cupid's bow"),
      corners: band(zs.C, "downturned corners", "neutral corners", "upturned corners"),
    },
    warnings: frame.warnings,
  };
}

/* ------------------------------------------------------------------ jawline */

export type JawShapeKey = "square" | "rounded" | "v-shaped" | "pointed" | "wide" | "narrow";

const JAW_PROTOTYPES: Record<JawShapeKey, Record<string, number>> = {
  square: { J: 1.2, A: -1.4, C: 0.5, CL: 0 },
  rounded: { J: 0.3, A: 1.3, C: 0.3, CL: -0.3 },
  "v-shaped": { J: -1.2, A: 0.3, C: -1.0, CL: 0.5 },
  pointed: { J: -0.8, A: 0.5, C: -1.6, CL: 1.0 },
  wide: { J: 1.7, A: 0, C: 0.5, CL: 0 },
  narrow: { J: -1.5, A: 0, C: 0, CL: -0.3 },
};

export function analyzeJaw(frame: FaceFrame) {
  const m = measureJaw(frame.pts);
  const fz = faceZScores(measureFace(frame.pts));
  const zs = { J: fz.J, A: fz.A, C: fz.C, CL: z(m.chinLength, NORMS.chinLength) };
  const ranking = scorePrototypes(zs, JAW_PROTOTYPES, { J: 1, A: 0.8, C: 0.5, CL: 0.5 }, 1.4);
  // Definition: sharper jaw corner and a well-proportioned chin read as a "stronger" jawline.
  const definition = Math.round(clamp(60 - zs.A * 12 + zs.J * 6 + Math.min(zs.CL, 1.5) * 4, 5, 98));
  return {
    shape: ranking[0].key,
    ranking,
    measurements: m,
    definition,
    traits: {
      angle: band(zs.A, "sharp jaw angle", "moderate jaw angle", "soft jaw angle"),
      width: band(zs.J, "narrow jaw", "medium jaw", "wide jaw"),
      chin: band(zs.CL, "short chin", "average chin", "long chin"),
    },
    warnings: frame.warnings,
  };
}

/* ------------------------------------------------------------------ symmetry / golden ratio / proportions */

export function analyzeSymmetry(frame: FaceFrame) {
  const s = measureSymmetry(frame.pts, frame.iod);
  const regions = Object.fromEntries(Object.entries(s.regions).map(([k, v]) => [k, symmetryScore(v)])) as Record<
    keyof typeof s.regions,
    number
  >;
  return { score: symmetryScore(s.mean), regions, midline: s.midline, warnings: frame.warnings };
}

export function analyzeGoldenRatio(frame: FaceFrame) {
  const p = measureProportions(frame.pts);
  const checks = goldenRatioChecks(p);
  return { score: ratioScore(checks), checks, proportions: p, warnings: frame.warnings };
}

/* ------------------------------------------------------------------ attractiveness (for fun) */

export function analyzeAttractiveness(frame: FaceFrame) {
  const sym = analyzeSymmetry(frame);
  const golden = analyzeGoldenRatio(frame);
  const eyes = measureEyes(frame.pts);
  const jaw = analyzeJaw(frame);
  const tiltScore = closeness(Math.max(eyes.tilt, 0.1), 6, 1);
  const thirds = golden.proportions.thirds;
  const thirdsScore = closeness(thirds.middle / thirds.lower, 1, 0.35);
  const parts = [
    { label: "Symmetry", score: sym.score, weight: 0.3 },
    { label: "Golden ratio", score: golden.score, weight: 0.25 },
    { label: "Facial thirds", score: thirdsScore, weight: 0.15 },
    { label: "Canthal tilt", score: tiltScore, weight: 0.15 },
    { label: "Jawline definition", score: jaw.definition, weight: 0.15 },
  ];
  const composite = parts.reduce((s, p) => s + p.score * p.weight, 0);
  // Map to a friendly 1–10 scale centred near 6.5 for typical faces.
  const rating = Math.round(clamp(2.6 + composite / 15, 1, 10) * 10) / 10;
  return { rating, composite: Math.round(composite), parts, warnings: frame.warnings };
}
