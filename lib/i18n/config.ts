// Languages. English lives at the root; the others under /es/, /fr/ and /pt/.
export const LOCALES = ["en", "es", "fr", "pt"] as const;
export type Locale = (typeof LOCALES)[number];
export const OTHER_LOCALES = LOCALES.filter((l) => l !== "en") as Exclude<Locale, "en">[];

export const LOCALE_META: Record<Locale, { name: string; english: string; hreflang: string; htmlLang: string; og: string; flag: string }> = {
  en: { name: "English", english: "English", hreflang: "en", htmlLang: "en-US", og: "en_US", flag: "🇺🇸" },
  es: { name: "Español", english: "Spanish", hreflang: "es", htmlLang: "es", og: "es_ES", flag: "🇪🇸" },
  fr: { name: "Français", english: "French", hreflang: "fr", htmlLang: "fr", og: "fr_FR", flag: "🇫🇷" },
  pt: { name: "Português", english: "Portuguese", hreflang: "pt-BR", htmlLang: "pt-BR", og: "pt_BR", flag: "🇧🇷" },
};

/** Pages that exist in every language (English paths). Kept as plain lists so client code can use them cheaply. */
export const TRANSLATED_TOOL_SLUGS = [
  "face-shape-quiz", "face-shape-calculator", "eye-shape-detector", "nose-shape-detector", "lip-shape-analyzer",
  "face-symmetry-test", "golden-ratio-face", "attractiveness-test", "how-old-do-i-look", "head-shape-detector",
  "jawline-analyzer", "skin-undertone-test", "color-analysis", "foundation-shade-finder", "kibbe-body-type-test",
  "canthal-tilt-calculator", "facial-proportions-calculator", "face-comparison",
];
export const TRANSLATED_SHAPE_SLUGS = ["oval", "round", "square", "oblong", "rectangle", "heart", "diamond", "triangle", "inverted-triangle", "pear"];
export const TRANSLATED_PATHS = new Set([
  "/",
  "/face-shapes/",
  ...TRANSLATED_TOOL_SLUGS.map((s) => `/${s}/`),
  ...TRANSLATED_SHAPE_SLUGS.map((s) => `/face-shapes/${s}/`),
]);

export const isLocale = (s: string): s is Locale => (LOCALES as readonly string[]).includes(s);

/** "/es/face-shapes/" → "es"; anything without a prefix is English. */
export function localeFromPath(pathname: string): Locale {
  const first = pathname.split("/")[1];
  return first && isLocale(first) && first !== "en" ? first : "en";
}

/** Removes the language prefix: "/es/face-shapes/" → "/face-shapes/". */
export function stripLocale(pathname: string) {
  const l = localeFromPath(pathname);
  return l === "en" ? pathname : pathname.slice(l.length + 1) || "/";
}

export const localePath = (locale: Locale, path: string) => (locale === "en" ? path : `/${locale}${path}`);

/** Link target for an English path in a given language: translated version if it exists, otherwise the English page. */
export const hrefIn = (locale: Locale, path: string) => (TRANSLATED_PATHS.has(path.split("#")[0]) ? localePath(locale, path) : path);
