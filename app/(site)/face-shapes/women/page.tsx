import type { Metadata } from "next";
import GenderGuide from "@/components/GenderGuide";
import { GENDER_PAGES } from "@/lib/content/faceShapesHub";

const g = GENDER_PAGES.women;
export const metadata: Metadata = { title: { absolute: g.title }, description: g.description, alternates: { canonical: "/face-shapes/women/" }, openGraph: { title: g.title, url: "/face-shapes/women/" } };

export default function Page() {
  return <GenderGuide gender="women" />;
}
