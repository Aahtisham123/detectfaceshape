import Link from "next/link";
import { Breadcrumbs, Byline, FaqList, Figure, JsonLd, Markdown, Pic, RelatedTools, readingTime } from "@/components/Page";
import Toc from "@/components/ui/Toc";
import { Icon } from "@/components/icons";
import { IMG } from "@/lib/images";
import { article, breadcrumbs, faqPage, graph } from "@/lib/schema";
import { seoFor } from "@/lib/seo";
import { hrefIn, localePath, type Locale } from "@/lib/i18n/config";
import { hubFor, pageT, shapesFor } from "@/lib/i18n/server";

export default function FaceShapesHub({ locale = "en" }: { locale?: Locale }) {
  const t = pageT(locale);
  const hub = hubFor(locale);
  const shapes = shapesFor(locale);
  const path = localePath(locale, "/face-shapes/");
  const seo = seoFor(path);
  const crumbs = [{ name: t("Home"), path: localePath(locale, "/") }, { name: t("Face Shapes"), path }];
  return (
    <article className="wrap" lang={locale === "en" ? undefined : locale}>
      <JsonLd data={graph({ ...article({ title: seo.title, description: seo.description, path, published: "2026-10-19", image: IMG.faceChartIn(locale) }), inLanguage: locale }, faqPage(hub.faqs), breadcrumbs(crumbs))} />
      <Breadcrumbs items={crumbs} label={t("Breadcrumb")} />
      <header className="page-hero">
        <div className="page-hero-text">
          <span className="hero-badge"><Icon name="Shapes" size={18} /> {t("Face shape guide")}</span>
          <h1>{hub.h1}</h1>
          <p className="lead">{hub.intro}</p>
          <Link className="btn primary" href={localePath(locale, "/")}><Icon name="ScanFace" size={18} /> {t("Find your face shape from a photo")}</Link>
        </div>
      </header>
      <Figure src={IMG.faceChartIn(locale)} alt={seo.imageAlt!} caption={t("Face shapes chart: gold lines mark forehead, cheekbone and jaw width")} priority className="chart-figure" />
      <section aria-label={t("Face Shapes")} className="shape-gallery" data-reveal>
        {shapes.map((s) => (
          <Link key={s.slug} href={hrefIn(locale, `/face-shapes/${s.slug}/`)} className="shape-tile">
            <Pic src={IMG.faceThumb(s.slug)} alt={t("{shape} face shape diagram", { shape: s.name })} />
            <span>{s.name}</span>
            <small>{s.measurements[1].value}</small>
          </Link>
        ))}
      </section>
      <div className="article-grid">
        <div className="content">
          <Byline readMinutes={readingTime(hub.body)} locale={locale} />
          <Markdown src={hub.body} />
          {shapes.map((s) => (
            <section key={s.slug} className="type-section">
              <h2 id={`${s.slug}-face-shape`}><Link href={hrefIn(locale, `/face-shapes/${s.slug}/`)}>{t("{shape} face shape", { shape: s.name })}</Link></h2>
              <p>{s.definition}</p>
            </section>
          ))}
          <FaqList faqs={hub.faqs} title={t("Frequently asked questions")} />
        </div>
        <aside className="article-aside"><Toc /></aside>
      </div>
      <RelatedTools slugs={["face-shape-detector", "face-shape-quiz", "face-shape-calculator"]} locale={locale} />
    </article>
  );
}
