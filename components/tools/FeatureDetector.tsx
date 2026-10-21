"use client";

import Link from "next/link";
import FaceCapture from "./FaceCapture";
import ShareCard from "./ShareCard";
import { Meter, RankBars, ResultHeader, Traits, Warnings } from "./ui";
import { analyzeEyes, analyzeJaw, analyzeLips, analyzeNose } from "@/lib/face/classify";
import type { FaceFrame } from "@/lib/face/normalize";
import { useLite } from "./LiteContext";
import { useT } from "@/lib/i18n/client";

type Kind = "eyes" | "nose" | "lips" | "jaw";
type Generic = { shape: string; ranking: { key: string; pct: number }[]; traits: Record<string, string>; warnings: string[]; definition?: number };

const CONFIG: Record<Kind, { hub: string; analyze: (f: FaceFrame) => Generic; eyebrow: string; share: string; guide: "eyes" | "nose" | "lips" | "jaw"; emoji: string }> = {
  eyes: { hub: "eye-shapes", analyze: analyzeEyes, eyebrow: "Your eye shape", share: "My eye shape is", guide: "eyes", emoji: "👁️" },
  nose: { hub: "nose-shapes", analyze: analyzeNose, eyebrow: "Your nose shape", share: "My nose shape is", guide: "nose", emoji: "👃" },
  lips: { hub: "lip-shapes", analyze: analyzeLips, eyebrow: "Your lip shape", share: "My lip shape is", guide: "lips", emoji: "👄" },
  jaw: { hub: "jawline-shapes", analyze: analyzeJaw, eyebrow: "Your jawline", share: "My jawline is", guide: "jaw", emoji: "🗿" },
};

export default function FeatureDetector({ kind }: { kind: Kind }) {
  const cfg = CONFIG[kind];
  const { t } = useT();
  const hub = useLite().hub(cfg.hub);
  const item = (key: string) => hub.items.find((i) => i.slug === key);
  const label = (key: string) => item(key)?.name ?? key;
  return (
    <FaceCapture<Generic>
      guide={cfg.guide}
      analyze={({ frame }) => cfg.analyze(frame)}
      render={(r) => {
        const it = item(r.shape);
        return (
          <>
            <ResultHeader eyebrow={t(cfg.eyebrow)} title={label(r.shape)}>
              <p className="result-lead">{t("{n}% match", { n: Math.round(r.ranking[0].pct) })}</p>
            </ResultHeader>
            {it && <p>{it.definition}</p>}
            <h3>{t("Your traits")}</h3>
            <Traits items={Object.values(r.traits).map((x) => t(x))} />
            {typeof r.definition === "number" && <Meter label={t("Jawline definition")} value={r.definition} note={t("Based on jaw angle, width and chin length. Lighting and head angle affect it.")} />}
            <h3>{t("Closest matches")}</h3>
            <RankBars items={r.ranking.map((x) => ({ ...x, label: label(x.key) }))} hrefFor={(k) => `/${hub.slug}/${k}/`} />
            <div className="result-links">
              <Link className="btn" href={`/${hub.slug}/${r.shape}/`}>{t("Read about {name}", { name: label(r.shape).toLowerCase() })}</Link>
              <Link className="btn" href={`/${hub.slug}/`}>{t("All {name}", { name: hub.name.toLowerCase() })}</Link>
            </div>
            <Warnings title={t("For a more accurate reading:")} items={r.warnings.map((x) => t(x))} />
            <ShareCard headline={t(cfg.share)} value={label(r.shape)} sub={t("{n}% match", { n: Math.round(r.ranking[0].pct) })} emoji={cfg.emoji} path={`/${hub.slug}/${r.shape}/`} />
          </>
        );
      }}
    />
  );
}
