import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, JsonLd } from "@/components/Page";
import { POSTS } from "@/lib/content/blog";
import { breadcrumbs, graph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Face Shape, Hairstyle & Facial Feature Guides",
  description: "Guides to face shapes, hairstyles, glasses, nose, eye and lip shapes, and how facial features change.",
  alternates: { canonical: "/blog/" },
};

export default function Blog() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }];
  return (
    <div className="wrap">
      <JsonLd data={graph(breadcrumbs(crumbs))} />
      <Breadcrumbs items={crumbs} />
      <header className="page-head">
        <h1>Guides</h1>
        <p className="lead">Plain-English guides to face shapes, features and the styles that suit them.</p>
      </header>
      <div className="post-list">
        {POSTS.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}/`} className="post-card">
            <strong>{p.title}</strong>
            <span>{p.description}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
