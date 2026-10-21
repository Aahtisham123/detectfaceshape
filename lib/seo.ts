// Single source of truth for every page's <title>, meta description, section and image.
// Titles stay ≤ 50 characters and descriptions ≤ 143 (enforced in tests/seo.test.ts).
import { FACE_SHAPES } from "./content/faceShapes";
import { availableTopics } from "./content/faceShapeTopics";
import { TYPE_HUBS } from "./content/typeHubs";
import { TOOLS } from "./content/tools";
import { POSTS } from "./content/blog";
import { IMG, ILLUSTRATED_HUBS } from "./images";
import { OTHER_LOCALES, localePath, type Locale } from "./i18n/config";
import { contentFor, pageT } from "./i18n/server";

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  section: "Tool" | "Face shape" | "Guide" | "Blog" | "Page";
  /** Page language (English when omitted). */
  locale?: Locale;
  /** Main illustration (WebP) shown on the page and listed in the image sitemap. */
  image?: string;
  imageAlt?: string;
};

export const HOME_TITLE = "AI Face Shape Detector 2026 | What is My Face Shape?";

const TOOL_SEO: Record<string, [string, string]> = {
  "face-shape-detector": [HOME_TITLE, "Find your face shape in seconds with our free AI face shape detector. 478-point analysis runs in your browser; photos are never uploaded."],
  "face-shape-quiz": ["Face Shape Quiz: What Face Shape Do I Have?", "Take our free 7-question face shape quiz. No photo or camera needed: answer a few mirror questions and see your face shape in a minute."],
  "face-shape-calculator": ["Face Shape Calculator (Enter Measurements)", "Enter your forehead, cheekbone, jaw and face length measurements and our face shape calculator tells you which of the 10 shapes you are."],
  "eye-shape-detector": ["Eye Shape Detector: What Is My Eye Shape?", "Find your eye shape from a photo: almond, round, hooded, monolid, upturned or downturned, plus eye spacing and canthal tilt. Free and private."],
  "nose-shape-detector": ["Nose Shape Detector: What Is My Nose Type?", "Find your nose shape from a photo: Greek, Roman, Nubian, hawk, button, snub, celestial or fleshy. Measures width, length and tip angle."],
  "lip-shape-analyzer": ["Lip Shape Analyzer: What Lip Shape Do I Have?", "Find your lip shape from a photo: full, thin, heart, bow, top-heavy, bottom-heavy, wide or round. Measures fullness, ratio and Cupid's bow."],
  "face-symmetry-test": ["Face Symmetry Test: How Symmetrical Am I?", "Test your facial symmetry free. We mirror 37 landmark pairs across your midline and score your eyes, brows, nose, mouth, cheeks and jaw."],
  "golden-ratio-face": ["Golden Ratio Face Calculator (Free Test)", "How close is your face to the golden ratio of 1.618? Measure 7 classic facial ratios from one photo and see a score for each. Free and private."],
  "attractiveness-test": ["Attractiveness Test: Rate My Face (For Fun)", "A just-for-fun AI face rating out of 10 based on symmetry, golden ratio, facial thirds, canthal tilt and jawline. Photos stay on your device."],
  "how-old-do-i-look": ["How Old Do I Look? Free AI Age Guesser", "Upload a selfie and our on-device AI guesses how old you look. Free, instant and private: your photo is never uploaded or stored."],
  "head-shape-detector": ["Head Shape Detector: What Is My Head Shape?", "Find your head shape (round, oval, long, square, flat back or egg) with a quick guided check, plus the haircuts that suit it best."],
  "jawline-analyzer": ["Jawline Analyzer: Measure & Rate Your Jawline", "Measure your jaw angle, jaw width and chin from a photo. Find your jawline type and get a definition score. Free, instant and private."],
  "skin-undertone-test": ["Skin Undertone Test: Warm, Cool or Neutral?", "Find your skin undertone (warm, cool, neutral or olive) with a 6-question quiz and an optional photo color check. See the colors that suit you."],
  "color-analysis": ["Seasonal Color Analysis Quiz: What Season Am I?", "Find your color season (Spring, Summer, Autumn or Winter) and sub-season with a free 8-question color analysis quiz and palette."],
  "foundation-shade-finder": ["Foundation Shade Finder: Match Your Shade", "Find your foundation shade by depth and undertone in 5 questions. Learn shade codes (W, C, N, O) and how to test a match in daylight."],
  "kibbe-body-type-test": ["Kibbe Body Type Test: Find Your Kibbe Type", "Take our free Kibbe test. Answer 12 questions about your bone structure, body and face to find which of the 13 Kibbe body types you are."],
  "canthal-tilt-calculator": ["Canthal Tilt Calculator: Positive or Negative?", "Measure your canthal tilt in degrees from a photo. See if each eye has a positive, neutral or negative tilt. Free, instant, on-device."],
  "facial-proportions-calculator": ["Facial Proportions Calculator: Thirds & Fifths", "Measure your facial thirds and the rule of fifths from one photo. See how your upper, middle and lower face compare. Free and private."],
  "face-comparison": ["Face Comparison: How Similar Are Two Faces?", "Compare two faces and get a similarity score based on facial geometry. Compare siblings, parents and kids, or friends. Runs in your browser."],
};

