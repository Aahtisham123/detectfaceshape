// Original vector graphics for the site. Pure functions with no imports, so the image build script
// (scripts/build-images.mts) can render them to compressed WebP files, and React components can reuse them.

export const INK = "#1d1a2f";
export const PURPLE = "#5b3a8c";
export const GOLD = "#e0a12c";
export const CREAM = "#fbf8f4";
export const SKIN = "#f3e4d6";
export const BLUSH = "#f6d9df";

/* ------------------------------------------------------------------ face shapes */

type Spec = { length: number; hw: number[]; angular?: boolean };
const LEVELS = [0.03, 0.1, 0.28, 0.5, 0.75, 0.92, 1];

export const SHAPE_SPECS: Record<string, Spec> = {
  oval: { length: 1.5, hw: [0.5, 0.82, 0.94, 1, 0.84, 0.5, 0.18] },
  round: { length: 1.15, hw: [0.55, 0.88, 1, 1.02, 0.92, 0.6, 0.22] },
  square: { length: 1.18, hw: [0.82, 0.95, 0.97, 1, 0.98, 0.78, 0.45], angular: true },
  oblong: { length: 1.8, hw: [0.6, 0.88, 0.94, 0.95, 0.9, 0.6, 0.25] },
  rectangle: { length: 1.72, hw: [0.82, 0.95, 0.97, 0.98, 0.97, 0.78, 0.45], angular: true },
  heart: { length: 1.4, hw: [0.75, 1, 1.02, 0.95, 0.68, 0.3, 0.05] },
  diamond: { length: 1.5, hw: [0.35, 0.62, 0.78, 1.04, 0.7, 0.32, 0.08], angular: true },
  triangle: { length: 1.32, hw: [0.42, 0.66, 0.78, 0.9, 1.02, 0.84, 0.48], angular: true },
  "inverted-triangle": { length: 1.4, hw: [0.82, 1.02, 1.02, 0.9, 0.62, 0.32, 0.1], angular: true },
  pear: { length: 1.3, hw: [0.42, 0.66, 0.78, 0.92, 1.02, 0.78, 0.35] },
};

/** Outline path: straight segments for angular shapes, a closed Catmull-Rom spline for soft ones. */
export function outline(spec: Spec, cx: number, top: number, half: number, height: number) {
  const right = LEVELS.map((t, i) => [cx + spec.hw[i] * half, top + t * height]);
  const left = [...right].reverse().map(([x, y]) => [2 * cx - x, y]);
  const pts = [[cx, top], ...right, [cx, top + height + (spec.angular ? 0 : 2)], ...left];
  if (spec.angular) return `M${pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" L")} Z`;
  const n = pts.length;
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
}

