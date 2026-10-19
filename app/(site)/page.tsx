import type { Metadata } from "next";
import Link from "next/link";
import ToolPage from "@/components/ToolPage";
import { Figure, Pic, ToolCard } from "@/components/Page";
import { Icon } from "@/components/icons";
import { toolBySlug, TOOLS } from "@/lib/content/tools";
import { FACE_SHAPES } from "@/lib/content/faceShapes";
import { IMG } from "@/lib/images";
import { metaFor } from "@/lib/meta";
import { JsonLd } from "@/components/Page";
import { graph, organization } from "@/lib/schema";
import { SITE } from "@/lib/site";

const tool = toolBySlug("face-shape-detector")!;
export const metadata: Metadata = metaFor("/");

const STATS = [
  { icon: "ScanFace", value: "478", label: "facial landmarks measured" },
  { icon: "Shapes", value: "10", label: "face shapes scored" },
  { icon: "Zap", value: "~5 s", label: "to your result" },
  { icon: "ShieldCheck", value: "0", label: "photos uploaded, ever" },
] as const;

const FEATURES = [
  { icon: "Lock", title: "Private by design", text: "The AI runs inside your browser. Your photo is never uploaded, stored or seen." },
  { icon: "Target", title: "Calibrated on real faces", text: "We compare your proportions with measurements from real photos, not drawings." },
  { icon: "Layers", title: "Shows your blend", text: "Most faces mix two shapes, so you see a percentage match for all ten." },
  { icon: "Scissors", title: "Advice you can use", text: "Every result links to haircuts, glasses, beards and makeup for your shape." },
  { icon: "Camera", title: "Live camera mode", text: "Watch your face shape update in real time, then capture for a full reading." },
  { icon: "Share2", title: "Share your result", text: "Save a result card for Instagram, TikTok or Pinterest. It never includes your photo." },
] as const;

export default function Home() {
  return (
    <ToolPage
      tool={tool}
      hero={<Figure src={IMG.hero} alt="AI face shape detector measuring forehead, cheekbone and jaw width on a face outline" priority className="hero-figure" />}
    >
      <JsonLd data={graph(organization(), { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, publisher: { "@id": `${SITE.url}/#org` } })} />
      <section className="stats" aria-label="At a glance" data-reveal>
        {STATS.map((s) => (
          <div key={s.label} className="stat">
            <Icon name={s.icon} size={22} />
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      <section className="home-section" data-reveal>
        <h2 className="section-title">What is your face shape? The 10 types</h2>
        <p className="section-lead">Tap a shape to see its proportions, best hairstyles, glasses and celebrity examples.</p>
        <div className="shape-gallery">
          {FACE_SHAPES.map((s) => (
            <Link key={s.slug} href={`/face-shapes/${s.slug}/`} className="shape-tile">
              <Pic src={IMG.faceThumb(s.slug)} alt={`${s.name} face shape diagram showing forehead, cheekbone and jaw widths`} />
              <span>{s.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section" data-reveal>
        <h2 className="section-title">Why people use our face shape detector</h2>
        <div className="feature-grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="feature">
              <span className="card-icon"><Icon name={f.icon} size={22} /></span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section" data-reveal>
        <h2 className="section-title">More free face analysis tools</h2>
        <div className="card-grid">
          {TOOLS.filter((t) => t.path !== "/").slice(0, 9).map((t) => <ToolCard key={t.slug} name={t.name} short={t.short} path={t.path} />)}
        </div>
        <p className="center"><Link href="/tools/" className="btn">See all {TOOLS.length} tools <Icon name="ArrowRight" size={16} /></Link></p>
      </section>
    </ToolPage>
  );
}