const SHAPE_SEO: Record<string, [string, string]> = {
  oval: ["Oval Face Shape: Hairstyles, Glasses & Traits", "An oval face is about 1.5× longer than wide with soft, balanced angles. How to tell if you're oval, plus the best haircuts and glasses."],
  round: ["Round Face Shape: Best Haircuts & Glasses", "A round face is almost as wide as it is long with full cheeks and a soft jaw. How to tell, plus slimming haircuts, glasses and beards."],
  square: ["Square Face Shape: Traits, Haircuts & Glasses", "A square face has a strong, angular jaw and even widths. How to tell, plus the best hairstyles, glasses and beards for square faces."],
  oblong: ["Oblong Face Shape (Long Face): Style Guide", "An oblong face is long and narrow with a rounded jaw. How to tell, plus hairstyles, glasses and beards that add width to long faces."],
  rectangle: ["Rectangle Face Shape: Traits & Hairstyles", "A rectangle face is long with a sharp, square jaw. How it differs from oblong, plus the best haircuts, glasses and beards."],
  heart: ["Heart Face Shape: Hairstyles, Glasses & Traits", "A heart face has a wide forehead, high cheekbones and a narrow chin. How to tell, plus the most flattering hairstyles and glasses."],
  diamond: ["Diamond Face Shape: Traits, Hairstyles & Glasses", "A diamond face has wide cheekbones with a narrow forehead and jaw. How to tell, plus hairstyles and glasses for diamond faces."],
  triangle: ["Triangle Face Shape: Hairstyles & Glasses", "A triangle face has a jaw wider than the forehead. How to tell, plus the haircuts and glasses that balance a wide jawline."],
  "inverted-triangle": ["Inverted Triangle Face Shape: Style Guide", "An inverted triangle face is widest at the forehead with an angular, narrow jaw. How it differs from heart, plus hairstyles and glasses."],
  pear: ["Pear Face Shape: Traits, Hairstyles & Glasses", "A pear face has a full, wide jaw and a narrower forehead. How to tell, plus the haircuts and glasses that flatter pear-shaped faces."],
};

const HUB_SEO: Record<string, [string, string]> = {
  "eye-shapes": ["Types of Eye Shapes: Chart of All 10 Eye Shapes", "A visual chart of the 10 eye shapes: almond, round, hooded, monolid, upturned, downturned, deep-set and more. Learn how to tell yours."],
  "nose-shapes": ["Types of Nose Shapes: 9 Nose Types With Chart", "A chart of nose shapes: Greek, Roman, Nubian, hawk, button, snub, celestial, fleshy and bumpy. Learn how to identify your nose type."],
  "lip-shapes": ["Types of Lip Shapes: Lip Shape Chart & Guide", "A lip shape chart: full, thin, heart, bow, top-heavy, bottom-heavy, wide, round and downturned lips, with makeup tips for each."],
  "head-shapes": ["Types of Head Shapes: Round, Oval, Long & More", "Head shapes explained: round, oval, long, square, flat back and egg-shaped. How to check yours and which haircuts suit each one."],
  "jawline-shapes": ["Jawline Types: Square, V-Shaped, Rounded & More", "Jawline types explained: square, rounded, V-shaped, pointed, wide and narrow. Learn what defines each and how to measure yours."],
  "kibbe-body-types": ["Kibbe Body Types: All 13 Types Explained", "All 13 Kibbe body types explained by yin and yang balance: Dramatic, Natural, Classic, Gamine and Romantic families, with style lines."],
};

