import Link from "next/link";
import { TOOLS } from "@/lib/content/tools";
import { TYPE_HUBS } from "@/lib/content/typeHubs";
import { FACE_SHAPES } from "@/lib/content/faceShapes";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "/", label: "Face Shape Detector" },
  { href: "/face-shapes/", label: "Face Shapes" },
  { href: "/eye-shape-detector/", label: "Eyes" },
  { href: "/nose-shape-detector/", label: "Nose" },
  { href: "/lip-shape-analyzer/", label: "Lips" },
  { href: "/tools/", label: "All tools" },
  { href: "/blog/", label: "Blog" },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link href="/" className="logo" aria-label={`${SITE.name} home`}>
            <svg width="26" height="30" viewBox="0 0 26 30" aria-hidden="true"><ellipse cx="13" cy="15" rx="11" ry="14" fill="none" stroke="currentColor" strokeWidth="2.4" /><path d="M2 13h22" stroke="#f5b84b" strokeWidth="2" /></svg>
            <span>DetectFaceShape<span className="logo-ai">.ai</span></span>
          </Link>
          <nav aria-label="Main" className="main-nav">
            {NAV.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
          </nav>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <p className="footer-brand">{SITE.name}</p>
            <p>Free face analysis tools that run on your device. Your photos are never uploaded.</p>
            <p><Link href="/about/">About</Link> · <Link href="/how-it-works/">How it works</Link> · <Link href="/privacy/">Privacy</Link> · <Link href={`/authors/${SITE.author.slug}/`}>Author</Link></p>
          </div>
          <div>
            <p className="footer-h">Tools</p>
            <ul>{TOOLS.map((t) => <li key={t.slug}><Link href={t.path}>{t.name}</Link></li>)}</ul>
          </div>
          <div>
            <p className="footer-h">Face shapes</p>
            <ul>{FACE_SHAPES.map((s) => <li key={s.slug}><Link href={`/face-shapes/${s.slug}/`}>{s.name} face</Link></li>)}</ul>
          </div>
          <div>
            <p className="footer-h">Guides</p>
            <ul>
              <li><Link href="/face-shapes/">Face shapes chart</Link></li>
              <li><Link href="/face-shapes/women/">Face shapes for women</Link></li>
              <li><Link href="/face-shapes/men/">Face shapes for men</Link></li>
              {TYPE_HUBS.map((h) => <li key={h.slug}><Link href={`/${h.slug}/`}>{h.name}</Link></li>)}
              <li><Link href="/blog/">Blog</Link></li>
            </ul>
          </div>
        </div>
        <p className="wrap fine">© {new Date(SITE.updated).getFullYear()} {SITE.name}. Results are estimates for style guidance and entertainment, not medical advice.</p>
      </footer>
    </>
  );
}
