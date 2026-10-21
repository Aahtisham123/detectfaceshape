import type { Faq } from "./types";

export type ToolCategory = "face" | "features" | "beauty" | "color" | "fun";

export type Tool = {
  slug: string;
  /** Path of the page (the main detector lives on the homepage). */
  path: string;
  name: string;
  short: string;
  keyword: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  body: string;
  faqs: Faq[];
  related: string[];
  category: ToolCategory;
  /** Related "types" hub for the tool + guide split. */
  hub?: string;
  forFun?: boolean;
  usesCamera: boolean;
};

const PHOTO_TIPS = `## How to take the right photo

- **Face the camera straight on.** Turning your head shrinks one side of your face and skews every ratio.
- **Keep your chin level.** Tilting up makes the face look shorter; tilting down makes the jaw look narrower.
- **Pull your hair back** so your hairline, forehead and jaw are visible.
- **Use even, front-facing light.** Window light is ideal. Avoid strong side shadows.
- **Neutral expression, mouth closed.** Smiling widens the cheeks and changes the jaw.
- **Hold the camera at eye level, about an arm's length away.** Close-up selfies distort the face (the nose looks bigger and the face narrower).`;

const PRIVACY = `## Your photo stays on your device

The analysis runs entirely in your browser using an on-device face model. Your photo is never uploaded, stored or seen by anyone, and nothing is saved when you close the page. Read our [privacy policy](/privacy/) and [how our detector works](/how-it-works/).`;

