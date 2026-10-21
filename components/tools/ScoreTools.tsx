"use client";

import Link from "next/link";
import FaceCapture from "./FaceCapture";
import ShareCard from "./ShareCard";
import { Meter, ResultHeader, ScoreDial, Warnings, fmt } from "./ui";
import {
  analyzeAttractiveness, analyzeCanthalTilt, analyzeGoldenRatio, analyzeSymmetry,
} from "@/lib/face/classify";
import { useT } from "@/lib/i18n/client";

const REGION_LABELS: Record<string, string> = { eyes: "Eyes", brows: "Eyebrows", nose: "Nose", mouth: "Mouth", jaw: "Jaw", cheeks: "Cheeks" };
const signed = (v: number, d = 1) => `${v >= 0 ? "+" : ""}${fmt(v, d)}°`;

export function SymmetryTest() {
  const { t } = useT();
  return (
    <FaceCapture
      guide="face"
      analyze={({ frame }) => analyzeSymmetry(frame)}
      render={(r) => (
        <>
          <ResultHeader eyebrow={t("Your symmetry score")} title={`${r.score} / 100`} />
          <ScoreDial value={r.score} label={t("Overall facial symmetry")} />
          <p>
            {t(r.score >= 88 ? "Very symmetrical. Your left and right sides match closely." : r.score >= 78 ? "Typical symmetry. Most straight-on photos land in this range." : "Below typical. This is usually caused by a turned head or uneven expression, so try a straight-on photo.")}
          </p>
          <h3>{t("By feature")}</h3>
          {Object.entries(r.regions).map(([k, v]) => <Meter key={k} label={t(REGION_LABELS[k])} value={v} />)}
          <Warnings title={t("For a more accurate reading:")} items={r.warnings.map((x) => t(x))} />
          <ShareCard headline={t("My face symmetry score")} value={`${r.score}/100`} sub={t("Face symmetry test")} emoji="🪞" path="/face-symmetry-test/" />
        </>
      )}
    />
  );
}

