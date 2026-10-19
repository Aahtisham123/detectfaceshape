import type { Metadata } from "next";
import Link from "next/link";
import Shell from "@/components/layout/Shell";
import Footer from "@/components/layout/Footer";
import { Icon } from "@/components/icons";
import ShapeIllustration from "@/components/ShapeIllustration";

export const metadata: Metadata = { title: "Page Not Found (404)", robots: { index: false, follow: true } };

const POPULAR = [
  { href: "/", label: "Face Shape Detector", icon: "ScanFace" },
  { href: "/face-shapes/", label: "Face shapes chart", icon: "Shapes" },
  { href: "/face-shape-quiz/", label: "Face shape quiz", icon: "ListChecks" },
  { href: "/eye-shape-detector/", label: "Eye shape detector", icon: "Eye" },
  { href: "/blog/", label: "Guides & blog", icon: "FileText" },
] as const;

export default function NotFound() {
  return (
    <Shell footer={<Footer />}>
      <div className="wrap not-found">
        <div className="nf-art" aria-hidden="true">
          <span>4</span><ShapeIllustration shape="oval" size={120} /><span>4</span>
        </div>
        <h1>We couldn&apos;t find that page</h1>
        <p className="lead">The link may be old or mistyped. Try searching (press <kbd>⌘K</kbd>), or jump to one of these:</p>
        <ul className="nf-links">
          {POPULAR.map((p) => (
            <li key={p.href}><Link href={p.href} className="card"><Icon name={p.icon} size={20} /> {p.label}</Link></li>
          ))}
        </ul>
        <Link href="/" className="btn primary"><Icon name="House" size={16} /> Back to the homepage</Link>
      </div>
    </Shell>
  );
}
