import { describe, expect, test } from "vitest";
import { collectKeys } from "@/scripts/i18n-keys.mts";
import { CHROME } from "@/lib/i18n/chrome";
import { WIDGET } from "@/lib/i18n/widget";
import { contentFor } from "@/lib/i18n/server";
import { OTHER_LOCALES, TRANSLATED_PATHS, localePath } from "@/lib/i18n/config";
import { allPages } from "@/lib/seo";
import { TOOLS } from "@/lib/content/tools";
import { FACE_SHAPES } from "@/lib/content/faceShapes";
import { HUB_FAQS } from "@/lib/content/faceShapesHub";
import { TYPE_HUBS } from "@/lib/content/typeHubs";

const keys = collectKeys();
// {a_shape}/{a_name} carry an English article, so translations use {shape}/{name}; case may change too ({Shape} → {shape}).
const placeholders = (s: string) => [...new Set([...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1].replace(/^a_/, "").toLowerCase()))].sort();
const paths = new Set(allPages().map((p) => p.path));

describe.each(OTHER_LOCALES)("%s translations", (locale) => {
  const c = contentFor(locale)!;

  test.each([
    ["chrome", keys.chrome, CHROME[locale]],
    ["widget", keys.widget, WIDGET[locale]],
    ["pages", keys.pages, c.pages],
  ] as const)("%s dictionary covers every string and keeps its placeholders", (_name, list, dict) => {
    expect(list.filter((k) => !dict[k]), "missing").toEqual([]);
    for (const k of list) expect(placeholders(dict[k]), k).toEqual(placeholders(k));
  });

  test("every tool, shape, hub and type item is translated", () => {
    expect(Object.keys(c.tools).sort()).toEqual(TOOLS.map((t) => t.slug).sort());
    expect(Object.keys(c.shapes).sort()).toEqual(FACE_SHAPES.map((s) => s.slug).sort());
    expect(c.hub.faqs.length).toBe(HUB_FAQS.length);
    expect(Object.keys(c.hubNames).sort()).toEqual(TYPE_HUBS.map((h) => h.slug).sort());
    expect(Object.keys(c.items).sort()).toEqual(TYPE_HUBS.flatMap((h) => h.items.map((i) => `${h.slug}/${i.slug}`)).sort());
  });

  test("shape pages line up with the English structure", () => {
    for (const en of FACE_SHAPES) {
      const s = c.shapes[en.slug];
      const len = (x: { length: number }) => x.length;
      expect(
        [s.measurements, s.traits, s.howToTell, s.women.hairstyles, s.women.avoid, s.men.hairstyles, s.men.avoid, s.men.beards, s.glasses.best, s.glasses.avoid, s.faqs].map(len),
        en.slug,
      ).toEqual([en.measurements, en.traits, en.howToTell, en.women.hairstyles, en.women.avoid, en.men.hairstyles, en.men.avoid, en.men.beards, en.glasses.best, en.glasses.avoid, en.faqs].map(len));
      expect(s.confusedWith.map((x) => x.slug), en.slug).toEqual(en.confusedWith.map((x) => x.slug));
    }
  });

  test("links in translated content resolve and prefer the translated page", () => {
    const bodies = [c.hub.body, ...Object.values(c.tools).map((t) => t.body), ...Object.values(c.shapes).map((s) => s.body)];
    for (const body of bodies) {
      for (const [, l] of body.matchAll(/\]\((\/[^)#\s]*)/g)) {
        expect(paths, `broken link ${l}`).toContain(l);
        expect(TRANSLATED_PATHS.has(l), `${l} has a ${locale} version: link ${localePath(locale, l)}`).toBe(false);
      }
    }
  });
});
