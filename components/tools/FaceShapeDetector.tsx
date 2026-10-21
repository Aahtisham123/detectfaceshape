"use client";

import Link from "next/link";
import FaceCapture from "./FaceCapture";
import ShareCard from "./ShareCard";
import { RankBars, ResultHeader, Warnings, fmt } from "./ui";
import ShapeIllustration from "@/components/ShapeIllustration";
import { classifyFaceShape, type FaceShapeResult } from "@/lib/face/faceShape";
import { useLite } from "./LiteContext";
import { Icon } from "@/components/icons";
import { useT } from "@/lib/i18n/client";

const EMOJI: Record<string, string> = {
  oval: "🥚", round: "🌕", square: "⬛", oblong: "📏", rectangle: "▭", heart: "💛", diamond: "💎", triangle: "🔺", "inverted-triangle": "🔻", pear: "🍐",
};

export default function FaceShapeDetector() {
  const nameOf = useLite().shapeName;
  return (
    <FaceCapture<FaceShapeResult>
      guide="face"
      analyze={({ frame }) => classifyFaceShape(frame)}
      liveLabel={(frame) => {
        const r = classifyFaceShape(frame);
        return `${nameOf(r.shape)} · ${Math.round(r.confidence)}%`;
      }}
      render={(r) => <FaceShapeResultView r={r} />}
    />
  );
}

export function FaceShapeResultView({ r }: { r: FaceShapeResult }) {
  const lite = useLite();
  const nameOf = lite.shapeName;
  const { t, href } = useT();
  const shape = lite.shape(r.shape)!;
  const second = r.ranking[1];
  const blend = second.pct > r.confidence * 0.6;
  const m = r.measurements;
  return (
    <>
      <ResultHeader eyebrow={t("Your face shape")} title={<>{shape.name} {EMOJI[shape.slug]}</>}>
        <p className="result-lead">
          {t("{n}% match", { n: Math.round(r.confidence) })}{blend ? ` · ${t("with {shape} traits ({n}%)", { shape: nameOf(second.key), n: Math.round(second.pct) })}` : ""}.
        </p>
      </ResultHeader>
      <div className="result-grid">
        <ShapeIllustration shape={shape.slug} size={170} guides />
        <div>
          <p>{shape.definition}</p>
          <div className="result-links">
            <Link className="btn primary" href={href(`/face-shapes/${shape.slug}/`)}><Icon name="BookOpen" size={16} /> {t("Your {shape} face guide", { shape: shape.name.toLowerCase() })}</Link>
            {shape.topics.includes("hairstyles-women") && <Link className="btn" href={`/face-shapes/${shape.slug}/hairstyles-women/`}><Icon name="Scissors" size={16} /> {t("Hairstyles")}</Link>}
            {shape.topics.includes("glasses") && <Link className="btn" href={`/face-shapes/${shape.slug}/glasses/`}><Icon name="Glasses" size={16} /> {t("Glasses")}</Link>}
          </div>
        </div>
      </div>
      <h3>{t("How you match every shape")}</h3>
      <RankBars items={r.ranking.map((x) => ({ ...x, label: nameOf(x.key) }))} hrefFor={(k) => href(`/face-shapes/${k}/`)} max={10} />
      <h3>{t("Your measurements")}</h3>
      <table className="data-table">
        <tbody>
          <tr><th>{t("Face length ÷ cheekbone width")}</th><td>{fmt(m.lengthRatio)}</td></tr>
          <tr><th>{t("Forehead ÷ cheekbones")}</th><td>{fmt(m.foreheadRatio)}</td></tr>
          <tr><th>{t("Jaw ÷ cheekbones")}</th><td>{fmt(m.jawRatio)}</td></tr>
          <tr><th>{t("Jaw corner angle")}</th><td>{fmt(m.jawAngle, 0)}°</td></tr>
        </tbody>
      </table>
      <p className="fine">{t("Length is measured from the top of the face model (just below the hairline) to the chin, so these ratios are a little lower than tape-measure ratios.")}</p>
      <Warnings title={t("For a more accurate reading:")} items={r.warnings.map((x) => t(x))} />
      <ShareCard headline={t("My face shape is")} value={shape.name} sub={t("{n}% match", { n: Math.round(r.confidence) })} emoji={EMOJI[shape.slug]} path={`/face-shapes/${shape.slug}/`} />
    </>
  );
}
