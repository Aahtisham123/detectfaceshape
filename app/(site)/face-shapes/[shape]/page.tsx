import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ShapePage from "@/components/pages/ShapePage";
import { FACE_SHAPES, faceShapeBySlug } from "@/lib/content/faceShapes";
import { metaFor } from "@/lib/meta";

export const dynamicParams = false;
export const generateStaticParams = () => FACE_SHAPES.map((s) => ({ shape: s.slug }));

export async function generateMetadata({ params }: { params: Promise<{ shape: string }> }): Promise<Metadata> {
  return metaFor(`/face-shapes/${(await params).shape}/`, { type: "article" });
}

export default async function Page({ params }: { params: Promise<{ shape: string }> }) {
  const { shape } = await params;
  if (!faceShapeBySlug(shape)) notFound();
  return <ShapePage slug={shape} />;
}
