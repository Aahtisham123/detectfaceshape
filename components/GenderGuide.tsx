import Link from "next/link";
import { Breadcrumbs, Byline, Figure, JsonLd, Pic, RelatedTools } from "@/components/Page";
import Toc from "@/components/ui/Toc";
import { Icon } from "@/components/icons";
import { availableTopics } from "@/lib/content/faceShapeTopics";
import { IMG } from "@/lib/images";
import { seoFor } from "@/lib/seo";
import { FACE_SHAPES } from "@/lib/content/faceShapes";
import { GENDER_PAGES } from "@/lib/content/faceShapesHub";
import { article, breadcrumbs, graph } from "@/lib/schema";

export default function GenderGuide({ gender }: { gender: "men" | "women" }) {
  const g = GENDER_PAGES[gender];
  const path = `/face-shapes/${gender}/`;
  const crumbs = [{ name: "Home", path: "/" }, { name: "Face Shapes", path: "/face-shapes/" }, { name: g.h1, path }];
  return (
    <article className="wrap">
      <JsonLd data={graph(article({ title: seoFor(path).title, description: seoFor(path).description, path, published: "2026-10-19", image: IMG.faceChart }), breadcrumbs(crumbs))} />
      <Breadcrumbs items={crumbs} />
      <header className="page-hero">
        <div className="page-hero-text">
          <span className="hero-badge"><Icon name="Users" size={18} /> Style guide</span>
          <h1>{g.h1}</h1>
          <p className="lead">{g.intro}</p>
          <Link className="btn primary" href="/"><Icon name="ScanFace" size={18} /> Find your face shape</Link>
        </div>
      </header>
      <Figure src={IMG.faceChart} alt={`Chart of the 10 face shapes for ${gender}`} priority className="chart-figure" />
      <div className="article-grid">
      <div className="content">
        <Byline readMinutes={6} />
        {FACE_SHAPES.map((s) => {
          const d = s[gender];
          const topic = gender === "women" ? "hairstyles-women" : "hairstyles-men";
          return (
            <section key={s.slug} className="type-section">
              <div className="side-by-side">
                <Pic src={IMG.faceThumb(s.slug)} alt={`${s.name} face shape diagram`} className="thumb" />
                <div>
                  <h2><Link href={`/face-shapes/${s.slug}/`}>{s.name} face</Link></h2>
                  <p>{s.definition.split(". ")[0]}.</p>
                </div>
              </div>
              <p><Icon name="Scissors" size={16} className="inline-icon" /> <strong>Best {gender === "women" ? "hairstyles" : "haircuts"}:</strong> {d.hairstyles.slice(0, 4).map((h) => h.name.toLowerCase()).join(", ")}.</p>
              {gender === "men" && s.men.beards.length > 0 && <p><Icon name="UserRound" size={16} className="inline-icon" /> <strong>Beards:</strong> {s.men.beards.map((b) => b.name.toLowerCase()).join(", ")}.</p>}
              <p><Icon name="Glasses" size={16} className="inline-icon" /> <strong>Glasses:</strong> {s.glasses.best.slice(0, 3).map((b) => b.name.toLowerCase()).join(", ")}.</p>
              {d.celebrities.length > 0 && <p><Icon name="Star" size={16} className="inline-icon" /> <strong>Celebrities:</strong> {d.celebrities.slice(0, 4).join(", ")}.</p>}
              {availableTopics(s).includes(topic) && <p><Link className="more-link" href={`/face-shapes/${s.slug}/${topic}/`}>All {gender === "women" ? "hairstyles" : "haircuts"} for {s.name.toLowerCase()} faces <Icon name="ArrowRight" size={15} /></Link></p>}
            </section>
          );
        })}
      </div>
      <aside className="article-aside"><Toc /></aside>
      </div>
      <RelatedTools slugs={["face-shape-detector", "face-shape-quiz", gender === "women" ? "color-analysis" : "jawline-analyzer"]} />
    </article>
  );
}
