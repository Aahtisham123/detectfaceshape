"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { useT } from "@/lib/i18n/client";

/** t = title, p = path, d = description, s = section, l = language. */
type Entry = { t: string; p: string; d: string; s: string; l: string };

let cache: Promise<Entry[]> | null = null;
const load = () => (cache ??= fetch("/search-index.json").then((r) => r.json()).catch(() => ((cache = null), [])));

export function searchEntries(entries: Entry[], q: string) {
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return entries
    .map((e) => {
      const t = e.t.toLowerCase();
      const d = e.d.toLowerCase();
      let score = 0;
      for (const term of terms) {
        if (t.includes(term)) score += t.startsWith(term) ? 6 : 4;
        else if (d.includes(term)) score += 1;
        else return { e, score: 0 };
      }
      return { e, score: score + (e.s === "Tool" ? 1 : 0) };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map((x) => x.e);
}

export default function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const { t, locale } = useT();
  // Pages in the current language, plus English pages that have no translation yet.
  const scoped = useMemo(() => {
    const own = entries.filter((e) => e.l === locale);
    const ownPaths = new Set(own.map((e) => (locale === "en" ? e.p : e.p.slice(locale.length + 1))));
    return locale === "en" ? own : [...own, ...entries.filter((e) => e.l === "en" && !ownPaths.has(e.p))];
  }, [entries, locale]);

  useEffect(() => {
    if (!open) return;
    load().then(setEntries);
    setTimeout(() => input.current?.focus(), 30);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => searchEntries(scoped, q), [scoped, q]);
  useEffect(() => setSel(0), [q]);
  if (!open) return null;

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-panel" role="dialog" aria-modal="true" aria-label={t("Search")} onClick={(e) => e.stopPropagation()}>
        <div className="search-input">
          <Icon name="Search" size={20} />
          <input
            ref={input}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("Search: oval face, hooded eyes, golden ratio…")}
            aria-label={t("Search the site")}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") setSel((s) => Math.min(s + 1, results.length - 1));
              if (e.key === "ArrowUp") setSel((s) => Math.max(s - 1, 0));
              if (e.key === "Enter" && results[sel]) {
                window.location.href = results[sel].p;
              }
            }}
          />
          <button className="icon-btn" aria-label={t("Close search")} onClick={onClose}><Icon name="X" size={18} /></button>
        </div>
        <ul className="search-results">
          {q && !results.length && (
            <li className="search-empty"><Icon name="SearchX" size={22} /> {t("No results for “{q}”. Try “face shape” or “eyes”.", { q })}</li>
          )}
          {!q && <li className="search-empty"><Icon name="Lightbulb" size={20} /> {t("Try “heart face hairstyles”, “canthal tilt” or “undertone”.")}</li>}
          {results.map((r, i) => (
            <li key={r.p}>
              <Link href={r.p} className={i === sel ? "selected" : undefined} onClick={onClose} onMouseEnter={() => setSel(i)}>
                <span className="search-kind">{t(r.s)}</span>
                <strong>{r.t}</strong>
                <span className="search-desc">{r.d}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
