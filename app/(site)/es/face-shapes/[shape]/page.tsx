import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ShapePage from "@/components/pages/ShapePage";
import { TRANSLATED_SHAPE_SLUGS } from "@/lib/i18n/config";
import { metaFor } from "@/lib/meta";

export const dynamicParams = false;
export const generateStaticParams = () => TRANSLATED_SHAPE_SLUGS.map((shape) => ({ shape }));

export async function generateMetadata({ params }: { params: Promise<{ shape: string }> }): Promise<Metadata> {
  return metaFor(`/es/face-shapes/${(await params).shape}/`, { type: "article" });
}

export default async function Page({ params }: { params: Promise<{ shape: string }> }) {
  const { shape } = await params;
  if (!TRANSLATED_SHAPE_SLUGS.includes(shape)) notFound();
  return <ShapePage slug={shape} locale="es" />;
}
