import type { Metadata } from "next";
import FaceShapesHub from "@/components/pages/FaceShapesHub";
import { metaFor } from "@/lib/meta";

export const metadata: Metadata = metaFor("/es/face-shapes/", { type: "article" });

export default function Page() {
  return <FaceShapesHub locale="es" />;
}
