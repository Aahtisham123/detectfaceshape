import type { Metadata } from "next";
import Link from "next/link";
import ShapeIllustration from "@/components/ShapeIllustration";
import { Breadcrumbs, Byline, FaqList, JsonLd, Markdown, RelatedTools } from "@/components/Page";
import { FACE_SHAPES } from "@/lib/content/faceShapes";
import { HUB_BODY, HUB_FAQS, HUB_INTRO } from "@/lib/content/faceShapesHub";
import { article, breadcrumbs, faqPage, graph } from "@/lib/schema";

const title = "Face Shapes: Chart of All 10 Face Shapes & How to Find Yours";
const description = "See all 10 face shapes in one chart (oval, round, square, oblong, rectangle, heart, diamond, triangle, inverted triangle, pear) and learn how to tell which one you have.";

export const metadata: Metadata = { title: { absolute: title }, description, alternates: { canonical: "/face-shapes/" }, openGraph: { title, description, url: "/face-shapes/" } };

export default function FaceShapesHub() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Face Shapes", path: "/face-shapes/" }];
  return (
    <article className="wrap">
      <JsonLd data={graph(article({ title, description, path: "/face-shapes/", published: "2026-10-19" }), faqPage(HUB_FAQS), breadcrumbs(crumbs))} />
      <Breadcrumbs items={crumbs} />
      <header className="page-head">
        <h1>Face Shapes</h1>
        <p className="lead">{HUB_INTRO}</p>
        <Link className="btn primary" href="/">Find your face shape from a photo</Link>
      </header>
      <section aria-label="Face shapes chart" className="shape-chart">
        {FACE_SHAPES.map((s) => (
          <Link key={s.slug} href={`/face-shapes/${s.slug}/`} className="shape-chart-item">
            <ShapeIllustration shape={s.slug} size={120} guides title={`${s.name} face shape diagram`} />
            <strong>{s.name}</strong>
            <span>{s.measurements[1].value}</span>
          </Link>
        ))}
      </section>
      <div className="content">
        <Byline />
        <Markdown src={HUB_BODY} />
        {FACE_SHAPES.map((s) => (
          <section key={s.slug} className="type-section">
            <h2><Link href={`/face-shapes/${s.slug}/`}>{s.name} face shape</Link></h2>
            <p>{s.definition}</p>
          </section>
        ))}
        <FaqList faqs={HUB_FAQS} />
      </div>
      <RelatedTools slugs={["face-shape-detector", "face-shape-quiz", "face-shape-calculator"]} />
    </article>
  );
}