/** A face-shape diagram as an SVG fragment drawn into a 200×200 box at (ox, oy) scaled by s. */
function faceGroup(shape: string, opts: { guides?: boolean; label?: string; ox?: number; oy?: number; s?: number; stroke?: string; fill?: string } = {}) {
  const spec = SHAPE_SPECS[shape] ?? SHAPE_SPECS.oval;
  const { guides = true, label, ox = 0, oy = 0, s = 1, stroke = INK, fill = SKIN } = opts;
  const height = 150;
  const half = height / spec.length / 2;
  const top = label ? 12 : 25;
  const cx = 100;
  const y = (t: number) => top + t * height;
  const w = (i: number) => spec.hw[i] * half;
  const g = guides
    ? [2, 3, 4].map((i, k) => {
        const yy = y([0.28, 0.5, 0.75][k]);
        return `<line x1="${cx - w(i)}" x2="${cx + w(i)}" y1="${yy}" y2="${yy}" stroke="${GOLD}" stroke-width="2.2"/><circle cx="${cx - w(i)}" cy="${yy}" r="2.6" fill="${GOLD}"/><circle cx="${cx + w(i)}" cy="${yy}" r="2.6" fill="${GOLD}"/>`;
      }).join("") + `<line x1="${cx}" x2="${cx}" y1="${top}" y2="${top + height}" stroke="${PURPLE}" stroke-width="2" stroke-dasharray="4 4"/>`
    : "";
  const text = label ? `<text x="100" y="192" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="14" font-weight="700" fill="${stroke}">${label}</text>` : "";
  return `<g transform="translate(${ox} ${oy}) scale(${s})"><path d="${outline(spec, cx, top, half, height)}" fill="${fill}" stroke="${stroke}" stroke-width="3.2" stroke-linejoin="round"/><path d="M${cx - half * 0.55},${y(0.36)} q${half * 0.17},-6 ${half * 0.34},0 M${cx + half * 0.21},${y(0.36)} q${half * 0.17},-6 ${half * 0.34},0" fill="none" stroke="${stroke}" stroke-width="2.4" stroke-linecap="round"/><circle cx="${cx - half * 0.38}" cy="${y(0.43)}" r="3.4" fill="${stroke}"/><circle cx="${cx + half * 0.38}" cy="${y(0.43)}" r="3.4" fill="${stroke}"/><path d="M${cx},${y(0.5)} l-4,${height * 0.1} h8" fill="none" stroke="${stroke}" stroke-width="2" stroke-linejoin="round" opacity="0.6"/><path d="M${cx - half * 0.25},${y(0.76)} Q${cx},${y(0.81)} ${cx + half * 0.25},${y(0.76)}" fill="none" stroke="#c45a6a" stroke-width="3" stroke-linecap="round"/>${g}${text}</g>`;
}

const doc = (w: number, h: number, body: string, bg = "#ffffff") =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"><rect width="${w}" height="${h}" fill="${bg}"/>${body}</svg>`;

export function faceShapeSvg(shape: string, label?: string) {
  return doc(200, 200, faceGroup(shape, { label }));
}

/** All 10 shapes in a 5×2 chart. */
export function faceChartSvg(shapes: { slug: string; name: string }[], heading = "The 10 Face Shapes") {
  const cells = shapes.map((s, i) => faceGroup(s.slug, { label: s.name, ox: (i % 5) * 200, oy: Math.floor(i / 5) * 210 + 50 })).join("");
  const title = `<text x="500" y="34" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="24" font-weight="700" fill="${INK}">${heading}</text>`;
  return doc(1000, 480, title + cells, CREAM);
}

