// Crawls a running site (default http://localhost:3000) and reports SEO / link problems.
// Usage: npm run build && npm start & npm run audit [-- http://localhost:3000]
const BASE = process.argv[2] ?? "http://localhost:3000";
const issues = [];
const status = new Map();
const report = (url, msg) => issues.push(`${url.replace(BASE, "")}: ${msg}`);

async function check(url, kind = "page") {
  if (status.has(url)) return status.get(url);
  const p = fetch(url, { redirect: "manual" }).then(async (r) => ({ code: r.status, type: r.headers.get("content-type") ?? "", body: kind === "page" ? await r.text() : "" }));
  status.set(url, p);
  return p;
}

const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const queue = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace("https://detectfaceshape.ai", BASE));
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
  else if (title.length > 50 && path !== "/") report(url, `title ${title.length} chars: ${title}`);
  const desc = /<meta name="description" content="([^"]*)"/.exec(html)?.[1]?.replace(/&amp;/g, "&").replace(/&#x27;/g, "'") ?? "";
  if (!desc) report(url, "missing meta description");
  else if (desc.length > 143) report(url, `description ${desc.length} chars`);
  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1s !== 1) report(url, `${h1s} <h1> elements`);
  const canonical = /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];
  if (canonical !== `https://detectfaceshape.ai${path}`) report(url, `canonical ${canonical}`);
  const og = /<meta property="og:image" content="([^"]+)"/.exec(html)?.[1];
  if (!og) report(url, "missing og:image");
  else {
    const r = await check(og.replace("https://detectfaceshape.ai", BASE), "asset");
    if (r.code !== 200 || !r.type.startsWith("image/")) report(url, `og:image ${r.code} ${r.type}`);
  }
  if (!/application\/ld\+json/.test(html)) report(url, "no structured data");
  for (const tag of html.match(/<img\b[^>]*>/g) ?? []) {
    const alt = attr(tag, "alt");
    const src = attr(tag, "src");
    if (alt === undefined) report(url, `img without alt: ${src}`);
    else if (alt === "" && !/icon\.svg/.test(src ?? "")) report(url, `empty alt on content image: ${src}`);
    if (src && src.startsWith("/") && !src.startsWith("/_next")) {
      const r = await check(BASE + src.replace(/&amp;/g, "&"), "asset");
      if (r.code !== 200) report(url, `broken image ${src} (${r.code})`);
      if (/\.(jpe?g|png)$/i.test(src) && !/icon/.test(src)) report(url, `non-WebP image ${src}`);
    }
  }
  for (const m of html.matchAll(/<a\b[^>]*href="([^"#]*)(#[^"]*)?"/g)) {
    const href = m[1];
    if (!href || /^(mailto:|https?:\/\/(?!detectfaceshape\.ai))/.test(href)) continue;
    const abs = new URL(href.replace("https://detectfaceshape.ai", ""), BASE).href;
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

console.log(`Crawled ${queue.length} pages, ${status.size} URLs checked.`);
const unique = [...new Set(issues)];
console.log(unique.length ? `${unique.length} issue(s):\n` + unique.join("\n") : "No issues found.");
process.exit(unique.length ? 1 : 0);
