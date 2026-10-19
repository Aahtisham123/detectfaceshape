import Link from "next/link";
import ShapeIllustration from "@/components/ShapeIllustration";
import { Breadcrumbs, Byline, JsonLd, RelatedTools } from "@/components/Page";
import { FACE_SHAPES } from "@/lib/content/faceShapes";
import { GENDER_PAGES } from "@/lib/content/faceShapesHub";
import { article, breadcrumbs, graph } from "@/lib/schema";

export default function GenderGuide({ gender }: { gender: "men" | "women" }) {
  const g = GENDER_PAGES[gender];
  const path = `/face-shapes/${gender}/`;
  const crumbs = [{ name: "Home", path: "/" }, { name: "Face Shapes", path: "/face-shapes/" }, { name: g.h1, path }];
  return (
    <article className="wrap">
      <JsonLd data={graph(article({ title: g.title, description: g.description, path, published: "2026-10-19" }), breadcrumbs(crumbs))} />
      <Breadcrumbs items={crumbs} />
      <header className="page-head">
        <h1>{g.h1}</h1>
        <p className="lead">{g.intro}</p>
        <Link className="btn primary" href="/">Find your face shape</Link>
      </header>
      <div className="content">
        <Byline />
        {FACE_SHAPES.map((s) => {
          const d = s[gender];
          const topic = gender === "women" ? "hairstyles-women" : "hairstyles-men";
          return (
            <section key={s.slug} className="type-section">
              <div className="side-by-side">
                <ShapeIllustration shape={s.slug} size={90} />
                <div>
                  <h2><Link href={`/face-shapes/${s.slug}/`}>{s.name} face</Link></h2>
                  <p>{s.definition.split(". ")[0]}.</p>
                </div>
              </div>
              <p><strong>Best {gender === "women" ? "hairstyles" : "haircuts"}:</strong> {d.hairstyles.slice(0, 4).map((h) => h.name.toLowerCase()).join(", ")}.</p>
              {gender === "men" && s.men.beards.length > 0 && <p><strong>Beards:</strong> {s.men.beards.map((b) => b.name.toLowerCase()).join(", ")}.</p>}
              <p><strong>Glasses:</strong> {s.glasses.best.slice(0, 3).map((b) => b.name.toLowerCase()).join(", ")}.</p>
              {d.celebrities.length > 0 && <p><strong>Celebrities:</strong> {d.celebrities.slice(0, 4).join(", ")}.</p>}
              <p><Link href={`/face-shapes/${s.slug}/${topic}/`}>All {gender === "women" ? "hairstyles" : "haircuts"} for {s.name.toLowerCase()} faces →</Link></p>
            </section>
          );
        })}
      </div>
      <RelatedTools slugs={["face-shape-detector", "face-shape-quiz", gender === "women" ? "color-analysis" : "jawline-analyzer"]} />
    </article>
  );
}
