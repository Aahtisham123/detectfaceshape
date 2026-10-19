import type { FaceShape } from "./types";

export const FACE_SHAPES: FaceShape[] = [
  {
    slug: "oval",
    name: "Oval",
    keyword: "oval face shape",
    title: "Oval Face Shape: Traits, Best Hairstyles, Glasses & Celebrities",
    description:
      "An oval face is about 1.5× longer than it is wide, with cheekbones as the widest point and a softly rounded jaw. See how to tell, plus the best haircuts and glasses.",
    definition:
      "An oval face shape is roughly one and a half times longer than it is wide. The cheekbones are the widest point, the forehead is slightly wider than the jaw, and the jawline curves gently into a rounded chin with no sharp angles.",
    measurements: [
      { feature: "Face length vs width", value: "About 1.4–1.6× longer than wide" },
      { feature: "Widest point", value: "Cheekbones" },
      { feature: "Forehead", value: "Slightly wider than the jaw" },
      { feature: "Jawline", value: "Soft, rounded, tapers gently" },
      { feature: "Chin", value: "Rounded, not pointed" },
    ],
    traits: [
      "Balanced proportions from top to bottom",
      "Cheekbones are a little wider than the forehead",
      "Jaw narrower than the forehead, with no hard corners",
      "Face looks like an upside-down egg",
    ],
    howToTell: [
      "Your face is clearly longer than it is wide, but not dramatically so.",
      "The widest part of your face is across your cheekbones.",
      "Your jaw curves rather than turning a corner below your ears.",
      "If you trace your face in a mirror, the outline looks like an egg with the wider end at the top.",
    ],
    body: `## Why the oval face is called "balanced"

Stylists call the oval face the most versatile shape because nothing dominates: the forehead, cheekbones and jaw step down in width gradually, and the length is in proportion to the width. That's why most haircuts, glasses and beard styles work. The goal is not to "correct" anything, just to avoid hiding the balance you already have.

## How common is an oval face?

Oval is one of the most common results from our detector, along with heart and square. In practice many people are a blend, such as oval with a slightly square jaw or oval leaning oblong. Your result shows a percentage for every shape so you can see which way you lean.

## Oval vs oblong

The difference is length. An oval face is about 1.5× longer than wide; an oblong face is noticeably longer (closer to 1.7× or more) with straighter sides. If side-swept fringes and volume at the sides make your face look better balanced, you may lean oblong.`,
    women: {
      celebrities: ["Beyoncé", "Jessica Alba", "Charlize Theron", "Julia Roberts", "Kate Middleton"],
      hairstyles: [
        { name: "Long layers", why: "Layers that start below the chin add movement without widening any part of the face." },
        { name: "Blunt lob", why: "A collarbone-length cut with a straight edge frames the jaw and keeps the balanced outline." },
        { name: "Curtain bangs", why: "Parted bangs that sweep to each side open the face and draw attention to the eyes." },
        { name: "Pixie cut", why: "Oval faces have the proportions to carry very short hair; it shows off cheekbones." },
        { name: "Sleek middle part", why: "A center part works because both halves of an oval face are evenly proportioned." },
        { name: "Shaggy shoulder-length cut", why: "Textured ends add volume at the jaw, which suits oval faces that taper slightly." },
        { name: "High ponytail", why: "Pulling hair back shows the full outline, and oval is the shape that looks best fully exposed." },
      ],
      avoid: [
        "Heavy, blunt bangs that cover the whole forehead, which can shorten the face.",
        "Lots of height at the crown if your face leans long, as it can tip you toward oblong.",
      ],
      tips: "Almost any length works. Choose a cut for your hair texture and lifestyle first, then fine-tune the fringe and part.",
    },
    men: {
      celebrities: ["George Clooney", "Jake Gyllenhaal", "Bradley Cooper", "Adam Levine", "Cristiano Ronaldo"],
      hairstyles: [
        { name: "Classic taper", why: "Short sides and a little length on top keep the natural proportions." },
        { name: "Quiff", why: "Moderate height on top suits an oval face; keep it modest so the face doesn't look longer." },
        { name: "Side part", why: "A clean side part is timeless and shows off balanced features." },
        { name: "Textured crop", why: "A short fringe-forward crop works because the forehead doesn't need hiding." },
        { name: "Buzz cut", why: "Oval faces have the even head shape that very short cuts reveal." },
        { name: "Medium-length flow", why: "Hair tucked behind the ears frames the cheekbones without adding width." },
      ],
      avoid: ["Very tall pompadours that exaggerate length.", "Heavy fringes that cut the face in half."],
      beards: [
        { name: "Short boxed beard", why: "Even length around the jaw keeps the balanced shape." },
        { name: "Heavy stubble", why: "Adds a little definition at the jaw without changing the outline." },
        { name: "Clean shaven", why: "Oval is one of the few shapes that looks equally good with no beard." },
      ],
      tips: "Avoid adding too much height or too much width. Keep the sides tidy and the top moderate.",
    },
    glasses: {
      best: [
        { name: "Square or rectangular frames", why: "Angular lines add contrast to soft oval curves." },
        { name: "Wayfarers", why: "The slightly trapezoid shape works with the gentle taper of the jaw." },
        { name: "Aviators", why: "The teardrop shape echoes the oval outline in a flattering way." },
        { name: "Geometric frames", why: "Hexagonal or octagonal frames add interest to balanced features." },
      ],
      avoid: ["Frames wider than the widest part of your face.", "Very deep frames that cover the cheekbones."],
    },
    makeup:
      "Oval faces need little contouring. Use a light bronzer just under the cheekbones and at the temples, and focus highlight on the high points of the cheeks, the bridge of the nose and the cupid's bow.",
    confusedWith: [
      { slug: "oblong", difference: "Oblong is longer, with straighter sides and less taper toward the chin." },
      { slug: "heart", difference: "A heart face has a clearly wider forehead and a narrow, often pointed chin." },
      { slug: "diamond", difference: "A diamond face has a narrow forehead and jaw with sharply wider cheekbones." },
    ],
    faqs: [
      { q: "What does an oval face look like?", a: "An oval face is longer than it is wide, widest at the cheekbones, with a slightly narrower forehead and a jaw that tapers into a rounded chin. It looks like an upside-down egg." },
      { q: "Is an oval face shape attractive?", a: "Oval is often called the ideal face shape because its proportions are balanced, and many people perceive it as attractive. Attractiveness depends on far more than outline, though, and every face shape has its own strengths." },
      { q: "How rare is an oval face?", a: "Oval is not rare. It's one of the most common face shapes, though many people are a blend of oval with another shape." },
      { q: "What haircut is best for an oval face?", a: "Most cuts suit oval faces. Long layers, lobs, curtain bangs and pixie cuts are popular for women; tapers, side parts and textured crops are popular for men." },
      { q: "What glasses suit an oval face?", a: "Square, rectangular, wayfarer and aviator frames all work. Keep the frames no wider than the widest part of your face." },
    ],
  },
  {
    slug: "round",
    name: "Round",
    keyword: "round face shape",
    title: "Round Face Shape: How to Tell, Best Haircuts & Glasses",
    description:
      "A round face is almost as wide as it is long, with full cheeks and a soft jawline. Learn how to tell, plus the most flattering hairstyles, glasses and beards.",
    definition:
      "A round face shape is about as wide as it is long. The cheeks are the widest and fullest part, the jawline is soft with no visible corners, and the chin is rounded. Because width and length are similar, the outline looks close to a circle.",
    measurements: [
      { feature: "Face length vs width", value: "Close to 1:1, rarely more than 1.3×" },
      { feature: "Widest point", value: "Cheeks" },
      { feature: "Forehead", value: "Similar width to the jaw" },
      { feature: "Jawline", value: "Wide, soft and curved" },
      { feature: "Chin", value: "Short and rounded" },
    ],
    traits: ["Full cheeks", "Soft, curved jaw with no angles", "Short chin", "Hairline often rounded too"],
    howToTell: [
      "Measure your face width at the cheekbones and length from hairline to chin. If they're nearly equal, you're likely round.",
      "Your jaw curves continuously from ear to chin.",
      "Your cheeks look full even when you're not smiling.",
    ],
    body: `## Round vs square

Round and square faces have similar length and width. The difference is the jaw: a square face has a strong, angular jaw with visible corners below the ears, while a round face curves smoothly. If you run a finger along your jaw and feel a defined corner, you probably lean square.

## Styling goal for round faces

The aim is to add a little length and angle. Height at the crown, side parts, long layers that fall below the chin, and angular glasses all draw the eye up and down instead of across.

## Does weight change a round face?

Weight affects how full the cheeks look, so losing or gaining weight can make a face look rounder or more angular. The underlying bone structure (forehead, cheekbone and jaw widths) doesn't change, so your basic shape usually stays the same. See our guide on [whether losing weight changes your face shape](/blog/does-losing-weight-change-your-face-shape/).`,
    women: {
      celebrities: ["Selena Gomez", "Ginnifer Goodwin", "Kirsten Dunst", "Miranda Kerr", "Chrissy Teigen"],
      hairstyles: [
        { name: "Long layers below the chin", why: "Length past the jaw stretches the face visually." },
        { name: "Deep side part", why: "An off-center part creates asymmetry and diagonal lines that slim a round face." },
        { name: "Long side-swept bangs", why: "Bangs angled across the forehead break up width." },
        { name: "Asymmetrical lob", why: "A lob that's longer at the front draws the eye downward." },
        { name: "Volume at the crown", why: "Height on top adds length to the overall silhouette." },
        { name: "Pixie with height", why: "A pixie works if it's longer and textured on top instead of flat and round." },
        { name: "Soft waves starting below the cheekbones", why: "Waves that start low keep width away from the cheeks." },
      ],
      avoid: [
        "Chin-length rounded bobs, which repeat the circle.",
        "Blunt, straight-across bangs that shorten the face.",
        "Volume at the sides near the cheeks.",
      ],
      tips: "Look for anything that adds height on top or length below the chin, and keep the fullest part of the style away from the cheeks.",
    },
    men: {
      celebrities: ["Leonardo DiCaprio", "Jack Black", "Elijah Wood", "Jonah Hill", "Chris Pratt (earlier career)"],
      hairstyles: [
        { name: "Pompadour or quiff", why: "Height on top makes the face look longer." },
        { name: "Faux hawk", why: "Concentrated height in the center lengthens the outline." },
        { name: "Undercut with length on top", why: "Very short sides remove width; length on top adds angle." },
        { name: "Side part with fade", why: "Clean lines and a tight fade create structure." },
        { name: "Angular fringe", why: "A fringe swept to one side adds diagonal lines." },
      ],
      avoid: ["Bowl cuts and rounded crops.", "Long hair that sits at cheek level and adds width.", "Buzz cuts that are the same length all over."],
      beards: [
        { name: "Goatee or extended goatee", why: "Hair concentrated on the chin adds length." },
        { name: "Boxed beard, shorter on the sides", why: "Keeping the cheeks tight and the chin longer creates an angular jaw." },
        { name: "Chin strap with longer chin", why: "Defines the jawline that a round face lacks." },
      ],
      tips: "Keep the sides short and build height on top. A beard that's longer at the chin than the cheeks is the single most effective change.",
    },
    glasses: {
      best: [
        { name: "Rectangular frames", why: "Straight lines contrast with soft curves and make the face look longer." },
        { name: "Square frames", why: "Angles add structure to a round face." },
        { name: "Browline frames", why: "A strong top edge lifts the eye upward." },
        { name: "Cat-eye frames", why: "Upswept outer corners add lift and angle." },
      ],
      avoid: ["Small round frames, which repeat the circle.", "Frames narrower than your face."],
    },
    makeup:
      "Contour along the outer edges of the face from the temples down to the jaw, and sweep bronzer under the cheekbones at an upward angle. Highlight down the center (forehead, nose bridge, chin) to add length.",
    confusedWith: [
      { slug: "square", difference: "A square face has the same proportions but a sharp, angular jaw." },
      { slug: "oval", difference: "An oval face is noticeably longer than it is wide." },
      { slug: "pear", difference: "A pear face is widest at the jaw rather than at the cheeks." },
    ],
    faqs: [
      { q: "How do I know if I have a round face?", a: "If your face is about as wide as it is long, your cheeks are the widest and fullest part, and your jaw curves without visible corners, you likely have a round face." },
      { q: "What is the best haircut for a round face?", a: "Cuts that add height on top or length below the chin work best: long layers, deep side parts, side-swept bangs and asymmetrical lobs for women; quiffs, pompadours and undercuts for men." },
      { q: "What glasses suit a round face?", a: "Angular frames such as rectangular, square, browline and cat-eye styles add structure. Avoid small round frames." },
      { q: "Can a round face become oval?", a: "Bone structure doesn't change, but losing facial fat can make a round face look more defined. Hairstyles and contouring can also make it appear longer." },
      { q: "Is a round face attractive?", a: "Yes. Round faces read as youthful and friendly, and many well-known actors and models have round faces." },
    ],
  },
  {
    slug: "square",
    name: "Square",
    keyword: "square face shape",
    title: "Square Face Shape: Traits, Hairstyles, Glasses & Beards",
    description:
      "A square face has a strong, angular jaw and a forehead, cheekbones and jaw of similar width. See how to tell, plus the best haircuts, glasses and beards for square faces.",
    definition:
      "A square face shape has a forehead, cheekbones and jaw of about the same width, and a strong, angular jawline with defined corners below the ears. The face is only slightly longer than it is wide.",
    measurements: [
      { feature: "Face length vs width", value: "About 1–1.3× longer than wide" },
      { feature: "Widest point", value: "Even across forehead, cheekbones and jaw" },
      { feature: "Forehead", value: "Wide and often straight at the hairline" },
      { feature: "Jawline", value: "Wide, sharp, with clear angles" },
      { feature: "Chin", value: "Broad and flat" },
    ],
    traits: ["Strong, wide jaw", "Visible jaw corners", "Straight sides", "Broad, flat chin"],
    howToTell: [
      "Your jaw turns a clear corner below your ears.",
      "Your forehead, cheekbones and jaw look about the same width.",
      "Your face is only a little longer than it is wide.",
    ],
    body: `## Square vs rectangle

A rectangle face has the same strong jaw but is noticeably longer. If your face length is well over 1.4× its width, see [rectangle face shape](/face-shapes/rectangle/).

## Styling goal

For women the goal is usually to soften the angles: layers around the jaw, waves and curtain bangs. For men a square jaw is often a feature to show off, so short sides and a clean jawline work well.

## Is a square face masculine?

A strong jaw is often described as masculine, but plenty of women with square faces (Angelina Jolie, Olivia Wilde, Keira Knightley) are known for it. Softer styling simply shifts the emphasis to the eyes and cheekbones.`,
    women: {
      celebrities: ["Angelina Jolie", "Olivia Wilde", "Keira Knightley", "Demi Moore", "Sandra Bullock"],
      hairstyles: [
        { name: "Soft, face-framing layers", why: "Layers that hit around the jaw soften its angles." },
        { name: "Long waves", why: "Curves contrast with straight lines and add softness." },
        { name: "Curtain bangs", why: "Wispy, parted bangs round off the corners of the forehead." },
        { name: "Side-swept fringe", why: "A diagonal fringe breaks up a broad forehead." },
        { name: "Textured lob below the jaw", why: "Ending past the jaw avoids drawing a line across its widest point." },
        { name: "Loose updo with tendrils", why: "Soft pieces around the face hide the jaw corners." },
      ],
      avoid: ["Blunt, chin-length bobs that end exactly at the jaw.", "Severe center parts with flat, straight hair.", "Heavy straight-across bangs."],
      tips: "Aim for softness and movement around the jawline and forehead.",
    },
    men: {
      celebrities: ["Brad Pitt", "David Beckham", "Henry Cavill", "Tom Cruise", "Chris Hemsworth"],
      hairstyles: [
        { name: "Crew cut", why: "Short, neat hair shows off a strong jaw." },
        { name: "Buzz cut", why: "Square faces suit very short hair because the jaw provides structure." },
        { name: "Side part with taper", why: "Classic and sharp; it echoes the angular jaw." },
        { name: "Textured crop", why: "A messy, modern crop adds softness on top." },
        { name: "Slicked back", why: "Exposes the full face; works best with defined features." },
      ],
      avoid: ["Bowl cuts or heavy fringes that make the face look shorter and wider.", "Long hair that ends at the jaw."],
      beards: [
        { name: "Stubble", why: "Highlights the jawline without hiding it." },
        { name: "Short boxed beard", why: "Neat edges follow the natural jaw." },
        { name: "Circle beard", why: "A rounded goatee-and-moustache softens a very wide jaw." },
      ],
      tips: "Short sides and a little texture on top is the easy win. Keep beards short to show the jaw.",
    },
    glasses: {
      best: [
        { name: "Round frames", why: "Curves balance strong angles." },
        { name: "Oval frames", why: "Soften a wide jaw and forehead." },
        { name: "Rimless or semi-rimless", why: "Light frames don't add more hard lines." },
        { name: "Cat-eye frames", why: "Upswept corners draw attention to the cheekbones." },
      ],
      avoid: ["Boxy square frames that repeat the jaw.", "Frames narrower than the jaw."],
    },
    makeup:
      "Contour the corners of the forehead and the jaw angles to soften them. Blend blush in a rounded motion on the apples of the cheeks, and highlight the center of the forehead and chin.",
    confusedWith: [
      { slug: "rectangle", difference: "A rectangle face has the same jaw but is much longer." },
      { slug: "round", difference: "A round face has similar proportions but a soft, curved jaw." },
      { slug: "triangle", difference: "A triangle face has a jaw clearly wider than the forehead." },
    ],
    faqs: [
      { q: "How do I know if my face is square?", a: "Your forehead, cheekbones and jaw are about the same width, your jaw has clear corners below the ears, and your face is only slightly longer than it is wide." },
      { q: "What hairstyle suits a square face?", a: "Women: soft layers, waves, curtain bangs and side-swept fringes. Men: crew cuts, buzz cuts, side parts and textured crops." },
      { q: "What glasses suit a square face?", a: "Round, oval, rimless and cat-eye frames soften the angles. Avoid boxy square frames." },
      { q: "Is a square face attractive?", a: "A defined jawline is widely seen as attractive in both men and women. Many models and actors have square faces." },
      { q: "What is the difference between a square and rectangle face?", a: "Length. Both have a strong jaw, but a rectangle face is noticeably longer than it is wide." },
    ],
  },
  {
    slug: "oblong",
    name: "Oblong",
    keyword: "oblong face shape",
    title: "Oblong Face Shape (Long Face): Traits, Hairstyles & Glasses",
    description:
      "An oblong face is long and narrow, with forehead, cheekbones and jaw of similar width and a rounded jaw. How to tell, plus the best hairstyles and glasses for long faces.",
    definition:
      "An oblong face shape (also called a long face) is noticeably longer than it is wide, usually 1.7× or more. The forehead, cheekbones and jaw are similar widths, the sides are fairly straight, and the jawline is gently rounded rather than sharp.",
    measurements: [
      { feature: "Face length vs width", value: "About 1.7× or more" },
      { feature: "Widest point", value: "Even, no single widest point" },
      { feature: "Forehead", value: "Often tall" },
      { feature: "Jawline", value: "Rounded, similar width to forehead" },
      { feature: "Chin", value: "Can be long" },
    ],
    traits: ["Long, narrow outline", "Straight cheek line", "Tall forehead or long chin", "Rounded jaw corners"],
    howToTell: [
      "Your face looks clearly long in photos, even when your hair is down.",
      "There's no obvious widest point; your face is fairly straight on both sides.",
      "Your jaw is rounded, not sharply angular (a sharp jaw suggests rectangle).",
    ],
    body: `## Oblong, long and rectangle: what's the difference?

"Long face" and "oblong face" mean the same thing. A **rectangle** face is a long face with a strong, angular jaw; an **oblong** face has a softer, rounded jaw. Both benefit from the same strategy: add width at the sides and avoid extra height.

## Styling goal

Create the illusion of width. Fringes shorten a tall forehead, volume at the sides (waves, curls, layered bobs) adds width, and wide or deep glasses frames break up the length.

## Oval vs oblong

If you're unsure whether you're oval or oblong, compare length to width. Oval is around 1.5×; oblong is closer to 1.7× or more with straighter sides. Read the full [oval vs oblong comparison](/blog/oval-vs-oblong-face-shape/).`,
    women: {
      celebrities: ["Sarah Jessica Parker", "Liv Tyler", "Gisele Bündchen", "Gwyneth Paltrow", "Kristen Stewart"],
      hairstyles: [
        { name: "Blunt or curtain bangs", why: "Bangs shorten a tall forehead and make the face look less long." },
        { name: "Shoulder-length waves", why: "Volume at the sides adds width where an oblong face needs it." },
        { name: "Chin-length bob", why: "A bob ending at the jaw creates a horizontal line that balances length." },
        { name: "Layered shag", why: "Choppy layers through the sides add width and movement." },
        { name: "Voluminous curls", why: "Curls spread outward rather than downward." },
        { name: "Side part with volume", why: "Adds asymmetry and width without height." },
      ],
      avoid: ["Very long, straight, flat hair, which stretches the face.", "Height at the crown such as high top knots.", "Slicked-back styles with no volume at the sides."],
      tips: "Think width, not height. If you love long hair, add layers and waves so it doesn't hang straight down.",
    },
    men: {
      celebrities: ["Adam Levine", "Benedict Cumberbatch", "Adrien Brody", "Andrew Garfield", "Ben Affleck"],
      hairstyles: [
        { name: "Fringe or forward crop", why: "Hair brushed forward shortens the forehead." },
        { name: "Side part with fuller sides", why: "Avoid skin fades; keeping some length at the sides adds width." },
        { name: "Medium-length textured hair", why: "Volume at the sides balances length." },
        { name: "Classic short back and sides (not too tight)", why: "Neat but not stark." },
        { name: "Caesar cut", why: "A short horizontal fringe cuts the length of the face." },
      ],
      avoid: ["Tall pompadours and quiffs.", "Very tight high fades with long hair on top.", "Long hair hanging straight."],
      beards: [
        { name: "Full beard, fuller on the sides", why: "Width at the cheeks and jaw balances length." },
        { name: "Mutton chops or wide stubble", why: "Horizontal emphasis broadens the face." },
        { name: "Avoid long chin beards", why: "A long goatee or pointed beard adds even more length." },
      ],
      tips: "Keep height low and width high, in both hair and beard.",
    },
    glasses: {
      best: [
        { name: "Oversized frames", why: "Large frames cover more of the face's length." },
        { name: "Deep, tall lenses", why: "Taller lenses break up vertical space." },
        { name: "Decorative or contrasting temples", why: "Add width at the sides." },
        { name: "Round or square frames", why: "Both work as long as they're deep enough." },
      ],
      avoid: ["Small, narrow frames.", "Shallow rectangular frames that emphasize length."],
    },
    makeup:
      "Apply bronzer along the hairline at the top of the forehead and under the chin to visually shorten the face. Sweep blush horizontally across the cheeks rather than up toward the temples.",
    confusedWith: [
      { slug: "oval", difference: "An oval face is shorter (about 1.5×) and tapers more toward the chin." },
      { slug: "rectangle", difference: "A rectangle face is just as long but has a sharp, angular jaw." },
      { slug: "diamond", difference: "A diamond face has a narrow forehead and chin with wide cheekbones." },
    ],
    faqs: [
      { q: "What is an oblong face shape?", a: "An oblong face is noticeably longer than it is wide, with forehead, cheekbones and jaw of similar width and a rounded jawline. It's also called a long face." },
      { q: "Is oblong the same as a long face?", a: "Yes. Oblong and long face describe the same shape. A long face with a sharp, square jaw is called rectangle." },
      { q: "What haircut is best for an oblong face?", a: "Bangs, shoulder-length waves, bobs and layered shags that add width. Men should keep some length at the sides and avoid tall styles." },
      { q: "What glasses suit an oblong face?", a: "Oversized, deep frames that cover more of the face, plus frames with decorative temples to add width." },
      { q: "Is an oblong face attractive?", a: "Yes. Long faces are common among models and actors, and they photograph well. The right styling balances length with width." },
    ],
  },
  {
    slug: "rectangle",
    name: "Rectangle",
    keyword: "rectangle face shape",
    title: "Rectangle Face Shape: Traits, Hairstyles & How It Differs From Oblong",
    description:
      "A rectangle face is long with a strong, square jaw and straight sides. Learn the difference from oblong, plus the best haircuts, glasses and beards.",
    definition:
      "A rectangle face shape is longer than it is wide, like an oblong face, but with a strong, angular jaw. The forehead, cheekbones and jaw are about the same width, the sides are straight, and the jaw has defined corners.",
    measurements: [
      { feature: "Face length vs width", value: "About 1.6× or more" },
      { feature: "Widest point", value: "Even from forehead to jaw" },
      { feature: "Forehead", value: "Often tall and straight at the hairline" },
      { feature: "Jawline", value: "Wide, sharp corners" },
      { feature: "Chin", value: "Broad and flat" },
    ],
    traits: ["Long face", "Straight, parallel sides", "Angular jaw corners", "Square hairline"],
    howToTell: [
      "Your face is clearly long.",
      "Your jaw has distinct corners, like a square face.",
      "Your forehead and jaw are about the same width.",
    ],
    body: `## Rectangle vs oblong face shape

Both are long faces. The difference is the jaw: **rectangle** has a sharp, angular jaw with defined corners, while **oblong** has a rounded jaw. Many guides lump them together, but the styling differs. Rectangle faces need both width and softening around the jaw. See the full [rectangle vs oblong guide](/blog/rectangle-vs-oblong-face-shape/).

## Rectangle vs square

Square and rectangle share the angular jaw. A square face is only slightly longer than it is wide; a rectangle face is much longer.

## Styling goal

Add width at the sides, reduce height on top, and soften the corners of the jaw and forehead.`,
    women: {
      celebrities: ["Sandra Oh", "Cate Blanchett", "Sarah Jessica Parker", "Anne Hathaway"],
      hairstyles: [
        { name: "Wispy bangs", why: "Shorten the face and soften a square hairline." },
        { name: "Layered bob below the jaw", why: "Adds width and breaks up the jaw corners." },
        { name: "Loose waves", why: "Curves soften angles and add width." },
        { name: "Shag with face-framing layers", why: "Texture at the sides balances length." },
        { name: "Side-swept long layers", why: "Diagonal lines reduce the vertical emphasis." },
      ],
      avoid: ["Long, sleek, straight hair.", "Height at the crown.", "Blunt cuts that end at the jaw corners."],
      tips: "Combine the oblong strategy (add width) with the square strategy (soften the jaw).",
    },
    men: {
      celebrities: ["Ben Affleck", "Jon Hamm", "Adam Driver", "Matthew McConaughey"],
      hairstyles: [
        { name: "Textured fringe", why: "Covers part of the forehead to shorten the face." },
        { name: "Side part with moderate sides", why: "Keeps width at the temples." },
        { name: "Short, messy crop", why: "Low height, soft texture." },
        { name: "Medium-length swept back (with volume at sides)", why: "Works if it doesn't add height." },
      ],
      avoid: ["Tall quiffs and pompadours.", "Skin fades with height on top."],
      beards: [
        { name: "Full beard kept wide", why: "Adds width; keep the chin from getting too long." },
        { name: "Heavy stubble", why: "Shows the jaw without adding length." },
      ],
      tips: "Avoid adding length at either end of the face.",
    },
    glasses: {
      best: [
        { name: "Round or oval frames", why: "Soften the angles." },
        { name: "Oversized frames", why: "Break up the length." },
        { name: "Aviators", why: "Wide at the top with curved bottoms." },
      ],
      avoid: ["Narrow rectangular frames.", "Small frames that look lost on a long face."],
    },
    makeup:
      "Shade the top of the forehead and the jaw corners, and apply blush horizontally on the apples of the cheeks to add width.",
    confusedWith: [
      { slug: "oblong", difference: "Oblong is just as long but has a rounded jaw." },
      { slug: "square", difference: "Square has the same jaw but is much shorter." },
    ],
    faqs: [
      { q: "What is a rectangle face shape?", a: "A long face with straight sides and a strong, angular jaw. Forehead, cheekbones and jaw are about the same width." },
      { q: "Is rectangle the same as oblong?", a: "Not quite. Both are long, but rectangle has a sharp, square jaw and oblong has a rounded jaw." },
      { q: "What hairstyle suits a rectangle face?", a: "Bangs, layered bobs, loose waves and shags that add width and soften the jaw." },
      { q: "What glasses suit a rectangle face?", a: "Round, oval, aviator and oversized frames." },
    ],
  },
  {
    slug: "heart",
    name: "Heart",
    keyword: "heart face shape",
    title: "Heart Face Shape: Traits, Best Hairstyles, Glasses & Celebrities",
    description:
      "A heart-shaped face has a wide forehead, high cheekbones and a narrow, often pointed chin. Learn how to tell, plus the best hairstyles, glasses and makeup.",
    definition:
      "A heart face shape is widest at the forehead and tapers down to a narrow, often pointed chin. The cheekbones are high, the jaw is narrow, and some heart faces have a widow's peak at the hairline.",
    measurements: [
      { feature: "Face length vs width", value: "About 1.3–1.5× longer than wide" },
      { feature: "Widest point", value: "Forehead and/or cheekbones" },
      { feature: "Forehead", value: "Wide" },
      { feature: "Jawline", value: "Narrow, tapers sharply" },
      { feature: "Chin", value: "Narrow, often pointed" },
    ],
    traits: ["Wide forehead", "High cheekbones", "Narrow jaw", "Pointed chin", "Sometimes a widow's peak"],
    howToTell: [
      "Your forehead is the widest part of your face.",
      "Your face narrows noticeably from the cheekbones to the chin.",
      "Your chin is small or pointed.",
    ],
    body: `## Heart vs inverted triangle

Both are wide at the top and narrow at the chin. A heart face is softer, with rounded cheeks and often a widow's peak. An [inverted triangle](/face-shapes/inverted-triangle/) is more angular, with a sharper jaw.

## Heart vs diamond

A diamond face has a **narrow** forehead with the cheekbones as the widest point. A heart face has a **wide** forehead. Read more in [heart vs diamond face shape](/blog/heart-vs-diamond-face-shape/).

## Styling goal

Balance a wider forehead with a narrower chin: side-swept bangs reduce forehead width, and volume at chin level fills in the lower face.`,
    women: {
      celebrities: ["Reese Witherspoon", "Scarlett Johansson", "Taylor Swift", "Jennifer Love Hewitt", "Kourtney Kardashian"],
      hairstyles: [
        { name: "Side-swept bangs", why: "Cover part of a wide forehead and add diagonal lines." },
        { name: "Chin-length bob", why: "Adds volume exactly where the face narrows." },
        { name: "Lob with ends flipped out", why: "Width at the jaw balances the forehead." },
        { name: "Long layers starting at the chin", why: "Fullness at and below the jaw fills the lower face." },
        { name: "Curtain bangs", why: "Soften the forehead and frame the cheekbones." },
        { name: "Deep side part", why: "Breaks up forehead width." },
      ],
      avoid: ["Volume at the crown or temples.", "Slicked-back styles that expose the full forehead.", "Short, choppy layers at the top."],
      tips: "Keep the top sleek and put the volume at chin level.",
    },
    men: {
      celebrities: ["Ryan Gosling", "Justin Timberlake", "Zac Efron", "Bradley Cooper"],
      hairstyles: [
        { name: "Medium-length side part", why: "Covers part of the forehead and adds width lower down." },
        { name: "Fringe", why: "Reduces a wide forehead." },
        { name: "Longer textured cut", why: "Volume at the sides near the ears balances the chin." },
        { name: "Tousled, mid-length hair", why: "Softens the top and adds fullness lower." },
      ],
      avoid: ["Very short sides with lots of volume on top.", "Slicked-back styles."],
      beards: [
        { name: "Full beard", why: "Adds width and bulk to a narrow chin." },
        { name: "Boxed beard", why: "Squares off a pointed chin." },
        { name: "Stubble", why: "Adds a shadow of width at the jaw." },
      ],
      tips: "A beard is the most effective tool for heart-shaped men because it widens the lower face.",
    },
    glasses: {
      best: [
        { name: "Bottom-heavy frames", why: "Add width to the lower half of the face." },
        { name: "Round or oval frames", why: "Soften a wide forehead." },
        { name: "Rimless or light-colored frames", why: "Don't add weight at the top." },
        { name: "Aviators", why: "Wider at the bottom than at the top." },
      ],
      avoid: ["Browline and top-heavy frames.", "Cat-eye frames with exaggerated wings."],
    },
    makeup:
      "Contour the temples and sides of the forehead to reduce width, and highlight the chin. Apply blush on the apples of the cheeks and blend outward.",
    confusedWith: [
      { slug: "inverted-triangle", difference: "An inverted triangle is more angular, with a sharper jaw." },
      { slug: "diamond", difference: "A diamond face has a narrow forehead, not a wide one." },
      { slug: "oval", difference: "An oval face tapers more gently, with a rounded chin." },
    ],
    faqs: [
      { q: "What does a heart-shaped face look like?", a: "A wide forehead, high cheekbones, and a jaw that narrows to a small or pointed chin, sometimes with a widow's peak." },
      { q: "What haircut suits a heart face?", a: "Side-swept bangs, chin-length bobs, lobs and long layers that add volume at the chin." },
      { q: "What glasses suit a heart face?", a: "Bottom-heavy, round, oval, rimless and aviator frames." },
      { q: "Is a heart face shape rare?", a: "No. Heart is one of the more common face shapes." },
      { q: "Do all heart faces have a widow's peak?", a: "No. A widow's peak is common but not required." },
    ],
  },
  {
    slug: "diamond",
    name: "Diamond",
    keyword: "diamond face shape",
    title: "Diamond Face Shape: How to Tell, Hairstyles, Glasses & Celebrities",
    description:
      "A diamond face has wide, high cheekbones with a narrower forehead and jaw and a pointed chin. Learn how to tell, plus the best hairstyles, glasses and makeup.",
    definition:
      "A diamond face shape is widest at the cheekbones, with a noticeably narrower forehead and jaw. The chin is narrow and often pointed, and the cheekbones are high and prominent. It's one of the less common face shapes.",
    measurements: [
      { feature: "Face length vs width", value: "About 1.4–1.6× longer than wide" },
      { feature: "Widest point", value: "Cheekbones, clearly" },
      { feature: "Forehead", value: "Narrow" },
      { feature: "Jawline", value: "Narrow, angular" },
      { feature: "Chin", value: "Narrow, often pointed" },
    ],
    traits: ["High, wide cheekbones", "Narrow forehead", "Narrow jaw", "Pointed chin"],
    howToTell: [
      "Your cheekbones stick out clearly beyond your forehead and jaw.",
      "Both your forehead and jaw look narrow.",
      "Your chin comes to a point.",
    ],
    body: `## Diamond vs oval

Both have the cheekbones as the widest point. In an oval face the forehead is only slightly narrower; in a diamond face the forehead and jaw are **much** narrower. See [diamond vs oval face shape](/blog/diamond-vs-oval-face-shape/).

## Diamond vs heart

A heart face has a wide forehead; a diamond face has a narrow one.

## Is diamond the rarest face shape?

Diamond is often called the rarest face shape. Our [rarest face shape guide](/blog/rarest-face-shape/) looks at why.

## Styling goal

Add width at the forehead and chin to balance the cheekbones. Fringes, side-swept bangs and chin-length volume do this.`,
    women: {
      celebrities: ["Jennifer Lopez", "Halle Berry", "Vanessa Hudgens", "Megan Fox", "Rihanna"],
      hairstyles: [
        { name: "Side-swept or full bangs", why: "Add width to a narrow forehead." },
        { name: "Chin-length bob", why: "Adds fullness at a narrow jaw." },
        { name: "Tucked-behind-the-ears lob", why: "Shows off cheekbones while adding width at the chin." },
        { name: "Deep side part with waves", why: "Volume above and below the cheekbones." },
        { name: "Textured pixie with a long fringe", why: "Width at the forehead, cheekbones on show." },
      ],
      avoid: ["Volume at cheek level.", "Severe center parts with flat hair at the temples.", "Slicked-back high ponytails that narrow the forehead."],
      tips: "Put volume above and below the cheekbones, not at them.",
    },
    men: {
      celebrities: ["Johnny Depp", "Robert Pattinson", "Cillian Murphy", "Timothée Chalamet"],
      hairstyles: [
        { name: "Fringe", why: "Widens a narrow forehead." },
        { name: "Textured crop", why: "Width on top without height." },
        { name: "Medium-length swept back with volume at temples", why: "Fills the temples." },
        { name: "Side part with fuller sides", why: "Avoid tight fades that exaggerate cheekbones." },
      ],
      avoid: ["High-and-tight fades.", "Very short buzz cuts that expose a narrow forehead."],
      beards: [
        { name: "Full beard", why: "Widens a narrow chin." },
        { name: "Chin-focused beard", why: "Adds width and bulk to a pointed chin." },
      ],
      tips: "Fill out the forehead and chin; let the cheekbones be the feature.",
    },
    glasses: {
      best: [
        { name: "Cat-eye frames", why: "Accentuate cheekbones while adding width at the brow." },
        { name: "Oval frames", why: "Soften angular features." },
        { name: "Rimless frames", why: "Keep focus on the cheekbones." },
        { name: "Browline frames", why: "Add width at the forehead." },
      ],
      avoid: ["Narrow frames.", "Frames wider than the cheekbones."],
    },
    makeup:
      "Highlight the center of the forehead and chin to widen them, and keep contour light under the cheekbones, which already stand out.",
    confusedWith: [
      { slug: "oval", difference: "An oval face has a wider forehead and a softer chin." },
      { slug: "heart", difference: "A heart face has a wide forehead." },
    ],
    faqs: [
      { q: "What is a diamond face shape?", a: "A face that's widest at the cheekbones with a narrow forehead, a narrow jaw and a pointed chin." },
      { q: "Is diamond the rarest face shape?", a: "It's often described as the rarest, though data is limited. It's less common than oval, round, square and heart." },
      { q: "What haircut suits a diamond face?", a: "Bangs, chin-length bobs and styles with volume above and below the cheekbones." },
      { q: "What glasses suit a diamond face?", a: "Cat-eye, oval, rimless and browline frames." },
    ],
  },
  {
    slug: "triangle",
    name: "Triangle",
    keyword: "triangle face shape",
    title: "Triangle Face Shape: Traits, Best Hairstyles & Glasses",
    description:
      "A triangle face has a jaw wider than the forehead, with an angular jawline. Learn how to tell, plus the best haircuts, glasses and beards for triangle faces.",
    definition:
      "A triangle face shape has a jaw that's wider than the forehead and cheekbones, with an angular jawline. The face narrows as it goes up, so the forehead is the narrowest part.",
    measurements: [
      { feature: "Face length vs width", value: "About 1.2–1.5×" },
      { feature: "Widest point", value: "Jaw" },
      { feature: "Forehead", value: "Narrowest point" },
      { feature: "Jawline", value: "Wide, angular" },
      { feature: "Chin", value: "Broad" },
    ],
    traits: ["Wide, angular jaw", "Narrow forehead", "Cheekbones narrower than the jaw"],
    howToTell: [
      "Your jaw is clearly wider than your forehead.",
      "Your jaw has defined corners.",
      "Your face gets narrower toward the top.",
    ],
    body: `## Triangle vs pear

Both are wider at the jaw than the forehead. **Triangle** usually describes an angular jaw; **pear** describes a fuller, rounder lower face. Many guides use the names interchangeably.

## Styling goal

Add width at the forehead and temples, and avoid extra width at the jaw.`,
    women: {
      celebrities: ["Kelly Osbourne", "Minnie Driver", "Jennifer Aniston"],
      hairstyles: [
        { name: "Volume at the crown and temples", why: "Widens the top half." },
        { name: "Side-swept bangs", why: "Add width to a narrow forehead." },
        { name: "Layered cut with volume above the ears", why: "Balances a wide jaw." },
        { name: "Pixie with height", why: "Draws attention upward." },
        { name: "Long layers that start below the jaw", why: "Avoids adding width at the jawline." },
      ],
      avoid: ["Chin-length bobs.", "Flat hair on top with volume at the jaw."],
      tips: "Build width above the cheekbones and keep the jawline sleek.",
    },
    men: {
      celebrities: ["Matthew Perry", "Jim Carrey"],
      hairstyles: [
        { name: "Textured top with volume", why: "Widens the forehead." },
        { name: "Side-swept fringe", why: "Adds width up top." },
        { name: "Medium-length hair with fuller sides above the ears", why: "Balances the jaw." },
      ],
      avoid: ["Tight sides with a flat top.", "Very short crops."],
      beards: [
        { name: "Light stubble", why: "Avoids adding width to the jaw." },
        { name: "Goatee", why: "Draws the eye to the center rather than the jaw corners." },
      ],
      tips: "Keep width up top; keep beards close on the cheeks.",
    },
    glasses: {
      best: [
        { name: "Browline frames", why: "Strong upper edge widens the top half." },
        { name: "Cat-eye frames", why: "Lift and width at the temples." },
        { name: "Top-heavy or decorative frames", why: "Draw attention upward." },
      ],
      avoid: ["Bottom-heavy frames.", "Narrow frames."],
    },
    makeup: "Highlight the forehead and temples, and contour the jaw corners.",
    confusedWith: [
      { slug: "pear", difference: "Pear is the softer, rounder version of the same proportions." },
      { slug: "square", difference: "A square face has a forehead as wide as the jaw." },
    ],
    faqs: [
      { q: "What is a triangle face shape?", a: "A face with a jaw wider than the forehead and cheekbones, usually with an angular jawline." },
      { q: "Is triangle the same as pear?", a: "They're close. Pear usually means a softer, fuller lower face; triangle means a more angular one." },
      { q: "What haircut suits a triangle face?", a: "Styles with volume at the crown and temples, side-swept bangs, and layers that start below the jaw." },
    ],
  },
  {
    slug: "inverted-triangle",
    name: "Inverted Triangle",
    keyword: "inverted triangle face shape",
    title: "Inverted Triangle Face Shape: Traits, Hairstyles & Glasses",
    description:
      "An inverted triangle face has a wide forehead and a narrow, angular jaw and chin. Learn how it differs from a heart face, plus the best hairstyles and glasses.",
    definition:
      "An inverted triangle face shape is widest at the forehead and narrows in a fairly straight line to an angular jaw and narrow chin. It's similar to a heart face but more angular, usually without a widow's peak.",
    measurements: [
      { feature: "Face length vs width", value: "About 1.3–1.5×" },
      { feature: "Widest point", value: "Forehead" },
      { feature: "Forehead", value: "Wide" },
      { feature: "Jawline", value: "Narrow, angular" },
      { feature: "Chin", value: "Narrow, defined" },
    ],
    traits: ["Wide forehead", "Straight taper", "Angular, narrow jaw", "Defined chin"],
    howToTell: [
      "Your forehead is the widest part of your face.",
      "Your face narrows in fairly straight lines to the chin.",
      "Your jaw is angular rather than soft.",
    ],
    body: `## Inverted triangle vs heart

Both are wide on top and narrow at the chin. A heart face is rounder through the cheeks and often has a widow's peak; an inverted triangle is more angular. The styling advice is very similar.

## Styling goal

Reduce width at the forehead and add fullness at the jaw and chin.`,
    women: {
      celebrities: ["Naomi Campbell", "Christina Ricci"],
      hairstyles: [
        { name: "Side-swept bangs", why: "Narrow the forehead visually." },
        { name: "Chin-length or lob cuts", why: "Fullness where the face narrows." },
        { name: "Waves from the cheekbones down", why: "Add width low." },
      ],
      avoid: ["Height and volume at the crown.", "Slicked-back styles."],
      tips: "Keep the top flat and the volume low.",
    },
    men: {
      celebrities: ["Henry Cavill (often described as heart/inverted triangle)", "Pierce Brosnan"],
      hairstyles: [
        { name: "Medium-length side part", why: "Covers part of the forehead." },
        { name: "Fringe", why: "Reduces forehead width." },
        { name: "Longer sides", why: "Avoid tight fades that exaggerate the taper." },
      ],
      avoid: ["High volume on top with tight sides."],
      beards: [
        { name: "Full beard", why: "Adds width at the chin." },
        { name: "Boxed beard", why: "Squares off a narrow jaw." },
      ],
      tips: "Use a beard to widen the lower face.",
    },
    glasses: {
      best: [
        { name: "Bottom-heavy frames", why: "Add width low." },
        { name: "Round frames", why: "Soften angles." },
        { name: "Rimless frames", why: "Don't add weight at the top." },
      ],
      avoid: ["Top-heavy browline frames."],
    },
    makeup: "Contour the temples and outer forehead, and highlight the chin.",
    confusedWith: [
      { slug: "heart", difference: "A heart face is softer, with rounder cheeks and often a widow's peak." },
      { slug: "diamond", difference: "A diamond face has a narrow forehead." },
    ],
    faqs: [
      { q: "What is an inverted triangle face?", a: "A face that's widest at the forehead and tapers in straight lines to an angular, narrow jaw and chin." },
      { q: "Is inverted triangle the same as heart?", a: "They're close cousins. Heart is softer and rounder; inverted triangle is more angular." },
    ],
  },
  {
    slug: "pear",
    name: "Pear",
    keyword: "pear face shape",
    title: "Pear Face Shape: Traits, Best Hairstyles & Glasses",
    description:
      "A pear face has a full, wide jaw and a narrower forehead. Learn how to tell, plus the best haircuts and glasses for pear-shaped faces.",
    definition:
      "A pear face shape is widest at the jaw and narrowest at the forehead, with full cheeks and a soft, rounded lower face. It's the softer version of the triangle face shape.",
    measurements: [
      { feature: "Face length vs width", value: "About 1.1–1.4×" },
      { feature: "Widest point", value: "Jaw and lower cheeks" },
      { feature: "Forehead", value: "Narrow" },
      { feature: "Jawline", value: "Wide, full, soft" },
      { feature: "Chin", value: "Broad, rounded" },
    ],
    traits: ["Full lower face", "Narrow forehead", "Soft, wide jaw"],
    howToTell: [
      "The lower half of your face looks fuller than the top.",
      "Your forehead is the narrowest part.",
      "Your jaw is wide but soft rather than angular.",
    ],
    body: `## Pear vs triangle

Pear and triangle share the same proportions: narrow top, wide bottom. Pear is the rounder, fuller version; triangle is more angular.

## Pear vs round

A round face is widest at the cheeks; a pear face is widest at the jaw.

## Styling goal

Add volume at the top of the head and the temples, and keep the jawline uncluttered.`,
    women: {
      celebrities: ["Kelly Osbourne", "Jennifer Aniston (often described as pear/oblong)"],
      hairstyles: [
        { name: "Volume at the crown", why: "Widens the top half." },
        { name: "Side-swept bangs", why: "Widen a narrow forehead." },
        { name: "Layered shoulder-length cut", why: "Layers above the jaw balance a full lower face." },
        { name: "Voluminous pixie", why: "Height and width on top." },
      ],
      avoid: ["Chin-length bobs.", "Flat hair on top."],
      tips: "Build volume above the ears.",
    },
    men: {
      celebrities: [],
      hairstyles: [
        { name: "Textured quiff", why: "Adds width and height on top." },
        { name: "Longer sides above the ears", why: "Balances the jaw." },
      ],
      avoid: ["Buzz cuts that expose a narrow forehead."],
      beards: [
        { name: "Short stubble", why: "Defines the jaw without adding width." },
        { name: "Goatee", why: "Draws the eye to the center." },
      ],
      tips: "Keep beards short on the cheeks.",
    },
    glasses: {
      best: [
        { name: "Browline frames", why: "Widen the upper face." },
        { name: "Cat-eye frames", why: "Lift and width at the temples." },
        { name: "Bold, colorful upper rims", why: "Draw attention up." },
      ],
      avoid: ["Bottom-heavy frames.", "Small, narrow frames."],
    },
    makeup: "Highlight the forehead and temples, and contour softly along the jaw.",
    confusedWith: [
      { slug: "triangle", difference: "Triangle is more angular." },
      { slug: "round", difference: "A round face is widest at the cheeks." },
    ],
    faqs: [
      { q: "What is a pear face shape?", a: "A face that's widest at the jaw and narrowest at the forehead, with full cheeks and a soft lower face." },
      { q: "What hairstyle suits a pear face?", a: "Styles with volume at the crown and temples, side-swept bangs, and layers above the jaw." },
    ],
  },
];

export const faceShapeBySlug = (slug: string) => FACE_SHAPES.find((s) => s.slug === slug);