const POST_SEO: Record<string, [string, string]> = {
  "rectangle-vs-oblong-face-shape": ["Rectangle vs Oblong Face Shape: Key Differences", "Rectangle and oblong faces are both long. The difference is the jaw: rectangle is angular, oblong is rounded. How to tell and style each."],
  "facial-structure-types": ["Facial Structure Types Explained", "What is facial structure? The main types (bone structure, face shape, jawline and cheekbones) and how to identify your own."],
  "oblong-face-hairstyles-men": ["Best Haircuts for Oblong Faces (Men)", "10 men's haircuts for oblong (long) faces that add width and reduce length, plus the beard styles that work and the cuts to avoid."],
  "oblong-face-hairstyles-women": ["Hairstyles for Oblong Faces (Women): 12 Cuts", "12 flattering hairstyles for women with oblong faces: bangs, bobs, waves and layers that add width, plus the styles to avoid."],
  "oval-vs-oblong-face-shape": ["Oval vs Oblong Face Shape: How to Tell", "Oval and oblong faces look similar. The difference is length and taper. A 30-second test to tell which one you have."],
  "kibbe-body-types-chart": ["Kibbe Body Types Chart: All 13 at a Glance", "A complete Kibbe chart with all 13 types, their yin and yang balance, frame, facial features and style lines in one table."],
  "pixie-cut-face-shape": ["Pixie Cuts by Face Shape: Which One Suits You?", "Which pixie cut suits your face shape? The best pixie for oval, round, square, heart, oblong, diamond and pear faces."],
  "hairstyles-for-round-face-women": ["Hairstyles for Round Faces (Women): 12 Cuts", "12 slimming hairstyles for women with round faces, from long layers to asymmetrical lobs, plus the cuts to avoid."],
  "what-face-shape-has-high-cheekbones": ["What Face Shape Has High Cheekbones?", "Diamond, heart and oval faces most often have high cheekbones. How to tell if yours are high, and how high differs from wide."],
  "most-attractive-face-shape": ["Most Attractive Face Shape (Men & Women)", "Is there a most attractive face shape? What research says about oval faces, strong jawlines, symmetry and averageness."],
  "round-face-hairstyles-men": ["Round Face Hairstyles for Men: 10 Cuts", "10 men's haircuts for round faces that add height and angles, from pompadours to undercuts, plus beards that define the jaw."],
  "roman-vs-greek-nose": ["Roman vs Greek Nose: What's the Difference?", "A Greek nose is perfectly straight; a Roman nose curves outward at the bridge. See the differences, examples and how to tell yours."],
  "snub-nose-vs-button-nose": ["Snub Nose vs Button Nose: How to Tell", "Snub and button noses are both short. A snub nose is clearly upturned; a button nose is small and round. Here's how to tell."],
  "celebrities-with-oval-faces": ["Celebrities With Oval Faces & Their Styles", "Famous women and men with oval faces, from Beyoncé to George Clooney, and the hairstyles and glasses you can copy from them."],
  "celebrities-with-long-faces": ["Celebrities With Long (Oblong) Faces", "Famous people with long, oblong faces, from Sarah Jessica Parker to Benedict Cumberbatch, and the styles that balance length."],
  "how-to-measure-your-face": ["How to Measure Your Face Shape (Step by Step)", "How to measure your face for face shape: forehead, cheekbones, jawline and face length with a tape, and how to read the numbers."],
  "rarest-face-shape": ["What Is the Rarest Face Shape?", "Diamond is usually called the rarest face shape. Why it's rare, what our detector data shows, and which other shapes are uncommon."],
  "heart-vs-diamond-face-shape": ["Heart vs Diamond Face Shape: How to Tell", "Heart and diamond faces both taper to a small chin. The difference is forehead width. How to tell them apart and style each."],
  "diamond-vs-oval-face-shape": ["Diamond vs Oval Face Shape: How to Tell", "Diamond and oval faces are both widest at the cheekbones. How to tell them apart in seconds and how the styling differs."],
  "aquiline-vs-roman-nose": ["Aquiline vs Roman Nose: The Difference", "Aquiline and Roman noses both curve outward. Aquiline (hawk) noses are more hooked with a downturned tip. Here's how to tell."],
  "does-losing-weight-change-your-face-shape": ["Does Losing Weight Change Your Face Shape?", "Weight loss changes how your face shape looks by reducing fat in the cheeks and jaw, but not your bone structure. What changes and why."],
  "does-invisalign-change-your-face": ["Does Invisalign Change Your Face Shape?", "Invisalign and braces can subtly change lips and profile by moving teeth, but not your bone structure or face shape. What to expect."],
};

