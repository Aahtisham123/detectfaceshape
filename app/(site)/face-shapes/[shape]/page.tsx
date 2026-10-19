import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { shapeImagePath } from "@/components/ShapeIllustration";
import { Breadcrumbs, Byline, FaqList, JsonLd, Markdown, RelatedTools } from "@/components/Page";
import { FACE_SHAPES, faceShapeBySlug } from "@/lib/content/faceShapes";
import { availableTopics, TOPIC_LABEL } from "@/lib/content/faceShapeTopics";
import { article, breadcrumbs, faqPage, graph } from "@/lib/schema";
import { aOrAn } from "@/lib/text";

export const dynamicParams = false;
export const generateStaticParams = () => FACE_SHAPES.map((s) => ({ shape: s.slug }));

export async function generateMetadata({ params }: { params: Promise<{ shape: string }> }): Promise<Metadata> {
  const s = faceShapeBySlug((await params).shape);
  if (!s) return {};
  const path = `/face-shapes/${s.slug}/`;
  return { title: { absolute: s.title }, description: s.description, alternates: { canonical: path }, openGraph: { title: s.title, description: s.description, url: path } };
}

export default async function ShapePage({ params }: { params: Promise<{ shape: string }> }) {
  const s = faceShapeBySlug((await params).shape);
  if (!s) notFound();
  const path = `/face-shapes/${s.slug}/`;
  const crumbs = [{ name: "Home", path: "/" }, { name: "Face Shapes", path: "/face-shapes/" }, { name: `${s.name} Face`, path }];
  const topics = availableTopics(s);
  return (
    <article className="wrap">
      <JsonLd data={graph(article({ title: s.title, description: s.description, path, published: "2026-10-19", image: shapeImagePath(s.slug) }), faqPage(s.faqs), breadcrumbs(crumbs))} />
      <Breadcrumbs items={crumbs} />
      <header className="page-head with-figure">
        <div>
          <h1>{s.name} Face Shape</h1>
          <p className="lead">{s.definition}</p>
          <Link className="btn primary" href="/">Check if you have {aOrAn(s.name.toLowerCase())} face</Link>
        </div>
        {/* A real image file (not inline SVG) so it can rank in image search. */}
        <img src={shapeImagePath(s.slug)} width={220} height={220} alt={`${s.name} face shape diagram showing forehead, cheekbone and jaw width lines`} className="shape-img" />
      </header>
      <nav className="subnav" aria-label={`${s.name} face guides`}>
        {topics.map((t) => <Link key={t} href={`${path}${t}/`}>{TOPIC_LABEL[t](s.name)}</Link>)}
      </nav>
      <div className="content">
        <Byline />
        <h2>{s.name} face shape measurements</h2>
        <table className="data-table">
          <tbody>{s.measurements.map((m) => <tr key={m.feature}><th>{m.feature}</th><td>{m.value}</td></tr>)}</tbody>
        </table>
        <h2>{s.name} face characteristics</h2>
        <ul>{s.traits.map((t) => <li key={t}>{t}</li>)}</ul>
        <h2>How to tell if you have {aOrAn(s.name.toLowerCase())} face</h2>
        <ul>{s.howToTell.map((t) => <li key={t}>{t}</li>)}</ul>
        <Markdown src={s.body} />

        <h2>Best hairstyles for {s.name.toLowerCase()} faces (women)</h2>
        <ul>{s.women.hairstyles.slice(0, 5).map((h) => <li key={h.name}><strong>{h.name}:</strong> {h.why}</li>)}</ul>
        {topics.includes("hairstyles-women") && <p><Link href={`${path}hairstyles-women/`}>See all hairstyles for women →</Link></p>}

        <h2>Best haircuts for {s.name.toLowerCase()} faces (men)</h2>
        <ul>{s.men.hairstyles.slice(0, 5).map((h) => <li key={h.name}><strong>{h.name}:</strong> {h.why}</li>)}</ul>
        {s.men.beards.length > 0 && (
          <>
            <h3>Beard styles</h3>
            <ul>{s.men.beards.map((b) => <li key={b.name}><strong>{b.name}:</strong> {b.why}</li>)}</ul>
          </>
        )}
        {topics.includes("hairstyles-men") && <p><Link href={`${path}hairstyles-men/`}>See all haircuts for men →</Link></p>}

        <h2>Best glasses for {s.name.toLowerCase()} faces</h2>
        <ul>{s.glasses.best.map((g) => <li key={g.name}><strong>{g.name}:</strong> {g.why}</li>)}</ul>
        <p><strong>Avoid:</strong> {s.glasses.avoid.join(" ")}</p>

        <h2>Makeup and contouring</h2>
        <p>{s.makeup}</p>

        {(s.women.celebrities.length > 0 || s.men.celebrities.length > 0) && (
          <>
            <h2>Celebrities with {s.name.toLowerCase()} faces</h2>
            <p>{[...s.women.celebrities, ...s.men.celebrities].slice(0, 8).join(", ")}.</p>
          </>
        )}

        <h2>{s.name} vs similar face shapes</h2>
        <ul>{s.confusedWith.map((c) => <li key={c.slug}><Link href={`/face-shapes/${c.slug}/`}>{faceShapeBySlug(c.slug)?.name}</Link>: {c.difference}</li>)}</ul>
        <FaqList faqs={s.faqs} />
      </div>
      <RelatedTools slugs={["face-shape-detector", "face-shape-quiz", "face-shape-calculator", "jawline-analyzer"]} />
    </article>
  );
}
