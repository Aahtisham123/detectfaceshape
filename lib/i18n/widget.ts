// Tool UI strings per language. Server-only import: pages pass just their language's dictionary to the client.
import type { Locale } from "./config";
import type { Dict } from "./translate";
import { widget as es } from "./es/widget";
import { widget as fr } from "./fr/widget";
import { widget as pt } from "./pt/widget";

export const WIDGET: Record<Locale, Dict> = { en: {}, es, fr, pt };
