export type Pt = { x: number; y: number; z: number };

export const dist = (a: Pt, b: Pt) => Math.hypot(a.x - b.x, a.y - b.y);
export const mid = (a: Pt, b: Pt): Pt => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, z: (a.z + b.z) / 2 });
export const avg = (pts: Pt[]): Pt => {
  const s = pts.reduce((acc, p) => ({ x: acc.x + p.x, y: acc.y + p.y, z: acc.z + p.z }), { x: 0, y: 0, z: 0 });
  return { x: s.x / pts.length, y: s.y / pts.length, z: s.z / pts.length };
};
export const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
export const deg = (rad: number) => (rad * 180) / Math.PI;

/** Interior angle at `b` (degrees) formed by a-b-c. */
export function angleAt(a: Pt, b: Pt, c: Pt) {
  const v1 = { x: a.x - b.x, y: a.y - b.y };
  const v2 = { x: c.x - b.x, y: c.y - b.y };
  const cos = (v1.x * v2.x + v1.y * v2.y) / (Math.hypot(v1.x, v1.y) * Math.hypot(v2.x, v2.y));
  return deg(Math.acos(clamp(cos, -1, 1)));
}

/** Gaussian-similarity scoring of a feature vector against named prototypes. Returns percentages summing to 100. */
export function scorePrototypes<K extends string>(
  features: Record<string, number>,
  prototypes: Record<K, Record<string, number>>,
  weights: Record<string, number> = {},
  sharpness = 1,
): { key: K; pct: number }[] {
  const raw = (Object.keys(prototypes) as K[]).map((key) => {
    const proto = prototypes[key];
    let d2 = 0;
    for (const f of Object.keys(proto)) {
      const w = weights[f] ?? 1;
      d2 += w * (features[f] - proto[f]) ** 2;
    }
    return { key, s: Math.exp(-0.5 * sharpness * d2) };
  });
  const total = raw.reduce((a, r) => a + r.s, 0) || 1;
  return raw
    .map((r) => ({ key: r.key, pct: Math.round((r.s / total) * 1000) / 10 }))
    .sort((a, b) => b.pct - a.pct);
}

/** 0–100 score that falls off linearly as `value` deviates from `ideal` by `tolerance` (relative). */
export function closeness(value: number, ideal: number, tolerance: number) {
  const rel = Math.abs(value - ideal) / ideal;
  return Math.round(clamp(100 * (1 - rel / tolerance), 0, 100));
}
