"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";
import type { ToastDetail } from "@/lib/toast";

type Item = ToastDetail & { id: number };

export default function Toaster() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    let id = 0;
    const on = (e: Event) => {
      const item = { ...(e as CustomEvent<ToastDetail>).detail, id: ++id };
      setItems((xs) => [...xs.slice(-2), item]);
      setTimeout(() => setItems((xs) => xs.filter((x) => x.id !== item.id)), item.kind === "error" ? 6000 : 3500);
    };
    window.addEventListener("app-toast", on);
    return () => window.removeEventListener("app-toast", on);
  }, []);
  return (
    <div className="toaster" role="status" aria-live="polite">
      {items.map((t) => (
        <div key={t.id} className={`toast toast-${t.kind}`}>
          <Icon name={t.kind === "success" ? "CircleCheck" : t.kind === "error" ? "CircleAlert" : "Info"} size={20} />
          <span>{t.message}</span>
          <button aria-label="Dismiss" onClick={() => setItems((xs) => xs.filter((x) => x.id !== t.id))}><Icon name="X" size={16} /></button>
        </div>
      ))}
    </div>
  );
}
