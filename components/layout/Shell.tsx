"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { Icon } from "@/components/icons";
import { NAV } from "@/lib/nav";
import { SITE } from "@/lib/site";
import SearchDialog from "./SearchDialog";
import Toaster from "@/components/ui/Toaster";
import { BackToTop, CookieBanner, RevealOnScroll, ScrollProgress } from "@/components/ui/Chrome";

export default function Shell({ children, footer }: { children: ReactNode; footer: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <button className="icon-btn menu-btn" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="sidebar" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
          <Link href="/" className="logo" aria-label={`${SITE.name}, home`}>
            <Image src="/icon.svg" alt="" width={32} height={32} priority unoptimized />
            <span>Face Shape <b>Detector</b></span>
          </Link>
          <button className="search-trigger" onClick={() => setSearchOpen(true)} aria-label="Search the site">
            <Icon name="Search" size={18} />
            <span className="search-placeholder">Search tools and guides…</span>
            <kbd>⌘K</kbd>
          </button>
          <Link href="/#tool" className="btn primary sm header-cta"><Icon name="ScanFace" size={16} /> Try it free</Link>
        </div>
        <ScrollProgress />
      </header>

      <div className="layout">
        <aside id="sidebar" className={`sidebar${menuOpen ? " open" : ""}`} aria-label="Site navigation">
          <nav>
            {NAV.map((g) => (
              <div key={g.title} className="nav-group">
                <p className="nav-title">{g.title}</p>
                <ul>
                  {g.items.map((it) => {
                    const active = it.href === "/" ? pathname === "/" : pathname.startsWith(it.href);
                    return (
                      <li key={it.href}>
                        <Link href={it.href} className={active ? "active" : undefined} aria-current={active ? "page" : undefined}>
                          <Icon name={it.icon} size={18} />
                          <span>{it.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
          <div className="sidebar-note">
            <Icon name="ShieldCheck" size={18} />
            <span>Photos are analyzed on your device and never uploaded.</span>
          </div>
        </aside>
        {menuOpen && <button className="scrim" aria-label="Close menu" onClick={() => setMenuOpen(false)} />}

        <div className="layout-main">
          <main id="main" tabIndex={-1}>{children}</main>
          {footer}
        </div>
      </div>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
      <BackToTop />
      <CookieBanner />
      <Toaster />
      <RevealOnScroll />
    </>
  );
}
