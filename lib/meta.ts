import type { Metadata } from "next";
import { seoFor } from "./seo";
import { SITE } from "./site";

/** Stable file name of a page's social image, e.g. "/face-shapes/oval/" → "face-shapes--oval.png". */
export const ogKey = (path: string) => (path.replace(/^\/|\/$/g, "").replace(/\//g, "--") || "home") + ".png";
export const ogImagePath = (path: string) => `/og/${ogKey(path)}`;

export function metaFor(path: string, opts: { type?: "website" | "article"; published?: string; noindex?: boolean } = {}): Metadata {
  const p = seoFor(path);
  const image = { url: ogImagePath(path), width: 1200, height: 630, alt: p.title };
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: path },
    openGraph: {
      title: p.title,
      description: p.description,
      url: path,
      siteName: SITE.name,
      locale: "en_US",
      type: opts.type ?? "website",
      images: [image],
      ...(opts.type === "article" ? { publishedTime: opts.published ?? SITE.updated, modifiedTime: SITE.updated, authors: [SITE.author.name] } : {}),
    },
    twitter: { card: "summary_large_image", title: p.title, description: p.description, images: [image.url] },
    ...(opts.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
