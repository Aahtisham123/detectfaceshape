"use client";

import { useState } from "react";
import FaceCapture from "./FaceCapture";
import { ResultHeader, ScoreDial } from "./ui";
import { classifyFaceShape } from "@/lib/face/faceShape";
import { faceSimilarity } from "@/lib/face/features";
import type { Pt } from "@/lib/face/geometry";
import { useLite } from "./LiteContext";

type Face = { pts: Pt[]; shape: string };

/**
 * Procrustes distance → 0–100. Across 820 pairs of frontal calibration photos the median distance
 * was 0.075 (→ ~55%), the closest 5% under 0.043 (→ ~87%) and the furthest 5% over 0.12 (→ ~10%).
 */
const toScore = (d: number) => Math.round(Math.max(0, Math.min(100, 100 - (d - 0.03) * 1000)));

export default function FaceComparison() {
  const nameOf = useLite().shapeName;
  const [a, setA] = useState<Face | null>(null);
  const [b, setB] = useState<Face | null>(null);
  const analyze = ({ frame }: { frame: { pts: Pt[] } & Parameters<typeof classifyFaceShape>[0] }) => ({ pts: frame.pts, shape: classifyFaceShape(frame).shape });
  const score = a && b ? toScore(faceSimilarity(a.pts, b.pts)) : null;
  return (
    <div className="compare">
      <div className="compare-grid">
        <FaceCapture<Face> title="Face 1" analyze={analyze} onResult={setA} render={(r) => <p>Face shape: <strong>{nameOf(r.shape)}</strong></p>} />
        <FaceCapture<Face> title="Face 2" analyze={analyze} onResult={setB} render={(r) => <p>Face shape: <strong>{nameOf(r.shape)}</strong></p>} />
      </div>
      {score !== null && a && b && (
        <div className="result">
          <ResultHeader eyebrow="Facial geometry similarity" title={`${score}%`} />
          <ScoreDial value={score} label="How similar the two face shapes are" />
          <p>
            {score >= 80 ? "Very similar facial geometry." : score >= 55 ? "Some clear similarities in proportions." : "Quite different facial proportions."}{" "}
            {a.shape === b.shape ? `You share the same face shape: ${nameOf(a.shape)}.` : `Face 1 is ${nameOf(a.shape)}; face 2 is ${nameOf(b.shape)}.`}
          </p>
          <p className="fine">This compares shape and proportions only. It is not face recognition and can't tell whether two photos show the same person.</p>
        </div>
      )}
    </div>
  );
}
