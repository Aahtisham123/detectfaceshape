// Header/sidebar/footer/search strings for every language. Small, so it ships with every page.
import type { Locale } from "./config";
import type { Dict } from "./translate";
import { chrome as es } from "./es/chrome";
import { chrome as fr } from "./fr/chrome";
import { chrome as pt } from "./pt/chrome";

export const CHROME: Record<Locale, Dict> = { en: {}, es, fr, pt };
