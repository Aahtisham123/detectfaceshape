import { describe, expect, test } from "vitest";
import { calculateFaceShape, kibbeFromTotals, ranked, seasonFromTotals } from "@/lib/quizLogic";

describe("face shape calculator", () => {
  test("long face with even widths → oblong or rectangle", () => {
    const r = calculateFaceShape({ forehead: 12, cheeks: 13, jawHalf: 10, length: 21, sharpJaw: false });
    expect(r[0].key).toBe("oblong");
  });
  test("short face with sharp, even jaw → square", () => {
    expect(calculateFaceShape({ forehead: 13.5, cheeks: 14, jawHalf: 11, length: 16, sharpJaw: true })[0].key).toBe("square");
  });
  test("short, soft face with cheeks widest → round", () => {
    expect(calculateFaceShape({ forehead: 12.5, cheeks: 14, jawHalf: 10, length: 16, sharpJaw: false })[0].key).toBe("round");
  });
  test("narrow forehead and jaw with wide cheekbones → diamond", () => {
    expect(calculateFaceShape({ forehead: 11, cheeks: 14, jawHalf: 9.5, length: 19, sharpJaw: false })[0].key).toBe("diamond");
  });
  test("wide forehead, narrow jaw → heart or inverted triangle", () => {
    expect(["heart", "inverted-triangle"]).toContain(calculateFaceShape({ forehead: 15, cheeks: 14, jawHalf: 9, length: 19, sharpJaw: false })[0].key);
  });
});

describe("kibbe", () => {
  test("all-yang answers → Dramatic family", () => {
    expect(kibbeFromTotals({ Y: 16, S: 3 })[0].key).toMatch(/dramatic/);
  });
  test("all-yin answers → Romantic family", () => {
    expect(kibbeFromTotals({ Y: -14, S: -2 })[0].key).toMatch(/romantic/);
  });
  test("broad, blunt answers → Natural family", () => {
    expect(kibbeFromTotals({ W: 12, S: 2 })[0].key).toMatch(/natural/);
  });
  test("balanced answers → Classic family", () => {
    expect(kibbeFromTotals({})[0].key).toMatch(/classic/);
  });
  test("compact, mixed answers → Gamine family", () => {
    expect(kibbeFromTotals({ G: 8, S: -4 })[0].key).toMatch(/gamine/);
  });
});

describe("seasonal color", () => {
  test("warm + light → Spring", () => expect(seasonFromTotals({ warm: 8, light: 6, clear: 3 })).toMatch(/spring/));
  test("cool + deep + clear → Winter", () => expect(seasonFromTotals({ cool: 7, deep: 6, clear: 5 })).toMatch(/winter/));
  test("cool + soft → Summer", () => expect(seasonFromTotals({ cool: 7, soft: 6, light: 3 })).toMatch(/summer/));
  test("warm + deep + soft → Autumn", () => expect(seasonFromTotals({ warm: 8, deep: 4, soft: 4 })).toMatch(/autumn/));
});

test("ranked percentages sum to 100", () => {
  expect(ranked({ a: 3, b: 1 }, ["a", "b", "c"]).reduce((s, x) => s + x.pct, 0)).toBeCloseTo(100);
});
