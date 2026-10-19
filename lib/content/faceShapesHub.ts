import type { Faq } from "./types";

export const HUB_INTRO =
  "There are 10 main face shapes: oval, round, square, oblong, rectangle, heart, diamond, triangle, inverted triangle and pear. Your face shape is set by three widths (forehead, cheekbones and jaw), your face length, and whether your jawline is angular or soft. Most people are a blend of two shapes.";

export const HUB_BODY = `## Face shape chart

| Shape | Length vs width | Widest point | Jaw | Chin |
|---|---|---|---|---|
| Oval | ~1.5× | Cheekbones | Soft, tapers | Rounded |
| Round | ~1× | Cheeks | Soft, wide | Short, rounded |
| Square | ~1–1.3× | Even | Sharp, wide | Broad, flat |
| Oblong | ~1.7×+ | Even | Rounded | Can be long |
| Rectangle | ~1.6×+ | Even | Sharp | Broad |
| Heart | ~1.3–1.5× | Forehead | Narrow | Pointed |
| Diamond | ~1.4–1.6× | Cheekbones | Narrow | Pointed |
| Triangle | ~1.2–1.5× | Jaw | Wide, angular | Broad |
| Inverted triangle | ~1.3–1.5× | Forehead | Narrow, angular | Defined |
| Pear | ~1.1–1.4× | Jaw | Wide, soft | Rounded |

## How to determine your face shape

There are three ways, from most to least objective:

1. **Use a photo.** Our [face shape detector](/) measures your proportions from a front-facing photo in seconds. Your photo never leaves your device.
2. **Measure with a tape.** Measure your forehead, cheekbones, jawline and face length, then use the [face shape calculator](/face-shape-calculator/). Our [guide to measuring your face](/blog/how-to-measure-your-face/) shows exactly where to measure.
3. **Trace it in a mirror.** Pull your hair back, stand an arm's length from a mirror and trace your outline with a washable marker. Then take the [face shape quiz](/face-shape-quiz/).

## The three questions that decide your shape

- **How long is your face compared with its width?** About equal points to round or square; clearly longer points to oblong or rectangle; in between points to oval, heart or diamond.
- **Which part is widest?** Forehead (heart, inverted triangle), cheekbones (oval, diamond, round), jaw (triangle, pear) or all even (square, rectangle, oblong).
- **Is your jaw angular or soft?** Angular separates square from round, rectangle from oblong and triangle from pear.

## Commonly confused face shapes

- [Oval vs oblong](/blog/oval-vs-oblong-face-shape/): oblong is longer with straighter sides.
- [Rectangle vs oblong](/blog/rectangle-vs-oblong-face-shape/): rectangle has a sharp jaw.
- [Heart vs diamond](/blog/heart-vs-diamond-face-shape/): heart has a wide forehead; diamond's is narrow.
- [Diamond vs oval](/blog/diamond-vs-oval-face-shape/): diamond's forehead and jaw are much narrower.
- Round vs square: square has jaw corners; round doesn't.

## Face shapes for men and women

The shapes are the same for everyone, but styling advice differs. See [face shapes for women](/face-shapes/women/) and [face shapes for men](/face-shapes/men/).`;

export const HUB_FAQS: Faq[] = [
  { q: "How many face shapes are there?", a: "Most stylists use 7 to 10. The 10 we use are oval, round, square, oblong, rectangle, heart, diamond, triangle, inverted triangle and pear." },
  { q: "What is the most common face shape?", a: "Oval is generally described as the most common, followed by round, square and heart." },
  { q: "What is the rarest face shape?", a: "Diamond is usually called the rarest, along with triangle and pear." },
  { q: "What is the most attractive face shape?", a: "Oval is often called the ideal because of its balance, but studies show attractiveness depends much more on symmetry, averageness, skin and expression than on outline." },
  { q: "Can your face shape change?", a: "Your bone structure is stable in adulthood, but weight, aging and muscle tone change soft tissue, which can shift how your face shape looks." },
  { q: "Are face shapes different for men and women?", a: "No, the same shapes apply. Men's faces tend to have wider jaws on average, so square, rectangle and triangle are a little more common in men." },
];

export const GENDER_PAGES = {
  women: {
    title: "Face Shapes for Women: Find Yours & the Best Hairstyles",
    description: "A guide to face shapes for women: how to find yours and the most flattering haircuts, bangs, glasses and makeup for each of the 10 face shapes.",
    h1: "Face Shapes for Women",
    intro:
      "Women's face shapes are the same 10 shapes as everyone's: oval, round, square, oblong, rectangle, heart, diamond, triangle, inverted triangle and pear. What changes is the styling. Below you'll find the best haircuts, bangs and glasses for each, and celebrities who share your shape.",
  },
  men: {
    title: "Face Shapes for Men: Find Yours & the Best Haircuts and Beards",
    description: "A guide to face shapes for men: how to find yours and the best haircuts, beard styles and glasses for each face shape.",
    h1: "Face Shapes for Men",
    intro:
      "Men's face shapes follow the same 10 types as everyone's, though square, rectangle and triangle are a little more common in men thanks to wider jaws on average. Below you'll find the best haircuts, beard styles and glasses for each shape.",
  },
};