const TOPIC_SEO = {
  "hairstyles-women": (n: string) => [`${n} Face Hairstyles for Women`, `The most flattering hairstyles for women with ${n.toLowerCase()} faces, why each one works, and the cuts to avoid.`],
  "hairstyles-men": (n: string) => [`${n} Face Haircuts & Beards for Men`, `The best men's haircuts and beard styles for ${n.toLowerCase()} faces, why they work, and what to avoid.`],
  celebrities: (n: string) => [`Celebrities With ${n} Faces`, `Famous women and men often described as having ${n.toLowerCase()} faces, and the styling lessons you can take from them.`],
  glasses: (n: string) => [`Best Glasses for ${n} Faces`, `Which glasses and sunglasses suit ${n.toLowerCase()} faces, why each frame works, and the frames to avoid.`],
} as const;

const ITEM_TITLE: Record<string, (name: string) => string> = {
  "eye-shapes": (n) => `${n}: Traits & Makeup Tips`,
  "nose-shapes": (n) => `${n}: Traits, Examples & How to Tell`,
  "lip-shapes": (n) => `${n}: Traits & Makeup Tips`,
  "head-shapes": (n) => `${n} Shape: Traits & Best Haircuts`,
  "jawline-shapes": (n) => `${n}: Traits & How to Tell`,
  "kibbe-body-types": (n) => `Kibbe ${n}: Traits & Style Guide`,
};

const ITEM_SUFFIX: Record<string, string> = {
  "eye-shapes": "See the traits, celebrity examples and makeup tips.",
  "nose-shapes": "See the traits, examples and how to tell yours.",
  "lip-shapes": "See the traits and the makeup tips that suit it.",
  "head-shapes": "See how to check yours and which haircuts suit it.",
  "jawline-shapes": "See what defines it and how to measure your own.",
  "kibbe-body-types": "See its key traits and the style lines that suit it.",
};

/** Trims to the last whole word that fits, so generated descriptions never cut mid-word. */
export const fit = (s: string, max: number) => {
  if (s.length <= max) return s;
  const cut = s.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:]$/, "") + "…";
};

const STATIC: PageSeo[] = [
  { path: "/tools/", title: "Free AI Face Analysis Tools", description: "Every free face analysis tool in one place: face shape, eyes, nose, lips, symmetry, golden ratio, undertone, color analysis and more.", section: "Page" },
  { path: "/face-shapes/", title: "Face Shapes: Chart of All 10 Face Shapes", description: "See all 10 face shapes in one chart: oval, round, square, oblong, rectangle, heart, diamond, triangle, inverted triangle and pear.", section: "Face shape", image: IMG.faceChart, imageAlt: "Chart of the 10 face shapes with forehead, cheekbone and jaw width lines" },
  { path: "/face-shapes/women/", title: "Face Shapes for Women: Styles for Each", description: "Find your face shape and the most flattering haircuts, bangs, glasses and makeup for each of the 10 face shapes for women.", section: "Face shape", image: IMG.faceChart, imageAlt: "The 10 face shapes for women" },
  { path: "/face-shapes/men/", title: "Face Shapes for Men: Haircuts & Beards", description: "Find your face shape and the best haircuts, beard styles and glasses for each of the 10 face shapes for men.", section: "Face shape", image: IMG.faceChart, imageAlt: "The 10 face shapes for men" },
  { path: "/blog/", title: "Face Shape & Style Guides", description: "Plain-English guides to face shapes, hairstyles, glasses, nose, eye and lip shapes, and how facial features change over time.", section: "Page" },
  { path: "/about/", title: "About Face Shape Detector", description: "Who builds Face Shape Detector, why we made it, and how our on-device AI keeps every photo private on your own device.", section: "Page" },
  { path: "/how-it-works/", title: "How Our Face Shape Detector Works", description: "Our methodology: on-device landmark detection, head-pose correction, calibration on real faces, and how every shape is scored.", section: "Page" },
  { path: "/privacy/", title: "Privacy Policy", description: "Your photos never leave your device. How Face Shape Detector handles photos, camera access, cookies and data.", section: "Page" },
  { path: "/authors/", title: "Authors", description: "Meet the people who write, test and review the guides and tools on Face Shape Detector.", section: "Page" },
  { path: "/authors/ahtisham-alam/", title: "Ahtisham Alam, Founder & Editor", description: "Ahtisham Alam builds Face Shape Detector and writes its guides on face shapes, facial features, hair and glasses.", section: "Page" },
];

