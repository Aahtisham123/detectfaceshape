import type { Metadata } from "next";
import { seoFor } from "./seo";
import { SITE } from "./site";
import { LOCALE_META, LOCALES, TRANSLATED_PATHS, localePath, stripLocale } from "./i18n/config";

/** Stable file name of a page's social image, e.g. "/face-shapes/oval/" → "face-shapes--oval.png". */
export const ogKey = (path: string) => (path.replace(/^\/|\/$/g, "").replace(/\//g, "--") || "home") + ".png";
export const ogImagePath = (path: string) => `/og/${ogKey(path)}`;

export function metaFor(path: string, opts: { type?: "website" | "article"; published?: string; noindex?: boolean } = {}): Metadata {
  const p = seoFor(path);
  const locale = p.locale ?? "en";
  const base = stripLocale(path);
  // hreflang: every language version of this page, plus x-default (English).
  const languages = TRANSLATED_PATHS.has(base)
    ? { ...Object.fromEntries(LOCALES.map((l) => [LOCALE_META[l].hreflang, localePath(l, base)])), "x-default": base }
    : undefined;
  const image = { url: ogImagePath(path), width: 1200, height: 630, alt: p.title };
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: path, ...(languages ? { languages } : {}) },
    openGraph: {
      title: p.title,
      description: p.description,
      url: path,
      siteName: SITE.name,
      locale: LOCALE_META[locale].og,
      ...(languages ? { alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => LOCALE_META[l].og) } : {}),
      type: opts.type ?? "website",
      images: [image],
      ...(opts.type === "article" ? { publishedTime: opts.published ?? SITE.updated, modifiedTime: SITE.updated, authors: [SITE.author.name] } : {}),
    },
    twitter: { card: "summary_large_image", title: p.title, description: p.description, images: [image.url] },
    ...(opts.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
