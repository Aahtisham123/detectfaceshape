// Original, consistent vector outlines for every face shape (also used in the chart and OG images).
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

export function outline(spec: Spec, cx: number, top: number, half: number, height: number) {
  const right = LEVELS.map((t, i) => [cx + spec.hw[i] * half, top + t * height] as const);
  const left = [...right].reverse().map(([x, y]) => [2 * cx - x, y] as const);
  const pts = [[cx, top] as const, ...right, [cx, top + height + (spec.angular ? 0 : 2)] as const, ...left];
  if (spec.angular) return `M${pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" L")} Z`;
  // Closed Catmull-Rom spline through the points for soft shapes.
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

export default function ShapeIllustration({
  shape,
  size = 160,
  guides = false,
  title,
}: {
  shape: string;
  size?: number;
  guides?: boolean;
  title?: string;
}) {
  const spec = SHAPE_SPECS[shape] ?? SHAPE_SPECS.oval;
  const vb = 200;
  const height = 150;
  const half = height / spec.length / 2;
  const top = (vb - height) / 2;
  const cx = vb / 2;
  const y = (t: number) => top + t * height;
  const w = (i: number) => spec.hw[i] * half;
  return (
    <svg viewBox={`0 0 ${vb} ${vb}`} width={size} height={size} role="img" aria-label={title ?? `${shape} face shape outline`} className="shape-svg">
      <path d={outline(spec, cx, top, half, height)} className="shape-fill" />
      <circle cx={cx - half * 0.38} cy={y(0.43)} r={3.2} className="shape-feature" />
      <circle cx={cx + half * 0.38} cy={y(0.43)} r={3.2} className="shape-feature" />
      <path d={`M${cx - half * 0.25},${y(0.76)} Q${cx},${y(0.81)} ${cx + half * 0.25},${y(0.76)}`} className="shape-line" />
      {guides && (
        <g className="shape-guides">
          <line x1={cx - w(2)} x2={cx + w(2)} y1={y(0.28)} y2={y(0.28)} />
          <line x1={cx - w(3)} x2={cx + w(3)} y1={y(0.5)} y2={y(0.5)} />
          <line x1={cx - w(4)} x2={cx + w(4)} y1={y(0.75)} y2={y(0.75)} />
          <line x1={cx} x2={cx} y1={top} y2={top + height} strokeDasharray="4 4" />
        </g>
      )}
    </svg>
  );
}

/** Standalone SVG file (explicit colors, no CSS) for image search, sitemaps and social cards. */
export function shapeSvgMarkup(shape: string, opts: { guides?: boolean; stroke?: string; fill?: string; label?: string } = {}) {
  const spec = SHAPE_SPECS[shape] ?? SHAPE_SPECS.oval;
  const { stroke = "#1d1a2f", fill = "#f3eee8", guides = true, label } = opts;
  const vb = 200;
  const height = 150;
  const half = height / spec.length / 2;
  const top = label ? 12 : 25;
  const cx = vb / 2;
  const y = (t: number) => top + t * height;
  const w = (i: number) => spec.hw[i] * half;
  const g = guides
    ? [2, 3, 4].map((i, k) => `<line x1="${cx - w(i)}" x2="${cx + w(i)}" y1="${y([0.28, 0.5, 0.75][k])}" y2="${y([0.28, 0.5, 0.75][k])}" stroke="#c98a12" stroke-width="2"/>`).join("") +
      `<line x1="${cx}" x2="${cx}" y1="${top}" y2="${top + height}" stroke="#c98a12" stroke-width="2" stroke-dasharray="4 4"/>`
    : "";
  const text = label ? `<text x="100" y="192" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="${stroke}">${label}</text>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vb} ${vb}" width="600" height="600"><rect width="200" height="200" fill="#ffffff"/><path d="${outline(spec, cx, top, half, height)}" fill="${fill}" stroke="${stroke}" stroke-width="3" stroke-linejoin="round"/><circle cx="${cx - half * 0.38}" cy="${y(0.43)}" r="3.2" fill="${stroke}"/><circle cx="${cx + half * 0.38}" cy="${y(0.43)}" r="3.2" fill="${stroke}"/><path d="M${cx - half * 0.25},${y(0.76)} Q${cx},${y(0.81)} ${cx + half * 0.25},${y(0.76)}" fill="none" stroke="${stroke}" stroke-width="2.5" stroke-linecap="round"/>${g}${text}</svg>`;
}

export const shapeImagePath = (shape: string) => `/images/face-shapes/${shape}-face-shape.svg`;
