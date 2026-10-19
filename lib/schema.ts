import { SITE, absUrl } from "./site";
import type { Faq } from "./content/types";

export const organization = () => ({
  "@type": "Organization",
  "@id": `${SITE.url}/#org`,
  name: SITE.name,
  url: SITE.url,
  logo: absUrl("/icon.svg"),
});

export const person = () => ({
  "@type": "Person",
  "@id": `${SITE.url}/authors/${SITE.author.slug}/#person`,
  name: SITE.author.name,
  url: absUrl(`/authors/${SITE.author.slug}/`),
  jobTitle: SITE.author.role,
});

export const breadcrumbs = (items: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absUrl(it.path) })),
});

export const faqPage = (faqs: Faq[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const webApp = (name: string, path: string, description: string) => ({
  "@type": "WebApplication",
  name,
  url: absUrl(path),
  description,
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Any (runs in the browser)",
  browserRequirements: "Requires JavaScript and WebAssembly",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@id": `${SITE.url}/#org` },
});

export const article = (a: { title: string; description: string; path: string; published: string; modified?: string; image?: string }) => ({
  "@type": "Article",
  headline: a.title,
  description: a.description,
  mainEntityOfPage: absUrl(a.path),
  datePublished: a.published,
  dateModified: a.modified ?? a.published,
  author: person(),
  publisher: organization(),
  image: a.image ? absUrl(a.image) : undefined,
});

export const graph = (...nodes: object[]) => ({ "@context": "https://schema.org", "@graph": nodes });
