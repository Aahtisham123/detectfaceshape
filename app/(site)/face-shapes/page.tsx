import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, Byline, FaqList, Figure, JsonLd, Markdown, Pic, RelatedTools, readingTime } from "@/components/Page";
import Toc from "@/components/ui/Toc";
import { Icon } from "@/components/icons";
import { FACE_SHAPES } from "@/lib/content/faceShapes";
import { HUB_BODY, HUB_FAQS, HUB_INTRO } from "@/lib/content/faceShapesHub";
import { IMG } from "@/lib/images";
import { metaFor } from "@/lib/meta";
import { article, breadcrumbs, faqPage, graph } from "@/lib/schema";
import { seoFor } from "@/lib/seo";

const PATH = "/face-shapes/";
export const metadata: Metadata = metaFor(PATH, { type: "article" });

export default function FaceShapesHub() {
  const seo = seoFor(PATH);
  const crumbs = [{ name: "Home", path: "/" }, { name: "Face Shapes", path: PATH }];
  return (
    <article className="wrap">
      <JsonLd data={graph(article({ title: seo.title, description: seo.description, path: PATH, published: "2026-10-19", image: IMG.faceChart }), faqPage(HUB_FAQS), breadcrumbs(crumbs))} />
      <Breadcrumbs items={crumbs} />
      <header className="page-hero">
        <div className="page-hero-text">
          <span className="hero-badge"><Icon name="Shapes" size={18} /> Face shape guide</span>
          <h1>Face Shapes: All 10 Types Explained</h1>
          <p className="lead">{HUB_INTRO}</p>
          <Link className="btn primary" href="/"><Icon name="ScanFace" size={18} /> Find your face shape from a photo</Link>
        </div>
      </header>
      <Figure src={IMG.faceChart} alt={seo.imageAlt!} caption="Face shapes chart: gold lines mark forehead, cheekbone and jaw width" priority className="chart-figure" />
      <section aria-label="Face shapes" className="shape-gallery" data-reveal>
        {FACE_SHAPES.map((s) => (
          <Link key={s.slug} href={`/face-shapes/${s.slug}/`} className="shape-tile">
            <Pic src={IMG.faceThumb(s.slug)} alt={`${s.name} face shape diagram`} />
            <span>{s.name}</span>
            <small>{s.measurements[1].value}</small>
          </Link>
        ))}
      </section>
      <div className="article-grid">
        <div className="content">
          <Byline readMinutes={readingTime(HUB_BODY)} />
          <Markdown src={HUB_BODY} />
          {FACE_SHAPES.map((s) => (
            <section key={s.slug} className="type-section">
              <h2 id={`${s.slug}-face-shape`}><Link href={`/face-shapes/${s.slug}/`}>{s.name} face shape</Link></h2>
              <p>{s.definition}</p>
            </section>
          ))}
          <FaqList faqs={HUB_FAQS} />
        </div>
        <aside className="article-aside"><Toc /></aside>
      </div>
      <RelatedTools slugs={["face-shape-detector", "face-shape-quiz", "face-shape-calculator"]} />
    </article>
  );
}
