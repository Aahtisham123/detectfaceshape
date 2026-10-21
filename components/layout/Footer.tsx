"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { NAV } from "@/lib/nav";
import { SITE } from "@/lib/site";
import { TRANSLATED_SHAPE_SLUGS, localePath } from "@/lib/i18n/config";
import { useT } from "@/lib/i18n/client";

const SHAPE_NAMES: Record<string, string> = {
  oval: "Oval", round: "Round", square: "Square", oblong: "Oblong", rectangle: "Rectangle", heart: "Heart",
  diamond: "Diamond", triangle: "Triangle", "inverted-triangle": "Inverted Triangle", pear: "Pear",
};
const GUIDES = [
  { href: "/eye-shapes/", label: "Eye Shapes" },
  { href: "/nose-shapes/", label: "Nose Shapes" },
  { href: "/lip-shapes/", label: "Lip Shapes" },
  { href: "/head-shapes/", label: "Head Shapes" },
  { href: "/jawline-shapes/", label: "Jawline Shapes" },
  { href: "/kibbe-body-types/", label: "Kibbe Body Types" },
];

export default function Footer() {
  const { t, locale, href } = useT();
  const year = new Date().getFullYear();
  const tools = NAV.slice(0, 4).flatMap((g) => g.items).filter((i) => i.href !== "/face-shapes/");
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-about">
          <Link href={localePath(locale, "/")} className="logo"><Image src="/icon.svg" alt="" width={30} height={30} unoptimized /> <span>{t("Face Shape")} <b>{t("Detector")}</b></span></Link>
          <p>{t("Free AI face analysis that runs on your own device. Find your face shape, then the haircuts, glasses and styles that suit it.")}</p>
          <p className="trust"><Icon name="ShieldCheck" size={16} /> {t("Photos never uploaded")}</p>
          <p className="trust"><Icon name="Lock" size={16} /> {t("No sign-up, no tracking of faces")}</p>
        </div>
        <div>
          <p className="footer-h">{t("Tools")}</p>
          <ul>{tools.slice(0, 10).map((it) => <li key={it.href}><Link href={href(it.href)}>{t(it.label)}</Link></li>)}<li><Link href="/tools/">{t("All tools")} →</Link></li></ul>
        </div>
        <div>
          <p className="footer-h">{t("Face shapes")}</p>
          <ul>
            <li><Link href={href("/face-shapes/")}>{t("Face shapes chart")}</Link></li>
            {TRANSLATED_SHAPE_SLUGS.map((s) => <li key={s}><Link href={href(`/face-shapes/${s}/`)}>{t("{shape} face", { shape: t(SHAPE_NAMES[s]) })}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="footer-h">{t("Guides")}</p>
          <ul>
            <li><Link href="/face-shapes/women/">{t("Face shapes for women")}</Link></li>
            <li><Link href="/face-shapes/men/">{t("Face shapes for men")}</Link></li>
            {GUIDES.map((g) => <li key={g.href}><Link href={g.href}>{t(g.label)}</Link></li>)}
            <li><Link href="/blog/">{t("Blog")}</Link></li>
          </ul>
          <p className="footer-h">{t("Company")}</p>
          <ul>
            <li><Link href="/about/">{t("About")}</Link></li>
            <li><Link href="/how-it-works/">{t("How it works")}</Link></li>
            <li><Link href="/privacy/">{t("Privacy policy")}</Link></li>
            <li><Link href="/authors/">{t("Authors")}</Link></li>
            <li><a href={`mailto:${SITE.email}`}>{t("Contact")}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {year} {SITE.name} ({SITE.domain}). {t("All rights reserved.")}</p>
        <p>{t("Results are estimates for style guidance and entertainment, not medical advice.")}</p>
      </div>
    </footer>
  );
}
