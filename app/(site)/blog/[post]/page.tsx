import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShapeIllustration from "@/components/ShapeIllustration";
import { Breadcrumbs, Byline, FaqList, JsonLd, Markdown, RelatedTools } from "@/components/Page";
import { POSTS, postBySlug } from "@/lib/content/blog";
import { article, breadcrumbs, faqPage, graph } from "@/lib/schema";

export const dynamicParams = false;
export const generateStaticParams = () => POSTS.map((p) => ({ post: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ post: string }> }): Promise<Metadata> {
  const p = postBySlug((await params).post);
  if (!p) return {};
  const path = `/blog/${p.slug}/`;
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: path },
    openGraph: { title: p.title, description: p.description, url: path, type: "article", publishedTime: p.published, authors: ["Ahtisham Alam"] },
  };
}

export default async function PostPage({ params }: { params: Promise<{ post: string }> }) {
  const p = postBySlug((await params).post);
  if (!p) notFound();
  const path = `/blog/${p.slug}/`;
  const crumbs = [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }, { name: p.title, path }];
  const more = POSTS.filter((x) => x.slug !== p.slug).slice(0, 4);
  return (
    <article className="wrap">
      <JsonLd data={graph(article({ title: p.title, description: p.description, path, published: p.published }), faqPage(p.faqs), breadcrumbs(crumbs))} />
      <Breadcrumbs items={crumbs} />
      <header className="page-head">
        <h1>{p.title}</h1>
        <Byline updated={p.published} />
      </header>
      <div className="content">
        <div className="answer"><Markdown src={p.summary} /></div>
        {p.shapes?.length ? (
          <div className="figure-row">
            {p.shapes.map((s) => (
              <figure key={s}>
                <ShapeIllustration shape={s} size={130} guides />
                <figcaption><Link href={`/face-shapes/${s}/`}>{s.replace("-", " ")} face shape</Link></figcaption>
              </figure>
            ))}
          </div>
        ) : null}
        <Markdown src={p.body} />
        <FaqList faqs={p.faqs} />
        <h2>Keep reading</h2>
        <ul>{more.map((m) => <li key={m.slug}><Link href={`/blog/${m.slug}/`}>{m.title}</Link></li>)}</ul>
      </div>
      <RelatedTools slugs={p.related} />
    </article>
  );
}
