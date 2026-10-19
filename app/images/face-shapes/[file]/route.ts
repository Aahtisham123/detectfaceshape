import { FACE_SHAPES } from "@/lib/content/faceShapes";
import { shapeSvgMarkup } from "@/components/ShapeIllustration";

export const dynamic = "force-static";
export const dynamicParams = false;
export const generateStaticParams = () => FACE_SHAPES.map((s) => ({ file: `${s.slug}-face-shape.svg` }));

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const slug = (await params).file.replace(/-face-shape\.svg$/, "");
  const shape = FACE_SHAPES.find((s) => s.slug === slug);
  if (!shape) return new Response("Not found", { status: 404 });
  return new Response(shapeSvgMarkup(slug, { label: `${shape.name} face shape` }), {
    headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=86400" },
  });
}
