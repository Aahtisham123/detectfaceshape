import { marked } from "marked";

marked.setOptions({ gfm: true });

/** Renders our own trusted markdown content (never user input) to HTML at build time. */
export function md(src: string) {
  return marked.parse(src, { async: false }) as string;
}
