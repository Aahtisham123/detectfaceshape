export type Faq = { q: string; a: string };
export type Pick = { name: string; why: string };

export type FaceShape = {
  slug: string;
  name: string;
  /** Primary keyword this page targets. */
  keyword: string;
  title: string;
  description: string;
  /** Answer-first definition shown at the top of the page. */
  definition: string;
  measurements: { feature: string; value: string }[];
  traits: string[];
  howToTell: string[];
  body: string;
  women: { celebrities: string[]; hairstyles: Pick[]; avoid: string[]; tips: string };
  men: { celebrities: string[]; hairstyles: Pick[]; avoid: string[]; beards: Pick[]; tips: string };
  glasses: { best: Pick[]; avoid: string[] };
  makeup: string;
  confusedWith: { slug: string; difference: string }[];
  faqs: Faq[];
};

export type TypeItem = {
  slug: string;
  name: string;
  keyword: string;
  definition: string;
  traits: string[];
  body: string;
  celebrities?: string[];
  faqs: Faq[];
};

export type TypeHub = {
  slug: string;
  name: string;
  singular: string;
  keyword: string;
  title: string;
  description: string;
  intro: string;
  body: string;
  toolSlug?: string;
  items: TypeItem[];
  faqs: Faq[];
};