export const TOOLS: Tool[] = [
  {
    slug: "face-shape-detector",
    path: "/",
    name: "Face Shape Detector",
    short: "Find your face shape from a photo or your camera.",
    keyword: "face shape detector",
    title: "Face Shape Detector: What Is My Face Shape? (Free AI, No Upload)",
    description:
      "Find out what face shape you have in seconds. Our free AI face shape detector measures 478 points on your face, right in your browser. Your photo is never uploaded.",
    h1: "Face Shape Detector",
    intro:
      "Upload a photo or turn on your camera and our AI measures your forehead, cheekbones, jaw and face length to tell you which of the 10 face shapes you have: oval, round, square, oblong, rectangle, heart, diamond, triangle, inverted triangle or pear. It's free, takes about five seconds, and your photo never leaves your device.",
    body: `## How the face shape detector works

1. **It finds 478 points on your face.** We use Google's MediaPipe Face Landmarker, a face model that runs inside your browser, to place 478 landmarks on your face: your hairline area, cheekbones, jaw corners, chin and more.
2. **It levels your face.** If your head is tilted, we rotate the landmarks so your eyes are level before measuring.
3. **It measures four widths and one length.** Forehead width, cheekbone width, jaw width, chin width and face length, plus the angle of your jaw corners.
4. **It compares you to real faces.** We calibrated the detector on real photos measured with the same model, so a "wide jaw" means wide compared to real people, not to a drawing.
5. **It scores all 10 shapes.** You get your best match plus a percentage for every shape, because most people are a blend.

## What each result means

| Face shape | Key proportions |
|---|---|
| [Oval](/face-shapes/oval/) | About 1.5× longer than wide, widest at cheekbones, soft jaw |
| [Round](/face-shapes/round/) | Similar length and width, full cheeks, soft jaw |
| [Square](/face-shapes/square/) | Forehead, cheekbones and jaw similar width, angular jaw |
| [Oblong](/face-shapes/oblong/) | Long and narrow, rounded jaw |
| [Rectangle](/face-shapes/rectangle/) | Long, with an angular jaw |
| [Heart](/face-shapes/heart/) | Wide forehead, narrow pointed chin |
| [Diamond](/face-shapes/diamond/) | Widest at cheekbones, narrow forehead and jaw |
| [Triangle](/face-shapes/triangle/) | Jaw wider than forehead, angular |
| [Inverted triangle](/face-shapes/inverted-triangle/) | Wide forehead, angular narrow jaw |
| [Pear](/face-shapes/pear/) | Full, wide jaw, narrow forehead |

See every shape side by side in our [face shapes chart](/face-shapes/).

## Use your camera

Tap **Use my camera** to open a full-screen camera with an oval guide for framing your face. After you take the photo you can **retake** it or **crop** it, then the AI measures your face and shows your result.

${PHOTO_TIPS}

## How to find your face shape without a photo

Prefer not to use a photo? Take the [face shape quiz](/face-shape-quiz/), or measure yourself with a soft tape and use the [face shape calculator](/face-shape-calculator/).

## How accurate is it?

The detector is as accurate as the photo. With a straight-on, well-lit photo and hair pulled back, it measures your proportions consistently. Face shape categories have fuzzy edges, though. Stylists often disagree about borderline faces, so look at your top two results. If your top two are close, you're a blend, and advice for both shapes applies.

${PRIVACY}`,
    faqs: [
      { q: "What is my face shape?", a: "Upload a front-facing photo to our free detector and it will measure your face and tell you whether you're oval, round, square, oblong, rectangle, heart, diamond, triangle, inverted triangle or pear, with a percentage match for each." },
      { q: "Is the face shape detector free?", a: "Yes. It's completely free with no sign-up." },
      { q: "Do you store my photo?", a: "No. The analysis runs in your browser and your photo is never uploaded." },
      { q: "Why did I get a different result with another photo?", a: "Head angle, lens distortion and expression change your measured proportions. Use a straight-on photo at arm's length with a neutral face. If two photos disagree, you're probably a blend of both shapes." },
      { q: "How many face shapes are there?", a: "Most stylists use 7–10. We use 10: oval, round, square, oblong, rectangle, heart, diamond, triangle, inverted triangle and pear." },
      { q: "What is the most common face shape?", a: "Oval is generally described as the most common, followed by round, square and heart." },
      { q: "Can I use it on my phone?", a: "Yes. It works in modern mobile browsers on iPhone and Android, with photo upload or the front camera." },
    ],
    related: ["face-shape-quiz", "face-shape-calculator", "jawline-analyzer", "face-symmetry-test", "golden-ratio-face"],
    category: "face",
    hub: "face-shapes",
    usesCamera: true,
  },
  {
    slug: "face-shape-quiz",
    path: "/face-shape-quiz/",
    name: "Face Shape Quiz",
    short: "Answer 7 quick questions, no camera needed.",
    keyword: "face shape quiz",
    title: "Face Shape Quiz: What Face Shape Do I Have? (7 Questions)",
    description:
      "Take our free face shape quiz to find your face shape without a photo. Seven quick questions about your forehead, cheekbones, jaw and chin.",
    h1: "Face Shape Quiz",
    intro:
      "Answer seven quick questions about your face while looking in a mirror, and we'll tell you your face shape. No photo or camera needed. It takes about a minute.",
    body: `## How the quiz works

Each answer adds points to the face shapes it fits. For example, "my jaw has sharp corners" adds points to square, rectangle, triangle and inverted triangle, and "my face is clearly longer than it is wide" adds points to oval, oblong and rectangle. The shape with the most points wins, and you see your top three.

## Tips for accurate answers

- Look straight into a mirror with your hair pulled back.
- Trace the outline of your face on the mirror with a washable marker or lipstick, then step back. Seeing the shape makes the questions easier.
- If you can't decide on an answer, choose the middle option.

## Quiz vs detector

The quiz relies on your own judgment of your features, which is hard. The [face shape detector](/) measures your face directly from a photo. Use both for the most confidence.

## Add this quiz to your website

Salons, barbers and eyewear shops can embed this quiz for free. [Get the embed code](#embed).`,
    faqs: [
      { q: "How do I find my face shape without a picture?", a: "Take this quiz while looking in a mirror, or measure your face with a tape and use the face shape calculator." },
      { q: "Is the face shape quiz accurate?", a: "It's as accurate as your answers. For a measured result, use the photo-based detector too." },
    ],
    related: ["face-shape-detector", "face-shape-calculator", "head-shape-detector"],
    category: "face",
    hub: "face-shapes",
    usesCamera: false,
  },
  {
    slug: "face-shape-calculator",
    path: "/face-shape-calculator/",
    name: "Face Shape Calculator",
    short: "Enter 4 measurements from a tape measure.",
    keyword: "face shape calculator",
    title: "Face Shape Calculator: Enter Your Measurements",
    description:
      "Measure your forehead, cheekbones, jawline and face length with a tape, enter them here, and the face shape calculator tells you your face shape.",
    h1: "Face Shape Calculator",
    intro:
      "Measure your face with a soft tape measure, enter four numbers, and the calculator compares your proportions to tell you your face shape. Use inches or centimeters; only the ratios matter.",
    body: `## How to measure your face

1. **Forehead:** measure across your forehead at its widest point, usually halfway between your eyebrows and hairline, from hairline to hairline.
2. **Cheekbones:** measure across your cheekbones from the outer corner of one eye to the outer corner of the other, over the highest point of the cheekbones (the "points" under the outer eye corners).
3. **Jawline:** measure from the tip of your chin to the corner of your jaw below your ear, then **multiply by two**. Our calculator does this for you: just enter the one side.
4. **Face length:** measure from the center of your hairline straight down to the tip of your chin.

## How the calculator decides

| If… | Your face shape is likely… |
|---|---|
| Length is 1.5× width or more, forehead ≈ cheekbones ≈ jaw | Oblong (or rectangle with a sharp jaw) |
| Length ≈ width, cheeks widest, soft jaw | Round |
| Length ≈ width, everything similar, sharp jaw | Square |
| Cheekbones widest, forehead > jaw, length ≈ 1.5× | Oval |
| Forehead widest, narrow jaw | Heart (or inverted triangle) |
| Cheekbones widest, narrow forehead and jaw | Diamond |
| Jaw widest, narrow forehead | Triangle / pear |

Read the full [guide to measuring your face](/blog/how-to-measure-your-face/).`,
    faqs: [
      { q: "How do I calculate my face shape?", a: "Measure your forehead, cheekbones, jaw and face length, then compare: which is widest, and how long is your face relative to its width? Our calculator does the comparison for you." },
      { q: "Should I use inches or centimeters?", a: "Either. The calculator only uses ratios." },
    ],
    related: ["face-shape-detector", "face-shape-quiz", "facial-proportions-calculator"],
    category: "face",
    hub: "face-shapes",
    usesCamera: false,
  },
  {
    slug: "eye-shape-detector",
    path: "/eye-shape-detector/",
    name: "Eye Shape Detector",
    short: "Almond, round, hooded, upturned and more.",
    keyword: "eye shape detector",
    title: "Eye Shape Detector: What Is My Eye Shape? (Free AI Test)",
    description:
      "Find your eye shape from a photo: almond, round, hooded, monolid, upturned, downturned or protruding, plus eye spacing and canthal tilt. Free, private, in your browser.",
    h1: "Eye Shape Detector",
    intro:
      "Upload a photo or use your camera and we'll measure how open your eyes are, the tilt of the outer corners and how much lid shows below your brow, then tell you your eye shape and whether your eyes are close-set, average or wide-set.",
    body: `## What the eye shape detector measures

- **Openness:** eye height divided by eye width. Round eyes are tall relative to width; monolid and almond eyes are longer.
- **Canthal tilt:** the angle from the inner to the outer corner. Positive tilt reads as upturned; negative as downturned.
- **Lid space:** the gap between your upper lid and the middle of your brow, relative to eye width. Little space suggests hooded or deep-set eyes.
- **Spacing:** the distance between your inner corners compared with your eye width.

Each is compared with averages from real faces, and every shape gets a match percentage.

## Limitations

Eyelid creases aren't tracked by face landmark models, so hooded and monolid results are inferred from lid space and openness. Confirm them in a mirror using our [eye shapes guide](/eye-shapes/).

${PHOTO_TIPS}

${PRIVACY}`,
    faqs: [
      { q: "How do I know my eye shape?", a: "Upload a front-facing photo to the detector, or check in a mirror: look at the crease, whether white shows around the iris, and the angle of the corners." },
      { q: "Can it detect hooded eyes?", a: "It estimates hooding from how much lid space shows below your brow. Confirm in a mirror, since the crease itself isn't tracked." },
    ],
    related: ["canthal-tilt-calculator", "face-shape-detector", "nose-shape-detector", "lip-shape-analyzer"],
    category: "features",
    hub: "eye-shapes",
    usesCamera: true,
  },
  {
    slug: "nose-shape-detector",
    path: "/nose-shape-detector/",
    name: "Nose Shape Detector",
    short: "Greek, Roman, Nubian, button, snub and more.",
    keyword: "nose shape detector",
    title: "Nose Shape Detector: What Is My Nose Shape? (Free AI)",
    description:
      "Find your nose shape from a photo: Greek, Roman, Nubian, hawk, button, snub, celestial or fleshy. Measures width, length and tip angle in your browser.",
    h1: "Nose Shape Detector",
    intro:
      "Upload a front-facing photo and we'll measure your nose width, length, tip angle and bridge profile, then match you to the closest of eight common nose shapes: Greek, Roman, Nubian, hawk, button, snub, celestial and fleshy.",
    body: `## What the nose shape detector measures

- **Width:** nostril width compared with the gap between your inner eye corners.
- **Length:** bridge-to-base length compared with your face length.
- **Tip angle:** how far the tip sits above the base of your nose. Upturned tips sit higher.
- **Bridge and projection:** estimated from the model's depth data. A front photo shows these less clearly, so they count for less in your result.

## Limitations

Bridge humps (Roman and hawk noses) are clearest in profile. If your result is Roman or hawk, compare with a side view using our [nose shapes guide](/nose-shapes/).

${PHOTO_TIPS}

${PRIVACY}`,
    faqs: [
      { q: "How do I know my nose shape?", a: "Use the detector with a front photo, then check your profile in a mirror for a hump or scoop in the bridge." },
      { q: "What nose shapes are there?", a: "Greek, Roman, Nubian, hawk, button, snub, celestial, fleshy and bumpy are the most common." },
    ],
    related: ["eye-shape-detector", "lip-shape-analyzer", "face-symmetry-test"],
    category: "features",
    hub: "nose-shapes",
    usesCamera: true,
  },
  {
    slug: "lip-shape-analyzer",
    path: "/lip-shape-analyzer/",
    name: "Lip Shape Analyzer",
    short: "Full, thin, heart, bow, top-heavy and more.",
    keyword: "lip shape analyzer",
    title: "Lip Shape Analyzer: What Lip Shape Do I Have? (Free)",
    description:
      "Find your lip shape from a photo: full, thin, heart, bow, top-heavy, bottom-heavy, wide, round or downturned. Measures fullness, Cupid's bow and lip ratio.",
    h1: "Lip Shape Analyzer",
    intro:
      "Upload a photo with your lips gently closed and we'll measure your lip fullness, upper-to-lower lip ratio, mouth width, Cupid's bow and the angle of your corners, then tell you your lip shape.",
    body: `## What the lip shape analyzer measures

- **Fullness:** total lip height compared with mouth width.
- **Upper-to-lower ratio:** most people's lower lip is about 1.5–1.7× the height of the upper lip.
- **Width:** mouth width compared with nose width (on average about 1.4–1.6×).
- **Cupid's bow:** how deep the dip between the two peaks of the upper lip is.
- **Corners:** whether the corners of your mouth sit above or below its center.

Keep your lips closed and relaxed. Smiling or pouting changes every measurement.

${PHOTO_TIPS}

${PRIVACY}`,
    faqs: [
      { q: "What is the ideal lip ratio?", a: "A lower lip about 1.6× the height of the upper lip is often described as ideal." },
      { q: "Should I smile in the photo?", a: "No. Keep your lips closed and relaxed." },
    ],
    related: ["eye-shape-detector", "nose-shape-detector", "golden-ratio-face"],
    category: "features",
    hub: "lip-shapes",
    usesCamera: true,
  },
  {
    slug: "face-symmetry-test",
    path: "/face-symmetry-test/",
    name: "Face Symmetry Test",
    short: "Score how symmetrical your face is.",
    keyword: "face symmetry test",
    title: "Face Symmetry Test: How Symmetrical Is My Face? (Free)",
    description:
      "Test your facial symmetry from a photo. We mirror 37 pairs of facial landmarks across your midline and score your eyes, brows, nose, mouth, cheeks and jaw.",
    h1: "Face Symmetry Test",
    intro:
      "Upload a straight-on photo and we'll find your facial midline, mirror 37 pairs of matching points (eye corners, brow points, nostrils, mouth corners, jaw points) across it, and measure how closely the two sides match. You get an overall symmetry score and a score for each feature.",
    body: `## How we measure facial symmetry

1. We fit a line through 21 points down the center of your face (forehead, nose bridge, nose tip, lips, chin).
2. For each pair of matching points, we mirror the right-side point across that line and measure how far it lands from its left-side partner.
3. Distances are measured in units of your interpupillary distance, so the score doesn't depend on photo size.
4. Smaller average distance = higher score.

## What's a normal symmetry score?

No face is perfectly symmetrical. In straight-on photos, most faces score between 80 and 92. Scores drop sharply if your head is turned even slightly, so a low score usually means the photo was taken at an angle. Try again facing the camera directly.

## Is symmetry attractive?

Studies have found a modest link between symmetry and perceived attractiveness, but it's only one factor among many, and small asymmetries make faces look natural. See our [attractiveness test](/attractiveness-test/) for a broader, just-for-fun score.

${PHOTO_TIPS}

${PRIVACY}`,
    faqs: [
      { q: "Is anyone's face perfectly symmetrical?", a: "No. Every face has small differences between its left and right sides." },
      { q: "Why is my symmetry score low?", a: "Usually because your head was turned or tilted. Face the camera straight on with a neutral expression." },
    ],
    related: ["golden-ratio-face", "attractiveness-test", "facial-proportions-calculator"],
    category: "fun",
    usesCamera: true,
  },
  {
    slug: "golden-ratio-face",
    path: "/golden-ratio-face/",
    name: "Golden Ratio Face Calculator",
    short: "Compare your proportions with 1.618.",
    keyword: "golden ratio face",
    title: "Golden Ratio Face Calculator: Test Your Face (Free)",
    description:
      "How close is your face to the golden ratio (1.618)? Our free calculator measures 7 facial ratios from a photo, including face length to width, and scores each.",
    h1: "Golden Ratio Face Calculator",
    intro:
      "The golden ratio, about 1.618, is often claimed to describe ideal facial proportions. Upload a photo and we'll measure seven classic ratios (face length to width, mouth to nose width, facial thirds, the rule of fifths and more) and show how close each one is to its ideal.",
    body: `## The ratios we measure

| Ratio | Ideal |
|---|---|
| Face length ÷ face width | 1.618 |
| Mouth width ÷ nose width | 1.618 |
| Middle third ÷ lower third | 1 |
| Upper third ÷ middle third | 1 |
| Lips-to-chin ÷ nose-to-lips | 2 |
| Eye spacing ÷ eye width | 1 |
| Face width ÷ eye width | 5 |

## A note on the golden ratio

The golden ratio is a popular idea, but the scientific evidence that it defines beauty is weak. Average faces often score better than "golden" ones in attractiveness studies, and ideals vary across cultures. Treat your score as a fun look at your proportions, not a verdict.

The face model doesn't see your hairline, so the upper third is estimated.

${PHOTO_TIPS}

${PRIVACY}`,
    faqs: [
      { q: "What is the golden ratio of the face?", a: "The idea that ideal facial proportions follow 1.618, for example a face 1.618× longer than it is wide." },
      { q: "What's a good golden ratio score?", a: "Most people score between 55 and 80. It's for fun; there's no strong evidence the golden ratio defines beauty." },
    ],
    related: ["facial-proportions-calculator", "face-symmetry-test", "attractiveness-test"],
    category: "fun",
    forFun: true,
    usesCamera: true,
  },
  {
    slug: "attractiveness-test",
    path: "/attractiveness-test/",
    name: "Attractiveness Test",
    short: "A just-for-fun face rating out of 10.",
    keyword: "attractiveness test",
    title: "Attractiveness Test: Rate My Face (Free AI, For Fun)",
    description:
      "A free, just-for-fun AI face rating based on symmetry, golden ratio, facial thirds, canthal tilt and jawline definition. Your photo never leaves your device.",
    h1: "Attractiveness Test",
    intro:
      "This is a just-for-fun face rating. We combine five measurable things that research and popular culture associate with attractiveness (symmetry, golden ratio proportions, balanced facial thirds, canthal tilt and jawline definition) into a score out of 10. It can't measure charm, style, expression or anything that actually makes people attractive to each other.",
    body: `## What goes into your score

| Factor | Weight | What it measures |
|---|---|---|
| Symmetry | 30% | How closely your left and right sides match |
| Golden ratio | 25% | Seven classic proportions vs their ideals |
| Facial thirds | 15% | Balance of the middle and lower face |
| Canthal tilt | 15% | The angle of your eye corners |
| Jawline definition | 15% | Jaw angle, width and chin |

## Please read this

Attractiveness is personal, cultural and mostly about things a photo can't capture. A score from a face measurement tool says nothing about your worth. Lighting, camera angle and lens distortion alone can move your score by more than a point. Have fun with it, and don't take it seriously.

${PHOTO_TIPS}

${PRIVACY}`,
    faqs: [
      { q: "Is the attractiveness test accurate?", a: "No face-rating tool can measure attractiveness. This one measures a few proportions associated with it, for fun." },
      { q: "Why did my score change between photos?", a: "Head angle, lighting, expression and lens distortion all change the measurements." },
    ],
    related: ["face-symmetry-test", "golden-ratio-face", "canthal-tilt-calculator", "jawline-analyzer"],
    category: "fun",
    forFun: true,
    usesCamera: true,
  },
  {
    slug: "how-old-do-i-look",
    path: "/how-old-do-i-look/",
    name: "How Old Do I Look?",
    short: "AI age estimate from your photo.",
    keyword: "how old do i look",
    title: "How Old Do I Look? Free AI Age Guesser (No Upload)",
    description:
      "Upload a photo and our AI guesses how old you look. Runs privately in your browser with an on-device age estimation model.",
    h1: "How Old Do I Look?",
    intro:
      "Upload a selfie or use your camera and an on-device AI model estimates how old you look. It's just for fun: these models are typically off by several years, and lighting, makeup, expression and image quality all affect the guess.",
    body: `## How the age guesser works

We use an open-source age estimation model (GEAR, via the Human library) that runs in your browser. It was trained on large sets of faces labeled with age and predicts the age a face most resembles. Your photo is never uploaded.

## Why the result can be off

- **Lighting:** harsh light shows texture and can add years; soft light removes them.
- **Expression:** smiling creates lines that some models read as age.
- **Image quality:** blurry or heavily filtered photos confuse the model.
- **Bias:** age models are less accurate for groups underrepresented in their training data.

Try a few photos and look at the range rather than one number.

${PRIVACY}`,
    faqs: [
      { q: "How accurate is the age guesser?", a: "Expect it to be within about 5–8 years in good conditions. It's for fun." },
      { q: "Do you keep my photo?", a: "No. The model runs in your browser and nothing is uploaded." },
    ],
    related: ["attractiveness-test", "face-shape-detector", "face-comparison"],
    category: "fun",
    forFun: true,
    usesCamera: true,
  },
  {
    slug: "head-shape-detector",
    path: "/head-shape-detector/",
    name: "Head Shape Detector",
    short: "Round, oval, long, flat back and more.",
    keyword: "head shape detector",
    title: "Head Shape Detector: What Is My Head Shape? (Quiz)",
    description:
      "Find your head shape (round, oval, long, square, flat back or egg-shaped) with a quick guided check, plus the haircuts that suit it.",
    h1: "Head Shape Detector",
    intro:
      "Your head shape is the outline of your whole skull, which a front photo can't fully show. Answer five questions using a mirror and a side photo of your head, and we'll tell you your head shape and the haircuts that work best with it.",
    body: `## Why a quiz instead of a photo?

The back and top of your head matter most for head shape, and they're hidden by hair and invisible in a front photo. A guided check with a side photo is more reliable.

## Head shape and haircuts

- **Flat back of head:** keep length at the crown, avoid skin fades at the back.
- **Long head:** avoid height on top.
- **Round or oval head:** buzz cuts and short crops work well.

See all [head shapes](/head-shapes/).`,
    faqs: [
      { q: "How can I tell my head shape?", a: "Slick your hair down and take a side photo. Check whether the back of your head curves out or drops straight down, and compare width with length." },
    ],
    related: ["face-shape-detector", "face-shape-quiz", "jawline-analyzer"],
    category: "face",
    hub: "head-shapes",
    usesCamera: false,
  },
  {
    slug: "jawline-analyzer",
    path: "/jawline-analyzer/",
    name: "Jawline Analyzer",
    short: "Measure jaw angle, width and chin.",
    keyword: "jawline analyzer",
    title: "Jawline Analyzer: Rate & Measure Your Jawline (Free)",
    description:
      "Measure your jaw angle, jaw width and chin from a photo. Find your jawline type (square, rounded, V-shaped, pointed, wide or narrow) and get a definition score.",
    h1: "Jawline Analyzer",
    intro:
      "Upload a straight-on photo and we'll measure the angle of your jaw corners, your jaw width relative to your cheekbones, and your chin width and length. You get your jawline type and a definition score.",
    body: `## What the jawline analyzer measures

- **Jaw angle:** the angle at your jaw corner between your cheek and chin. Smaller angles look sharper.
- **Jaw width:** jaw corner to jaw corner, relative to cheekbone width.
- **Chin:** width at the chin and its length below the lower lip.

## What changes how your jawline looks

Body fat, posture, beard shape and lighting all change how defined your jaw looks. Tilting your chin down makes it look softer; head angle matters a lot.

See all [jawline types](/jawline-shapes/).

${PHOTO_TIPS}

${PRIVACY}`,
    faqs: [
      { q: "What is a good jaw angle?", a: "Around 120–130° at the jaw corner reads as defined; larger angles look softer." },
    ],
    related: ["face-shape-detector", "attractiveness-test", "face-symmetry-test"],
    category: "features",
    hub: "jawline-shapes",
    usesCamera: true,
  },
  {
    slug: "skin-undertone-test",
    path: "/skin-undertone-test/",
    name: "Skin Undertone Test",
    short: "Warm, cool or neutral? Quiz + photo.",
    keyword: "skin undertone test",
    title: "Skin Undertone Test: Am I Warm, Cool or Neutral?",
    description:
      "Find your skin undertone (warm, cool, neutral or olive) with a quick quiz and an optional photo color check. Learn which colors and jewelry suit you.",
    h1: "Skin Undertone Test",
    intro:
      "Your undertone is the subtle color beneath the surface of your skin: warm (yellow, peach, golden), cool (pink, red, bluish) or neutral (a mix). Answer six questions, and optionally add a photo for a color reading of your skin, to find out which you are.",
    body: `## The classic undertone checks

- **Vein test:** look at the veins on your inner wrist in daylight. Greenish suggests warm; blue or purple suggests cool; hard to tell suggests neutral.
- **Jewelry test:** if gold flatters you more, you're likely warm; if silver does, cool.
- **White test:** if bright white makes you look washed out and cream looks better, you're likely warm.
- **Sun test:** if you tan easily, you're more likely warm; if you burn, cool.

## Why the photo check is only a hint

Camera white balance and room lighting change skin color in photos a lot. We sample your cheeks and forehead and read the hue, but we weigh it less than your quiz answers. Take the photo in daylight near a window for the best reading.

## Undertone vs skin tone

Skin tone is how light or dark your skin is. Undertone is the hue underneath. Two people with the same skin tone can have different undertones. Next, find your [seasonal color palette](/color-analysis/) or [foundation shade](/foundation-shade-finder/).`,
    faqs: [
      { q: "How do I know if I'm warm or cool toned?", a: "Check your wrist veins in daylight, compare gold and silver jewelry, and note whether you tan or burn. Our quiz combines these." },
      { q: "What is an olive undertone?", a: "Olive is a neutral-to-warm undertone with a greenish cast, common in Mediterranean, Middle Eastern, South Asian and Latin American skin." },
    ],
    related: ["color-analysis", "foundation-shade-finder", "face-shape-detector"],
    category: "color",
    usesCamera: true,
  },
  {
    slug: "color-analysis",
    path: "/color-analysis/",
    name: "Seasonal Color Analysis",
    short: "Spring, Summer, Autumn or Winter?",
    keyword: "color analysis",
    title: "Seasonal Color Analysis Quiz: What Season Am I?",
    description:
      "Find your seasonal color palette (Spring, Summer, Autumn or Winter, plus your sub-season) with a free color analysis quiz based on undertone, depth and contrast.",
    h1: "Seasonal Color Analysis",
    intro:
      "Seasonal color analysis sorts your natural coloring into one of four seasons (Spring, Summer, Autumn, Winter) based on three things: undertone (warm or cool), depth (light or deep) and contrast between your hair, skin and eyes. Answer eight questions to find your season and sub-season, with a palette of colors to wear.",
    body: `## The four seasons

| Season | Undertone | Depth | Contrast | Best colors |
|---|---|---|---|---|
| Spring | Warm | Light to medium | Medium to high | Clear, warm brights: coral, peach, warm green |
| Summer | Cool | Light to medium | Low to medium | Soft, cool, muted: dusty rose, lavender, soft blue |
| Autumn | Warm | Medium to deep | Low to medium | Rich, warm, muted: rust, olive, mustard |
| Winter | Cool | Deep or high contrast | High | Clear, cool, saturated: true red, emerald, black, white |

## Sub-seasons

Each season has three sub-seasons (for example Light, Warm and Clear Spring) depending on which quality is strongest. That gives the popular 12-season system.

## How to get the most accurate result

Answer based on your natural hair color, without makeup, in daylight. A professional draping session in person is the gold standard; this quiz gets you close.`,
    faqs: [
      { q: "What season am I in color analysis?", a: "Take the quiz: it scores your undertone, depth and contrast and maps them to Spring, Summer, Autumn or Winter plus a sub-season." },
      { q: "Can my season change?", a: "Your natural coloring is stable, but dyed hair or a tan can change which colors look best on you for a while." },
    ],
    related: ["skin-undertone-test", "foundation-shade-finder", "kibbe-body-type-test"],
    category: "color",
    usesCamera: false,
  },
  {
    slug: "foundation-shade-finder",
    path: "/foundation-shade-finder/",
    name: "Foundation Shade Finder",
    short: "Find your depth + undertone shade code.",
    keyword: "foundation shade finder",
    title: "Foundation Shade Finder: Match Your Shade (Free Quiz)",
    description:
      "Find your foundation shade by depth and undertone with a quick quiz. Learn how to read shade codes (W, C, N, O) and test a match in daylight.",
    h1: "Foundation Shade Finder",
    intro:
      "Your foundation shade comes down to two things: depth (how light or dark your skin is) and undertone (warm, cool, neutral or olive). Answer five questions and we'll tell you the depth range and undertone code to look for in any brand.",
    body: `## How foundation shade codes work

Most brands label shades with a number for depth and a letter for undertone:

- **W / Y / G** = warm (yellow or golden)
- **C / P / R** = cool (pink or red)
- **N** = neutral
- **O** = olive

Lower numbers are usually lighter. A "120 N" is a light neutral; a "450 W" is a deep warm.

## How to test a match

Swatch two or three shades on your jawline, not your hand, and check them in daylight. The right shade disappears into your skin and matches your neck.`,
    faqs: [
      { q: "How do I find my foundation shade?", a: "Work out your depth and undertone, then swatch shades on your jawline in daylight." },
      { q: "Should I match foundation to my face or neck?", a: "Match to your jawline so face and neck blend." },
    ],
    related: ["skin-undertone-test", "color-analysis"],
    category: "color",
    usesCamera: false,
  },
  {
    slug: "kibbe-body-type-test",
    path: "/kibbe-body-type-test/",
    name: "Kibbe Body Type Test",
    short: "Find your Kibbe type in 12 questions.",
    keyword: "kibbe body type test",
    title: "Kibbe Body Type Test: Find Your Kibbe Type (Free Quiz)",
    description:
      "Take our free Kibbe test to find your Kibbe body type. Answer 12 questions about your bone structure, body and face to find which of the 13 Kibbe types you are.",
    h1: "Kibbe Body Type Test",
    intro:
      "The Kibbe system describes your body and face as a balance of yang (long, sharp, angular) and yin (soft, rounded, small). Answer 12 questions about your height, bone structure, body and facial features, and we'll score your yin and yang to suggest your Kibbe type.",
    body: `## How the Kibbe test works

Each question has answers from very yang to very yin. Your answers build two scores:

- **Yin–yang balance:** sharp and long vs soft and rounded.
- **Width and bluntness:** which separates Naturals (broad, blunt) from Dramatics (narrow, sharp), and Gamines (compact, mixed) from Romantics (soft, curvy).

The combination points to one of the 13 types. Your top three are shown because many people sit between types.

## Tips for accurate answers

Kibbe types are based on bone structure and natural features, not weight, fitness or style. Answer for your frame as it naturally is. A friend's opinion can help, since it's hard to judge yourself.

See all [13 Kibbe body types](/kibbe-body-types/).`,
    faqs: [
      { q: "What is my Kibbe body type?", a: "Take the test: it scores your yin and yang balance and suggests your type." },
      { q: "Is Kibbe the same as body shape?", a: "No. Kibbe looks at bone structure and features overall, not hip-to-waist proportions." },
    ],
    related: ["color-analysis", "face-shape-detector", "skin-undertone-test"],
    category: "beauty",
    hub: "kibbe-body-types",
    usesCamera: false,
  },
  {
    slug: "canthal-tilt-calculator",
    path: "/canthal-tilt-calculator/",
    name: "Canthal Tilt Calculator",
    short: "Measure your eye tilt in degrees.",
    keyword: "canthal tilt calculator",
    title: "Canthal Tilt Calculator: Positive, Neutral or Negative?",
    description:
      "Measure your canthal tilt in degrees from a photo. Find out if your eyes have a positive, neutral or negative canthal tilt, for each eye separately.",
    h1: "Canthal Tilt Calculator",
    intro:
      "Canthal tilt is the angle between the inner and outer corners of your eye. Upload a straight-on photo and we'll measure it in degrees for each eye, after leveling your head, and tell you whether your tilt is positive, neutral or negative.",
    body: `## What is canthal tilt?

Draw a line from the inner corner of your eye (medial canthus) to the outer corner (lateral canthus). The angle of that line against horizontal is your canthal tilt.

- **Positive (above about 4°):** the outer corner is higher. Eyes look upturned or "cat-eye".
- **Neutral (0–4°):** corners are roughly level.
- **Negative (below 0°):** the outer corner is lower. Eyes look downturned.

The average in our calibration photos was about +4°.

## Why we level your head first

A head tilt of just 3° changes the reading by 3°. We rotate your landmarks so your pupils are level before measuring, but a straight-on photo is still best.

${PRIVACY}`,
    faqs: [
      { q: "What is a normal canthal tilt?", a: "Most people have a slightly positive tilt of around 2–6°." },
      { q: "Can canthal tilt change?", a: "It changes slightly with age as skin and tissue around the eyes loosen." },
    ],
    related: ["eye-shape-detector", "attractiveness-test", "face-symmetry-test"],
    category: "features",
    hub: "eye-shapes",
    usesCamera: true,
  },
  {
    slug: "facial-proportions-calculator",
    path: "/facial-proportions-calculator/",
    name: "Facial Proportions Calculator",
    short: "Facial thirds and the rule of fifths.",
    keyword: "facial proportions calculator",
    title: "Facial Proportions Calculator: Thirds & Fifths (Free)",
    description:
      "Measure your facial thirds and fifths from a photo. See how your upper, middle and lower face compare and how your eye width and spacing fit the rule of fifths.",
    h1: "Facial Proportions Calculator",
    intro:
      "Artists and surgeons describe faces with two simple rules. The **rule of thirds**: hairline-to-brow, brow-to-nose and nose-to-chin are roughly equal. The **rule of fifths**: the face is about five eye-widths wide. Upload a photo to see how your face measures up on both.",
    body: `## Facial thirds

| Third | From | To |
|---|---|---|
| Upper | Hairline | Brow (glabella) |
| Middle | Brow | Base of the nose |
| Lower | Base of the nose | Chin |

Within the lower third, the distance from your nose to your lips is ideally half the distance from your lips to your chin.

## Facial fifths

Divide the face vertically into five equal parts: each eye takes one fifth, the gap between the eyes is one fifth, and the space from each outer eye corner to the side of the face is one fifth.

The model doesn't see your hairline, so your upper third is estimated.

${PRIVACY}`,
    faqs: [
      { q: "What are ideal facial proportions?", a: "Equal facial thirds and a face about five eye-widths wide are classic artistic guidelines. Real faces vary a lot." },
    ],
    related: ["golden-ratio-face", "face-symmetry-test", "face-shape-calculator"],
    category: "fun",
    usesCamera: true,
  },
  {
    slug: "face-comparison",
    path: "/face-comparison/",
    name: "Face Comparison",
    short: "How similar are two faces?",
    keyword: "face comparison",
    title: "Face Comparison: How Similar Are Two Faces? (Free)",
    description:
      "Compare two faces and get a similarity score based on facial geometry. See if siblings, parents and kids, or friends have similar face shapes. Runs in your browser.",
    h1: "Face Comparison",
    intro:
      "Upload two photos and we'll compare the geometry of the two faces (the positions of 70+ key landmarks after removing size and rotation) and give you a similarity score, plus both face shapes side by side.",
    body: `## How face comparison works

We take matching landmarks from both faces, remove differences in position, size and rotation (a technique called Procrustes alignment), and measure how far apart the remaining shapes are. Closer shapes = higher similarity.

## What this is and isn't

This compares face **shape and proportions**, not identity. It's not face recognition and can't tell whether two photos show the same person. It's a fun way to compare family resemblance or see if you and a friend share a face shape.

${PRIVACY}`,
    faqs: [
      { q: "Is this face recognition?", a: "No. It compares geometry and proportions only and cannot identify people." },
    ],
    related: ["face-shape-detector", "face-symmetry-test", "how-old-do-i-look"],
    category: "fun",
    forFun: true,
    usesCamera: true,
  },
];

export const toolBySlug = (slug: string) => TOOLS.find((t) => t.slug === slug);
/** Tools with their own top-level route (everything but the homepage detector). */
export const ROUTED_TOOLS = TOOLS.filter((t) => t.path !== "/");
