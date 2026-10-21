"use client";

import FaceCapture from "./FaceCapture";
import ShareCard from "./ShareCard";
import { ResultHeader, Warnings } from "./ui";
import { useT } from "@/lib/i18n/client";

type HumanLike = { load: () => Promise<void>; detect: (input: HTMLCanvasElement) => Promise<{ face: { age?: number }[] }> };
let human: Promise<HumanLike> | null = null;

/** Loads the age model (Human + GEAR, ~2 MB) only when someone actually analyzes a photo. */
function getHuman() {
  if (!human) {
    human = import("@vladmandic/human").then(async ({ Human }) => {
      const h = new Human({
        modelBasePath: "/models/human/",
        backend: "webgl",
        debug: false,
        face: {
          enabled: true,
          detector: { modelPath: "blazeface.json", rotation: false, maxDetected: 1 },
          mesh: { enabled: false },
          iris: { enabled: false },
          emotion: { enabled: false },
          description: { enabled: false },
          antispoof: { enabled: false },
          liveness: { enabled: false },
          gear: { enabled: true, modelPath: "gear.json" },
        },
        body: { enabled: false },
        hand: { enabled: false },
        object: { enabled: false },
        gesture: { enabled: false },
        segmentation: { enabled: false },
      } as never) as unknown as HumanLike;
      await h.load();
      return h;
    });
    human.catch(() => (human = null));
  }
  return human;
}

export default function AgeGuesser() {
  const { t } = useT();
  return (
    <FaceCapture<{ age: number | null; warnings: string[] }>
      guide="face"
      analyze={async ({ frame, canvas }) => {
        const h = await getHuman();
        const res = await h.detect(canvas);
        const age = res.face[0]?.age;
        return { age: typeof age === "number" ? Math.round(age) : null, warnings: frame.warnings };
      }}
      render={(r) =>
        r.age === null ? (
          <p>{t("We found your face but couldn't estimate an age. Try a sharper, well-lit photo.")}</p>
        ) : (
          <>
            <ResultHeader eyebrow={t("You look about")} title={t("{n} years old", { n: r.age })}>
              <p className="result-lead">{t("Likely range: {from}–{to}", { from: Math.max(1, r.age - 6), to: r.age + 6 })}</p>
            </ResultHeader>
            <p className="fine">{t("Age models are rough. Lighting, expression, makeup and image quality all move the estimate. Try a few photos.")}</p>
            <Warnings title={t("For a more accurate reading:")} items={r.warnings.map((x) => t(x))} />
            <ShareCard headline={t("AI says I look")} value={`${r.age}`} sub={t("years old")} emoji="🎂" path="/how-old-do-i-look/" />
          </>
        )
      }
    />
  );
}
