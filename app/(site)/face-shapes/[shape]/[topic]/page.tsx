import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShapeIllustration from "@/components/ShapeIllustration";
import { Breadcrumbs, Byline, FaqList, JsonLd, RelatedTools } from "@/components/Page";
import { FACE_SHAPES, faceShapeBySlug } from "@/lib/content/faceShapes";
import { availableTopics, TOPIC_LABEL, type Topic } from "@/lib/content/faceShapeTopics";
import type { FaceShape, Faq } from "@/lib/content/types";
import { article, breadcrumbs, faqPage, graph } from "@/lib/schema";
import { aOrAn } from "@/lib/text";

export const dynamicParams = false;
export const generateStaticParams = () => FACE_SHAPES.flatMap((s) => availableTopics(s).map((topic) => ({ shape: s.slug, topic })));

function meta(s: FaceShape, t: Topic) {
  const n = s.name.toLowerCase();
  switch (t) {
    case "hairstyles-women":
      return { title: `${s.women.hairstyles.length} Best Hairstyles for ${s.name} Faces (Women)`, description: `The most flattering haircuts for women with ${n} faces, why they work, and which styles to avoid.` };
    case "hairstyles-men":
      return { title: `Best Haircuts & Beards for ${s.name} Face Shape (Men)`, description: `The best men's haircuts and beard styles for ${aOrAn(n)} face shape, and what to avoid.` };
    case "celebrities":
      return { title: `Celebrities With ${s.name} Faces (Women & Men)`, description: `Famous women and men often described as having ${aOrAn(n)} face shape, and what their styling teaches you.` };
    case "glasses":
      return { title: `Best Glasses for ${s.name} Face Shape (and Frames to Avoid)`, description: `Which glasses and sunglasses suit ${aOrAn(n)} face, why they work, and frames to avoid.` };
  }
}

export async function generateMetadata({ params }: { params: Promise<{ shape: string; topic: string }> }): Promise<Metadata> {
  const { shape, topic } = await params;
  const s = faceShapeBySlug(shape);
  if (!s) return {};
  const m = meta(s, topic as Topic);
  const path = `/face-shapes/${s.slug}/${topic}/`;
  return { title: { absolute: m.title }, description: m.description, alternates: { canonical: path }, openGraph: { title: m.title, url: path } };
}

export default async function TopicPage({ params }: { params: Promise<{ shape: string; topic: string }> }) {
  const { shape, topic } = await params;
  const s = faceShapeBySlug(shape);
  if (!s || !availableTopics(s).includes(topic as Topic)) notFound();
  const t = topic as Topic;
  const m = meta(s, t);
  const n = s.name.toLowerCase();
  const path = `/face-shapes/${s.slug}/${t}/`;
  const crumbs = [{ name: "Home", path: "/" }, { name: "Face Shapes", path: "/face-shapes/" }, { name: `${s.name} Face`, path: `/face-shapes/${s.slug}/` }, { name: TOPIC_LABEL[t](s.name), path }];
  const faqs: Faq[] = topicFaqs(s, t);
  return (
    <article className="wrap">
      <JsonLd data={graph(article({ title: m.title, description: m.description, path, published: "2026-10-19" }), faqPage(faqs), breadcrumbs(crumbs))} />
      <Breadcrumbs items={crumbs} />
      <header className="page-head with-figure">
        <div>
          <h1>{m.title}</h1>
          <p className="lead">{lead(s, t)}</p>
          <Link className="btn primary" href="/">Not sure you&apos;re {n}? Check your face shape</Link>
        </div>
        <ShapeIllustration shape={s.slug} size={170} />
      </header>
      <div className="content">
        <Byline />
        {t === "hairstyles-women" && (
          <>
            <h2>The best hairstyles for {n} faces</h2>
            <ol className="picks">{s.women.hairstyles.map((h) => <li key={h.name}><h3>{h.name}</h3><p>{h.why}</p></li>)}</ol>
            <h2>Hairstyles to avoid</h2>
            <ul>{s.women.avoid.map((a) => <li key={a}>{a}</li>)}</ul>
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
                <ul>{s.men.beards.map((b) => <li key={b.name}><strong>{b.name}:</strong> {b.why}</li>)}</ul>
              </>
            )}
            <h2>Haircuts to avoid</h2>
            <ul>{s.men.avoid.map((a) => <li key={a}>{a}</li>)}</ul>
            <h2>The rule of thumb</h2>
            <p>{s.men.tips}</p>
          </>
        )}
        {t === "celebrities" && (
          <>
            {s.women.celebrities.length > 0 && (<><h2>Female celebrities with {n} faces</h2><ul>{s.women.celebrities.map((c) => <li key={c}>{c}</li>)}</ul></>)}
            {s.men.celebrities.length > 0 && (<><h2>Male celebrities with {n} faces</h2><ul>{s.men.celebrities.map((c) => <li key={c}>{c}</li>)}</ul></>)}
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
            <ul>{s.glasses.avoid.map((a) => <li key={a}>{a}</li>)}</ul>
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
