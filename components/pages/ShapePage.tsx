import Link from "next/link";
import { Breadcrumbs, Byline, FaqList, Figure, JsonLd, KeyTakeaways, Markdown, Pic, RelatedTools, readingTime } from "@/components/Page";
import Toc from "@/components/ui/Toc";
import { Icon } from "@/components/icons";
import { availableTopics, TOPIC_LABEL } from "@/lib/content/faceShapeTopics";
import { IMG } from "@/lib/images";
import { article, breadcrumbs, faqPage, graph } from "@/lib/schema";
import { seoFor } from "@/lib/seo";
import { aOrAn } from "@/lib/text";
import { portraitsFor } from "@/lib/portraits";
import { hrefIn, localePath, type Locale } from "@/lib/i18n/config";
import { pageT, shapeFor } from "@/lib/i18n/server";

const TOPIC_ICON = { "hairstyles-women": "Scissors", "hairstyles-men": "Scissors", celebrities: "Star", glasses: "Glasses" } as const;
const TOPIC_KEY = {
  "hairstyles-women": "Hairstyles for {shape} faces (women)",
  "hairstyles-men": "Haircuts for {shape} faces (men)",
  celebrities: "Celebrities with {shape} faces",
  glasses: "Glasses for {shape} faces",
} as const;

