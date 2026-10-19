import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Byline, FaqList, Figure, JsonLd, Markdown, RelatedTools, Testimonials, readingTime } from "@/components/Page";
import Toc from "@/components/ui/Toc";
import { Icon } from "@/components/icons";
import { IMG } from "@/lib/images";
import { metaFor } from "@/lib/meta";
import { seoFor } from "@/lib/seo";
import { POSTS, postBySlug } from "@/lib/content/blog";
import { article, breadcrumbs, faqPage, graph } from "@/lib/schema";

export const dynamicParams = false;
export const generateStaticParams = () => POSTS.map((p) => ({ post: p.slug }));

export async function generateMetadata({ params }: { params: Promise<{ post: string }> }): Promise<Metadata> {
  const p = postBySlug((await params).post);
  return metaFor(`/blog/${(await params).post}/`, { type: "article", published: p?.published });
}

export default async function PostPage({ params }: { params: Promise<{ post: string }> }) {
  const p = postBySlug((await params).post);
  if (!p) notFound();
  const path = `/blog/${p.slug}/`;
  const crumbs = [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }, { name: p.title, path }];
  const seo = seoFor(path);
  const more = POSTS.filter((x) => x.slug !== p.slug).slice(0, 4);
  return (
    <article className="wrap">
      <JsonLd data={graph(article({ title: seo.title, description: seo.description, path, published: p.published, image: seo.image }), faqPage(p.faqs), breadcrumbs(crumbs))} />
      <Breadcrumbs items={crumbs} />
      <header className="page-hero">
        <div className="page-hero-text">
          <span className="hero-badge"><Icon name="FileText" size={18} /> Guide</span>
          <h1>{p.title}</h1>
          <Byline updated={p.published} readMinutes={readingTime(p.summary, p.body)} />
        </div>
      </header>
      <div className="article-grid">
      <div className="content">
        <div className="answer"><Markdown src={p.summary} /></div>
        {p.shapes?.length ? (
          <div className="figure-row">
            {p.shapes.map((sh) => (
              <Figure key={sh} src={IMG.faceShape(sh)} alt={`${sh.replace("-", " ")} face shape diagram with width guides`} caption={<Link href={`/face-shapes/${sh}/`}>{sh.replace("-", " ")} face shape</Link>} />
            ))}
          </div>
        ) : null}
        <Markdown src={p.body} />
        <FaqList faqs={p.faqs} />
        <h2>Keep reading</h2>
        <ul className="arrow-list">{more.map((m) => <li key={m.slug}><Link href={`/blog/${m.slug}/`}>{m.title}</Link></li>)}</ul>
      </div>
      <aside className="article-aside"><Toc /></aside>
      </div>
      <Testimonials />
      <RelatedTools slugs={p.related} />
    </article>
  );
}
