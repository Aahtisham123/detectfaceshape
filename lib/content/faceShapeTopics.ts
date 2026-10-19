import type { FaceShape } from "./types";

export const TOPICS = ["hairstyles-women", "hairstyles-men", "celebrities", "glasses"] as const;
export type Topic = (typeof TOPICS)[number];

export const TOPIC_LABEL: Record<Topic, (name: string) => string> = {
  "hairstyles-women": (n) => `Hairstyles for ${n.toLowerCase()} faces (women)`,
  "hairstyles-men": (n) => `Haircuts for ${n.toLowerCase()} faces (men)`,
  celebrities: (n) => `Celebrities with ${n.toLowerCase()} faces`,
  glasses: (n) => `Glasses for ${n.toLowerCase()} faces`,
};

/** Only publish a sub-page when there's enough unique content for it to be genuinely useful. */
export function availableTopics(s: FaceShape): Topic[] {
  return TOPICS.filter((t) => {
    if (t === "hairstyles-women") return s.women.hairstyles.length >= 5;
    if (t === "hairstyles-men") return s.men.hairstyles.length >= 4;
    if (t === "celebrities") return s.women.celebrities.length + s.men.celebrities.length >= 6;
    return s.glasses.best.length >= 3;
  });
}