export default function ShapePage({ slug, locale = "en" }: { slug: string; locale?: Locale }) {
  const t = pageT(locale);
  const s = shapeFor(locale, slug);
  const en = locale === "en";
  const path = localePath(locale, `/face-shapes/${s.slug}/`);
  const enPath = `/face-shapes/${s.slug}/`;
  const seo = seoFor(path);
  const n = s.name.toLowerCase();
  // {Shape} = capitalized name, {shape} = lowercase, {a_shape} = with English article.
  const v = { Shape: s.name, shape: n, a_shape: aOrAn(n) };
  const crumbs = [{ name: t("Home"), path: localePath(locale, "/") }, { name: t("Face Shapes"), path: localePath(locale, "/face-shapes/") }, { name: t("{Shape} Face", v), path }];
  const topics = availableTopics(shapeFor("en", slug));
  const portraits = portraitsFor(s.slug);
  return (
    <article className="wrap" lang={en ? undefined : locale}>
      <JsonLd data={graph({ ...article({ title: seo.title, description: seo.description, path, published: "2026-10-19", image: seo.image }), inLanguage: locale }, faqPage(s.faqs), breadcrumbs(crumbs))} />
      <Breadcrumbs items={crumbs} label={t("Breadcrumb")} />
      <header className="page-hero">
        <div className="page-hero-text">
          <span className="hero-badge"><Icon name="Shapes" size={18} /> {t("Face shape guide")}</span>
          <h1>{t("{Shape} Face Shape", v)}</h1>
          <p className="lead">{s.definition}</p>
          <Link className="btn primary" href={localePath(locale, "/")}><Icon name="ScanFace" size={18} /> {t("Check if you have {a_shape} face", v)}</Link>
        </div>
        <Figure src={seo.image!} alt={seo.imageAlt!} priority className="hero-figure small" />
      </header>
      <nav className="subnav" aria-label={t("{Shape} face guides", v)}>
        {topics.map((x) => (
          <Link key={x} href={`${enPath}${x}/`} hrefLang={en ? undefined : "en"}>
            <Icon name={TOPIC_ICON[x]} size={16} /> {en ? TOPIC_LABEL[x](s.name) : t(TOPIC_KEY[x], v)}
          </Link>
        ))}
      </nav>
      <div className="article-grid">
        <div className="content">
          <Byline readMinutes={readingTime(s.body, s.makeup, s.definition) + 2} locale={locale} />
          <KeyTakeaways items={s.traits} locale={locale} />
          {portraits.length > 0 && (
            <section aria-label={t("Real examples of {a_shape} face shape", v)}>
              <h2>{t("What {a_shape} face shape looks like", v)}</h2>
              <div className="portrait-row">
                {portraits.map((p) => <Figure key={p.src} src={p.src} alt={t(p.alt)} caption={t(p.alt)} className="portrait" />)}
              </div>
            </section>
          )}
          <h2>{t("{Shape} face shape measurements", v)}</h2>
          <div className="table-wrap">
            <table className="data-table">
              <tbody>{s.measurements.map((m) => <tr key={m.feature}><th scope="row">{m.feature}</th><td>{m.value}</td></tr>)}</tbody>
            </table>
          </div>
          <h2>{t("How to tell if you have {a_shape} face", v)}</h2>
          <ol>{s.howToTell.map((x) => <li key={x}>{x}</li>)}</ol>
          <Markdown src={s.body} />

          <h2>{t("Best hairstyles for {shape} faces (women)", v)}</h2>
          <ul className="check-list">{s.women.hairstyles.slice(0, 5).map((h) => <li key={h.name}><strong>{h.name}:</strong> {h.why}</li>)}</ul>
          {topics.includes("hairstyles-women") && <p><Link className="more-link" href={`${enPath}hairstyles-women/`} hrefLang={en ? undefined : "en"}>{t("See all hairstyles for women")} <Icon name="ArrowRight" size={15} /></Link></p>}

          <h2>{t("Best haircuts for {shape} faces (men)", v)}</h2>
          <ul className="check-list">{s.men.hairstyles.slice(0, 5).map((h) => <li key={h.name}><strong>{h.name}:</strong> {h.why}</li>)}</ul>
          {s.men.beards.length > 0 && (
            <>
              <h3>{t("Beard styles for {shape} faces", v)}</h3>
              <ul className="check-list">{s.men.beards.map((b) => <li key={b.name}><strong>{b.name}:</strong> {b.why}</li>)}</ul>
            </>
          )}
          {topics.includes("hairstyles-men") && <p><Link className="more-link" href={`${enPath}hairstyles-men/`} hrefLang={en ? undefined : "en"}>{t("See all haircuts for men")} <Icon name="ArrowRight" size={15} /></Link></p>}

          <h2>{t("Best glasses for {shape} faces", v)}</h2>
          <ul className="check-list">{s.glasses.best.map((g) => <li key={g.name}><strong>{g.name}:</strong> {g.why}</li>)}</ul>
          <h3>{t("Frames to avoid")}</h3>
          <ul className="x-list">{s.glasses.avoid.map((a) => <li key={a}>{a}</li>)}</ul>

          <h2>{t("Makeup and contouring for {shape} faces", v)}</h2>
          <p>{s.makeup}</p>

          {(s.women.celebrities.length > 0 || s.men.celebrities.length > 0) && (
            <>
              <h2>{t("Celebrities with {shape} faces", v)}</h2>
              <ul className="pill-list">{[...s.women.celebrities, ...s.men.celebrities].slice(0, 8).map((c) => <li key={c}><Icon name="Star" size={14} /> {c}</li>)}</ul>
            </>
          )}

          <h2>{t("{Shape} vs similar face shapes", v)}</h2>
          <div className="compare-cards">
            {s.confusedWith.map((c) => {
              const other = shapeFor(locale, c.slug).name;
              return (
                <Link key={c.slug} href={hrefIn(locale, `/face-shapes/${c.slug}/`)} className="mini-card wide">
                  <Pic src={IMG.faceThumb(c.slug)} alt={t("{shape} face shape diagram", { shape: other })} />
                  <span><strong>{s.name} vs {other}</strong><br />{c.difference}</span>
                </Link>
              );
            })}
          </div>
          <FaqList faqs={s.faqs} title={t("Frequently asked questions")} />
        </div>
        <aside className="article-aside"><Toc /></aside>
      </div>
      <RelatedTools slugs={["face-shape-detector", "face-shape-quiz", "face-shape-calculator", "jawline-analyzer"]} locale={locale} />
    </article>
  );
}
