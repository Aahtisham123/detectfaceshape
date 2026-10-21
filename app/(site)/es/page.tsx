import type { Metadata } from "next";
import Home from "@/components/pages/Home";
import { metaFor } from "@/lib/meta";

export const metadata: Metadata = metaFor("/es/");

export default function Page() {
  return <Home locale="es" />;
}
