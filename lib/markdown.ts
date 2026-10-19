import { Marked } from "marked";

export const slugify = (s: string) =>
  s.toLowerCase().replace(/<[^>]+>/g, "").replace(/&[a-z#0-9]+;/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const marked = new Marked({
  gfm: true,
  renderer: {
    // Anchor ids on headings power the table of contents and deep links.
    heading({ tokens, depth }) {
      const html = this.parser.parseInline(tokens);
      return `<h${depth} id="${slugify(html)}">${html}</h${depth}>\n`;
    },
    // Wide tables scroll inside their own box instead of overflowing the page on phones.
    table(token) {
      const head = token.header.map((c) => `<th>${this.parser.parseInline(c.tokens)}</th>`).join("");
      const rows = token.rows.map((r) => `<tr>${r.map((c) => `<td>${this.parser.parseInline(c.tokens)}</td>`).join("")}</tr>`).join("");
      return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>\n`;
    },
  },
});

/** Renders our own trusted markdown content (never user input) to HTML at build time. */
export function md(src: string) {
  return marked.parse(src, { async: false }) as string;
}
