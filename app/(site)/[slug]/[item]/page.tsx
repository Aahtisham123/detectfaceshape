import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Byline, FaqList, JsonLd, Markdown, RelatedTools } from "@/components/Page";
import { hubBySlug, TYPE_HUBS } from "@/lib/content/typeHubs";
import { toolBySlug } from "@/lib/content/tools";
import { article, breadcrumbs, faqPage, graph } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return TYPE_HUBS.flatMap((h) => h.items.map((it) => ({ slug: h.slug, item: it.slug })));
}

const find = (slug: string, item: string) => {
  const hub = hubBySlug(slug);
  const it = hub?.items.find((i) => i.slug === item);
  return hub && it ? { hub, it } : null;
};

const titleFor = (name: string, hubSingular: string) => `${name}: Traits, How to Tell & Examples | ${hubSingular.replace(/^\w/, (c) => c.toUpperCase())} Guide`;

export async function generateMetadata({ params }: { params: Promise<{ slug: string; item: string }> }): Promise<Metadata> {
  const { slug, item } = await params;
  const f = find(slug, item);
  if (!f) return {};
  const path = `/${slug}/${item}/`;
  const title = titleFor(f.it.name, f.hub.singular);
  return { title: { absolute: title }, description: f.it.definition.slice(0, 158), alternates: { canonical: path }, openGraph: { title, url: path } };
}

export default async function TypePage({ params }: { params: Promise<{ slug: string; item: string }> }) {
  const { slug, item } = await params;
  const f = find(slug, item);
  if (!f) notFound();
  const { hub, it } = f;
  const path = `/${hub.slug}/${it.slug}/`;
  const crumbs = [{ name: "Home", path: "/" }, { name: hub.name, path: `/${hub.slug}/` }, { name: it.name, path }];
  const tool = hub.toolSlug ? toolBySlug(hub.toolSlug) : undefined;
  const others = hub.items.filter((o) => o.slug !== it.slug);
  return (
    <article className="wrap">
      <JsonLd data={graph(article({ title: titleFor(it.name, hub.singular), description: it.definition, path, published: "2026-10-19" }), faqPage(it.faqs), breadcrumbs(crumbs))} />
      <Breadcrumbs items={crumbs} />
      <header className="page-head">
        <h1>{it.name}</h1>
        <p className="lead">{it.definition}</p>
        {tool && <Link className="btn primary" href={tool.path}>Check yours with the {tool.name.toLowerCase()}</Link>}
      </header>
      <div className="content">
        <Byline />
        <h2>Key traits</h2>
        <ul>{it.traits.map((t) => <li key={t}>{t}</li>)}</ul>
        <Markdown src={it.body} />
        {it.celebrities?.length ? (
          <>
            <h2>Celebrities often described as having {it.name.toLowerCase()}</h2>
            <p>{it.celebrities.join(", ")}.</p>
            <p className="fine">Based on how these people are commonly described in style and beauty media; lighting and angles vary between photos.</p>
          </>
        ) : null}
        <FaqList faqs={it.faqs} />
        <h2>Other {hub.name.toLowerCase()}</h2>
        <ul className="inline-list">{others.map((o) => <li key={o.slug}><Link href={`/${hub.slug}/${o.slug}/`}>{o.name}</Link></li>)}</ul>
      </div>
      {tool && <RelatedTools slugs={[tool.slug, ...tool.related.slice(0, 2)]} />}
    </article>
  );
}
