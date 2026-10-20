/**
 * Public origin used for canonicals, sitemap, Open Graph and JSON-LD.
 * Priority: NEXT_PUBLIC_SITE_URL (set this once the custom domain is live) → the Vercel production
 * domain (auto-set by Vercel, so canonicals always match where the site is actually served) → default.
 */
const ORIGIN = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "") ||
  "https://detectfaceshape.ai"
).replace(/\/$/, "");

export const SITE = {
  name: "Face Shape Detector",
  shortName: "Face Shape Detector",
  domain: ORIGIN.replace(/^https?:\/\//, ""),
  url: ORIGIN,
  description:
    "Free AI face shape detector and face analysis tools. Find your face, eye, nose and lip shape in seconds. Your photo never leaves your device.",
  author: {
    name: "Ahtisham Alam",
    slug: "ahtisham-alam",
    role: "Founder & editor",
    bio: "Ahtisham Alam builds Face Shape Detector and writes its guides. He works on on-device computer vision and turns facial-measurement research into plain-English advice on hair, glasses and grooming.",
  },
  updated: "2026-10-20",
  email: "hello@detectfaceshape.ai",
};

export const absUrl = (path: string) => `${SITE.url}${path}`;
