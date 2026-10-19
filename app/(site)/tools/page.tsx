import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, JsonLd } from "@/components/Page";
import { TOOLS, type ToolCategory } from "@/lib/content/tools";
import { breadcrumbs, graph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Free AI Face Analysis Tools",
  description: "Every free face analysis tool on DetectFaceShape.ai: face shape, eye, nose and lip shape, symmetry, golden ratio, undertone, color analysis and more.",
  alternates: { canonical: "/tools/" },
};

const GROUPS: { key: ToolCategory; title: string }[] = [
  { key: "face", title: "Face shape" },
  { key: "features", title: "Facial features" },
  { key: "color", title: "Color & skin" },
  { key: "beauty", title: "Body & style" },
  { key: "fun", title: "Proportions & just for fun" },
];

export default function ToolsIndex() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Tools", path: "/tools/" }];
  return (
    <div className="wrap">
      <JsonLd data={graph(breadcrumbs(crumbs))} />
      <Breadcrumbs items={crumbs} />
      <header className="page-head">
        <h1>Free face analysis tools</h1>
        <p className="lead">Every tool runs in your browser. Photos are never uploaded.</p>
      </header>
      {GROUPS.map((g) => (
        <section key={g.key}>
          <h2>{g.title}</h2>
          <div className="card-grid">
            {TOOLS.filter((t) => t.category === g.key).map((t) => (
              <Link key={t.slug} href={t.path} className="card"><strong>{t.name}</strong><span>{t.short}</span></Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
