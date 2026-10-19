import { ogImage, OG_SIZE } from "@/lib/og";
import { FACE_SHAPES, faceShapeBySlug } from "@/lib/content/faceShapes";

export const alt = "Face shape diagram";
export const size = OG_SIZE;
export const contentType = "image/png";
export const generateStaticParams = () => FACE_SHAPES.map((s) => ({ shape: s.slug }));

export default async function Image({ params }: { params: Promise<{ shape: string }> }) {
  const s = faceShapeBySlug((await params).shape);
  return ogImage(`${s?.name ?? ""} Face Shape`, "Traits, hairstyles, glasses & celebrities", s?.slug);
}
