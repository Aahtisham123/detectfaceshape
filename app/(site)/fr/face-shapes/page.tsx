import type { Metadata } from "next";
import FaceShapesHub from "@/components/pages/FaceShapesHub";
import { metaFor } from "@/lib/meta";

export const metadata: Metadata = metaFor("/fr/face-shapes/", { type: "article" });

export default function Page() {
  return <FaceShapesHub locale="fr" />;
}
