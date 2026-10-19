import Link from "next/link";
import type { ReactNode } from "react";

export function RankBars({ items, hrefFor, max = 5 }: { items: { key: string; pct: number; label: string }[]; hrefFor?: (key: string) => string; max?: number }) {
  return (
    <ol className="rank-bars">
      {items.slice(0, max).map((it, i) => (
        <li key={it.key} className={i === 0 ? "top" : undefined}>
          <span className="rank-label">{hrefFor ? <Link href={hrefFor(it.key)}>{it.label}</Link> : it.label}</span>
          <span className="rank-track" aria-hidden="true">
            <span className="rank-fill" style={{ width: `${Math.max(2, it.pct)}%` }} />
          </span>
          <span className="rank-pct">{Math.round(it.pct)}%</span>
        </li>
      ))}
    </ol>
  );
}

export function ScoreDial({ value, max = 100, label, suffix }: { value: number; max?: number; label: string; suffix?: string }) {
  const pct = Math.max(0, Math.min(1, value / max));
  const r = 52;
  const c = 2 * Math.PI * r;
  return (
    <figure className="dial">
      <svg viewBox="0 0 120 120" width="140" height="140" role="img" aria-label={`${label}: ${value}${suffix ?? ""}`}>
        <circle cx="60" cy="60" r={r} className="dial-track" />
        <circle cx="60" cy="60" r={r} className="dial-fill" strokeDasharray={`${c * pct} ${c}`} transform="rotate(-90 60 60)" />
        <text x="60" y="58" textAnchor="middle" className="dial-value">{value}{suffix}</text>
        <text x="60" y="78" textAnchor="middle" className="dial-max">{max === 100 ? "/ 100" : `/ ${max}`}</text>
      </svg>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

export function Meter({ label, value, note }: { label: string; value: number; note?: string }) {
  return (
    <div className="meter">
      <div className="meter-head">
        <span>{label}</span>
        <strong>{Math.round(value)}</strong>
      </div>
      <span className="rank-track" aria-hidden="true">
        <span className="rank-fill" style={{ width: `${Math.max(2, Math.min(100, value))}%` }} />
      </span>
      {note && <p className="meter-note">{note}</p>}
    </div>
  );
}

export function Traits({ items }: { items: string[] }) {
  return (
    <ul className="traits">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export function Warnings({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="warnings" role="note">
      <strong>For a more accurate reading:</strong>
      <ul>{items.map((w) => <li key={w}>{w}</li>)}</ul>
    </div>
  );
}

export function ResultHeader({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <header className="result-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="result-title">{title}</h2>
      {children}
    </header>
  );
}

export const fmt = (v: number, digits = 2) => (Number.isFinite(v) ? v.toFixed(digits) : "–");