export function GoldenRatioTest() {
  const { t } = useT();
  return (
    <FaceCapture
      guide="face"
      analyze={({ frame }) => analyzeGoldenRatio(frame)}
      render={(r) => (
        <>
          <ResultHeader eyebrow={t("Your golden ratio score")} title={`${r.score} / 100`} />
          <ScoreDial value={r.score} label={t("Closeness to classic ideal proportions")} />
          <div className="table-wrap">
            <table className="data-table">
              <thead><tr><th>{t("Ratio")}</th><th>{t("You")}</th><th>{t("Ideal")}</th><th>{t("Score")}</th></tr></thead>
              <tbody>
                {r.checks.map((c) => (
                  <tr key={c.label}><th>{t(c.label)}</th><td>{fmt(c.value)}</td><td>{c.ideal}</td><td>{c.score}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="fine">{t("The golden ratio is a popular idea with weak scientific support. Most real faces score 55–80.")}</p>
          <Warnings title={t("For a more accurate reading:")} items={r.warnings.map((x) => t(x))} />
          <ShareCard headline={t("My golden ratio score")} value={`${r.score}/100`} sub="φ = 1.618" emoji="📐" path="/golden-ratio-face/" />
        </>
      )}
    />
  );
}

export function AttractivenessTest() {
  const { t } = useT();
  return (
    <FaceCapture
      guide="face"
      analyze={({ frame }) => analyzeAttractiveness(frame)}
      render={(r) => (
        <>
          <ResultHeader eyebrow={t("Just for fun")} title={`${r.rating.toFixed(1)} / 10`} />
          <ScoreDial value={r.rating} max={10} label={t("Face rating (for fun)")} />
          {r.parts.map((p) => <Meter key={p.label} label={`${t(p.label)} (${Math.round(p.weight * 100)}%)`} value={p.score} />)}
          <p className="fine">
            {t("This score measures a handful of proportions, not attractiveness. Expression, style, confidence and personality matter far more, and a different photo can move your score by a point or more.")}
          </p>
          <Warnings title={t("For a more accurate reading:")} items={r.warnings.map((x) => t(x))} />
          <ShareCard headline={t("My face rating (for fun)")} value={`${r.rating.toFixed(1)}/10`} sub={t("Attractiveness test")} emoji="⭐" path="/attractiveness-test/" />
        </>
      )}
    />
  );
}

export function CanthalTiltTest() {
  const { t, href } = useT();
  return (
    <FaceCapture
      guide="eyes"
      analyze={({ frame }) => analyzeCanthalTilt(frame)}
      render={(r) => (
        <>
          <ResultHeader eyebrow={t("Your canthal tilt")} title={`${signed(r.average)} · ${t(r.category)}`} />
          <table className="data-table">
            <tbody>
              <tr><th>{t("Your right eye")}</th><td>{signed(r.right)}</td></tr>
              <tr><th>{t("Your left eye")}</th><td>{signed(r.left)}</td></tr>
              <tr><th>{t("Average")}</th><td>{signed(r.average)}</td></tr>
            </tbody>
          </table>
          <p>
            {t(
              r.category === "positive"
                ? "Positive: your outer eye corners sit higher than your inner corners, giving an upturned look."
                : r.category === "negative"
                  ? "Negative: your outer corners sit a little lower than your inner corners, giving a soft, downturned look."
                  : "Neutral: your eye corners are close to level. This is very common.",
            )}
            {r.asymmetry > 3 ? ` ${t("Your two eyes differ by more than 3°, often a sign of a slight head tilt or expression; try another photo.")}` : ""}
          </p>
          <p><Link href="/eye-shapes/upturned/">{t("Upturned eyes")}</Link> · <Link href="/eye-shapes/downturned/">{t("Downturned eyes")}</Link> · <Link href={href("/eye-shape-detector/")}>{t("Eye Shape Detector")}</Link></p>
          <Warnings title={t("For a more accurate reading:")} items={r.warnings.map((x) => t(x))} />
          <ShareCard headline={t("My canthal tilt is")} value={signed(r.average)} sub={t("{category} tilt", { category: t(r.category) })} emoji="👁️" path="/canthal-tilt-calculator/" />
        </>
      )}
    />
  );
}

export function ProportionsTest() {
  const { t } = useT();
  return (
    <FaceCapture
      guide="face"
      analyze={({ frame }) => analyzeGoldenRatio(frame)}
      render={(r) => {
        const th = r.proportions.thirds;
        const total = th.upper + th.middle + th.lower;
        const f = r.proportions.fifths;
        const pct = (v: number) => `${Math.round((v / total) * 100)}%`;
        return (
          <>
            <ResultHeader eyebrow={t("Your facial proportions")} title={t("Thirds & fifths")} />
            <h3>{t("Facial thirds")}</h3>
            <div className="thirds">
              <div style={{ flexGrow: th.upper }}><span>{t("Upper")} {pct(th.upper)}</span></div>
              <div style={{ flexGrow: th.middle }}><span>{t("Middle")} {pct(th.middle)}</span></div>
              <div style={{ flexGrow: th.lower }}><span>{t("Lower")} {pct(th.lower)}</span></div>
            </div>
            <p className="fine">{t("Ideal: about 33% each. The upper third is estimated because the face model stops below the hairline.")}</p>
            <table className="data-table">
              <tbody>
                <tr><th>{t("Nose-to-lips : lips-to-chin")}</th><td>1 : {fmt(1 / r.proportions.lowerSplit, 1)} ({t("ideal")} 1 : 2)</td></tr>
                <tr><th>{t("Eye spacing ÷ eye width")}</th><td>{fmt(f.intercanthal / f.eyeWidth)} ({t("ideal")} 1.0)</td></tr>
                <tr><th>{t("Face width in eye widths")}</th><td>{fmt(f.faceWidth / f.eyeWidth, 1)} ({t("ideal")} 5)</td></tr>
              </tbody>
            </table>
            <Warnings title={t("For a more accurate reading:")} items={r.warnings.map((x) => t(x))} />
          </>
        );
      }}
    />
  );
}
