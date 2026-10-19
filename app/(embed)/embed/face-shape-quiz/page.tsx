import type { Metadata } from "next";
import ToolWidget from "@/components/tools/ToolWidget";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Face Shape Quiz (embed)",
  robots: { index: false, follow: true },
  alternates: { canonical: "/face-shape-quiz/" },
};

export default function EmbedQuiz() {
  return (
    <>
      <ToolWidget slug="face-shape-quiz" />
      <p className="embed-credit">
        Face shape quiz by{" "}
        <a href={`${SITE.url}/?utm_source=embed&utm_medium=widget`} target="_blank" rel="noopener">
          Face Shape Detector: free AI face shape tool
        </a>
      </p>
    </>
  );
}
