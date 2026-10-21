import { describe, expect, test } from "vitest";
import { allPages } from "@/lib/seo";
import { SITEMAPS, sitemap, sitemapIndex, type SitemapName } from "@/lib/sitemaps";
import { absUrl } from "@/lib/site";

const locs = (xml: string) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const names = Object.keys(SITEMAPS) as SitemapName[];

describe("sitemaps", () => {
  test("every page is listed in exactly one sitemap", async () => {
    const listed = (await Promise.all(names.map((n) => sitemap(n).text()))).flatMap(locs);
    expect(new Set(listed).size).toBe(listed.length);
    expect(listed.sort()).toEqual(allPages().map((p) => absUrl(p.path)).sort());
  });

  test("the index links every sitemap and the stylesheet", async () => {
    const xml = await sitemapIndex().text();
    expect(locs(xml)).toEqual(names.map((n) => absUrl(`/${n}-sitemap.xml`)));
    expect(xml).toContain('<?xml-stylesheet type="text/xsl" href="/main-sitemap.xsl"?>');
  });
});
