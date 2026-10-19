import type { Metadata } from "next";
import GenderGuide from "@/components/GenderGuide";
import { GENDER_PAGES } from "@/lib/content/faceShapesHub";

const g = GENDER_PAGES.men;
export const metadata: Metadata = { title: { absolute: g.title }, description: g.description, alternates: { canonical: "/face-shapes/men/" }, openGraph: { title: g.title, url: "/face-shapes/men/" } };

export default function Page() {
  return <GenderGuide gender="men" />;
}