/** Hero graphic: a face with landmark dots, measurement lines and a scan beam. */
/** Hero illustration; `text` holds the on-image labels so translated pages get their own copy. */
export function heroSvg(text = { forehead: "Forehead", cheekbones: "Cheekbones", jaw: "Jaw", badge: "On-device" }) {
  const spec = SHAPE_SPECS.oval;
  const height = 360;
  const half = height / spec.length / 2;
  const cx = 300;
  const top = 60;
  const y = (t: number) => top + t * height;
  const dots: string[] = [];
  // Landmark-like dots along the outline and features (deterministic).
  for (let i = 0; i < 64; i++) {
    const a = (i / 64) * Math.PI * 2;
    const r = 1 - 0.12 * Math.max(0, Math.sin(a)) ** 2;
    dots.push(`<circle cx="${(cx + Math.cos(a) * half * 0.98 * r).toFixed(1)}" cy="${(top + height / 2 + Math.sin(a) * height * 0.49).toFixed(1)}" r="2.4" fill="${PURPLE}" opacity="0.55"/>`);
  }
  for (const [dx, dy] of [[-0.38, 0.43], [0.38, 0.43], [-0.5, 0.43], [-0.26, 0.43], [0.26, 0.43], [0.5, 0.43], [0, 0.55], [-0.12, 0.6], [0.12, 0.6], [-0.25, 0.76], [0.25, 0.76], [0, 0.74], [0, 0.79]]) {
    dots.push(`<circle cx="${cx + dx * half}" cy="${y(dy)}" r="3" fill="${GOLD}"/>`);
  }
  const lines = [[0.28, 0.94], [0.5, 1], [0.75, 0.84]].map(([t, k]) => `<line x1="${cx - k * half}" x2="${cx + k * half}" y1="${y(t)}" y2="${y(t)}" stroke="${GOLD}" stroke-width="3" stroke-linecap="round"/>`).join("");
  const labels = [[text.forehead, 0.28, 0.94], [text.cheekbones, 0.5, 1], [text.jaw, 0.75, 0.84]].map(([l, t, k]) => `<text x="${cx + (k as number) * half + 14}" y="${y(t as number) + 5}" font-family="Arial,Helvetica,sans-serif" font-size="17" font-weight="700" fill="${INK}">${l}</text>`).join("");
  const body = `<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#efe7fb"/><stop offset="1" stop-color="#fdf1dc"/></linearGradient><linearGradient id="beam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${PURPLE}" stop-opacity="0"/><stop offset="1" stop-color="${PURPLE}" stop-opacity="0.25"/></linearGradient></defs>
<rect width="600" height="480" rx="32" fill="url(#bg)"/>
<circle cx="510" cy="80" r="46" fill="${GOLD}" opacity="0.18"/><circle cx="90" cy="410" r="60" fill="${PURPLE}" opacity="0.1"/>
<path d="${outline(spec, cx, top, half, height)}" fill="${SKIN}" stroke="${INK}" stroke-width="4"/>
<rect x="${cx - half - 20}" y="${y(0.18)}" width="${2 * half + 40}" height="70" fill="url(#beam)"/>
<line x1="${cx - half - 20}" x2="${cx + half + 20}" y1="${y(0.18) + 70}" y2="${y(0.18) + 70}" stroke="${PURPLE}" stroke-width="3"/>
<line x1="${cx}" x2="${cx}" y1="${top}" y2="${top + height}" stroke="${PURPLE}" stroke-width="2.5" stroke-dasharray="6 6"/>
${lines}${dots.join("")}${labels}
<g transform="translate(40 40)"><rect width="${Math.max(150, 56 + text.badge.length * 9.5)}" height="44" rx="22" fill="#ffffff"/><circle cx="22" cy="22" r="7" fill="#1d7a55"/><text x="38" y="28" font-family="Arial,Helvetica,sans-serif" font-size="16" font-weight="700" fill="${INK}">${text.badge}</text></g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 480" width="600" height="480">${body}</svg>`;
}

/* ------------------------------------------------------------------ eyes */

type EyeSpec = { aspect: number; tilt: number; crease: "visible" | "hooded" | "none"; brow: number; gap: number; lid: number };

export const EYE_SPECS: Record<string, EyeSpec> = {
  almond: { aspect: 0.38, tilt: 4, crease: "visible", brow: 1, gap: 1, lid: 1 },
  round: { aspect: 0.58, tilt: 0, crease: "visible", brow: 1.05, gap: 1, lid: 1 },
  hooded: { aspect: 0.36, tilt: 2, crease: "hooded", brow: 0.75, gap: 1, lid: 0.4 },
  monolid: { aspect: 0.3, tilt: 5, crease: "none", brow: 0.95, gap: 1.05, lid: 1 },
  upturned: { aspect: 0.38, tilt: 12, crease: "visible", brow: 1, gap: 1, lid: 1 },
  downturned: { aspect: 0.4, tilt: -9, crease: "visible", brow: 1, gap: 1, lid: 1 },
  "deep-set": { aspect: 0.36, tilt: 2, crease: "visible", brow: 0.7, gap: 1, lid: 0.6 },
  protruding: { aspect: 0.55, tilt: 0, crease: "visible", brow: 1.25, gap: 1, lid: 1.5 },
  "close-set": { aspect: 0.38, tilt: 3, crease: "visible", brow: 1, gap: 0.65, lid: 1 },
  "wide-set": { aspect: 0.38, tilt: 3, crease: "visible", brow: 1, gap: 1.45, lid: 1 },
};

