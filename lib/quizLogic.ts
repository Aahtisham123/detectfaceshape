// Pure scoring logic for the quizzes and calculator, kept separate from the UI so it can be unit-tested.

export const FACE_SHAPE_KEYS = ["oval", "round", "square", "oblong", "rectangle", "heart", "diamond", "triangle", "inverted-triangle", "pear"];
const SHAPES = FACE_SHAPE_KEYS;

export function ranked(totals: Record<string, number>, keys: string[]) {
  const vals = keys.map((k) => ({ key: k, v: Math.max(0, totals[k] ?? 0) }));
  const sum = vals.reduce((s, x) => s + x.v, 0) || 1;
  return vals.map((x) => ({ key: x.key, pct: (x.v / sum) * 100 })).sort((a, b) => b.pct - a.pct);
}

export function calculateFaceShape(v: { forehead: number; cheeks: number; jawHalf: number; length: number; sharpJaw: boolean }) {
  const jaw = v.jawHalf * 2 * 0.62; // jaw line (chin→corner, ×2) is curved; ≈0.62 of it spans straight across
  const width = Math.max(v.forehead, v.cheeks, jaw);
  const ratio = v.length / v.cheeks;
  const f = v.forehead / v.cheeks;
  const j = jaw / v.cheeks;
  const s: Record<string, number> = Object.fromEntries(SHAPES.map((k) => [k, 0]));
  if (ratio >= 1.55) { s.oblong += 3; s.rectangle += 3; } else if (ratio <= 1.25) { s.round += 3; s.square += 3; s.pear += 1; } else { s.oval += 2; s.heart += 2; s.diamond += 2; s.triangle += 1; s["inverted-triangle"] += 1; }
  if (v.forehead === width && f > 1.03) { s.heart += 3; s["inverted-triangle"] += 3; }
  if (v.cheeks === width && f < 0.9 && j < 0.9) s.diamond += 4;
  else if (v.cheeks === width) { s.oval += 2; s.round += 2; }
  if (jaw === width && j > 1.03) { s.triangle += 3; s.pear += 3; }
  if (Math.abs(f - 1) < 0.08 && Math.abs(j - 1) < 0.1) { s.square += 2; s.rectangle += 2; s.oblong += 1; }
  if (v.sharpJaw) { s.square += 2; s.rectangle += 2; s.triangle += 1; s["inverted-triangle"] += 1; } else { s.round += 1; s.oval += 1; s.oblong += 1; s.pear += 1; s.heart += 1; }
  return ranked(s, SHAPES);
}

export function seasonFromTotals(t: Record<string, number>) {
  const warm = (t.warm ?? 0) - (t.cool ?? 0);
  const deep = (t.deep ?? 0) - (t.light ?? 0);
  const clear = (t.clear ?? 0) - (t.soft ?? 0);
  const isWarm = warm >= 0;
  const family = isWarm ? (deep > 0 || (clear < 0 && deep >= -1) ? "autumn" : "spring") : deep > 1 || clear > 2 ? "winter" : "summer";
  // Sub-season: whichever quality is strongest.
  const strengths = { temp: Math.abs(warm), depth: Math.abs(deep), chroma: Math.abs(clear) };
  const strongest = (Object.entries(strengths).sort((a, b) => b[1] - a[1])[0][0]) as keyof typeof strengths;
  const sub: Record<string, Record<string, string>> = {
    spring: { temp: "warm-spring", depth: "light-spring", chroma: "clear-spring" },
    summer: { temp: "cool-summer", depth: "light-summer", chroma: "soft-summer" },
    autumn: { temp: "warm-autumn", depth: "deep-autumn", chroma: "soft-autumn" },
    winter: { temp: "cool-winter", depth: "deep-winter", chroma: "clear-winter" },
  };
  return sub[family][strongest];
}

export function kibbeFromTotals(t: Record<string, number>) {
  const Y = t.Y ?? 0;
  const W = t.W ?? 0;
  const S = t.S ?? 0;
  const G = t.G ?? 0;
  const scores: Record<string, number> = {
    dramatic: Y * 1.2 + S - W * 0.5,
    "soft-dramatic": Y * 0.4 + S * 1.2 - Math.abs(Y - 2) * 0.3 + (Y < 6 ? 1 : 0),
    "flamboyant-natural": W * 1.3 + S * 0.8 + Y * 0.3,
    natural: W * 1.2 - Math.abs(S) * 0.5,
    "soft-natural": W * 0.9 - Y * 0.4 - Math.abs(S) * 0.3,
    "dramatic-classic": 6 - Math.abs(Y - 3) - Math.abs(W) - Math.abs(S) - G,
    classic: 6 - Math.abs(Y) - Math.abs(W) - Math.abs(S) - G,
    "soft-classic": 6 - Math.abs(Y + 3) - Math.abs(W) - Math.abs(S) - G,
    "flamboyant-gamine": G * 1.2 - S + Y * 0.4,
    gamine: G * 1.2 - S - Math.abs(Y) * 0.3,
    "soft-gamine": G * 1.2 - S - Y * 0.4,
    "theatrical-romantic": -Y * 1.0 - S * 0.8 - W * 0.5 + 1,
    romantic: -Y * 1.2 - W * 0.5 - Math.abs(S) * 0.2,
  };
  const min = Math.min(...Object.values(scores));
  const shifted = Object.fromEntries(Object.entries(scores).map(([k, v]) => [k, (v - min) ** 2]));
  return ranked(shifted, Object.keys(scores));
}

