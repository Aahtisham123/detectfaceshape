import { sitemap } from "@/lib/sitemaps";

export const dynamic = "force-static";
export const GET = () => sitemap("post");
