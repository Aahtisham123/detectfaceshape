import type { Metadata } from "next";
import { Breadcrumbs, JsonLd, ToolCard } from "@/components/Page";
import { Icon } from "@/components/icons";
import { TOOLS, type ToolCategory } from "@/lib/content/tools";
import { metaFor } from "@/lib/meta";
import { breadcrumbs, graph } from "@/lib/schema";
import { absUrl } from "@/lib/site";

export const metadata: Metadata = metaFor("/tools/");

const GROUPS: { key: ToolCategory; title: string }[] = [
  { key: "face", title: "Face shape" },
  { key: "features", title: "Facial features" },
  { key: "color", title: "Color & skin" },
  { key: "beauty", title: "Body & style" },
  { key: "fun", title: "Proportions & just for fun" },
];

export default function ToolsIndex() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Tools", path: "/tools/" }];
  const list = { "@type": "ItemList", itemListElement: TOOLS.map((t, i) => ({ "@type": "ListItem", position: i + 1, url: absUrl(t.path), name: t.name })) };
  return (
    <div className="wrap">
      <JsonLd data={graph(breadcrumbs(crumbs), list)} />
      <Breadcrumbs items={crumbs} />
      <header className="page-hero">
        <div className="page-hero-text">
          <span className="hero-badge"><Icon name="Zap" size={18} /> {TOOLS.length} free tools</span>
          <h1>Free AI Face Analysis Tools</h1>
          <p className="lead">Every tool runs in your browser. Photos are never uploaded, and there&apos;s nothing to sign up for.</p>
        </div>
      </header>
      {GROUPS.map((g) => (
        <section key={g.key} data-reveal>
          <h2 className="section-title">{g.title}</h2>
          <div className="card-grid">
            {TOOLS.filter((t) => t.category === g.key).map((t) => <ToolCard key={t.slug} name={t.name} short={t.short} path={t.path} />)}
          </div>
        </section>
      ))}
    </div>
  );
}