function eye(cx: number, cy: number, w: number, e: EyeSpec, mirror: boolean) {
  const h = w * e.aspect;
  // Tilt is exaggerated ×1.8 so the difference reads at thumbnail size.
  const t = ((mirror ? -1 : 1) * e.tilt * 1.8 * Math.PI) / 180;
  const lx = cx - w / 2;
  const rx = cx + w / 2;
  // Outer corner rises with positive tilt; for the left eye (on screen) the outer corner is on the left.
  const outerLeft = !mirror;
  const ly = cy + (outerLeft ? -1 : 1) * Math.tan(Math.abs(t)) * (w / 2) * Math.sign(e.tilt);
  const ry = cy - (outerLeft ? -1 : 1) * Math.tan(Math.abs(t)) * (w / 2) * Math.sign(e.tilt);
  const shape = `M${lx},${ly} Q${cx},${cy - h * 1.15} ${rx},${ry} Q${cx},${cy + h * 0.85} ${lx},${ly} Z`;
  const iris = `<circle cx="${cx}" cy="${cy}" r="${Math.min(h * 0.62, w * 0.2)}" fill="#6b4a2f"/><circle cx="${cx}" cy="${cy}" r="${Math.min(h * 0.28, w * 0.09)}" fill="${INK}"/><circle cx="${cx + 4}" cy="${cy - 4}" r="2.4" fill="#fff"/>`;
  const creaseY = cy - h * (0.95 + 0.5 * e.lid);
  const crease =
    e.crease === "visible"
      ? `<path d="M${lx + w * 0.08},${(ly + creaseY) / 2 + 4} Q${cx},${creaseY - 6} ${rx - w * 0.08},${(ry + creaseY) / 2 + 4}" fill="none" stroke="${INK}" stroke-width="2" opacity="0.55"/>`
      : e.crease === "hooded"
        ? `<path d="M${lx - 4},${ly - 2} Q${cx},${cy - h * 1.3} ${rx + 4},${ry - 2}" fill="none" stroke="${INK}" stroke-width="3" opacity="0.7"/>`
        : "";
  const browY = cy - h * 1.1 - 26 * e.brow;
  const brow = `<path d="M${lx - 6},${browY + 8} Q${cx},${browY - 8} ${rx + 8},${browY + (outerLeft ? 2 : 2)}" fill="none" stroke="#4a3426" stroke-width="7" stroke-linecap="round"/>`;
  const shade = e.brow < 0.8 ? `<ellipse cx="${cx}" cy="${cy - h}" rx="${w * 0.55}" ry="${h * 0.7}" fill="${INK}" opacity="0.08"/>` : "";
  return `${shade}${brow}<path d="${shape}" fill="#fff" stroke="${INK}" stroke-width="3"/>${`<clipPath id="c${Math.round(cx)}"><path d="${shape}"/></clipPath><g clip-path="url(#c${Math.round(cx)})">${iris}</g>`}${crease}`;
}

export function eyeSvg(type: string, label?: string) {
  const e = EYE_SPECS[type] ?? EYE_SPECS.almond;
  const w = 120;
  const gap = 70 * e.gap;
  const cy = 120;
  const body = `<rect x="10" y="10" width="380" height="${label ? 210 : 220}" rx="24" fill="${SKIN}"/>${eye(200 - gap / 2 - w / 2, cy, w, e, false)}${eye(200 + gap / 2 + w / 2, cy, w, e, true)}<line x1="${200 - gap / 2}" x2="${200 + gap / 2}" y1="${cy + 55}" y2="${cy + 55}" stroke="${GOLD}" stroke-width="2" opacity="${type.endsWith("-set") ? 1 : 0}"/>`;
  const text = label ? `<text x="200" y="250" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="18" font-weight="700" fill="${INK}">${label}</text>` : "";
  return doc(400, label ? 270 : 240, body + text);
}

/* ------------------------------------------------------------------ lips */

type LipSpec = { width: number; upper: number; lower: number; bow: number; corner: number };

