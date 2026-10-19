import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Byline, FaqList, Figure, JsonLd, RelatedTools } from "@/components/Page";
import { Icon } from "@/components/icons";
import { metaFor } from "@/lib/meta";
import { seoFor } from "@/lib/seo";
import { FACE_SHAPES, faceShapeBySlug } from "@/lib/content/faceShapes";
import { availableTopics, TOPIC_LABEL, type Topic } from "@/lib/content/faceShapeTopics";
import type { FaceShape, Faq } from "@/lib/content/types";
import { article, breadcrumbs, faqPage, graph } from "@/lib/schema";
import { aOrAn } from "@/lib/text";

export const dynamicParams = false;
export const generateStaticParams = () => FACE_SHAPES.flatMap((s) => availableTopics(s).map((topic) => ({ shape: s.slug, topic })));

export async function generateMetadata({ params }: { params: Promise<{ shape: string; topic: string }> }): Promise<Metadata> {
  const { shape, topic } = await params;
  return metaFor(`/face-shapes/${shape}/${topic}/`, { type: "article" });
}

export default async function TopicPage({ params }: { params: Promise<{ shape: string; topic: string }> }) {
  const { shape, topic } = await params;
  const s = faceShapeBySlug(shape);
  if (!s || !availableTopics(s).includes(topic as Topic)) notFound();
  const t = topic as Topic;
  const n = s.name.toLowerCase();
  const path = `/face-shapes/${s.slug}/${t}/`;
  const seo = seoFor(path);
  const m = { title: H1[t](s.name), description: seo.description };
  const crumbs = [{ name: "Home", path: "/" }, { name: "Face Shapes", path: "/face-shapes/" }, { name: `${s.name} Face`, path: `/face-shapes/${s.slug}/` }, { name: TOPIC_LABEL[t](s.name), path }];
  const faqs: Faq[] = topicFaqs(s, t);
  return (
    <article className="wrap">
      <JsonLd data={graph(article({ title: seo.title, description: seo.description, path, published: "2026-10-19", image: seo.image }), faqPage(faqs), breadcrumbs(crumbs))} />
      <Breadcrumbs items={crumbs} />
      <header className="page-hero">
        <div className="page-hero-text">
          <span className="hero-badge"><Icon name="Shapes" size={18} /> {s.name} face guide</span>
          <h1>{m.title}</h1>
          <p className="lead">{lead(s, t)}</p>
          <Link className="btn primary" href="/"><Icon name="ScanFace" size={18} /> Not sure you&apos;re {n}? Check your face shape</Link>
        </div>
        <Figure src={seo.image!} alt={seo.imageAlt!} priority className="hero-figure small" />
      </header>
      <div className="content">
        <Byline />
        {t === "hairstyles-women" && (
          <>
            <h2>The best hairstyles for {n} faces</h2>
            <ol className="picks">{s.women.hairstyles.map((h) => <li key={h.name}><h3>{h.name}</h3><p>{h.why}</p></li>)}</ol>
            <h2>Hairstyles to avoid</h2>
            <ul className="x-list">{s.women.avoid.map((a) => <li key={a}>{a}</li>)}</ul>
            <h2>The rule of thumb</h2>
            <p>{s.women.tips}</p>
            {s.women.celebrities.length > 0 && <p><strong>Inspiration:</strong> look at how {s.women.celebrities.slice(0, 3).join(", ")} wear their hair.</p>}
          </>
        )}
        {t === "hairstyles-men" && (
          <>
            <h2>The best haircuts for {n} faces</h2>
            <ol className="picks">{s.men.hairstyles.map((h) => <li key={h.name}><h3>{h.name}</h3><p>{h.why}</p></li>)}</ol>
            {s.men.beards.length > 0 && (
              <>
                <h2>Best beard styles</h2>
                <ul className="check-list">{s.men.beards.map((b) => <li key={b.name}><strong>{b.name}:</strong> {b.why}</li>)}</ul>
              </>
            )}
            <h2>Haircuts to avoid</h2>
            <ul className="x-list">{s.men.avoid.map((a) => <li key={a}>{a}</li>)}</ul>
            <h2>The rule of thumb</h2>
            <p>{s.men.tips}</p>
          </>
        )}
        {t === "celebrities" && (
          <>
            {s.women.celebrities.length > 0 && (<><h2>Female celebrities with {n} faces</h2><ul className="pill-list">{s.women.celebrities.map((c) => <li key={c}><Icon name="Star" size={14} /> {c}</li>)}</ul></>)}
            {s.men.celebrities.length > 0 && (<><h2>Male celebrities with {n} faces</h2><ul className="pill-list">{s.men.celebrities.map((c) => <li key={c}><Icon name="Star" size={14} /> {c}</li>)}</ul></>)}
            <h2>What you can learn from them</h2>
            <p>{s.women.tips} {s.men.tips}</p>
            <p className="fine">Celebrity face shapes are based on how they're commonly described in style media. Angles, lighting and styling change how a face looks, so treat these as examples rather than measurements.</p>
          </>
        )}
        {t === "glasses" && (
          <>
            <h2>Frames that suit {n} faces</h2>
            <ol className="picks">{s.glasses.best.map((g) => <li key={g.name}><h3>{g.name}</h3><p>{g.why}</p></li>)}</ol>
            <h2>Frames to avoid</h2>
            <ul className="x-list">{s.glasses.avoid.map((a) => <li key={a}>{a}</li>)}</ul>
            <h2>Fit matters as much as shape</h2>
            <p>Whatever the shape, the frame should be about as wide as your face at the temples, your eyes should sit near the horizontal center of each lens, and the top of the frame should follow your brow line.</p>
          </>
        )}
        <FaqList faqs={faqs} />
        <h2>More {n} face guides</h2>
        <ul className="inline-list">
          <li><Link href={`/face-shapes/${s.slug}/`}>{s.name} face shape overview</Link></li>
          {availableTopics(s).filter((x) => x !== t).map((x) => <li key={x}><Link href={`/face-shapes/${s.slug}/${x}/`}>{TOPIC_LABEL[x](s.name)}</Link></li>)}
        </ul>
      </div>
      <RelatedTools slugs={["face-shape-detector", "face-shape-quiz"]} />
    </article>
  );
}

