import Link from "next/link";
import type { ReactNode } from "react";
import type { Faq } from "@/lib/content/types";
import { md } from "@/lib/markdown";
import { SITE } from "@/lib/site";
import { TOOLS } from "@/lib/content/tools";

const toolText = (locale: Locale, slug: string) => toolFor(locale, slug);
import { NAV } from "@/lib/nav";
import { TESTIMONIALS } from "@/lib/content/testimonials";
import { Icon, type IconName } from "@/components/icons";
import { sizeOf } from "@/lib/images";
import { hrefIn, type Locale } from "@/lib/i18n/config";
import { pageT, toolFor } from "@/lib/i18n/server";

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function Breadcrumbs({ items, label = "Breadcrumb" }: { items: { name: string; path: string }[]; label?: string }) {
  return (
    <nav aria-label={label} className="crumbs">
      <ol>
        {items.map((it, i) => (
          <li key={it.path}>
            {i === 0 && <Icon name="House" size={14} />}
            {i < items.length - 1 ? <Link href={it.path}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}
            {i < items.length - 1 && <Icon name="ChevronRight" size={14} className="crumb-sep" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Markdown({ src, className = "prose" }: { src: string; className?: string }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: md(src) }} />;
}

export function FaqList({ faqs, title = "Frequently asked questions" }: { faqs: Faq[]; title?: string }) {
  if (!faqs.length) return null;
  return (
    <section className="faq" aria-labelledby="faq" data-reveal>
      <h2 id="faq"><Icon name="CircleHelp" size={24} className="h-icon" /> {title}</h2>
      {faqs.map((f, i) => (
        <details key={f.q} open={i === 0}>
          <summary>
            <span>{f.q}</span>
            <Icon name="ChevronDown" size={18} className="faq-chevron" />
          </summary>
          <div className="faq-body"><p>{f.a}</p></div>
        </details>
      ))}
    </section>
  );
}

const fmtDate = (d: string, locale: Locale = "en") =>
  new Date(d).toLocaleDateString({ en: "en-US", es: "es-ES", fr: "fr-FR", pt: "pt-BR" }[locale], { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

export function Byline({ updated = SITE.updated, readMinutes, locale = "en" }: { updated?: string; readMinutes?: number; locale?: Locale }) {
  const t = pageT(locale);
  return (
    <p className="byline">
      <span className="avatar" aria-hidden="true">AA</span>
      <span>
        {t("By")} <Link href={`/authors/${SITE.author.slug}/`} rel="author">{SITE.author.name}</Link>
      </span>
      <span className="byline-meta"><Icon name="CalendarDays" size={15} /> {t("Last updated")} <time dateTime={updated}>{fmtDate(updated, locale)}</time></span>
      {readMinutes ? <span className="byline-meta"><Icon name="Clock" size={15} /> {t("{n} min read", { n: readMinutes })}</span> : null}
    </p>
  );
}

export const readingTime = (...texts: string[]) => Math.max(2, Math.round(texts.join(" ").split(/\s+/).length / 220));

const toolIcon = (path: string): IconName => NAV.flatMap((g) => g.items).find((i) => i.href === path)?.icon ?? "Sparkles";

export function RelatedTools({ slugs, title, locale = "en" }: { slugs: string[]; title?: string; locale?: Locale }) {
  const t = pageT(locale);
  const tools = slugs.map((s) => TOOLS.find((t) => t.slug === s)).filter((t): t is NonNullable<typeof t> => Boolean(t));
  if (!tools.length) return null;
  return (
    <section className="related" data-reveal>
      <h2><Icon name="Zap" size={24} className="h-icon" /> {title ?? t("Related tools")}</h2>
      <div className="card-grid">
        {tools.map((tool) => <ToolCard key={tool.slug} name={toolText(locale, tool.slug).name} short={toolText(locale, tool.slug).short} path={tool.path} locale={locale} />)}
      </div>
    </section>
  );
}

export function ToolCard({ name, short, path, locale = "en" }: { name: string; short: string; path: string; locale?: Locale }) {
  return (
    <Link href={hrefIn(locale, path)} className="card tool-card">
      <span className="card-icon"><Icon name={toolIcon(path)} size={22} /></span>
      <strong>{name}</strong>
      <span>{short}</span>
      <span className="card-go">{pageT(locale)("Open tool")} <Icon name="ArrowRight" size={15} /></span>
    </Link>
  );
}

/** Real image file (WebP) with explicit size and descriptive alt text. */
/** A generated WebP with its real intrinsic size (no layout shift), lazy-loaded unless it's above the fold. */
export function Pic({ src, alt, priority = false, className }: { src: string; alt: string; priority?: boolean; className?: string }) {
  const { width, height } = sizeOf(src);
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} width={width} height={height} loading={priority ? "eager" : "lazy"} decoding="async" fetchPriority={priority ? "high" : undefined} className={className} />;
}

/** Image with descriptive alt text and an optional caption. */
export function Figure({ src, alt, caption, priority = false, className }: { src: string; alt: string; caption?: ReactNode; priority?: boolean; className?: string }) {
  return (
    <figure className={`figure ${className ?? ""}`}>
      <Pic src={src} alt={alt} priority={priority} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function KeyTakeaways({ items, locale = "en" }: { items: string[]; locale?: Locale }) {
  const t = pageT(locale);
  const title = t("Key takeaways");
  return (
    <aside className="takeaways" aria-label={title} data-reveal>
      <p className="takeaways-title"><Icon name="Lightbulb" size={18} /> {title}</p>
      <ul>{items.map((x) => <li key={x}>{x}</li>)}</ul>
    </aside>
  );
}

export function Testimonials({ locale = "en" }: { locale?: Locale }) {
  const t = pageT(locale);
  if (!TESTIMONIALS.length) {
    return (
      <section className="feedback-cta" data-reveal>
        <Icon name="MessageSquare" size={26} />
        <div>
          <h2>{t("Tried it? Tell us how it went")}</h2>
          <p>{t("We read every message and use your feedback to make the detector more accurate. Share your result, a suggestion or a bug.")}</p>
        </div>
        <a className="btn" href={`mailto:${SITE.email}?subject=Face%20Shape%20Detector%20feedback`}><Icon name="Mail" size={16} /> {t("Send feedback")}</a>
      </section>
    );
  }
  return (
    <section className="testimonials" data-reveal>
      <h2><Icon name="Users" size={24} className="h-icon" /> {t("What people say")}</h2>
      <div className="testimonial-grid">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name + t.quote.slice(0, 20)} className="testimonial">
            {t.rating && <div className="stars" aria-label={`${t.rating} out of 5 stars`}>{Array.from({ length: t.rating }, (_, i) => <Icon key={i} name="Star" size={16} />)}</div>}
            <blockquote><Icon name="Quote" size={20} className="quote-icon" /> {t.quote}</blockquote>
            <figcaption><strong>{t.name}</strong> · {t.context}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Section({ children }: { children: ReactNode }) {
  return <section className="section" data-reveal>{children}</section>;
}
