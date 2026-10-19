import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Byline, FaqList, Figure, JsonLd, KeyTakeaways, Markdown, Pic, RelatedTools, readingTime } from "@/components/Page";
import Toc from "@/components/ui/Toc";
import { Icon } from "@/components/icons";
import { FACE_SHAPES, faceShapeBySlug } from "@/lib/content/faceShapes";
import { availableTopics, TOPIC_LABEL } from "@/lib/content/faceShapeTopics";
import { IMG } from "@/lib/images";
import { metaFor } from "@/lib/meta";
import { article, breadcrumbs, faqPage, graph } from "@/lib/schema";
import { seoFor } from "@/lib/seo";
import { aOrAn } from "@/lib/text";

export const dynamicParams = false;
export const generateStaticParams = () => FACE_SHAPES.map((s) => ({ shape: s.slug }));

export async function generateMetadata({ params }: { params: Promise<{ shape: string }> }): Promise<Metadata> {
  return metaFor(`/face-shapes/${(await params).shape}/`, { type: "article" });
}

const TOPIC_ICON = { "hairstyles-women": "Scissors", "hairstyles-men": "Scissors", celebrities: "Star", glasses: "Glasses" } as const;

export default async function ShapePage({ params }: { params: Promise<{ shape: string }> }) {
  const s = faceShapeBySlug((await params).shape);
  if (!s) notFound();
  const path = `/face-shapes/${s.slug}/`;
  const seo = seoFor(path);
  const crumbs = [{ name: "Home", path: "/" }, { name: "Face Shapes", path: "/face-shapes/" }, { name: `${s.name} Face`, path }];
  const topics = availableTopics(s);
  const n = s.name.toLowerCase();
  return (
    <article className="wrap">
      <JsonLd data={graph(article({ title: seo.title, description: seo.description, path, published: "2026-10-19", image: seo.image }), faqPage(s.faqs), breadcrumbs(crumbs))} />
      <Breadcrumbs items={crumbs} />
      <header className="page-hero">
        <div className="page-hero-text">
          <span className="hero-badge"><Icon name="Shapes" size={18} /> Face shape guide</span>
          <h1>{s.name} Face Shape</h1>
          <p className="lead">{s.definition}</p>
          <Link className="btn primary" href="/"><Icon name="ScanFace" size={18} /> Check if you have {aOrAn(n)} face</Link>
        </div>
        <Figure src={seo.image!} alt={seo.imageAlt!} priority className="hero-figure small" />
      </header>
      <nav className="subnav" aria-label={`${s.name} face guides`}>
        {topics.map((t) => <Link key={t} href={`${path}${t}/`}><Icon name={TOPIC_ICON[t]} size={16} /> {TOPIC_LABEL[t](s.name)}</Link>)}
      </nav>
      <div className="article-grid">
        <div className="content">
          <Byline readMinutes={readingTime(s.body, s.makeup, s.definition) + 2} />
          <KeyTakeaways items={s.traits} />
          <h2>{s.name} face shape measurements</h2>
          <div className="table-wrap">
            <table className="data-table">
              <tbody>{s.measurements.map((m) => <tr key={m.feature}><th scope="row">{m.feature}</th><td>{m.value}</td></tr>)}</tbody>
            </table>
          </div>
          <h2>How to tell if you have {aOrAn(n)} face</h2>
          <ol>{s.howToTell.map((t) => <li key={t}>{t}</li>)}</ol>
          <Markdown src={s.body} />

          <h2>Best hairstyles for {n} faces (women)</h2>
          <ul className="check-list">{s.women.hairstyles.slice(0, 5).map((h) => <li key={h.name}><strong>{h.name}:</strong> {h.why}</li>)}</ul>
          {topics.includes("hairstyles-women") && <p><Link className="more-link" href={`${path}hairstyles-women/`}>See all hairstyles for women <Icon name="ArrowRight" size={15} /></Link></p>}

          <h2>Best haircuts for {n} faces (men)</h2>
          <ul className="check-list">{s.men.hairstyles.slice(0, 5).map((h) => <li key={h.name}><strong>{h.name}:</strong> {h.why}</li>)}</ul>
          {s.men.beards.length > 0 && (
            <>
              <h3>Beard styles for {n} faces</h3>
              <ul className="check-list">{s.men.beards.map((b) => <li key={b.name}><strong>{b.name}:</strong> {b.why}</li>)}</ul>
            </>
          )}
          {topics.includes("hairstyles-men") && <p><Link className="more-link" href={`${path}hairstyles-men/`}>See all haircuts for men <Icon name="ArrowRight" size={15} /></Link></p>}

          <h2>Best glasses for {n} faces</h2>
          <ul className="check-list">{s.glasses.best.map((g) => <li key={g.name}><strong>{g.name}:</strong> {g.why}</li>)}</ul>
          <h3>Frames to avoid</h3>
          <ul className="x-list">{s.glasses.avoid.map((a) => <li key={a}>{a}</li>)}</ul>

          <h2>Makeup and contouring for {n} faces</h2>
          <p>{s.makeup}</p>

          {(s.women.celebrities.length > 0 || s.men.celebrities.length > 0) && (
            <>
              <h2>Celebrities with {n} faces</h2>
              <ul className="pill-list">{[...s.women.celebrities, ...s.men.celebrities].slice(0, 8).map((c) => <li key={c}><Icon name="Star" size={14} /> {c}</li>)}</ul>
            </>
          )}

          <h2>{s.name} vs similar face shapes</h2>
          <div className="compare-cards">
            {s.confusedWith.map((c) => (
              <Link key={c.slug} href={`/face-shapes/${c.slug}/`} className="mini-card wide">
                <Pic src={IMG.faceThumb(c.slug)} alt={`${faceShapeBySlug(c.slug)?.name} face shape diagram`} />
                <span><strong>{s.name} vs {faceShapeBySlug(c.slug)?.name}</strong><br />{c.difference}</span>
              </Link>
            ))}
          </div>
          <FaqList faqs={s.faqs} />
        </div>
        <aside className="article-aside"><Toc /></aside>
      </div>
      <RelatedTools slugs={["face-shape-detector", "face-shape-quiz", "face-shape-calculator", "jawline-analyzer"]} />
    </article>
  );
}
