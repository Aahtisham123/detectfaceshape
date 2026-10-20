import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, JsonLd, Pic } from "@/components/Page";
import { Icon } from "@/components/icons";
import { POSTS } from "@/lib/content/blog";
import { IMG } from "@/lib/images";
import { metaFor } from "@/lib/meta";
import { breadcrumbs, graph } from "@/lib/schema";
import { seoFor } from "@/lib/seo";
import { absUrl } from "@/lib/site";

export const metadata: Metadata = metaFor("/blog/");

export default function Blog() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }];
  return (
    <div className="wrap">
      <JsonLd data={graph(breadcrumbs(crumbs), { "@type": "Blog", name: "Face Shape Detector guides", url: absUrl("/blog/") })} />
      <Breadcrumbs items={crumbs} />
      <header className="page-hero">
        <div className="page-hero-text">
          <span className="hero-badge"><Icon name="FileText" size={18} /> {POSTS.length} guides</span>
          <h1>Face Shape &amp; Style Guides</h1>
          <p className="lead">Plain-English guides to face shapes, features and the haircuts, glasses and styles that suit them.</p>
        </div>
      </header>
      <div className="post-grid" data-reveal>
        {POSTS.map((p) => {
          const seo = seoFor(`/blog/${p.slug}/`);
          return (
            <Link key={p.slug} href={`/blog/${p.slug}/`} className="post-card">
              <Pic src={seo.image ?? IMG.faceChart} alt={seo.imageAlt ?? "Chart of the 10 face shapes"} />
              <strong>{p.title}</strong>
              <span>{seo.description}</span>
              <span className="card-go">Read guide <Icon name="ArrowRight" size={15} /></span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
