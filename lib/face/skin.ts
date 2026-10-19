import { LM } from "./landmarks";

const SAMPLE_POINTS = [50, 280, 151, 205, 425]; // cheeks, forehead, lower cheeks

/** Average CIELAB hue angle (degrees) of skin patches around cheek and forehead landmarks. ~45 = rosy, ~65 = golden. */
export function sampleSkinHue(canvas: HTMLCanvasElement, raw: { x: number; y: number }[]) {
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
  const iod = Math.hypot(
    (raw[LM.irisL].x - raw[LM.irisR].x) * canvas.width,
    (raw[LM.irisL].y - raw[LM.irisR].y) * canvas.height,
  );
  const r = Math.max(3, Math.round(iod * 0.06));
  let a = 0;
  let b = 0;
  let n = 0;
  for (const i of SAMPLE_POINTS) {
    const x = Math.round(raw[i].x * canvas.width) - r;
    const y = Math.round(raw[i].y * canvas.height) - r;
    const data = ctx.getImageData(x, y, r * 2, r * 2).data;
    for (let k = 0; k < data.length; k += 4) {
      const lab = rgbToLab(data[k], data[k + 1], data[k + 2]);
      if (lab[0] < 20 || lab[0] > 95) continue; // skip shadows and specular highlights
      a += lab[1];
      b += lab[2];
      n++;
    }
  }
  if (!n) return 55;
  return (Math.atan2(b / n, a / n) * 180) / Math.PI;
}

export function rgbToLab(r: number, g: number, b: number): [number, number, number] {
  const lin = (c: number) => {
    const v = c / 255;
    return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  const [R, G, B] = [lin(r), lin(g), lin(b)];
  const X = (R * 0.4124 + G * 0.3576 + B * 0.1805) / 0.95047;
  const Y = R * 0.2126 + G * 0.7152 + B * 0.0722;
  const Z = (R * 0.0193 + G * 0.1192 + B * 0.9505) / 1.08883;
  const f = (t: number) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  return [116 * f(Y) - 16, 500 * (f(X) - f(Y)), 200 * (f(Y) - f(Z))];
}
