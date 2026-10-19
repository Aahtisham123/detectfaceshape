import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Authors", description: "The people who write and review DetectFaceShape.ai.", alternates: { canonical: "/authors/" } };

export default function Authors() {
  return (
    <div className="wrap">
      <header className="page-head"><h1>Authors</h1></header>
      <div className="card-grid">
        <Link href={`/authors/${SITE.author.slug}/`} className="card"><strong>{SITE.author.name}</strong><span>{SITE.author.role}</span></Link>
      </div>
    </div>
  );
}
