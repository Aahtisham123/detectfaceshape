import type { Dict } from "./translate";
import type { Faq, FaceShape, Pick } from "@/lib/content/types";

/** A tool page in another language. Slug, path, category and related links come from the English tool. */
export type ToolT = { name: string; short: string; h1: string; intro: string; body: string; faqs: Faq[]; title: string; description: string };

/** A face-shape page in another language. Celebrity names and the slug come from the English version. */
export type ShapeT = {
  name: string;
  title: string;
  description: string;
  definition: string;
  measurements: { feature: string; value: string }[];
  traits: string[];
  howToTell: string[];
  body: string;
  women: { hairstyles: Pick[]; avoid: string[]; tips: string };
  men: { hairstyles: Pick[]; avoid: string[]; beards: Pick[]; tips: string };
  glasses: { best: Pick[]; avoid: string[] };
  makeup: string;
  confusedWith: { slug: string; difference: string }[];
  faqs: Faq[];
};

export type LocaleContent = {
  tools: Record<string, ToolT>;
  shapes: Record<string, ShapeT>;
  /** Face shapes hub page. */
  hub: { title: string; description: string; h1: string; intro: string; body: string; faqs: Faq[] };
  /** Names and one-line definitions of every type (eye, nose, lip, head, jawline, Kibbe) for tool results. */
  items: Record<string, { name: string; definition: string }>;
  hubNames: Record<string, string>;
  /** Labels used by server-rendered page templates (headings, buttons, home sections). */
  pages: Dict;
};

export type { FaceShape };
