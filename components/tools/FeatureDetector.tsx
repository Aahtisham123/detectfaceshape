"use client";

import Link from "next/link";
import FaceCapture from "./FaceCapture";
import ShareCard from "./ShareCard";
import { Meter, RankBars, ResultHeader, Traits, Warnings } from "./ui";
import { analyzeEyes, analyzeJaw, analyzeLips, analyzeNose } from "@/lib/face/classify";
import type { FaceFrame } from "@/lib/face/normalize";
import { useLite } from "./LiteContext";

type Kind = "eyes" | "nose" | "lips" | "jaw";
type Generic = { shape: string; ranking: { key: string; pct: number }[]; traits: Record<string, string>; warnings: string[]; definition?: number };

const CONFIG: Record<Kind, { hub: string; analyze: (f: FaceFrame) => Generic; eyebrow: string; guide: "eyes" | "nose" | "lips" | "jaw"; emoji: string }> = {
  eyes: { hub: "eye-shapes", analyze: analyzeEyes, eyebrow: "Your eye shape", guide: "eyes", emoji: "👁️" },
  nose: { hub: "nose-shapes", analyze: analyzeNose, eyebrow: "Your nose shape", guide: "nose", emoji: "👃" },
  lips: { hub: "lip-shapes", analyze: analyzeLips, eyebrow: "Your lip shape", guide: "lips", emoji: "👄" },
  jaw: { hub: "jawline-shapes", analyze: analyzeJaw, eyebrow: "Your jawline", guide: "jaw", emoji: "🗿" },
};

export default function FeatureDetector({ kind }: { kind: Kind }) {
  const cfg = CONFIG[kind];
  const hub = useLite().hub(cfg.hub);
  const item = (key: string) => hub.items.find((i) => i.slug === key);
  const label = (key: string) => item(key)?.name ?? key;
  return (
    <FaceCapture<Generic>
      guide={cfg.guide}
      analyze={({ frame }) => cfg.analyze(frame)}
      liveLabel={(frame) => label(cfg.analyze(frame).shape)}
      render={(r) => {
        const it = item(r.shape);
        return (
          <>
            <ResultHeader eyebrow={cfg.eyebrow} title={label(r.shape)}>
              <p className="result-lead">{Math.round(r.ranking[0].pct)}% match</p>
            </ResultHeader>
            {it && <p>{it.definition}</p>}
            <h3>Your traits</h3>
            <Traits items={Object.values(r.traits)} />
            {typeof r.definition === "number" && <Meter label="Jawline definition" value={r.definition} note="Based on jaw angle, width and chin length. Lighting and head angle affect it." />}
            <h3>Closest matches</h3>
            <RankBars items={r.ranking.map((x) => ({ ...x, label: label(x.key) }))} hrefFor={(k) => `/${hub.slug}/${k}/`} />
            <div className="result-links">
              <Link className="btn" href={`/${hub.slug}/${r.shape}/`}>Read about {label(r.shape).toLowerCase()}</Link>
              <Link className="btn" href={`/${hub.slug}/`}>All {hub.name.toLowerCase()}</Link>
            </div>
            <Warnings items={r.warnings} />
            <ShareCard headline={`${cfg.eyebrow.replace("Your", "My")} is`} value={label(r.shape)} sub={`${Math.round(r.ranking[0].pct)}% match`} emoji={cfg.emoji} path={`/${hub.slug}/${r.shape}/`} />
          </>
        );
      }}
    />
  );
}
