import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ToolPage from "@/components/ToolPage";
import { Breadcrumbs, Byline, FaqList, Figure, Pic, JsonLd, Markdown, RelatedTools, readingTime } from "@/components/Page";
import Toc from "@/components/ui/Toc";
import { Icon } from "@/components/icons";
import { ROUTED_TOOLS, toolBySlug } from "@/lib/content/tools";
import { hubBySlug, TYPE_HUBS } from "@/lib/content/typeHubs";
import { IMG, ILLUSTRATED_HUBS } from "@/lib/images";
import { metaFor } from "@/lib/meta";
import { article, breadcrumbs, faqPage, graph } from "@/lib/schema";
import { seoFor } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return [...ROUTED_TOOLS.map((t) => ({ slug: t.slug })), ...TYPE_HUBS.map((h) => ({ slug: h.slug }))];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return metaFor(`/${slug}/`, { type: toolBySlug(slug) ? "website" : "article" });
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = toolBySlug(slug);
  if (tool) return <ToolPage tool={tool} />;
  const hub = hubBySlug(slug);
  if (!hub) notFound();

  const path = `/${hub.slug}/`;
  const seo = seoFor(path);
  const crumbs = [{ name: "Home", path: "/" }, { name: hub.name, path }];
  const tool2 = hub.toolSlug ? toolBySlug(hub.toolSlug) : undefined;
  const illustrated = ILLUSTRATED_HUBS.includes(hub.slug);
  return (
    <article className="wrap">
      <JsonLd data={graph(article({ title: seo.title, description: seo.description, path, published: "2026-10-19", image: seo.image }), faqPage(hub.faqs), breadcrumbs(crumbs))} />
      <Breadcrumbs items={crumbs} />
      <header className="page-hero">
        <div className="page-hero-text">
          <span className="hero-badge"><Icon name="BookOpen" size={18} /> Guide · {hub.items.length} types</span>
          <h1>{hub.title.split(":")[0]}</h1>
          <p className="lead">{hub.intro}</p>
          {tool2 && <Link className="btn primary" href={tool2.path}><Icon name="ScanFace" size={18} /> Find yours with the {tool2.name.toLowerCase()}</Link>}
        </div>
      </header>
      {illustrated && seo.image && <Figure src={seo.image} alt={seo.imageAlt!} caption={`${hub.name} chart`} className="chart-figure" />}
      <section data-reveal>
        <h2 className="section-title">All {hub.name.toLowerCase()} at a glance</h2>
        <div className="type-grid">
          {hub.items.map((it) => (
            <Link key={it.slug} href={`/${hub.slug}/${it.slug}/`} className="type-card">
              {illustrated && <Pic src={IMG.type(hub.slug, it.slug)} alt={`Illustration of ${it.name.toLowerCase()}`} />}
              <strong>{it.name}</strong>
              <span>{it.definition.split(". ")[0]}.</span>
              <span className="card-go">Read more <Icon name="ArrowRight" size={15} /></span>
            </Link>
          ))}
        </div>
      </section>
      <div className="article-grid">
        <div className="content">
          <Byline readMinutes={readingTime(hub.body, ...hub.items.map((i) => i.definition))} />
          <Markdown src={hub.body} />
          {hub.items.map((it) => (
            <section key={it.slug} className="type-section">
              <h2 id={it.slug}><Link href={`/${hub.slug}/${it.slug}/`}>{it.name}</Link></h2>
              <p>{it.definition}</p>
              <ul>{it.traits.map((t) => <li key={t}>{t}</li>)}</ul>
            </section>
          ))}
          <FaqList faqs={hub.faqs} />
        </div>
        <aside className="article-aside"><Toc /></aside>
      </div>
      {tool2 && <RelatedTools slugs={[tool2.slug, ...tool2.related.slice(0, 3)]} />}
    </article>
  );
}