export const LIP_SPECS: Record<string, LipSpec> = {
  full: { width: 200, upper: 34, lower: 48, bow: 10, corner: 0 },
  thin: { width: 200, upper: 14, lower: 20, bow: 6, corner: 0 },
  heart: { width: 180, upper: 34, lower: 36, bow: 18, corner: 0 },
  bow: { width: 190, upper: 22, lower: 28, bow: 18, corner: 0 },
  "top-heavy": { width: 190, upper: 36, lower: 30, bow: 10, corner: 0 },
  "bottom-heavy": { width: 190, upper: 18, lower: 46, bow: 8, corner: 0 },
  wide: { width: 250, upper: 24, lower: 34, bow: 8, corner: 0 },
  round: { width: 150, upper: 30, lower: 42, bow: 6, corner: 0 },
  downturned: { width: 200, upper: 24, lower: 34, bow: 9, corner: -12 },
  balanced: { width: 200, upper: 24, lower: 36, bow: 10, corner: 0 },
};

export function lipSvg(type: string, label?: string) {
  const l = LIP_SPECS[type] ?? LIP_SPECS.balanced;
  const cx = 200;
  const cy = 115;
  const lx = cx - l.width / 2;
  const rx = cx + l.width / 2;
  const cyC = cy - l.corner;
  const peakX = l.width * 0.14;
  const upper = `M${lx},${cyC} C${lx + l.width * 0.18},${cy - l.upper * 0.7} ${cx - peakX - 18},${cy - l.upper} ${cx - peakX},${cy - l.upper} Q${cx - peakX / 2},${cy - l.upper} ${cx},${cy - l.upper + l.bow} Q${cx + peakX / 2},${cy - l.upper} ${cx + peakX},${cy - l.upper} C${cx + peakX + 18},${cy - l.upper} ${rx - l.width * 0.18},${cy - l.upper * 0.7} ${rx},${cyC} Q${cx},${cy + 4} ${lx},${cyC} Z`;
  const lower = `M${lx},${cyC} Q${cx},${cy + 6} ${rx},${cyC} C${rx - l.width * 0.12},${cy + l.lower * 0.9} ${cx + l.width * 0.2},${cy + l.lower} ${cx},${cy + l.lower} C${cx - l.width * 0.2},${cy + l.lower} ${lx + l.width * 0.12},${cy + l.lower * 0.9} ${lx},${cyC} Z`;
  const body = `<rect x="10" y="10" width="380" height="200" rx="24" fill="${SKIN}"/><path d="${lower}" fill="#c4566a" stroke="#8e3446" stroke-width="2.5"/><path d="${upper}" fill="#b04a5d" stroke="#8e3446" stroke-width="2.5"/><path d="M${lx + 6},${cyC} Q${cx},${cy + 3} ${rx - 6},${cyC}" fill="none" stroke="#6d2333" stroke-width="2.5"/><ellipse cx="${cx}" cy="${cy + l.lower * 0.5}" rx="${l.width * 0.12}" ry="4" fill="#fff" opacity="0.35"/>`;
  const text = label ? `<text x="200" y="245" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="18" font-weight="700" fill="${INK}">${label}</text>` : "";
  return doc(400, label ? 265 : 220, body + text);
}

/* ------------------------------------------------------------------ nose (profile) */

type NoseSpec = { length: number; hump: number; scoop: number; tip: number; bulb: number; projection: number };

export const NOSE_SPECS: Record<string, NoseSpec> = {
  greek: { length: 1, hump: 0, scoop: 0, tip: 0, bulb: 1, projection: 1 },
  roman: { length: 1.08, hump: 12, scoop: 0, tip: 0, bulb: 1, projection: 1.1 },
  hawk: { length: 1.12, hump: 16, scoop: 0, tip: -14, bulb: 1, projection: 1.15 },
  nubian: { length: 0.95, hump: 0, scoop: 2, tip: 0, bulb: 1.5, projection: 0.85 },
  button: { length: 0.78, hump: 0, scoop: 4, tip: 8, bulb: 1.25, projection: 0.8 },
  snub: { length: 0.8, hump: 0, scoop: 6, tip: 16, bulb: 1.1, projection: 0.85 },
  celestial: { length: 0.95, hump: 0, scoop: 9, tip: 12, bulb: 1, projection: 0.95 },
  fleshy: { length: 1.05, hump: 2, scoop: 0, tip: -4, bulb: 1.7, projection: 1 },
  bumpy: { length: 1, hump: 9, scoop: 0, tip: 2, bulb: 1, projection: 1 },
};

