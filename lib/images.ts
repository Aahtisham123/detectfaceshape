// Paths of the generated, compressed WebP images (built by `npm run images`).
import SIZES from "./image-sizes.json";

/** Intrinsic [width, height] of a generated image, so pages reserve the right space (no layout shift). */
export const sizeOf = (src: string) => {
  const s = (SIZES as Record<string, number[]>)[src] ?? [400, 400];
  return { width: s[0], height: s[1] };
};
export const IMG = {
  hero: "/images/hero/face-shape-detector-scan.webp",
  faceChart: "/images/face-shapes/face-shapes-chart.webp",
  faceShape: (slug: string) => `/images/face-shapes/${slug}-face-shape.webp`,
  faceThumb: (slug: string) => `/images/face-shapes/thumbs/${slug}.webp`,
  hubChart: (hub: string) => `/images/${hub}/${hub}-chart.webp`,
  type: (hub: string, slug: string) => `/images/${hub}/${slug}.webp`,
};

/** Hubs that have per-type illustrations. */
export const ILLUSTRATED_HUBS = ["eye-shapes", "nose-shapes", "lip-shapes", "head-shapes", "jawline-shapes"];

