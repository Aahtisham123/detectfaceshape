"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icons";

/** Thin reading-progress bar under the sticky header. */
export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? h.scrollTop / max : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  return <div className="scroll-progress" style={{ transform: `scaleX(${p})` }} aria-hidden="true" />;
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button className={`back-to-top${show ? " show" : ""}`} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} tabIndex={show ? 0 : -1}>
      <Icon name="ArrowUp" size={20} />
    </button>
  );
}

const CONSENT_KEY = "fsd-cookie-consent";

/** We only use essential storage; the banner records the visitor's choice for any future analytics. */
export function CookieBanner() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setOpen(true);
    } catch {
      // Storage blocked: don't nag.
    }
  }, []);
  const choose = (v: "accepted" | "essential") => {
    try {
      localStorage.setItem(CONSENT_KEY, v);
    } catch {}
    setOpen(false);
  };
  if (!open) return null;
  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie preferences">
      <Icon name="Cookie" size={22} />
      <p>
        We use only essential storage to run this site. Your photos never leave your device. <a href="/privacy/">Privacy policy</a>
      </p>
      <div className="cookie-actions">
        <button className="btn sm" onClick={() => choose("essential")}>Essential only</button>
        <button className="btn sm primary" onClick={() => choose("accepted")}>Accept</button>
      </div>
    </div>
  );
}

/** Fades sections in as they scroll into view (skipped when the user prefers reduced motion). */
export function RevealOnScroll() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.revealed)"));
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("revealed"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          io.unobserve(e.target);
        }
      }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
