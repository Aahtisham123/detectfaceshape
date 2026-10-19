import type { Metadata } from "next";
import Link from "next/link";
import ToolPage from "@/components/ToolPage";
import ShapeIllustration from "@/components/ShapeIllustration";
import { toolBySlug, TOOLS } from "@/lib/content/tools";
import { FACE_SHAPES } from "@/lib/content/faceShapes";

const tool = toolBySlug("face-shape-detector")!;

export const metadata: Metadata = {
  title: { absolute: tool.title },
  description: tool.description,
  alternates: { canonical: "/" },
  openGraph: { title: tool.title, description: tool.description, url: "/" },
};

export default function Home() {
  return (
    <ToolPage tool={tool}>
      <section className="wrap-inner">
        <h2 className="section-title">The 10 face shapes</h2>
        <div className="shape-grid">
          {FACE_SHAPES.map((s) => (
            <Link key={s.slug} href={`/face-shapes/${s.slug}/`} className="shape-card">
              <ShapeIllustration shape={s.slug} size={96} />
              <span>{s.name}</span>
            </Link>
          ))}
        </div>
        <h2 className="section-title">More free face analysis tools</h2>
        <div className="card-grid">
          {TOOLS.filter((t) => t.path !== "/").map((t) => (
            <Link key={t.slug} href={t.path} className="card">
              <strong>{t.name}</strong>
              <span>{t.short}</span>
            </Link>
          ))}
        </div>
      </section>
    </ToolPage>
  );
}
