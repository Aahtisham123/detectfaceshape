"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { LOCALE_META, LOCALES, TRANSLATED_PATHS, localePath, stripLocale, type Locale } from "@/lib/i18n/config";
import { useT } from "@/lib/i18n/client";

export const LANG_PREF_KEY = "fsd-lang";

/** Where a page lives in another language: its translation, or that language's homepage if it has none. */
export function equivalentPath(pathname: string, target: Locale) {
  const base = stripLocale(pathname);
  if (TRANSLATED_PATHS.has(base)) return localePath(target, base);
  return target === "en" ? base : localePath(target, "/");
}

const remember = (l: Locale) => {
  try {
    localStorage.setItem(LANG_PREF_KEY, l);
  } catch {}
};

export default function LanguageSwitcher() {
  const pathname = usePathname() ?? "/";
  const { locale, t } = useT();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const close = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  return (
    <div className="lang" ref={ref}>
      <button className="icon-btn lang-btn" aria-haspopup="true" aria-expanded={open} aria-label={t("Change language")} onClick={() => setOpen(!open)}>
        <Icon name="Globe" size={18} />
        <span className="lang-code">{locale.toUpperCase()}</span>
      </button>
      {open && (
        <ul className="lang-menu" role="menu">
          {LOCALES.map((l) => (
            <li key={l} role="none">
              <Link role="menuitem" hrefLang={LOCALE_META[l].hreflang} lang={LOCALE_META[l].htmlLang} href={equivalentPath(pathname, l)} className={l === locale ? "active" : undefined} aria-current={l === locale ? "true" : undefined} onClick={() => remember(l)}>
                <span aria-hidden="true">{LOCALE_META[l].flag}</span> {LOCALE_META[l].name}
                {l === locale && <Icon name="Check" size={16} />}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const SUGGEST: Record<Exclude<Locale, "en">, { text: string; cta: string; no: string }> = {
  es: { text: "Esta página está disponible en español.", cta: "Ver en español", no: "No, gracias" },
  fr: { text: "Cette page est disponible en français.", cta: "Voir en français", no: "Non merci" },
  pt: { text: "Esta página está disponível em português.", cta: "Ver em português", no: "Não, obrigado" },
};

/** One-time, dismissible suggestion based on the browser language. Never redirects (that hurts SEO and annoys travelers). */
export function LanguageSuggest() {
  const pathname = usePathname() ?? "/";
  const { locale } = useT();
  const [target, setTarget] = useState<Exclude<Locale, "en"> | null>(null);
  useEffect(() => {
    let pref: string | null = null;
    try {
      pref = localStorage.getItem(LANG_PREF_KEY);
    } catch {}
    if (pref || locale !== "en" || !TRANSLATED_PATHS.has(stripLocale(pathname))) return setTarget(null);
    const want = (navigator.languages ?? [navigator.language]).map((l) => l.slice(0, 2).toLowerCase()).find((l) => l in SUGGEST);
    setTarget((want as Exclude<Locale, "en">) ?? null);
  }, [pathname, locale]);
  if (!target) return null;
  const s = SUGGEST[target];
  return (
    <div className="lang-suggest" role="region" aria-label={s.text} lang={LOCALE_META[target].htmlLang}>
      <Icon name="Languages" size={20} />
      <span>{s.text}</span>
      <Link className="btn sm primary" href={equivalentPath(pathname, target)} onClick={() => remember(target)}>{s.cta}</Link>
      <button className="btn sm" onClick={() => { remember("en"); setTarget(null); }}>{s.no}</button>
    </div>
  );
}
