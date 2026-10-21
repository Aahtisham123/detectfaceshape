import Link from "next/link";
import ToolPage from "@/components/ToolPage";
import { Figure, JsonLd, Pic, ToolCard } from "@/components/Page";
import { Icon } from "@/components/icons";
import { TOOLS } from "@/lib/content/tools";
import { IMG } from "@/lib/images";
import { graph, organization } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { hrefIn, localePath, LOCALE_META, type Locale } from "@/lib/i18n/config";
import { pageT, shapesFor, toolFor } from "@/lib/i18n/server";

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

export default function Home({ locale = "en" }: { locale?: Locale }) {
  const t = pageT(locale);
  const tool = toolFor(locale, "face-shape-detector");
  const shapes = shapesFor(locale);
  const others = TOOLS.filter((x) => x.path !== "/");
  return (
    <ToolPage
      tool={tool}
      locale={locale}
      hero={<Figure src={IMG.hero} alt={t("AI face shape detector measuring forehead, cheekbone and jaw width on a face outline")} priority className="hero-figure" />}
    >
      <JsonLd
        data={graph(organization(), {
          "@type": "WebSite",
          "@id": `${SITE.url}/#website`,
          url: SITE.url + localePath(locale, "/"),
          name: SITE.name,
          inLanguage: LOCALE_META[locale].hreflang,
          publisher: { "@id": `${SITE.url}/#org` },
        })}
      />
      <section className="stats" aria-label={t("At a glance")} data-reveal>
        {STATS.map((s) => (
          <div key={s.label} className="stat">
            <Icon name={s.icon} size={22} />
            <strong>{s.value}</strong>
            <span>{t(s.label)}</span>
          </div>
        ))}
      </section>

      <section className="home-section" data-reveal>
        <h2 className="section-title">{t("What is your face shape? The 10 types")}</h2>
        <p className="section-lead">{t("Tap a shape to see its proportions, best hairstyles, glasses and celebrity examples.")}</p>
        <div className="shape-gallery">
          {shapes.map((s) => (
            <Link key={s.slug} href={hrefIn(locale, `/face-shapes/${s.slug}/`)} className="shape-tile">
              <Pic src={IMG.faceThumb(s.slug)} alt={t("{shape} face shape diagram showing forehead, cheekbone and jaw widths", { shape: s.name })} />
              <span>{s.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section" data-reveal>
        <h2 className="section-title">{t("Why people use our face shape detector")}</h2>
        <div className="feature-grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="feature">
              <span className="card-icon"><Icon name={f.icon} size={22} /></span>
              <h3>{t(f.title)}</h3>
              <p>{t(f.text)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section" data-reveal>
        <h2 className="section-title">{t("More free face analysis tools")}</h2>
        <div className="card-grid">
          {others.slice(0, 9).map((x) => {
            const tx = toolFor(locale, x.slug);
            return <ToolCard key={x.slug} name={tx.name} short={tx.short} path={x.path} locale={locale} />;
          })}
        </div>
        <p className="center"><Link href="/tools/" className="btn">{t("See all {n} tools", { n: TOOLS.length })} <Icon name="ArrowRight" size={16} /></Link></p>
      </section>
    </ToolPage>
  );
}
