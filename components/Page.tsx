import Link from "next/link";
import type { ReactNode } from "react";
import type { Faq } from "@/lib/content/types";
import { md } from "@/lib/markdown";
import { SITE } from "@/lib/site";
import { TOOLS } from "@/lib/content/tools";

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="crumbs">
      <ol>
        {items.map((it, i) => (
          <li key={it.path}>{i < items.length - 1 ? <Link href={it.path}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}</li>
        ))}
      </ol>
    </nav>
  );
}

export function Markdown({ src, className = "prose" }: { src: string; className?: string }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: md(src) }} />;
}

export function FaqList({ faqs, title = "Frequently asked questions" }: { faqs: Faq[]; title?: string }) {
  if (!faqs.length) return null;
  return (
    <section className="faq" aria-labelledby="faq">
      <h2 id="faq">{title}</h2>
      {faqs.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </section>
  );
}

export function Byline({ updated = SITE.updated, reviewed }: { updated?: string; reviewed?: boolean }) {
  return (
    <p className="byline">
      By <Link href={`/authors/${SITE.author.slug}/`} rel="author">{SITE.author.name}</Link> · Updated{" "}
      <time dateTime={updated}>{new Date(updated).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
      {reviewed ? " · Methodology on our how-it-works page" : ""}
    </p>
  );
}

export function RelatedTools({ slugs, title = "Related tools" }: { slugs: string[]; title?: string }) {
  const tools = slugs.map((s) => TOOLS.find((t) => t.slug === s)).filter(Boolean);
  if (!tools.length) return null;
  return (
    <section className="related">
      <h2>{title}</h2>
      <div className="card-grid">
        {tools.map((t) => (
          <Link key={t!.slug} href={t!.path} className="card">
            <strong>{t!.name}</strong>
            <span>{t!.short}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function Section({ children }: { children: ReactNode }) {
  return <section className="section">{children}</section>;
}
