import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { metaFor } from "@/lib/meta";
import { Breadcrumbs, JsonLd } from "@/components/Page";
import { breadcrumbs, graph, person } from "@/lib/schema";

export const metadata: Metadata = metaFor("/authors/");

export default function Authors() {
  return (
    <div className="wrap">
      <JsonLd data={graph(breadcrumbs([{ name: "Home", path: "/" }, { name: "Authors", path: "/authors/" }]), { "@type": "CollectionPage", name: "Authors", mainEntity: person() })} />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Authors", path: "/authors/" }]} />
      <header className="page-hero"><div className="page-hero-text"><h1>Authors</h1></div></header>
      <div className="card-grid">
        <Link href={`/authors/${SITE.author.slug}/`} className="card"><strong>{SITE.author.name}</strong><span>{SITE.author.role}</span></Link>
      </div>
    </div>
  );
}