export function allPages(): PageSeo[] {
  const pages: PageSeo[] = [];
  for (const t of TOOLS) {
    const [title, description] = TOOL_SEO[t.slug];
    pages.push({ path: t.path, title, description, section: "Tool", ...(t.path === "/" ? { image: IMG.hero, imageAlt: "AI face shape detector measuring forehead, cheekbone and jaw width on a face outline" } : {}) });
  }
  pages.push(...STATIC);
  for (const s of FACE_SHAPES) {
    const [title, description] = SHAPE_SEO[s.slug];
    const image = IMG.faceShape(s.slug);
    pages.push({ path: `/face-shapes/${s.slug}/`, title, description, section: "Face shape", image, imageAlt: `${s.name} face shape diagram with forehead, cheekbone and jaw width lines` });
    for (const t of availableTopics(s)) {
      const [tt, dd] = TOPIC_SEO[t](s.name);
      pages.push({ path: `/face-shapes/${s.slug}/${t}/`, title: tt, description: dd, section: "Face shape", image, imageAlt: `${s.name} face shape outline` });
    }
  }
  for (const h of TYPE_HUBS) {
    const [title, description] = HUB_SEO[h.slug];
    const illustrated = ILLUSTRATED_HUBS.includes(h.slug);
    pages.push({ path: `/${h.slug}/`, title, description, section: "Guide", ...(illustrated ? { image: IMG.hubChart(h.slug), imageAlt: `Chart of ${h.name.toLowerCase()}: ${h.items.map((i) => i.name).join(", ")}` } : {}) });
    for (const it of h.items) {
      pages.push({
        path: `/${h.slug}/${it.slug}/`,
        title: fit(ITEM_TITLE[h.slug](it.name), 50),
        description: fit(it.definition.length < 100 ? `${it.definition} ${ITEM_SUFFIX[h.slug]}` : it.definition, 143),
        section: "Guide",
        ...(illustrated ? { image: IMG.type(h.slug, it.slug), imageAlt: `Illustration of ${it.name.toLowerCase()}` } : {}),
      });
    }
  }
  for (const p of POSTS) {
    const [title, description] = POST_SEO[p.slug];
    const shape = p.shapes?.[0];
    pages.push({ path: `/blog/${p.slug}/`, title, description, section: "Blog", ...(shape ? { image: IMG.faceShape(shape), imageAlt: `${shape.replace("-", " ")} face shape diagram` } : {}) });
  }
  pages.push(...localizedPages(pages));
  return pages;
}

/** Translated versions of the homepage, every tool, the face shapes hub and the 10 shape pages. */
function localizedPages(english: PageSeo[]): PageSeo[] {
  const out: PageSeo[] = [];
  for (const locale of OTHER_LOCALES) {
    const c = contentFor(locale)!;
    const t = pageT(locale);
    const en = (path: string) => english.find((p) => p.path === path)!;
    for (const tool of TOOLS) {
      const tx = c.tools[tool.slug];
      out.push({ ...en(tool.path), path: localePath(locale, tool.path), title: tx.title, description: tx.description, locale, ...(tool.path === "/" ? { imageAlt: t("AI face shape detector measuring forehead, cheekbone and jaw width on a face outline") } : {}) });
    }
    out.push({ ...en("/face-shapes/"), path: localePath(locale, "/face-shapes/"), title: c.hub.title, description: c.hub.description, locale, imageAlt: t("Chart of the 10 face shapes with forehead, cheekbone and jaw width lines") });
    for (const s of FACE_SHAPES) {
      const sx = c.shapes[s.slug];
      out.push({ ...en(`/face-shapes/${s.slug}/`), path: localePath(locale, `/face-shapes/${s.slug}/`), title: sx.title, description: sx.description, locale, imageAlt: t("{Shape} face shape diagram with forehead, cheekbone and jaw width lines", { Shape: sx.name, shape: sx.name.toLowerCase() }) });
    }
  }
  return out;
}

let byPath: Map<string, PageSeo> | null = null;
export function seoFor(path: string): PageSeo {
  byPath ??= new Map(allPages().map((p) => [p.path, p]));
  const p = byPath.get(path);
  if (!p) throw new Error(`No SEO entry for ${path}`);
  return p;
}
