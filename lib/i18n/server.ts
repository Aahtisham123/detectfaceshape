// Server-only helpers for translated pages. Translations overlay the English source, so structure
// (slugs, links, celebrity names, related tools) always comes from one place.
import { toolBySlug, type Tool } from "@/lib/content/tools";
import { faceShapeBySlug, FACE_SHAPES } from "@/lib/content/faceShapes";
import { HUB_BODY, HUB_FAQS, HUB_INTRO } from "@/lib/content/faceShapesHub";
import { liteContent, type Lite } from "@/lib/content/lite";
import type { FaceShape } from "@/lib/content/types";
import { CHROME } from "./chrome";
import { WIDGET } from "./widget";
import type { Locale } from "./config";
import { tr, type Dict } from "./translate";
import type { LocaleContent } from "./types";
import { content as es } from "./es/content";
import { content as fr } from "./fr/content";
import { content as pt } from "./pt/content";

const CONTENT: Record<Exclude<Locale, "en">, LocaleContent> = { es, fr, pt };

export const contentFor = (locale: Locale) => (locale === "en" ? null : CONTENT[locale]);

/** Translator for server-rendered templates: page labels first, then the shared UI strings. */
export function pageT(locale: Locale) {
  const c = contentFor(locale);
  const pages: Dict = c?.pages ?? {};
  const chrome = CHROME[locale];
  return (s: string, vars?: Record<string, string | number>) => tr(s in pages ? pages : chrome, s, vars);
}
export type PageT = ReturnType<typeof pageT>;

export function toolFor(locale: Locale, slug: string): Tool {
  const base = toolBySlug(slug)!;
  const t = contentFor(locale)?.tools[slug];
  return t ? { ...base, name: t.name, short: t.short, h1: t.h1, intro: t.intro, body: t.body, faqs: t.faqs, title: t.title, description: t.description } : base;
}

export function shapeFor(locale: Locale, slug: string): FaceShape {
  const base = faceShapeBySlug(slug)!;
  const t = contentFor(locale)?.shapes[slug];
  if (!t) return base;
  return {
    ...base,
    ...t,
    women: { ...t.women, celebrities: base.women.celebrities },
    men: { ...t.men, celebrities: base.men.celebrities },
  };
}

export const shapesFor = (locale: Locale) => FACE_SHAPES.map((s) => shapeFor(locale, s.slug));

export function hubFor(locale: Locale) {
  const h = contentFor(locale)?.hub;
  return h ?? { title: "", description: "", h1: "Face Shapes: All 10 Types Explained", intro: HUB_INTRO, body: HUB_BODY, faqs: HUB_FAQS };
}

/** Tool summaries + the widget dictionary for one language (what the client actually needs). */
export function liteFor(locale: Locale): Lite & { dict: Dict } {
  const base = liteContent();
  const c = contentFor(locale);
  if (!c) return { ...base, dict: {} };
  return {
    shapes: base.shapes.map((s) => ({ ...s, name: c.shapes[s.slug]?.name ?? s.name, definition: c.shapes[s.slug]?.definition ?? s.definition })),
    hubs: Object.fromEntries(
      Object.entries(base.hubs).map(([k, h]) => [
        k,
        { ...h, name: c.hubNames[k] ?? h.name, items: h.items.map((i) => ({ ...i, ...(c.items[`${k}/${i.slug}`] ?? {}) })) },
      ]),
    ),
    dict: WIDGET[locale],
  };
}
