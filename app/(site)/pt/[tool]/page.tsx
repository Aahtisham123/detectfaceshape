import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ToolPage from "@/components/ToolPage";
import { TRANSLATED_TOOL_SLUGS } from "@/lib/i18n/config";
import { toolFor } from "@/lib/i18n/server";
import { metaFor } from "@/lib/meta";

export const dynamicParams = false;
export const generateStaticParams = () => TRANSLATED_TOOL_SLUGS.map((tool) => ({ tool }));

export async function generateMetadata({ params }: { params: Promise<{ tool: string }> }): Promise<Metadata> {
  return metaFor(`/pt/${(await params).tool}/`);
}

export default async function Page({ params }: { params: Promise<{ tool: string }> }) {
  const { tool } = await params;
  if (!TRANSLATED_TOOL_SLUGS.includes(tool)) notFound();
  return <ToolPage tool={toolFor("pt", tool)} locale="pt" />;
}
