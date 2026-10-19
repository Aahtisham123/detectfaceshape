import type { Metadata } from "next";
import GenderGuide from "@/components/GenderGuide";
import { metaFor } from "@/lib/meta";

export const metadata: Metadata = metaFor("/face-shapes/men/", { type: "article" });

export default function Page() {
  return <GenderGuide gender="men" />;
}
