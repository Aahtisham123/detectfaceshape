import type { MetadataRoute } from "next";
import { allPages } from "@/lib/seo";
import { POSTS } from "@/lib/content/blog";
import { SITE, absUrl } from "@/lib/site";
import { LOCALE_META, LOCALES, TRANSLATED_PATHS, localePath, stripLocale } from "@/lib/i18n/config";

const priority = (path: string, section: string) =>
  path === "/" ? 1 : section === "Tool" ? 0.9 : path.split("/").filter(Boolean).length === 1 ? 0.8 : section === "Page" ? 0.3 : 0.6;

export default function sitemap(): MetadataRoute.Sitemap {
  const published = new Map(POSTS.map((p) => [`/blog/${p.slug}/`, p.published]));
  return allPages().map((p) => ({
    url: absUrl(p.path),
    lastModified: new Date(published.get(p.path) ?? SITE.updated),
    changeFrequency: p.section === "Tool" ? "weekly" : "monthly",
    priority: priority(p.path, p.section),
    ...(p.image ? { images: [absUrl(p.image)] } : {}),
    // Every language version of a translated page lists all its alternates (hreflang in the sitemap).
    ...(TRANSLATED_PATHS.has(stripLocale(p.path))
      ? { alternates: { languages: { ...Object.fromEntries(LOCALES.map((l) => [LOCALE_META[l].hreflang, absUrl(localePath(l, stripLocale(p.path)))])), "x-default": absUrl(stripLocale(p.path)) } } }
      : {}),
  }));
}
