"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icons";
import { slugify } from "@/lib/markdown";
import { useT } from "@/lib/i18n/client";

/** "On this page" list built from the article's H2s; highlights the section in view. */
export default function Toc() {
  const pathname = usePathname();
  const { t } = useT();
  const [items, setItems] = useState<{ id: string; text: string }[]>([]);
  const [active, setActive] = useState("");
  useEffect(() => {
    const hs = Array.from(document.querySelectorAll<HTMLHeadingElement>(".content h2"));
    hs.forEach((h) => (h.id ||= slugify(h.textContent ?? "")));
    setItems(hs.map((h) => ({ id: h.id, text: h.textContent ?? "" })));
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-20% 0px -70% 0px" });
    hs.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [pathname]);
  if (items.length < 3) return null;
  return (
    <details className="toc" open>
      <summary><Icon name="ListChecks" size={16} /> {t("On this page")}</summary>
      <ol>
        {items.map((it) => (
          <li key={it.id}><a href={`#${it.id}`} className={active === it.id ? "active" : undefined}>{it.text}</a></li>
        ))}
      </ol>
    </details>
  );
}