export function noseSvg(type: string, label?: string) {
  const n = NOSE_SPECS[type] ?? NOSE_SPECS.greek;
  const rootX = 170;
  const rootY = 40;
  const len = 120 * n.length;
  const tipX = rootX + 70 * n.projection;
  const tipY = rootY + len - n.tip;
  const midX = (rootX + tipX) / 2 + n.hump * 1.2 - n.scoop * 1.4;
  const midY = rootY + len * 0.5;
  const r = 13 * n.bulb;
  const base = `L${tipX - 8},${tipY + r * 0.9} Q${tipX - 30},${tipY + r * 1.4 - n.tip * 0.3} ${rootX + 18},${rootY + len + 22} Q${rootX + 10},${rootY + len + 40} ${rootX + 30},${rootY + len + 60}`;
  const profile = `M${rootX - 40},${rootY - 30} Q${rootX - 6},${rootY - 12} ${rootX},${rootY} Q${midX},${midY} ${tipX - r * 0.4},${tipY - r} Q${tipX + r * 0.8},${tipY - r * 0.2} ${tipX - 2},${tipY + r * 0.5} ${base}`;
  const body = `<rect x="10" y="10" width="380" height="${label ? 225 : 240}" rx="24" fill="${SKIN}"/><path d="${profile} L${rootX - 60},${rootY + len + 60} L${rootX - 60},${rootY - 30} Z" fill="#ead2bf"/><path d="${profile}" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="${tipX - 22}" cy="${tipY + r * 0.7}" rx="${9 * n.bulb}" ry="4.5" fill="${INK}" opacity="0.55"/><path d="M${rootX - 12},${rootY + 6} q-14,-8 -30,-4" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`;
  const text = label ? `<text x="200" y="262" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="18" font-weight="700" fill="${INK}">${label}</text>` : "";
  return doc(400, label ? 280 : 260, body + text);
}

/* ------------------------------------------------------------------ head (profile) */

