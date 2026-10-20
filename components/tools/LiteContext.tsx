"use client";

import { createContext, useContext } from "react";
import type { Lite } from "@/lib/content/lite";

const LiteContext = createContext<Lite>({ shapes: [], hubs: {} });
export const LiteProvider = LiteContext.Provider;

export function useLite() {
  const lite = useContext(LiteContext);
  return {
    ...lite,
    shape: (slug: string) => lite.shapes.find((s) => s.slug === slug),
    shapeName: (slug: string) => lite.shapes.find((s) => s.slug === slug)?.name ?? slug,
    hub: (slug: string) => lite.hubs[slug],
  };
}
