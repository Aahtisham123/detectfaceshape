import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ToolPage from "@/components/ToolPage";
import { Breadcrumbs, Byline, FaqList, JsonLd, Markdown, RelatedTools } from "@/components/Page";
import { ROUTED_TOOLS, toolBySlug } from "@/lib/content/tools";
import { hubBySlug, TYPE_HUBS } from "@/lib/content/typeHubs";
import { article, breadcrumbs, faqPage, graph } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return [...ROUTED_TOOLS.map((t) => ({ slug: t.slug })), ...TYPE_HUBS.map((h) => ({ slug: h.slug }))];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = toolBySlug(slug) ?? hubBySlug(slug);
  if (!page) return {};
  const path = `/${slug}/`;
  return { title: { absolute: page.title }, description: page.description, alternates: { canonical: path }, openGraph: { title: page.title, description: page.description, url: path } };
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = toolBySlug(slug);
  if (tool) return <ToolPage tool={tool} />;
  const hub = hubBySlug(slug);
  if (!hub) notFound();

  const path = `/${hub.slug}/`;
  const crumbs = [{ name: "Home", path: "/" }, { name: hub.name, path }];
  const tool2 = hub.toolSlug ? toolBySlug(hub.toolSlug) : undefined;
  return (
    <article className="wrap">
      <JsonLd data={graph(article({ title: hub.title, description: hub.description, path, published: "2026-10-19" }), faqPage(hub.faqs), breadcrumbs(crumbs))} />
      <Breadcrumbs items={crumbs} />
      <header className="page-head">
        <h1>{hub.title.split(":")[0]}</h1>
        <p className="lead">{hub.intro}</p>
        {tool2 && <Link className="btn primary" href={tool2.path}>Try the {tool2.name.toLowerCase()}</Link>}
      </header>
      <section>
        <h2>All {hub.name.toLowerCase()} at a glance</h2>
        <div className="type-grid">
          {hub.items.map((it) => (
            <Link key={it.slug} href={`/${hub.slug}/${it.slug}/`} className="type-card">
              <strong>{it.name}</strong>
              <span>{it.definition.split(". ")[0]}.</span>
            </Link>
          ))}
        </div>
      </section>
      <div className="content">
        <Byline />
        <Markdown src={hub.body} />
        {hub.items.map((it) => (
          <section key={it.slug} className="type-section">
            <h2><Link href={`/${hub.slug}/${it.slug}/`}>{it.name}</Link></h2>
            <p>{it.definition}</p>
            <ul>{it.traits.map((t) => <li key={t}>{t}</li>)}</ul>
          </section>
        ))}
        <FaqList faqs={hub.faqs} />
      </div>
      {tool2 && <RelatedTools slugs={[tool2.slug, ...tool2.related.slice(0, 3)]} />}
      <p className="wrap fine">Written by {SITE.author.name}.</p>
    </article>
  );
}
