// Yoast-style sitemaps: /sitemap_index.xml lists one sitemap per content type, and every sitemap
// renders as a readable table in the browser through /main-sitemap.xsl.
import { allPages, type PageSeo } from "@/lib/seo";
import { POSTS } from "@/lib/content/blog";
import { SITE, absUrl } from "@/lib/site";
import { LOCALE_META, LOCALES, TRANSLATED_PATHS, localePath, stripLocale } from "@/lib/i18n/config";

export const SITEMAPS = {
  page: { title: "Pages", match: (p: PageSeo) => p.section === "Page" || stripLocale(p.path) === "/" },
  tool: { title: "Tools", match: (p: PageSeo) => p.section === "Tool" && stripLocale(p.path) !== "/" },
  "face-shape": { title: "Face shapes", match: (p: PageSeo) => p.section === "Face shape" },
  guide: { title: "Feature guides", match: (p: PageSeo) => p.section === "Guide" },
  post: { title: "Blog posts", match: (p: PageSeo) => p.section === "Blog" },
} as const;
export type SitemapName = keyof typeof SITEMAPS;

const published = new Map(POSTS.map((p) => [`/blog/${p.slug}/`, p.published]));
const lastmod = (path: string) => `${published.get(path) ?? SITE.updated}T00:00:00+00:00`;

function entries(name: SitemapName) {
  // Homepages first, then shortest paths (hubs before their children), like Yoast's ordering by hierarchy.
  return allPages()
    .filter(SITEMAPS[name].match)
    .sort((a, b) => Number(stripLocale(b.path) === "/") - Number(stripLocale(a.path) === "/") || a.path.split("/").length - b.path.split("/").length);
}

const XML_HEAD = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="/main-sitemap.xsl"?>\n`;

function xml(body: string) {
  return new Response(XML_HEAD + body, {
    headers: { "Content-Type": "application/xml; charset=utf-8", "X-Robots-Tag": "noindex, follow", "Cache-Control": "public, max-age=3600" },
  });
}

export function sitemapIndex() {
  const items = (Object.keys(SITEMAPS) as SitemapName[])
    .map((name) => {
      const list = entries(name);
      if (!list.length) return "";
      const newest = list.map((p) => lastmod(p.path)).sort().at(-1);
      return `\t<sitemap>\n\t\t<loc>${absUrl(`/${name}-sitemap.xml`)}</loc>\n\t\t<lastmod>${newest}</lastmod>\n\t</sitemap>`;
    })
    .filter(Boolean)
    .join("\n");
  return xml(`<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>`);
}

export function sitemap(name: SitemapName) {
  const urls = entries(name)
    .map((p) => {
      const base = stripLocale(p.path);
      // Every language version of a translated page lists all its alternates (hreflang in the sitemap).
      const alternates = TRANSLATED_PATHS.has(base)
        ? [...LOCALES.map((l) => [LOCALE_META[l].hreflang, localePath(l, base)]), ["x-default", base]]
            .map(([hl, path]) => `\t\t<xhtml:link rel="alternate" hreflang="${hl}" href="${absUrl(path)}"/>`)
        : [];
      const image = p.image ? [`\t\t<image:image>\n\t\t\t<image:loc>${absUrl(p.image)}</image:loc>\n\t\t</image:image>`] : [];
      return ["\t<url>", `\t\t<loc>${absUrl(p.path)}</loc>`, `\t\t<lastmod>${lastmod(p.path)}</lastmod>`, ...alternates, ...image, "\t</url>"].join("\n");
    })
    .join("\n");
  return xml(
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>`,
  );
}
