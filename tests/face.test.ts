import { describe, expect, test } from "vitest";
import { closeness, scorePrototypes } from "@/lib/face/geometry";
import { normalizeFace } from "@/lib/face/normalize";
import { classifyFaceShape, measureFace } from "@/lib/face/faceShape";
import { analyzeSymmetry } from "@/lib/face/classify";
import { faceSimilarity } from "@/lib/face/features";
import { LM, SYMMETRIC_PAIRS, MIDLINE } from "@/lib/face/landmarks";
import { rgbToLab } from "@/lib/face/skin";

/** A deterministic, roughly face-like landmark cloud: symmetric pairs are mirrored around x = 0.5. */
function syntheticFace() {
  let seed = 7;
  const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const pts = Array.from({ length: 478 }, () => ({ x: 0.3 + rand() * 0.4, y: 0.2 + rand() * 0.6, z: rand() * 0.05 }));
  const set = (i: number, x: number, y: number) => (pts[i] = { x, y, z: 0 });
  set(LM.irisR, 0.42, 0.42); set(LM.irisL, 0.58, 0.42);
  set(LM.eyeROuter, 0.37, 0.42); set(LM.eyeRInner, 0.46, 0.42); set(LM.eyeLOuter, 0.63, 0.42); set(LM.eyeLInner, 0.54, 0.42);
  set(LM.cheekRight, 0.3, 0.48); set(LM.cheekLeft, 0.7, 0.48);
  set(LM.foreheadRight, 0.33, 0.3); set(LM.foreheadLeft, 0.67, 0.3);
  set(LM.jawRight, 0.34, 0.66); set(LM.jawLeft, 0.66, 0.66);
  set(LM.chinRight, 0.455, 0.76); set(LM.chinLeft, 0.545, 0.76);
  set(LM.forehead, 0.5, 0.24); set(LM.chin, 0.5, 0.79); set(LM.noseTip, 0.5, 0.55);
  for (const i of MIDLINE) if (![LM.forehead, LM.chin, LM.noseTip].includes(i as never)) pts[i] = { x: 0.5, y: pts[i].y, z: 0 };
  for (const [r, l] of SYMMETRIC_PAIRS) pts[l] = { x: 1 - pts[r].x, y: pts[r].y, z: pts[r].z };
  return pts;
}

/** Applies scale, rotation and translation in pixel space, then re-normalizes to a new image size. */
function transform(pts: { x: number; y: number; z: number }[], angleDeg: number, scale: number, w: number, h: number) {
  const a = (angleDeg * Math.PI) / 180;
  return pts.map((p) => {
    const x = (p.x - 0.5) * 1000 * scale;
    const y = (p.y - 0.5) * 1000 * scale;
    return { x: (x * Math.cos(a) - y * Math.sin(a) + w / 2) / w, y: (x * Math.sin(a) + y * Math.cos(a) + h / 2) / h, z: (p.z * 1000 * scale) / w };
  });
}

describe("geometry", () => {
  test("prototype scores are percentages that sum to ~100 and rank the closest first", () => {
    const r = scorePrototypes({ a: 1, b: 0 }, { near: { a: 1, b: 0 }, far: { a: -2, b: 2 } });
    expect(r[0].key).toBe("near");
    expect(r.reduce((s, x) => s + x.pct, 0)).toBeCloseTo(100, 0);
  });
  test("closeness is 100 at the ideal and 0 beyond tolerance", () => {
    expect(closeness(1.618, 1.618, 0.3)).toBe(100);
    expect(closeness(3, 1.618, 0.3)).toBe(0);
  });
});

describe("face measurements", () => {
  const base = syntheticFace();
  const ref = measureFace(normalizeFace(base, 1000, 1000).pts);

  test("ratios don't depend on head roll, photo scale or image size", () => {
    for (const [angle, scale, w, h] of [[12, 0.6, 800, 1200], [-20, 1.4, 1600, 1600], [5, 0.3, 640, 480]]) {
      const m = measureFace(normalizeFace(transform(base, angle, scale, w, h), w, h).pts);
      expect(m.lengthRatio).toBeCloseTo(ref.lengthRatio, 6);
      expect(m.jawRatio).toBeCloseTo(ref.jawRatio, 6);
      expect(m.jawAngle).toBeCloseTo(ref.jawAngle, 4);
    }
  });

  test("roll is detected and reported, and the face is leveled", () => {
    const f = normalizeFace(transform(base, 20, 1, 1000, 1000), 1000, 1000);
    expect(f.pose.rollDeg).toBeCloseTo(20, 4);
    expect(f.pts[LM.irisR].y).toBeCloseTo(f.pts[LM.irisL].y, 6);
    expect(f.warnings.some((w) => w.includes("tilted sideways"))).toBe(true);
  });

  test("a stretched face scores as longer (oblong/rectangle) than a squashed one", () => {
    const stretch = (k: number) => base.map((p) => ({ ...p, y: 0.5 + (p.y - 0.5) * k }));
    const long = classifyFaceShape(normalizeFace(stretch(1.35), 1000, 1000));
    const short = classifyFaceShape(normalizeFace(stretch(0.8), 1000, 1000));
    expect(["oblong", "rectangle"]).toContain(long.shape);
    expect(long.measurements.lengthRatio).toBeGreaterThan(short.measurements.lengthRatio);
    expect(["oblong", "rectangle"]).not.toContain(short.shape);
  });

  test("a perfectly mirrored face scores 100 on symmetry", () => {
    expect(analyzeSymmetry(normalizeFace(base, 1000, 1000)).score).toBe(100);
  });

  test("face similarity ignores pose and size", () => {
    const a = normalizeFace(base, 1000, 1000).pts;
    const b = normalizeFace(transform(base, 15, 0.5, 900, 700), 900, 700).pts;
    expect(faceSimilarity(a, b)).toBeLessThan(1e-6);
  });
});

describe("skin color", () => {
  test("golden skin has a higher Lab hue angle than rosy skin", () => {
    const hue = (r: number, g: number, b: number) => {
      const [, a, bb] = rgbToLab(r, g, b);
      return (Math.atan2(bb, a) * 180) / Math.PI;
    };
    expect(hue(224, 180, 140)).toBeGreaterThan(hue(225, 170, 165));
  });
});
