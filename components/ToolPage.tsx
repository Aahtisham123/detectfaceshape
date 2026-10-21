import Link from "next/link";
import ToolWidget from "@/components/tools/ToolWidget";
import { Breadcrumbs, Byline, FaqList, JsonLd, Markdown, RelatedTools, Testimonials, readingTime } from "@/components/Page";
import Toc from "@/components/ui/Toc";
import CopyButton from "@/components/ui/CopyButton";
import { Icon } from "@/components/icons";
import type { Tool } from "@/lib/content/tools";
import { hubBySlug } from "@/lib/content/typeHubs";
import { NAV } from "@/lib/nav";
import { breadcrumbs, faqPage, graph, webApp } from "@/lib/schema";
import { seoFor } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { localePath, type Locale } from "@/lib/i18n/config";
import { liteFor, pageT } from "@/lib/i18n/server";

const STEPS_PHOTO = [
  { icon: "Upload", title: "Add a photo", text: "Upload a front-facing photo or turn on your camera." },
  { icon: "ScanFace", title: "AI measures your face", text: "478 landmarks are placed and measured right in your browser." },
  { icon: "Sparkles", title: "Get your result", text: "See your match, the measurements behind it and what to do next." },
] as const;
const STEPS_QUIZ = [
  { icon: "ListChecks", title: "Answer a few questions", text: "Use a mirror. Every answer takes a few seconds." },
  { icon: "Brain", title: "We score your answers", text: "Each answer adds points to the types it fits." },
  { icon: "Sparkles", title: "Get your result", text: "See your best match, your runners-up and a guide." },
] as const;

export default function ToolPage({ tool, children, hero, locale = "en" }: { tool: Tool; children?: React.ReactNode; hero?: React.ReactNode; locale?: Locale }) {
  const t = pageT(locale);
  const path = localePath(locale, tool.path);
  const home = localePath(locale, "/");
  const crumbs = tool.path === "/" ? [{ name: t("Home"), path: home }] : [{ name: t("Home"), path: home }, { name: t("Tools"), path: "/tools/" }, { name: tool.name, path }];
  const hub = tool.hub && tool.hub !== "face-shapes" ? hubBySlug(tool.hub) : null;
  const icon = NAV.flatMap((g) => g.items).find((i) => i.href === tool.path)?.icon ?? "Sparkles";
  const steps = tool.usesCamera ? STEPS_PHOTO : STEPS_QUIZ;
  const seo = seoFor(path);
  return (
    <article className="wrap tool-page" lang={locale === "en" ? undefined : locale}>
      <JsonLd data={graph({ ...webApp(tool.name, path, seo.description), inLanguage: locale }, faqPage(tool.faqs), breadcrumbs(crumbs))} />
      {tool.path !== "/" && <Breadcrumbs items={crumbs} label={t("Breadcrumb")} />}
      <header className="page-hero">
        <div className="page-hero-text">
          <span className="hero-badge"><Icon name={icon} size={18} /> {t(tool.forFun ? "Just for fun · Free" : "Free AI tool")}</span>
          <h1>{tool.h1}</h1>
          <p className="lead">{tool.intro}</p>
          <ul className="chips">
            <li><Icon name="ShieldCheck" size={16} /> {t(tool.usesCamera ? "Photo never uploaded" : "No photo needed")}</li>
            <li><Icon name="Zap" size={16} /> {t("Results in seconds")}</li>
            <li><Icon name="Lock" size={16} /> {t("No sign-up")}</li>
          </ul>
        </div>
        {hero}
      </header>

      <div className="tool-shell" id="tool">
        <ToolWidget slug={tool.slug} lite={liteFor(locale)} />
      </div>

      <section className="steps-section" aria-labelledby="how-it-works" data-reveal>
        <h2 id="how-it-works" className="section-title">{t("Get your result in 3 steps")}</h2>
        <div className="steps">
          {steps.map((s, i) => (
            <div key={s.title} className="step">
              <span className="step-num">{i + 1}</span>
              <Icon name={s.icon} size={26} className="step-icon" />
              <h3 className="step-title">{t(s.title)}</h3>
              <p>{t(s.text)}</p>
            </div>
          ))}
        </div>
      </section>

      {children}

      <div className="article-grid">
        <div className="content">
          <Byline readMinutes={readingTime(tool.body)} locale={locale} />
          <Markdown src={tool.body} />
          {tool.slug === "face-shape-quiz" && <EmbedSnippet locale={locale} />}
          {hub && (
            <p className="callout"><Icon name="BookOpen" size={18} /> {t("Want to learn about every type? Read our guide to")} <Link href={`/${hub.slug}/`} hrefLang={locale === "en" ? undefined : "en"}>{t(hub.name).toLowerCase()}</Link>.</p>
          )}
          <FaqList faqs={tool.faqs} title={t("Frequently asked questions")} />
        </div>
        <aside className="article-aside"><Toc /></aside>
      </div>
      <Testimonials locale={locale} />
      <RelatedTools slugs={tool.related} locale={locale} />
    </article>
  );
}

function EmbedSnippet({ locale }: { locale: Locale }) {
  const t = pageT(locale);
  const code = `<iframe src="${SITE.url}/embed/face-shape-quiz/" width="100%" height="640" style="border:0;max-width:720px" title="Face shape quiz" loading="lazy"></iframe>`;
  return (
    <section id="embed" className="embed-box">
      <h2>{t("Embed this quiz on your website")}</h2>
      <p>{t("Free for salons, barbers, stylists, eyewear shops and bloggers. Copy this code into your page:")}</p>
      <pre><code>{code}</code></pre>
      <CopyButton text={code} label={t("Copy embed code")} className="btn primary sm" />
    </section>
  );
}
