import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, JsonLd } from "@/components/Page";
import { POSTS } from "@/lib/content/blog";
import { breadcrumbs, graph, person } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.author.name}, ${SITE.author.role}`,
  description: SITE.author.bio,
  alternates: { canonical: `/authors/${SITE.author.slug}/` },
};

export default function Author() {
  const path = `/authors/${SITE.author.slug}/`;
  const crumbs = [{ name: "Home", path: "/" }, { name: "Authors", path: "/authors/" }, { name: SITE.author.name, path }];
  return (
    <div className="wrap">
      <JsonLd data={graph({ "@type": "ProfilePage", mainEntity: person() }, breadcrumbs(crumbs))} />
      <Breadcrumbs items={crumbs} />
      <header className="page-head">
        <h1>{SITE.author.name}</h1>
        <p className="lead">{SITE.author.role}, {SITE.name}</p>
      </header>
      <div className="content">
        <p>{SITE.author.bio}</p>
        <p>Read how our tools are built and tested on the <Link href="/how-it-works/">methodology page</Link>.</p>
        <h2>Articles</h2>
        <ul>{POSTS.map((p) => <li key={p.slug}><Link href={`/blog/${p.slug}/`}>{p.title}</Link></li>)}</ul>
      </div>
    </div>
  );
}
