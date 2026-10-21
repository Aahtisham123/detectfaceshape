"use client";

import dynamic from "next/dynamic";
import { LiteProvider } from "./LiteContext";
import type { Lite } from "@/lib/content/lite";
import { WidgetDictProvider } from "@/lib/i18n/client";
import type { Dict } from "@/lib/i18n/translate";

const loading = () => <div className="capture stage-placeholder" aria-hidden="true" />;

// Each tool is its own chunk, so a page only downloads the widget it shows.
const WIDGETS: Record<string, React.ComponentType> = {
  "face-shape-detector": dynamic(() => import("./FaceShapeDetector"), { loading }),
  "face-shape-quiz": dynamic(() => import("./Quizzes").then((m) => m.FaceShapeQuiz), { loading }),
  "face-shape-calculator": dynamic(() => import("./Quizzes").then((m) => m.FaceShapeCalculator), { loading }),
  "head-shape-detector": dynamic(() => import("./Quizzes").then((m) => m.HeadShapeQuiz), { loading }),
  "skin-undertone-test": dynamic(() => import("./Quizzes").then((m) => m.UndertoneTest), { loading }),
  "color-analysis": dynamic(() => import("./Quizzes").then((m) => m.ColorAnalysisQuiz), { loading }),
  "foundation-shade-finder": dynamic(() => import("./Quizzes").then((m) => m.FoundationFinder), { loading }),
  "kibbe-body-type-test": dynamic(() => import("./Quizzes").then((m) => m.KibbeTest), { loading }),
  "eye-shape-detector": dynamic(() => import("./FeatureDetector").then((m) => () => <m.default kind="eyes" />), { loading }),
  "nose-shape-detector": dynamic(() => import("./FeatureDetector").then((m) => () => <m.default kind="nose" />), { loading }),
  "lip-shape-analyzer": dynamic(() => import("./FeatureDetector").then((m) => () => <m.default kind="lips" />), { loading }),
  "jawline-analyzer": dynamic(() => import("./FeatureDetector").then((m) => () => <m.default kind="jaw" />), { loading }),
  "face-symmetry-test": dynamic(() => import("./ScoreTools").then((m) => m.SymmetryTest), { loading }),
  "golden-ratio-face": dynamic(() => import("./ScoreTools").then((m) => m.GoldenRatioTest), { loading }),
  "attractiveness-test": dynamic(() => import("./ScoreTools").then((m) => m.AttractivenessTest), { loading }),
  "canthal-tilt-calculator": dynamic(() => import("./ScoreTools").then((m) => m.CanthalTiltTest), { loading }),
  "facial-proportions-calculator": dynamic(() => import("./ScoreTools").then((m) => m.ProportionsTest), { loading }),
  // Browser-only: the age library resolves to a Node build during SSR.
  "how-old-do-i-look": dynamic(() => import("./AgeGuesser"), { loading, ssr: false }),
  "face-comparison": dynamic(() => import("./FaceComparison"), { loading }),
};

export default function ToolWidget({ slug, lite }: { slug: string; lite: Lite & { dict: Dict } }) {
  const W = WIDGETS[slug];
  return W ? (
    <WidgetDictProvider value={lite.dict}>
      <LiteProvider value={lite}><W /></LiteProvider>
    </WidgetDictProvider>
  ) : null;
}
