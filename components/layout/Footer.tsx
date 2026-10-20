import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { FACE_SHAPES } from "@/lib/content/faceShapes";
import { TYPE_HUBS } from "@/lib/content/typeHubs";
import { NAV } from "@/lib/nav";
import { SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const tools = NAV.slice(0, 4).flatMap((g) => g.items).filter((i) => i.href !== "/face-shapes/");
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-about">
          <Link href="/" className="logo"><Image src="/icon.svg" alt="" width={30} height={30} unoptimized /> <span>Face Shape <b>Detector</b></span></Link>
          <p>Free AI face analysis that runs on your own device. Find your face shape, then the haircuts, glasses and styles that suit it.</p>
          <p className="trust"><Icon name="ShieldCheck" size={16} /> Photos never uploaded</p>
          <p className="trust"><Icon name="Lock" size={16} /> No sign-up, no tracking of faces</p>
        </div>
        <div>
          <p className="footer-h">Tools</p>
          <ul>{tools.slice(0, 10).map((t) => <li key={t.href}><Link href={t.href}>{t.label}</Link></li>)}<li><Link href="/tools/">All tools →</Link></li></ul>
        </div>
        <div>
          <p className="footer-h">Face shapes</p>
          <ul>
            <li><Link href="/face-shapes/">Face shapes chart</Link></li>
            {FACE_SHAPES.map((s) => <li key={s.slug}><Link href={`/face-shapes/${s.slug}/`}>{s.name} face</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="footer-h">Guides</p>
          <ul>
            <li><Link href="/face-shapes/women/">Face shapes for women</Link></li>
            <li><Link href="/face-shapes/men/">Face shapes for men</Link></li>
            {TYPE_HUBS.map((h) => <li key={h.slug}><Link href={`/${h.slug}/`}>{h.name}</Link></li>)}
            <li><Link href="/blog/">Blog</Link></li>
          </ul>
          <p className="footer-h">Company</p>
          <ul>
            <li><Link href="/about/">About</Link></li>
            <li><Link href="/how-it-works/">How it works</Link></li>
            <li><Link href="/privacy/">Privacy policy</Link></li>
            <li><Link href="/authors/">Authors</Link></li>
            <li><a href={`mailto:${SITE.email}`}>Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {year} {SITE.name} ({SITE.domain}). All rights reserved.</p>
        <p>Results are estimates for style guidance and entertainment, not medical advice.</p>
      </div>
    </footer>
  );
}
