"use client";

import { createContext, useContext, useMemo } from "react";
import { usePathname } from "next/navigation";
import { hrefIn, localeFromPath, type Locale } from "./config";
import { tr, type Dict } from "./translate";
import { CHROME } from "./chrome";

/** Extra strings for the current page's widget (passed from the server so other languages aren't bundled). */
const WidgetDict = createContext<Dict>({});
export const WidgetDictProvider = WidgetDict.Provider;

/** Language from the URL, a translator for UI strings, and a helper for language-aware links. */
export function useT() {
  const locale: Locale = localeFromPath(usePathname() ?? "/");
  const widget = useContext(WidgetDict);
  return useMemo(() => {
    const chrome = CHROME[locale];
    const t = (s: string, vars?: Record<string, string | number>) => tr(s in widget ? widget : chrome, s, vars);
    return { locale, t, href: (path: string) => hrefIn(locale, path) };
  }, [locale, widget]);
}
