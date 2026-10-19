import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Byline, FaqList, Figure, Pic, JsonLd, KeyTakeaways, Markdown, RelatedTools } from "@/components/Page";
import { Icon } from "@/components/icons";
import { hubBySlug, TYPE_HUBS } from "@/lib/content/typeHubs";
import { toolBySlug } from "@/lib/content/tools";
import { IMG, ILLUSTRATED_HUBS } from "@/lib/images";
import { metaFor } from "@/lib/meta";
import { article, breadcrumbs, faqPage, graph } from "@/lib/schema";
import { seoFor } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return TYPE_HUBS.flatMap((h) => h.items.map((it) => ({ slug: h.slug, item: it.slug })));
}

const find = (slug: string, item: string) => {
  const hub = hubBySlug(slug);
  const it = hub?.items.find((i) => i.slug === item);
  return hub && it ? { hub, it } : null;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string; item: string }> }): Promise<Metadata> {
  const { slug, item } = await params;
  return metaFor(`/${slug}/${item}/`, { type: "article" });
}

export default async function TypePage({ params }: { params: Promise<{ slug: string; item: string }> }) {
  const { slug, item } = await params;
  const f = find(slug, item);
  if (!f) notFound();
  const { hub, it } = f;
  const path = `/${hub.slug}/${it.slug}/`;
  const seo = seoFor(path);
  const crumbs = [{ name: "Home", path: "/" }, { name: hub.name, path: `/${hub.slug}/` }, { name: it.name, path }];
  const tool = hub.toolSlug ? toolBySlug(hub.toolSlug) : undefined;
  const others = hub.items.filter((o) => o.slug !== it.slug);
  const illustrated = ILLUSTRATED_HUBS.includes(hub.slug);
  return (
    <article className="wrap">
      <JsonLd data={graph(article({ title: seo.title, description: seo.description, path, published: "2026-10-19", image: seo.image }), faqPage(it.faqs), breadcrumbs(crumbs))} />
      <Breadcrumbs items={crumbs} />
      <header className="page-hero">
        <div className="page-hero-text">
          <span className="hero-badge"><Icon name="BookOpen" size={18} /> {hub.name}</span>
          <h1>{it.name}</h1>
          <p className="lead">{it.definition}</p>
          {tool && <Link className="btn primary" href={tool.path}><Icon name="ScanFace" size={18} /> Check yours with the {tool.name.toLowerCase()}</Link>}
        </div>
        {illustrated && seo.image && <Figure src={seo.image} alt={seo.imageAlt!} priority className="hero-figure small" />}
      </header>
      <div className="content">
        <Byline />
        <KeyTakeaways items={it.traits} />
        <Markdown src={it.body} />
        {it.celebrities?.length ? (
          <>
            <h2>Celebrities often described as having {it.name.toLowerCase()}</h2>
            <ul className="pill-list">{it.celebrities.map((c) => <li key={c}><Icon name="Star" size={14} /> {c}</li>)}</ul>
            <p className="fine">Based on how these people are commonly described in style and beauty media; lighting and angles vary between photos.</p>
          </>
        ) : null}
        <FaqList faqs={it.faqs} />
        <h2>Other {hub.name.toLowerCase()}</h2>
        <div className="mini-grid">
          {others.map((o) => (
            <Link key={o.slug} href={`/${hub.slug}/${o.slug}/`} className="mini-card">
              {illustrated && <Pic src={IMG.type(hub.slug, o.slug)} alt={`Illustration of ${o.name.toLowerCase()}`} />}
              <span>{o.name}</span>
            </Link>
          ))}
        </div>
      </div>
      {tool && <RelatedTools slugs={[tool.slug, ...tool.related.slice(0, 2)]} />}
    </article>
  );
}
