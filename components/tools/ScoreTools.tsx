"use client";

import Link from "next/link";
import FaceCapture from "./FaceCapture";
import ShareCard from "./ShareCard";
import { Meter, ResultHeader, ScoreDial, Warnings, fmt } from "./ui";
import {
  analyzeAttractiveness, analyzeCanthalTilt, analyzeGoldenRatio, analyzeSymmetry,
} from "@/lib/face/classify";

const REGION_LABELS: Record<string, string> = { eyes: "Eyes", brows: "Eyebrows", nose: "Nose", mouth: "Mouth", jaw: "Jaw", cheeks: "Cheeks" };

export function SymmetryTest() {
  return (
    <FaceCapture
      guide="face"
      analyze={({ frame }) => analyzeSymmetry(frame)}
      liveLabel={(frame) => `Symmetry ${analyzeSymmetry(frame).score}`}
      render={(r) => (
        <>
          <ResultHeader eyebrow="Your symmetry score" title={`${r.score} / 100`} />
          <ScoreDial value={r.score} label="Overall facial symmetry" />
          <p>
            {r.score >= 88 ? "Very symmetrical. Your left and right sides match closely." : r.score >= 78 ? "Typical symmetry. Most straight-on photos land in this range." : "Below typical. This is usually caused by a turned head or uneven expression, so try a straight-on photo."}
          </p>
          <h3>By feature</h3>
          {Object.entries(r.regions).map(([k, v]) => <Meter key={k} label={REGION_LABELS[k]} value={v} />)}
          <Warnings items={r.warnings} />
          <ShareCard headline="My face symmetry score" value={`${r.score}/100`} sub="Face symmetry test" emoji="🪞" path="/face-symmetry-test/" />
        </>
      )}
    />
  );
}

export function GoldenRatioTest() {
  return (
    <FaceCapture
      guide="face"
      analyze={({ frame }) => analyzeGoldenRatio(frame)}
      render={(r) => (
        <>
          <ResultHeader eyebrow="Your golden ratio score" title={`${r.score} / 100`} />
          <ScoreDial value={r.score} label="Closeness to classic ideal proportions" />
          <table className="data-table">
            <thead><tr><th>Ratio</th><th>You</th><th>Ideal</th><th>Score</th></tr></thead>
            <tbody>
              {r.checks.map((c) => (
                <tr key={c.label}><th>{c.label}</th><td>{fmt(c.value)}</td><td>{c.ideal}</td><td>{c.score}</td></tr>
              ))}
            </tbody>
          </table>
          <p className="fine">The golden ratio is a popular idea with weak scientific support. Most real faces score 55–80.</p>
          <Warnings items={r.warnings} />
          <ShareCard headline="My golden ratio score" value={`${r.score}/100`} sub="φ = 1.618" emoji="📐" path="/golden-ratio-face/" />
        </>
      )}
    />
  );
}

export function AttractivenessTest() {
  return (
    <FaceCapture
      guide="face"
      analyze={({ frame }) => analyzeAttractiveness(frame)}
      render={(r) => (
        <>
          <ResultHeader eyebrow="Just for fun" title={`${r.rating.toFixed(1)} / 10`} />
          <ScoreDial value={r.rating} max={10} label="Face rating (for fun)" />
          {r.parts.map((p) => <Meter key={p.label} label={`${p.label} (${Math.round(p.weight * 100)}%)`} value={p.score} />)}
          <p className="fine">
            This score measures a handful of proportions, not attractiveness. Expression, style, confidence and personality matter far more, and a
            different photo can move your score by a point or more.
          </p>
          <Warnings items={r.warnings} />
          <ShareCard headline="My face rating (for fun)" value={`${r.rating.toFixed(1)}/10`} sub="Attractiveness test" emoji="⭐" path="/attractiveness-test/" />
        </>
      )}
    />
  );
}

export function CanthalTiltTest() {
  return (
    <FaceCapture
      guide="eyes"
      analyze={({ frame }) => analyzeCanthalTilt(frame)}
      liveLabel={(frame) => `${fmt(analyzeCanthalTilt(frame).average, 1)}°`}
      render={(r) => (
        <>
          <ResultHeader eyebrow="Your canthal tilt" title={`${r.average >= 0 ? "+" : ""}${fmt(r.average, 1)}° · ${r.category}`} />
          <table className="data-table">
            <tbody>
              <tr><th>Your right eye</th><td>{r.right >= 0 ? "+" : ""}{fmt(r.right, 1)}°</td></tr>
              <tr><th>Your left eye</th><td>{r.left >= 0 ? "+" : ""}{fmt(r.left, 1)}°</td></tr>
              <tr><th>Average</th><td>{r.average >= 0 ? "+" : ""}{fmt(r.average, 1)}°</td></tr>
            </tbody>
          </table>
          <p>
            {r.category === "positive"
              ? "Positive: your outer eye corners sit higher than your inner corners, giving an upturned look."
              : r.category === "negative"
                ? "Negative: your outer corners sit a little lower than your inner corners, giving a soft, downturned look."
                : "Neutral: your eye corners are close to level. This is very common."}
            {r.asymmetry > 3 ? " Your two eyes differ by more than 3°, often a sign of a slight head tilt or expression; try another photo." : ""}
          </p>
          <p><Link href="/eye-shapes/upturned/">Upturned eyes</Link> · <Link href="/eye-shapes/downturned/">Downturned eyes</Link> · <Link href="/eye-shape-detector/">Eye shape detector</Link></p>
          <Warnings items={r.warnings} />
          <ShareCard headline="My canthal tilt is" value={`${r.average >= 0 ? "+" : ""}${fmt(r.average, 1)}°`} sub={`${r.category} tilt`} emoji="👁️" path="/canthal-tilt-calculator/" />
        </>
      )}
    />
  );
}

export function ProportionsTest() {
  return (
    <FaceCapture
      guide="face"
      analyze={({ frame }) => analyzeGoldenRatio(frame)}
      render={(r) => {
        const t = r.proportions.thirds;
        const total = t.upper + t.middle + t.lower;
        const f = r.proportions.fifths;
        const pct = (v: number) => `${Math.round((v / total) * 100)}%`;
        return (
          <>
            <ResultHeader eyebrow="Your facial proportions" title="Thirds & fifths" />
            <h3>Facial thirds</h3>
            <div className="thirds">
              <div style={{ flexGrow: t.upper }}><span>Upper {pct(t.upper)}</span></div>
              <div style={{ flexGrow: t.middle }}><span>Middle {pct(t.middle)}</span></div>
              <div style={{ flexGrow: t.lower }}><span>Lower {pct(t.lower)}</span></div>
            </div>
            <p className="fine">Ideal: about 33% each. The upper third is estimated because the face model stops below the hairline.</p>
            <table className="data-table">
              <tbody>
                <tr><th>Nose-to-lips : lips-to-chin</th><td>1 : {fmt(1 / r.proportions.lowerSplit, 1)} (ideal 1 : 2)</td></tr>
                <tr><th>Eye spacing ÷ eye width</th><td>{fmt(f.intercanthal / f.eyeWidth)} (ideal 1.0)</td></tr>
                <tr><th>Face width in eye widths</th><td>{fmt(f.faceWidth / f.eyeWidth, 1)} (ideal 5)</td></tr>
              </tbody>
            </table>
            <Warnings items={r.warnings} />
          </>
        );
      }}
    />
  );
}
