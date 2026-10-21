// Crawls a running site (default http://localhost:3000) and reports SEO / link problems.
// Usage: npm run build && npm start & npm run audit [-- http://localhost:3000]
const BASE = process.argv[2] ?? "http://localhost:3000";
// Origin the build was made for (canonicals/sitemap); pass as the 2nd argument if not the default.
const ORIGIN = process.argv[3] ?? "https://detectfaceshape.cc";
const issues = [];
const status = new Map();
const report = (url, msg) => issues.push(`${url.replace(BASE, "")}: ${msg}`);
const inbound = {};
const alternates = {};
const HOMES = new Set(["/", "/es/", "/fr/", "/pt/"]);

async function check(url, kind = "page") {
  if (status.has(url)) return status.get(url);
  const p = fetch(url, { redirect: "manual" }).then(async (r) => ({ code: r.status, type: r.headers.get("content-type") ?? "", body: kind === "page" ? await r.text() : "" }));
  status.set(url, p);
  return p;
}

const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const queue = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(ORIGIN, BASE));
const seen = new Set(queue);
const attr = (tag, name) => new RegExp(`${name}="([^"]*)"`).exec(tag)?.[1];

for (let i = 0; i < queue.length; i++) {
  const url = queue[i];
  const res = await check(url);
  if (res.code !== 200) { report(url, `HTTP ${res.code}`); continue; }
  const html = res.body;
  const path = url.replace(BASE, "");
  const title = /<title>([^<]*)<\/title>/.exec(html)?.[1]?.replace(/&amp;/g, "&").replace(/&#x27;/g, "'") ?? "";
  if (!title) report(url, "missing <title>");
  else if (title.length > (HOMES.has(path) ? (path === "/" ? 999 : 60) : 50)) report(url, `title ${title.length} chars: ${title}`);
  const desc = /<meta name="description" content="([^"]*)"/.exec(html)?.[1]?.replace(/&amp;/g, "&").replace(/&#x27;/g, "'") ?? "";
  if (!desc) report(url, "missing meta description");
  else if (desc.length > 143) report(url, `description ${desc.length} chars`);
  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1s !== 1) report(url, `${h1s} <h1> elements`);
  const canonical = /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];
  if (canonical !== `${ORIGIN}${path}`) report(url, `canonical ${canonical}`);
  // hreflang: a page that lists alternates must list itself, and every alternate must link back.
  const alts = Object.fromEntries([...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/gi)].map((m) => [m[1], m[2].replace(ORIGIN, "")]));
  if (Object.keys(alts).length) {
    alternates[path] = alts;
    if (!Object.values(alts).includes(path)) report(url, "hreflang alternates miss the page itself");
    if (!alts["x-default"]) report(url, "hreflang without x-default");
    for (const p of Object.values(alts)) if (!seen.has(BASE + p)) { seen.add(BASE + p); queue.push(BASE + p); }
  }
  // Translated pages mark their content language (the <html lang> is synced on the client).
  const loc = path.split("/")[1];
  if (["es", "fr", "pt"].includes(loc) && !new RegExp(`<article[^>]* lang="${loc}"`).test(html)) report(url, `content not marked lang="${loc}"`);
  const og = /<meta property="og:image" content="([^"]+)"/.exec(html)?.[1];
  if (!og) report(url, "missing og:image");
  else {
    const r = await check(og.replace(ORIGIN, BASE), "asset");
    if (r.code !== 200 || !r.type.startsWith("image/")) report(url, `og:image ${r.code} ${r.type}`);
  }
  const ld = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
  if (!ld.length) report(url, "no structured data");
  for (const m of ld) {
    try { JSON.parse(m[1]); } catch { report(url, "invalid JSON-LD"); }
  }
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) report(url, "indexable page has noindex");
  // Heading outline: no level skips (h2 → h4) and no h3 before the first h2.
  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => +m[1]);
  levels.forEach((l, i) => { if (i && l > levels[i - 1] + 1) report(url, `heading jumps h${levels[i - 1]} → h${l}`); });
  const h2s = [...html.matchAll(/<h2[^>]*>(.*?)<\/h2>/gs)].map((m) => m[1].replace(/<[^>]+>/g, "").trim().toLowerCase());
  const dupH2 = h2s.filter((t, i) => h2s.indexOf(t) !== i);
  if (dupH2.length) report(url, `duplicate h2: ${[...new Set(dupH2)].join(" | ")}`);
  for (const m of html.matchAll(/<a\b[^>]*href="(\/[^"#]*)/g)) if (m[1] !== path) (inbound[m[1]] ??= new Set()).add(path);
  for (const tag of html.match(/<img\b[^>]*>/g) ?? []) {
    const alt = attr(tag, "alt");
    const src = attr(tag, "src");
    if (alt === undefined) report(url, `img without alt: ${src}`);
    if (!/width="/.test(tag) || !/height="/.test(tag)) report(url, `img without width/height: ${src}`);
    else if (alt === "" && !/icon\.svg/.test(src ?? "")) report(url, `empty alt on content image: ${src}`);
    if (src && src.startsWith("/") && !src.startsWith("/_next")) {
      const r = await check(BASE + src.replace(/&amp;/g, "&"), "asset");
      if (r.code !== 200) report(url, `broken image ${src} (${r.code})`);
      if (/\.(jpe?g|png)$/i.test(src) && !/icon/.test(src)) report(url, `non-WebP image ${src}`);
    }
  }
  for (const m of html.matchAll(/<a\b[^>]*href="([^"#]*)(#[^"]*)?"/g)) {
    const href = m[1];
    if (!href || /^(mailto:|https?:\/\/)/.test(href)) continue;
    const abs = new URL(href.replace(ORIGIN, ""), BASE).href;
    if (!abs.startsWith(BASE)) continue;
    if (!abs.endsWith("/") && !/\.[a-z0-9]+$/.test(abs)) report(url, `link without trailing slash: ${href}`);
    if (!seen.has(abs)) {
      seen.add(abs);
      const r = await check(abs, /\.[a-z0-9]+$/.test(abs) ? "asset" : "page");
      if (r.code !== 200) report(url, `broken link ${href} (${r.code})`);
      else if (r.type.includes("text/html")) queue.push(abs);
    }
  }
}

// Pages that only the sitemap points to (no contextual links from the site's own content).
for (const u of queue) {
  const p = u.replace(BASE, "");
  const from = [...(inbound[p] ?? [])];
  if (p !== "/" && from.length < 2) report(u, `weakly linked: ${from.length} inbound internal link(s)`);
}
for (const [p, alts] of Object.entries(alternates)) {
  for (const [hl, q] of Object.entries(alts)) {
    if (hl === "x-default" || q === p) continue;
    if (!Object.values(alternates[q] ?? {}).includes(p)) report(BASE + p, `hreflang ${hl} → ${q} is not reciprocal`);
  }
}
console.log(`Crawled ${queue.length} pages, ${status.size} URLs checked.`);
const unique = [...new Set(issues)];
console.log(unique.length ? `${unique.length} issue(s):\n` + unique.join("\n") : "No issues found.");
process.exit(unique.length ? 1 : 0);
