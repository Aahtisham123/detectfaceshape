import SIZES from "./image-sizes.json";
import { FACE_SHAPES } from "./content/faceShapes";

export type Portrait = { src: string; alt: string; gender: "woman" | "man" };

/** Real example photos for a face shape, if any have been added (see assets/portraits/README.md). */
export function portraitsFor(shape: string): Portrait[] {
  const name = FACE_SHAPES.find((s) => s.slug === shape)?.name.toLowerCase() ?? shape;
  return (["woman", "man"] as const)
    .map((gender) => ({ gender, src: `/images/portraits/${shape}-${gender}.webp` }))
    .filter((p) => p.src in SIZES)
    .map((p) => ({ ...p, alt: `${p.gender === "woman" ? "Woman" : "Man"} with ${/^[aeiou]/.test(name) ? "an" : "a"} ${name} face shape` }));
}
