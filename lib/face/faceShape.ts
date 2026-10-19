import { LM } from "./landmarks";
import { angleAt, dist, scorePrototypes, type Pt } from "./geometry";
import type { FaceFrame } from "./normalize";

export type FaceShapeKey =
  | "oval" | "round" | "square" | "oblong" | "rectangle" | "heart" | "diamond" | "triangle" | "inverted-triangle" | "pear";

export type FaceMeasurements = {
  faceLength: number;
  cheekWidth: number;
  foreheadWidth: number;
  jawWidth: number;
  chinWidth: number;
  /** Interior angle at the jaw corner (deg). Lower = more angular. */
  jawAngle: number;
  lengthRatio: number;
  foreheadRatio: number;
  jawRatio: number;
  chinRatio: number;
};

export function measureFace(pts: Pt[]): FaceMeasurements {
  const faceLength = dist(pts[LM.forehead], pts[LM.chin]);
  const cheekWidth = dist(pts[LM.cheekRight], pts[LM.cheekLeft]);
  const foreheadWidth = dist(pts[LM.foreheadRight], pts[LM.foreheadLeft]);
  const jawWidth = dist(pts[LM.jawRight], pts[LM.jawLeft]);
  const chinWidth = dist(pts[LM.chinRight], pts[LM.chinLeft]);
  const jawAngle =
    (angleAt(pts[LM.cheekRight], pts[LM.jawRight], pts[LM.chin]) +
      angleAt(pts[LM.cheekLeft], pts[LM.jawLeft], pts[LM.chin])) / 2;
  return {
    faceLength,
    cheekWidth,
    foreheadWidth,
    jawWidth,
    chinWidth,
    jawAngle,
    lengthRatio: faceLength / cheekWidth,
    foreheadRatio: foreheadWidth / cheekWidth,
    jawRatio: jawWidth / cheekWidth,
    chinRatio: chinWidth / jawWidth,
  };
}

/**
 * Population norms measured on 71 frontal photos with this exact landmark model.
 * Shapes are defined as deviations from the average face, so the classifier
 * describes proportions relative to real faces rather than idealized drawings.
 */
export const FACE_NORMS = {
  lengthRatio: { mean: 1.205, sd: 0.055 },
  foreheadRatio: { mean: 0.849, sd: 0.027 },
  jawRatio: { mean: 0.808, sd: 0.023 },
  jawAngle: { mean: 134.6, sd: 4.7 },
  chinRatio: { mean: 0.227, sd: 0.012 },
};

// L = length, F = forehead, J = jaw, A = jaw-corner softness, C = chin width (all z-scores).
const PROTOTYPES: Record<FaceShapeKey, Record<string, number>> = {
  oval: { L: 0.4, F: 0.3, J: -0.4, A: 0.3, C: 0 },
  round: { L: -1.4, F: 0, J: 0.3, A: 1.0, C: 0.3 },
  square: { L: -1.0, F: 0.3, J: 1.3, A: -1.3, C: 0.5 },
  oblong: { L: 1.7, F: 0.1, J: 0, A: 0.3, C: 0 },
  rectangle: { L: 1.5, F: 0.3, J: 1.2, A: -1.2, C: 0.3 },
  heart: { L: 0, F: 1.3, J: -1.3, A: 0.6, C: -1.0 },
  diamond: { L: 0.4, F: -1.5, J: -1.0, A: 0.3, C: -0.6 },
  triangle: { L: -0.2, F: -1.8, J: 1.6, A: -1.0, C: 0.3 },
  "inverted-triangle": { L: 0.2, F: 1.2, J: -0.9, A: -0.9, C: 0.2 },
  pear: { L: -0.6, F: -1.4, J: 1.0, A: 0.9, C: 0.6 },
};
const WEIGHTS = { L: 1, F: 1, J: 1, A: 0.6, C: 0.3 };

export function faceZScores(m: FaceMeasurements) {
  const z = (v: number, n: { mean: number; sd: number }) => (v - n.mean) / n.sd;
  return {
    L: z(m.lengthRatio, FACE_NORMS.lengthRatio),
    F: z(m.foreheadRatio, FACE_NORMS.foreheadRatio),
    J: z(m.jawRatio, FACE_NORMS.jawRatio),
    A: z(m.jawAngle, FACE_NORMS.jawAngle),
    C: z(m.chinRatio, FACE_NORMS.chinRatio),
  };
}

export type FaceShapeResult = {
  shape: FaceShapeKey;
  confidence: number;
  ranking: { key: FaceShapeKey; pct: number }[];
  measurements: FaceMeasurements;
  z: ReturnType<typeof faceZScores>;
  warnings: string[];
};

export function classifyFaceShape(frame: FaceFrame): FaceShapeResult {
  const measurements = measureFace(frame.pts);
  const z = faceZScores(measurements);
  const ranking = scorePrototypes(z, PROTOTYPES, WEIGHTS, 1.5);
  return { shape: ranking[0].key, confidence: ranking[0].pct, ranking, measurements, z, warnings: frame.warnings };
}
