// Lists every English UI string that needs a translation, split by where it's used:
// "chrome" (header, sidebar, footer, search… shipped on every page) and "widget" (tool UIs, passed per page).
// Usage: npx tsx scripts/i18n-keys.mts   (tests/i18n.test.ts uses collectKeys() to check every dictionary)
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import * as Q from "../lib/quizData";
import { NAV } from "../lib/nav";

const ROOT = join(import.meta.dirname, "..");
const read = (p: string) => readFileSync(join(ROOT, p), "utf8");
const files = (dir: string) => readdirSync(join(ROOT, dir)).filter((f) => /\.tsx?$/.test(f)).map((f) => `${dir}/${f}`);

/** Every string literal inside a t(...) call's first argument, including both branches of `t(cond ? "a" : "b")`. */
function tCalls(src: string) {
  const keys: string[] = [];
  for (const m of src.matchAll(/(?<![\w.])t\(/g)) {
    // Scan to the end of the first argument, skipping over string contents.
    let i = m.index! + 2;
    let depth = 0;
    const lits: string[] = [];
    while (i < src.length) {
      const c = src[i];
      if (c === '"') {
        let j = i + 1;
        while (src[j] !== '"') j += src[j] === "\\" ? 2 : 1;
        lits.push(JSON.parse(src.slice(i, j + 1)));
        i = j + 1;
        continue;
      }
      if (c === "(" || c === "{" || c === "[") depth++;
      if (c === ")" || c === "}" || c === "]") {
        if (depth === 0) break;
        depth--;
      }
      if (c === "," && depth === 0) break;
      i++;
    }
    keys.push(...lits);
  }
  return keys;
}

export function collectKeys() {
  const chrome = new Set<string>();
  const widget = new Set<string>();
  for (const f of [...files("components/layout"), ...files("components/ui")]) tCalls(read(f)).forEach((k) => chrome.add(k));
  NAV.forEach((g) => { chrome.add(g.title); g.items.forEach((i) => chrome.add(i.label)); });
  ["Oval", "Round", "Square", "Oblong", "Rectangle", "Heart", "Diamond", "Triangle", "Inverted Triangle", "Pear",
   "Eye Shapes", "Nose Shapes", "Lip Shapes", "Head Shapes", "Jawline Shapes", "Kibbe Body Types", "Tool", "Face shape", "Guide", "Blog", "Page"].forEach((k) => chrome.add(k));

  for (const f of files("components/tools")) tCalls(read(f)).forEach((k) => widget.add(k));
  for (const m of read("components/tools/Quizzes.tsx").matchAll(/field\("\w+", "([^"]+)", "([^"]+)"\)/g)) [m[1], m[2]].forEach((k) => widget.add(k));
  for (const m of read("components/tools/FeatureDetector.tsx").matchAll(/(?:eyebrow|share): "([^"]+)"/g)) widget.add(m[1]);
  // Quiz questions, options and result texts.
  for (const quiz of [Q.FACE_QUIZ, Q.HEAD_QUIZ, Q.UNDERTONE_QUIZ, Q.COLOR_QUIZ, Q.FOUNDATION_QUIZ, Q.KIBBE_QUIZ]) {
    for (const q of quiz) {
      widget.add(q.q);
      if (q.help) widget.add(q.help);
      q.options.forEach((o) => widget.add(o.label));
    }
  }
  for (const v of [...Object.values(Q.UNDERTONE_INFO), ...Object.values(Q.SEASONS)]) { widget.add(v.name); widget.add(v.text); }
  Object.values(Q.DEPTHS).forEach((d) => widget.add(d.name));
  Object.values(Q.CODES).forEach((c) => widget.add(c));
  // Analysis strings produced in lib/face (traits, ratio labels, pose warnings, categories).
  const classify = read("lib/face/classify.ts");
  for (const m of classify.matchAll(/band\([^,]+, "([^"]+)", "([^"]+)", "([^"]+)"/g)) [m[1], m[2], m[3]].forEach((k) => widget.add(k));
  for (const m of classify.matchAll(/label: "([^"]+)"/g)) widget.add(m[1]);
  for (const m of classify.matchAll(/"(positive|neutral|negative) canthal tilt"/g)) widget.add(m[0].slice(1, -1));
  ["positive", "neutral", "negative"].forEach((k) => widget.add(k));
  // Step and badge labels of the analysis screen.
  for (const m of read("components/tools/AnalysisPanel.tsx").matchAll(/(?:STEPS|BADGES) = \[([^\]]+)\]/g)) for (const k of m[1].matchAll(/"([^"]+)"/g)) widget.add(k[1]);
  for (const m of read("lib/face/draw.ts").matchAll(/label: "([^"]+)"/g)) widget.add(m[1]);
  for (const m of read("lib/face/features.ts").matchAll(/label: "([^"]+)"/g)) widget.add(m[1]);
  for (const m of read("lib/face/normalize.ts").matchAll(/warnings\.push\("([^"]+)"\)/g)) widget.add(m[1]);
  ["Eyes", "Eyebrows", "Nose", "Mouth", "Jaw", "Cheeks"].forEach((k) => widget.add(k)); // symmetry regions
  // Code values that appear inside t(cond ? ...) expressions but are never shown.
  for (const k of ["NotAllowedError", "loading"]) widget.delete(k);

  // Server-rendered page templates (tool pages, home, face-shape pages).
  const pages = new Set<string>();
  const templates = ["components/ToolPage.tsx", "components/Page.tsx", ...files("components/pages"), "lib/seo.ts"];
  for (const f of templates) tCalls(read(f)).forEach((k) => pages.add(k));
  for (const f of ["components/ToolPage.tsx", "components/pages/Home.tsx"]) for (const m of read(f).matchAll(/(?:label|title|text): "([^"]+)"/g)) pages.add(m[1]);
  for (const m of read("components/pages/ShapePage.tsx").matchAll(/^\s+"?[\w-]+"?: "([^"]+)",$/gm)) pages.add(m[1]);
  for (const s of ["oval", "round", "square", "oblong", "rectangle", "heart", "diamond", "triangle", "inverted triangle", "pear"])
    for (const g of ["Woman", "Man"]) pages.add(`${g} with ${/^[aeiou]/.test(s) ? "an" : "a"} ${s} face shape`);
  return {
    chrome: [...chrome].sort(),
    widget: [...widget].filter((k) => !chrome.has(k)).sort(),
    pages: [...pages].filter((k) => !chrome.has(k)).sort(),
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const k = collectKeys();
  console.log(JSON.stringify(k, null, 1));
  console.error(`chrome: ${k.chrome.length} keys, widget: ${k.widget.length} keys, pages: ${k.pages.length} keys`);
}