/** Closed Catmull-Rom spline through points. */
function spline(pts: number[][]) {
  const n = pts.length;
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < n; i++) {
    const [p0, p1, p2, p3] = [pts[(i - 1 + n) % n], pts[i], pts[(i + 1) % n], pts[(i + 2) % n]];
    d += ` C${(p1[0] + (p2[0] - p0[0]) / 6).toFixed(1)},${(p1[1] + (p2[1] - p0[1]) / 6).toFixed(1)} ${(p2[0] - (p3[0] - p1[0]) / 6).toFixed(1)},${(p2[1] - (p3[1] - p1[1]) / 6).toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
}

/** Side-profile head silhouettes (face on the left). `back` pushes the back of the skull out, `top` raises the crown. */
export const HEAD_SPECS: Record<string, { back: number; top: number; flat?: boolean; square?: boolean }> = {
  round: { back: 1, top: 1 },
  oval: { back: 1.12, top: 1.04 },
  long: { back: 1.32, top: 0.96 },
  "flat-back": { back: 0.78, top: 1, flat: true },
  square: { back: 1, top: 0.9, square: true },
  egg: { back: 1.2, top: 1.18 },
};

export function headSvg(type: string, label?: string) {
  const h = HEAD_SPECS[type] ?? HEAD_SPECS.round;
  const bx = (x: number) => 205 + (x - 205) * h.back;
  const ty = (y: number) => 140 - (140 - y) * h.top;
  const back = h.flat
    ? [[bx(250), ty(52)], [bx(275), 85], [bx(282), 130], [bx(280), 185]]
    : h.square
      ? [[bx(250), ty(46)], [bx(282), 70], [bx(292), 130], [bx(282), 190]]
      : [[bx(255), ty(55)], [bx(288), 100], [bx(292), 150], [bx(272), 195]];
  const pts = [
    [158, 252], [150, 222], [126, 214], [118, 196], [112, 182], [116, 172], [106, 160], [112, 150], [110, 128], [112, 108],
    [122, 82], [h.square ? 150 : 152, ty(h.square ? 44 : 50)], [h.square ? 205 : 205, ty(38)],
    ...back,
    [252, 218], [238, 252],
  ];
  const body = `<rect x="10" y="10" width="380" height="${label ? 255 : 270}" rx="24" fill="${SKIN}"/><path d="${spline(pts)}" fill="#ead2bf" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/><path d="M200,140 q14,-6 14,14 q0,18 -12,20" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/><circle cx="128" cy="128" r="4" fill="${INK}"/><line x1="${bx(292) + 14}" x2="${bx(292) + 14}" y1="80" y2="190" stroke="${GOLD}" stroke-width="3" stroke-dasharray="6 5"/>`;
  const text = label ? `<text x="200" y="292" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="18" font-weight="700" fill="${INK}">${label}</text>` : "";
  return doc(400, label ? 310 : 290, body + text);
}

/* ------------------------------------------------------------------ jawline (reuses face outlines) */

export const JAW_TO_FACE: Record<string, string> = {
  square: "square", rounded: "round", "v-shaped": "heart", pointed: "diamond", wide: "triangle", narrow: "oblong",
};

export function jawSvg(type: string, label?: string) {
  return doc(200, 200, faceGroup(JAW_TO_FACE[type] ?? "oval", { label, guides: false }));
}

/** Small hub "chart" combining every item's graphic in a grid. */
export function gridSvg(items: { svg: string; label: string }[], cols: number, cellW: number, cellH: number, title: string) {
  const rows = Math.ceil(items.length / cols);
  const W = cols * cellW;
  const H = rows * cellH + 60;
  const cells = items
    .map((it, i) => {
      const inner = it.svg.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "");
      const vb = /viewBox="0 0 (\d+) (\d+)"/.exec(it.svg)!;
      const s = Math.min(cellW / +vb[1], (cellH - 10) / +vb[2]);
      return `<g transform="translate(${(i % cols) * cellW + (cellW - +vb[1] * s) / 2} ${Math.floor(i / cols) * cellH + 60}) scale(${s.toFixed(3)})">${inner}</g>`;
    })
    .join("");
  return doc(W, H, `<text x="${W / 2}" y="40" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="28" font-weight="700" fill="${INK}">${title}</text>${cells}`, CREAM);
}

/* ------------------------------------------------------------------ brand */

export function logoSvg(size = 512, padded = false) {
  const p = padded ? size * 0.12 : 0;
  const s = size - 2 * p;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}"><rect x="${p}" y="${p}" width="${s}" height="${s}" rx="${s * 0.22}" fill="${PURPLE}"/><ellipse cx="${size / 2}" cy="${size / 2 + s * 0.02}" rx="${s * 0.26}" ry="${s * 0.34}" fill="none" stroke="#ffffff" stroke-width="${s * 0.065}"/><line x1="${p + s * 0.16}" x2="${p + s * 0.84}" y1="${size / 2 - s * 0.04}" y2="${size / 2 - s * 0.04}" stroke="${GOLD}" stroke-width="${s * 0.06}" stroke-linecap="round"/><circle cx="${p + s * 0.16}" cy="${size / 2 - s * 0.04}" r="${s * 0.05}" fill="${GOLD}"/><circle cx="${p + s * 0.84}" cy="${size / 2 - s * 0.04}" r="${s * 0.05}" fill="${GOLD}"/></svg>`;
}
