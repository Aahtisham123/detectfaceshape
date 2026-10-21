import { SITE } from "@/lib/site";

export const dynamic = "force-static";

// Turns the raw XML sitemaps into a readable page in the browser (search engines ignore it).
const XSL = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta name="robots" content="noindex, follow"/>
  <title>XML Sitemap - ${SITE.name}</title>
  <style>
    :root { --bg: #fcfcfd; --surface: #fff; --text: #1d1a2f; --muted: #5d5870; --border: #e8e5ee; --accent: #5b3a8c; --soft: #f5f3f8; }
    @media (prefers-color-scheme: dark) { :root { --bg: #14111c; --surface: #1d1928; --text: #f2eef8; --muted: #b5adc6; --border: #352d47; --accent: #b99cf0; --soft: #262036; } }
    * { box-sizing: border-box; }
    body { margin: 0; background: var(--bg); color: var(--text); font: 15px/1.5 ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif; }
    header { background: var(--accent); color: #fff; padding: 28px 16px; }
    @media (prefers-color-scheme: dark) { header { color: #14111c; } }
    .wrap { max-width: 1100px; margin: 0 auto; padding: 0 16px; }
    header .wrap { padding: 0; }
    h1 { margin: 0 0 6px; font-size: 1.6rem; }
    header p { margin: 0; opacity: 0.9; }
    header a { color: inherit; }
    .count { margin: 24px 0 12px; color: var(--muted); }
    .count a { color: var(--accent); }
    .card { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; overflow-x: auto; margin-bottom: 40px; }
    table { width: 100%; border-collapse: collapse; }
    th { text-align: left; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.04em; color: var(--muted); background: var(--soft); padding: 12px 16px; white-space: nowrap; }
    td { padding: 10px 16px; border-top: 1px solid var(--border); vertical-align: top; }
    tr:hover td { background: var(--soft); }
    td a { color: var(--text); text-decoration: none; word-break: break-all; }
    td a:hover { color: var(--accent); text-decoration: underline; }
    .num, .date { white-space: nowrap; color: var(--muted); }
    .num { text-align: center; }
  </style>
</head>
<body>
  <header>
    <div class="wrap">
      <h1>XML Sitemap</h1>
      <p>Generated for <a href="${SITE.url}/">${SITE.name}</a>. It helps search engines like Google and Bing find every page on the site.</p>
    </div>
  </header>
  <div class="wrap">
    <xsl:choose>
      <xsl:when test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
        <p class="count">This XML Sitemap Index file contains <strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></strong> sitemaps.</p>
        <div class="card">
          <table>
            <thead><tr><th>Sitemap</th><th>Last modified</th></tr></thead>
            <tbody>
              <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                <xsl:variable name="loc"><xsl:value-of select="sitemap:loc"/></xsl:variable>
                <tr>
                  <td><a href="{$loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                  <td class="date"><xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </xsl:when>
      <xsl:otherwise>
        <p class="count"><a href="/sitemap_index.xml">&#8592; Sitemap index</a> · This XML Sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs.</p>
        <div class="card">
          <table>
            <thead><tr><th>URL</th><th class="num">Languages</th><th class="num">Images</th><th>Last modified</th></tr></thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:variable name="loc"><xsl:value-of select="sitemap:loc"/></xsl:variable>
                <tr>
                  <td><a href="{$loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                  <td class="num"><xsl:value-of select="count(xhtml:link[@hreflang != 'x-default'])"/></td>
                  <td class="num"><xsl:value-of select="count(image:image)"/></td>
                  <td class="date"><xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </xsl:otherwise>
    </xsl:choose>
  </div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
`;

export function GET() {
  return new Response(XSL, { headers: { "Content-Type": "text/xsl; charset=utf-8", "X-Robots-Tag": "noindex", "Cache-Control": "public, max-age=86400" } });
}
