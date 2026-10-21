import { describe, expect, test } from "vitest";
import { allPages, HOME_TITLE } from "@/lib/seo";
import { NAV } from "@/lib/nav";
import { ogKey } from "@/lib/meta";
import { stripLocale } from "@/lib/i18n/config";
import SIZES from "@/lib/image-sizes.json";

const pages = allPages();

describe("seo registry", () => {
  test.each(pages.map((p) => [p.path, p] as const))("%s has a short title and description", (_path, p) => {
    // Homepages are exempt (English uses the requested title; translations get up to 60 characters).
    if (stripLocale(p.path) !== "/") expect(p.title.length, p.title).toBeLessThanOrEqual(50);
    else if (p.locale) expect(p.title.length, p.title).toBeLessThanOrEqual(60);
    expect(p.description.length, p.description).toBeLessThanOrEqual(143);
    expect(p.description.length, p.description).toBeGreaterThanOrEqual(70);
  });

  test("homepage uses the requested title", () => expect(pages.find((p) => p.path === "/")!.title).toBe(HOME_TITLE));

  test("titles, descriptions, paths and OG files are unique", () => {
    for (const key of ["title", "description", "path"] as const) {
      const vals = pages.map((p) => p[key]);
      const dupes = vals.filter((v, i) => vals.indexOf(v) !== i);
      expect(dupes, key).toEqual([]);
    }
    const keys = pages.map((p) => ogKey(p.path));
    expect(new Set(keys).size).toBe(keys.length);
  });

  test("every page image exists and has alt text", () => {
    for (const p of pages.filter((x) => x.image)) {
      expect(Object.keys(SIZES), p.image).toContain(p.image);
      expect(p.imageAlt?.length ?? 0, p.path).toBeGreaterThan(10);
    }
  });

  test("every sidebar link points at a real page", () => {
    const paths = new Set(pages.map((p) => p.path));
    for (const item of NAV.flatMap((g) => g.items)) expect(paths, item.href).toContain(item.href);
  });
});