const H1: Record<Topic, (name: string) => string> = {
  "hairstyles-women": (n) => `Best Hairstyles for ${n} Faces (Women)`,
  "hairstyles-men": (n) => `Best Haircuts & Beards for ${n} Faces (Men)`,
  celebrities: (n) => `Celebrities With ${n} Faces`,
  glasses: (n) => `Best Glasses for ${n} Face Shape`,
};

function lead(s: FaceShape, t: Topic) {
  const n = s.name.toLowerCase();
  if (t === "hairstyles-women") return `The best hairstyles for ${n} faces are ${s.women.hairstyles.slice(0, 3).map((h) => h.name.toLowerCase()).join(", ")}. ${s.women.tips}`;
  if (t === "hairstyles-men") return `The best haircuts for ${n} faces are ${s.men.hairstyles.slice(0, 3).map((h) => h.name.toLowerCase()).join(", ")}. ${s.men.tips}`;
  if (t === "celebrities") return `Celebrities often described as having ${n} faces include ${[...s.women.celebrities, ...s.men.celebrities].slice(0, 4).join(", ")}.`;
  return `The best glasses for ${n} faces are ${s.glasses.best.slice(0, 3).map((g) => g.name.toLowerCase()).join(", ")}. ${s.glasses.best[0].why}`;
}

function topicFaqs(s: FaceShape, t: Topic): Faq[] {
  const n = s.name.toLowerCase();
  if (t === "hairstyles-women") return [
    { q: `What is the best haircut for ${aOrAn(n)} face?`, a: `${s.women.hairstyles[0].name}. ${s.women.hairstyles[0].why}` },
    { q: `What hairstyles should I avoid with ${aOrAn(n)} face?`, a: s.women.avoid.join(" ") },
  ];
  if (t === "hairstyles-men") return [
    { q: `What is the best men's haircut for ${aOrAn(n)} face?`, a: `${s.men.hairstyles[0].name}. ${s.men.hairstyles[0].why}` },
    ...(s.men.beards[0] ? [{ q: `What beard suits ${aOrAn(n)} face?`, a: `${s.men.beards[0].name}. ${s.men.beards[0].why}` }] : []),
  ];
  if (t === "celebrities") return [{ q: `Which celebrities have ${n} faces?`, a: `${[...s.women.celebrities, ...s.men.celebrities].join(", ")} are often described as having ${n} faces.` }];
  return [
    { q: `What glasses suit ${aOrAn(n)} face?`, a: s.glasses.best.map((g) => g.name).join(", ") + "." },
    { q: `What glasses should ${aOrAn(n)} face avoid?`, a: s.glasses.avoid.join(" ") },
  ];
}
