import { allPages } from "@/lib/seo";

export const dynamic = "force-static";

/** Small static index the client-side search loads on first open. */
export function GET() {
  const index = allPages().map((p) => ({ t: p.title.split(" | ")[0], p: p.path, d: p.description, s: p.section, l: p.locale ?? "en" }));
  return Response.json(index, { headers: { "Cache-Control": "public, max-age=3600" } });
}
