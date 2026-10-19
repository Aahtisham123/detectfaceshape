import { ogImage, OG_SIZE } from "@/lib/og";
import { ROUTED_TOOLS, toolBySlug } from "@/lib/content/tools";
import { hubBySlug, TYPE_HUBS } from "@/lib/content/typeHubs";

export const alt = "DetectFaceShape.ai";
export const size = OG_SIZE;
export const contentType = "image/png";
export const generateStaticParams = () => [...ROUTED_TOOLS.map((t) => ({ slug: t.slug })), ...TYPE_HUBS.map((h) => ({ slug: h.slug }))];

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = toolBySlug(slug);
  if (t) return ogImage(t.name, t.usesCamera ? "Free AI tool. Your photo never leaves your device." : t.short);
  const h = hubBySlug(slug);
  return ogImage(h?.name ?? "DetectFaceShape.ai", h ? `All ${h.items.length} types explained` : "");
}
