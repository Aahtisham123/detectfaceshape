import type { TypeHub } from "./types";

const eyeShapes: TypeHub = {
  slug: "eye-shapes",
  name: "Eye Shapes",
  singular: "eye shape",
  keyword: "types of eyes",
  title: "Types of Eye Shapes: Chart & Guide to All 10 Eye Shapes",
  description:
    "A visual guide to the types of eye shapes: almond, round, hooded, monolid, upturned, downturned, deep-set, protruding, close-set and wide-set. Learn how to tell yours.",
  intro:
    "There are ten commonly described eye shapes: almond, round, hooded, monolid, upturned, downturned, deep-set, protruding, close-set and wide-set. Most people combine two traits, such as almond and hooded, or round and wide-set. Your eye shape is defined by three things: how open the eye is, which way the outer corner tilts, and how much eyelid shows above the lash line.",
  body: `## How to tell your eye shape

1. **Look straight into a mirror** with a relaxed face, in even light.
2. **Check the crease.** Can you see a crease on your upper lid? If not, you may have monolid eyes. If the crease is hidden by skin falling over it, your eyes are hooded.
3. **Check the white.** If white shows above or below the iris when you look straight ahead, your eyes are likely round. If the iris touches both lids, they're likely almond.
4. **Check the tilt.** Imagine a line through both corners of each eye. If the outer corner is higher, your eyes are upturned; if lower, downturned.
5. **Check the spacing.** If the gap between your eyes is wider than one eye width, they're wide-set; if narrower, close-set.

Or use our [eye shape detector](/eye-shape-detector/), which measures all of this from a photo.

## Canthal tilt and eye shape

Canthal tilt is the angle between the inner and outer corners of the eye. A positive tilt (outer corner higher) is what makes eyes look upturned or "cat-like". Measure yours with the [canthal tilt calculator](/canthal-tilt-calculator/).`,
  toolSlug: "eye-shape-detector",
  items: [
    {
      slug: "almond",
      name: "Almond Eyes",
      keyword: "almond eyes",
      definition:
        "Almond eyes are wider than they are tall, with a visible crease and corners that taper to a gentle point, like an almond. The iris touches both the upper and lower lids, so little white shows above or below it.",
      traits: ["Longer than tall", "Slightly upturned outer corners", "Visible crease", "Iris touches both lids"],
      body: `## Makeup for almond eyes

Almond eyes are the shape most makeup tutorials assume, so nearly every look works. A classic winged liner follows the natural upward taper. Keep shadow in the crease to define the shape.

## Almond vs round eyes

Round eyes show white above or below the iris; almond eyes don't.`,
      celebrities: ["Beyoncé", "Kendall Jenner", "Angelina Jolie", "Mila Kunis"],
      faqs: [
        { q: "Are almond eyes rare?", a: "No. Almond is one of the most common eye shapes." },
        { q: "How do I know if I have almond eyes?", a: "Your eyes are longer than they are tall, the corners taper, there's a visible crease, and no white shows above or below the iris when you look straight ahead." },
      ],
    },
    {
      slug: "round",
      name: "Round Eyes",
      keyword: "round eyes",
      definition:
        "Round eyes are taller than average relative to their width, so they look large and open. White is often visible above or below the iris, and the crease is clearly visible.",
      traits: ["Large, open look", "White visible above or below the iris", "Defined crease"],
      body: `## Makeup for round eyes

To elongate round eyes, extend liner outward past the outer corner and concentrate darker shadow on the outer third. To make them look even bigger, line the waterline in a nude shade.`,
      celebrities: ["Selena Gomez", "Zooey Deschanel", "Katy Perry"],
      faqs: [{ q: "What's the difference between round and almond eyes?", a: "Round eyes show white above or below the iris and look more circular; almond eyes are longer and the iris touches both lids." }],
    },
    {
      slug: "hooded",
      name: "Hooded Eyes",
      keyword: "hooded eyes",
      definition:
        "Hooded eyes have an extra layer of skin that folds down from the brow bone and covers the crease, so the upper eyelid looks small or hidden when the eyes are open.",
      traits: ["Crease hidden by skin", "Little visible lid space", "Brow bone appears close to lashes"],
      body: `## Hooded eyes vs monolid

Hooded eyes **have** a crease, but it's hidden by skin above it. Monolid eyes have no crease at all.

## Makeup for hooded eyes

Apply crease shadow slightly **above** your natural crease so it's visible when your eyes are open. Thin liner and tightlining keep lid space open. Waterproof formulas help, since hooded lids can transfer makeup.

## Can hooded eyes change?

Skin naturally loses elasticity with age, so many people's eyes become more hooded over time.`,
      celebrities: ["Blake Lively", "Jennifer Lawrence", "Taylor Swift"],
      faqs: [
        { q: "How do I know if I have hooded eyes?", a: "Look straight ahead in a mirror. If you can barely see your eyelid because skin from the brow area covers your crease, your eyes are hooded." },
        { q: "Are hooded eyes attractive?", a: "Yes. Hooded eyes are common and often described as sultry. Many well-known actresses have them." },
      ],
    },
    {
      slug: "monolid",
      name: "Monolid Eyes",
      keyword: "monolid eyes",
      definition:
        "Monolid eyes have no visible crease on the upper eyelid, so the lid appears as one smooth surface from lashes to brow. Monolids are especially common in people of East Asian descent.",
      traits: ["No visible crease", "Smooth upper lid", "Often slightly upturned"],
      body: `## Makeup for monolids

Gradient eyeshadow (darkest at the lash line, fading upward) adds depth without needing a crease. Tightlining and a slightly thicker liner show up better when the eyes are open.

## Can a detector find monolids?

The crease isn't one of the points a face landmark model tracks, so photo-based tools can only infer monolids from eye openness and lid space. If our detector suggests monolid, confirm it in the mirror.`,
      celebrities: ["Lucy Liu", "Jamie Chung", "Bae Suzy"],
      faqs: [{ q: "What is the difference between hooded and monolid eyes?", a: "Hooded eyes have a crease that's covered by skin; monolid eyes have no crease." }],
    },
    {
      slug: "upturned",
      name: "Upturned Eyes",
      keyword: "upturned eyes",
      definition:
        "Upturned eyes have outer corners that sit higher than the inner corners, giving a lifted, cat-like look. In measurement terms, they have a positive canthal tilt.",
      traits: ["Outer corner higher than inner corner", "Positive canthal tilt", "Lifted look"],
      body: `## Makeup for upturned eyes

Balance the lift by lining the lower lash line from the outer corner inward, or emphasize it with a sharp wing.

Measure the exact angle with our [canthal tilt calculator](/canthal-tilt-calculator/).`,
      celebrities: ["Adriana Lima", "Taylor Swift", "Rihanna"],
      faqs: [{ q: "Are upturned eyes the same as positive canthal tilt?", a: "Yes. Upturned eyes have a positive canthal tilt: the outer corner sits higher than the inner one." }],
    },
    {
      slug: "downturned",
      name: "Downturned Eyes",
      keyword: "downturned eyes",
      definition:
        "Downturned eyes have outer corners that sit lower than the inner corners. This gives a soft, gentle look and corresponds to a neutral or negative canthal tilt.",
      traits: ["Outer corners lower than inner corners", "Soft expression", "Negative canthal tilt"],
      body: `## Makeup for downturned eyes

Lift the outer corner with an upward wing, and keep lower-lash-line liner on the inner two-thirds. Curling the lashes also helps open the outer corners.`,
      celebrities: ["Anne Hathaway", "Daniel Radcliffe", "Kristen Stewart"],
      faqs: [{ q: "Can downturned eyes be changed?", a: "Not without surgery, but makeup (an upswept liner) and brow shaping can give a lifted look." }],
    },
    {
      slug: "deep-set",
      name: "Deep-Set Eyes",
      keyword: "deep set eyes",
      definition:
        "Deep-set eyes sit further back in the skull, so the brow bone looks more prominent and casts a shadow over the lid. They often look larger in profile than straight on.",
      traits: ["Prominent brow bone", "Shadowed lids", "Eyes sit back from the face"],
      body: `## Makeup for deep-set eyes

Use lighter, shimmery shades on the lid to bring it forward, and keep darker shades on the outer corner rather than in the crease.`,
      celebrities: ["Kate Moss", "Ryan Gosling", "Keira Knightley"],
      faqs: [{ q: "How are deep-set eyes different from hooded eyes?", a: "Deep-set eyes sit back under a prominent brow bone; hooded eyes have skin folding over the crease. You can have both." }],
    },
    {
      slug: "protruding",
      name: "Protruding Eyes",
      keyword: "protruding eyes",
      definition:
        "Protruding (or prominent) eyes sit further forward, so a lot of eyelid is visible and the eyes look large and open. Sudden changes in eye prominence can be a medical sign, so speak to a doctor if yours change.",
      traits: ["Large visible lid", "Eyes sit forward", "Open look"],
      body: `## Makeup for protruding eyes

Matte, medium-to-dark shadow on the lid recedes it, and a soft, smudged liner frames the eye.

## When to see a doctor

Eyes that become more prominent over months can be a sign of thyroid eye disease. This guide is about natural shape only and isn't medical advice.`,
      faqs: [{ q: "Are protruding eyes normal?", a: "Naturally prominent eyes are normal. A change in how prominent your eyes look is worth checking with a doctor." }],
    },
    {
      slug: "close-set",
      name: "Close-Set Eyes",
      keyword: "close set eyes",
      definition:
        "Close-set eyes have a gap between them that's narrower than the width of one eye. The rule of fifths says the ideal gap is about one eye width.",
      traits: ["Gap between eyes less than one eye width", "Eyes appear closer to the nose"],
      body: `## Makeup for close-set eyes

Highlight the inner corners and keep darker shadow and liner on the outer half of the eye to create the look of more space.`,
      celebrities: ["Ryan Reynolds", "Jennifer Aniston"],
      faqs: [{ q: "How do I know if my eyes are close-set?", a: "If the distance between your inner eye corners is less than the width of one eye, they're close-set." }],
    },
    {
      slug: "wide-set",
      name: "Wide-Set Eyes",
      keyword: "wide set eyes",
      definition:
        "Wide-set eyes have a gap between them that's wider than the width of one eye. They're often associated with a youthful, open look.",
      traits: ["Gap between eyes more than one eye width", "Open, youthful look"],
      body: `## Makeup for wide-set eyes

Bring the eyes visually closer with darker shadow on the inner corners and liner that starts at the inner corner.`,
      celebrities: ["Amanda Seyfried", "Taylor Swift", "Jacqueline Kennedy Onassis"],
      faqs: [{ q: "Are wide-set eyes attractive?", a: "Wide-set eyes are often seen as attractive and youthful, and are common among models." }],
    },
  ],
  faqs: [
    { q: "What are the main types of eyes?", a: "Almond, round, hooded, monolid, upturned, downturned, deep-set, protruding, close-set and wide-set. Most people combine two of these." },
    { q: "What is the most common eye shape?", a: "Almond and brown-eyed almond shapes are often described as the most common, followed by hooded and round." },
    { q: "What is the rarest eye shape?", a: "There's no reliable data on eye shape frequency. Eye shape varies widely by ancestry, and most people are a mix of shapes." },
    { q: "Can my eye shape change?", a: "Eye shape changes gradually with age, mostly as skin loses elasticity and eyes become more hooded." },
  ],
};

const noseShapes: TypeHub = {
  slug: "nose-shapes",
  name: "Nose Shapes",
  singular: "nose shape",
  keyword: "nose shapes",
  title: "Types of Nose Shapes: Chart of 10 Common Nose Types",
  description:
    "A guide to the types of nose shapes: Greek, Roman, Nubian, hawk (aquiline), button, snub, celestial, fleshy, bumpy and straight. Learn how to identify yours.",
  intro:
    "The most commonly described nose shapes are Greek (straight), Roman, Nubian, hawk (aquiline), button, snub, celestial (upturned), fleshy and bumpy. Nose shape comes down to four things: width at the nostrils, length from the bridge to the base, the profile of the bridge (straight, humped or scooped), and the angle of the tip.",
  body: `## How to tell your nose shape

1. **Width:** compare the width of your nostrils to the gap between your inner eye corners. Wider suggests Nubian or fleshy; narrower suggests Greek or button.
2. **Length:** a short nose (less than about a third of the face) suggests button or snub.
3. **Bridge:** check your profile in a side mirror. A visible hump suggests Roman or hawk.
4. **Tip:** if your nostrils are visible straight on, your tip is upturned (snub or celestial). A tip that points down suggests hawk.

Our [nose shape detector](/nose-shape-detector/) estimates width, length and tip angle from a front photo. Bridge profile is best judged from the side.

## Nose shape and ancestry

Nose shape is strongly influenced by ancestry and climate. Names like "Greek", "Roman" and "Nubian" are historical labels, not ethnic categories; people of every background have every shape.`,
  toolSlug: "nose-shape-detector",
  items: [
    {
      slug: "greek",
      name: "Greek Nose",
      keyword: "greek nose",
      definition: "A Greek nose has a straight bridge with no hump or dip, running in a clean line from the forehead to the tip. It's usually narrow to medium in width.",
      traits: ["Straight bridge", "No hump", "Narrow to medium width", "Straight tip"],
      body: `## Roman vs Greek nose

A Greek nose is straight; a Roman nose has a bridge that curves outward. See [Roman vs Greek nose](/blog/roman-vs-greek-nose/).`,
      celebrities: ["Jennifer Aniston", "Jessica Alba", "Kate Moss"],
      faqs: [{ q: "What is a Greek nose?", a: "A nose with a perfectly straight bridge, named after classical Greek statues." }],
    },
    {
      slug: "roman",
      name: "Roman Nose",
      keyword: "roman nose",
      definition: "A Roman nose has a prominent bridge that curves outward, often with a slight bump, giving a strong profile. It's sometimes called aquiline, though aquiline usually implies a more pronounced, hooked curve.",
      traits: ["Prominent, outward-curving bridge", "Strong profile", "Usually longer than average"],
      body: `## Aquiline vs Roman nose

Both curve outward. Aquiline (hawk) noses are more pronounced and the tip points down. See [aquiline vs Roman nose](/blog/aquiline-vs-roman-nose/).`,
      celebrities: ["Tom Cruise", "Ryan Gosling", "Sarah Jessica Parker"],
      faqs: [{ q: "Is a Roman nose attractive?", a: "A Roman nose gives a strong, distinctive profile and is common among actors and models." }],
    },
    {
      slug: "nubian",
      name: "Nubian Nose",
      keyword: "nubian nose",
      definition: "A Nubian nose has a long, fairly low bridge and a wider base at the nostrils. It's common among people of African descent but appears in all populations.",
      traits: ["Wide base", "Long bridge", "Rounded nostrils"],
      body: `## Nubian nose features

The width at the base is the defining feature. Straight on, the nostrils are wider than the gap between the inner eye corners.`,
      celebrities: ["Barack Obama", "Beyoncé", "Lupita Nyong'o"],
      faqs: [{ q: "What is a Nubian nose?", a: "A nose with a wide base and a long, low bridge." }],
    },
    {
      slug: "hawk",
      name: "Hawk Nose (Aquiline)",
      keyword: "hawk nose",
      definition: "A hawk nose, also called an aquiline nose, has a prominent bridge with a strong curve and a tip that points downward, like a hawk's beak.",
      traits: ["Pronounced curve", "Downward-pointing tip", "Prominent bridge"],
      body: `## Hawk vs Roman nose

A hawk nose curves more than a Roman nose and has a tip that hangs down.`,
      celebrities: ["Adrien Brody", "Barbra Streisand"],
      faqs: [{ q: "Is aquiline the same as hawk nose?", a: "Yes, aquiline comes from the Latin for eagle and describes the same hooked shape." }],
    },
    {
      slug: "button",
      name: "Button Nose",
      keyword: "button nose",
      definition: "A button nose is small, short and rounded, with a slightly upturned tip. It's often associated with a youthful look.",
      traits: ["Small", "Short", "Rounded tip", "Slightly upturned"],
      body: `## Snub vs button nose

Both are short. A snub nose is more clearly upturned with visible nostrils, while a button nose is smaller and rounder. See [snub vs button nose](/blog/snub-nose-vs-button-nose/).`,
      celebrities: ["Emma Stone", "Kristen Bell"],
      faqs: [{ q: "What is a button nose?", a: "A small, short nose with a rounded, slightly upturned tip." }],
    },
    {
      slug: "snub",
      name: "Snub Nose",
      keyword: "snub nose",
      definition: "A snub nose is short and clearly upturned, so the nostrils are visible when you look at the face straight on.",
      traits: ["Short", "Strongly upturned", "Visible nostrils"],
      body: `## Snub nose features

The tip angles upward, which shortens the nose and exposes the nostrils from the front.`,
      celebrities: ["Emma Stone", "Miley Cyrus"],
      faqs: [{ q: "What's the difference between snub and button nose?", a: "A snub nose is more upturned; a button nose is smaller and rounder." }],
    },
    {
      slug: "celestial",
      name: "Celestial Nose",
      keyword: "celestial nose",
      definition: "A celestial nose (also called an upturned nose) has a small dip in the middle of the bridge and a tip that points upward. It's longer than a snub nose.",
      traits: ["Slight dip in the bridge", "Upturned tip", "Medium length"],
      body: `## Celestial nose features

The tip turns up and the bridge has a gentle scoop. It's sometimes called a ski-slope nose.`,
      celebrities: ["Carrie Underwood", "Scarlett Johansson"],
      faqs: [{ q: "Is a celestial nose the same as an upturned nose?", a: "Yes, celestial nose is another name for an upturned nose with a slight scoop in the bridge." }],
    },
    {
      slug: "fleshy",
      name: "Fleshy Nose",
      keyword: "fleshy nose",
      definition: "A fleshy nose is large and wide with a rounded, prominent tip. It's one of the most common nose shapes.",
      traits: ["Large", "Wide", "Rounded, bulbous tip"],
      body: `## Fleshy nose features

The tip carries more soft tissue, so it looks round and full.`,
      celebrities: ["Seth Rogen", "Owen Wilson"],
      faqs: [{ q: "Is a fleshy nose common?", a: "Yes, it's one of the most common nose shapes." }],
    },
    {
      slug: "bumpy",
      name: "Bumpy Nose",
      keyword: "bumpy nose",
      definition: "A bumpy nose has a visible bump, or dorsal hump, on the bridge. It's very common and can be natural or the result of an injury.",
      traits: ["Visible hump on the bridge", "Profile shows a curve"],
      body: `## Bumpy nose features

A dorsal hump is best seen in profile. From the front it can make the bridge look wider in the middle.`,
      faqs: [{ q: "Why do I have a bump on my nose?", a: "Most nose bumps are inherited bone and cartilage structure. Some come from injuries." }],
    },
  ],
  faqs: [
    { q: "What are the main types of nose shapes?", a: "Greek, Roman, Nubian, hawk (aquiline), button, snub, celestial, fleshy and bumpy." },
    { q: "What is the most common nose shape?", a: "Fleshy noses are often described as the most common, followed by straight (Greek) noses." },
    { q: "Can a photo show my nose shape?", a: "A front photo shows width, length and tip angle well. Bridge humps are best seen in profile." },
  ],
};

const lipShapes: TypeHub = {
  slug: "lip-shapes",
  name: "Lip Shapes",
  singular: "lip shape",
  keyword: "lip shapes",
  title: "Types of Lip Shapes: Lip Shape Chart & How to Find Yours",
  description:
    "A lip shape chart covering full, thin, heart-shaped, bow-shaped, top-heavy, bottom-heavy, wide, round and downturned lips, with makeup tips for each.",
  intro:
    "The main lip shapes are full, thin, heart-shaped, bow-shaped, top-heavy, bottom-heavy, wide, round and downturned. Lip shape is defined by fullness (height relative to width), the balance between upper and lower lip, the width of the mouth, how defined the Cupid's bow is, and the angle of the corners.",
  body: `## How to tell your lip shape

1. **Relax your mouth** and close your lips gently.
2. **Compare upper and lower lip.** On most people the lower lip is about 1.5× the height of the upper. If your upper lip is as full or fuller, you're top-heavy.
3. **Check the Cupid's bow.** A sharp V in the center of your upper lip means a defined bow.
4. **Check width.** Imagine lines down from your pupils. If your mouth corners reach them, your mouth is wide.
5. **Check the corners.** Do they point up, straight or down at rest?

Our [lip shape analyzer](/lip-shape-analyzer/) measures all five from a photo.`,
  toolSlug: "lip-shape-analyzer",
  items: [
    { slug: "full", name: "Full Lips", keyword: "full lips", definition: "Full lips have more height relative to their width, so both lips look plump.", traits: ["Plump upper and lower lip", "Defined vermilion border"], body: "## Makeup for full lips\n\nSatin or matte formulas show off the shape. Line exactly on the natural border.", celebrities: ["Angelina Jolie", "Scarlett Johansson"], faqs: [{ q: "What makes lips full?", a: "Full lips have more height relative to their width." }] },
    { slug: "thin", name: "Thin Lips", keyword: "thin lips", definition: "Thin lips have less height relative to their width, and the vermilion (the pink part) is narrow.", traits: ["Narrow vermilion", "Less height"], body: "## Makeup for thin lips\n\nLight, glossy shades reflect light and make lips look fuller. Lining just on the outside edge of the natural border adds subtle size.", celebrities: ["Kate Moss", "Kirsten Dunst"], faqs: [{ q: "Can thin lips look fuller?", a: "Gloss, lighter shades and overlining slightly at the center can make thin lips look fuller." }] },
    { slug: "heart", name: "Heart-Shaped Lips", keyword: "heart shaped lips", definition: "Heart-shaped lips have a pronounced Cupid's bow and a fuller upper lip that, together with the lower lip, forms a heart.", traits: ["Pronounced Cupid's bow", "Fuller upper lip", "Lower lip narrower at the sides"], body: "## Makeup for heart-shaped lips\n\nHighlight the Cupid's bow and keep color even across both lips.", celebrities: ["Taylor Swift", "Reese Witherspoon"], faqs: [{ q: "What are heart-shaped lips?", a: "Lips with a pronounced Cupid's bow and a full upper lip that together form a heart shape." }] },
    { slug: "bow", name: "Bow-Shaped Lips", keyword: "bow shaped lips", definition: "Bow-shaped lips have a deep, sharply defined Cupid's bow, like the shape of an archer's bow, with a thinner overall fullness.", traits: ["Sharp V in the upper lip", "Defined peaks"], body: "## Makeup for bow-shaped lips\n\nA lip liner that traces the peaks sharpens the shape. A dot of highlight above the bow emphasizes it.", celebrities: ["Taylor Swift", "Amanda Seyfried"], faqs: [{ q: "Bow-shaped vs heart-shaped lips?", a: "Both have a defined bow; heart-shaped lips are fuller." }] },
    { slug: "top-heavy", name: "Top-Heavy Lips", keyword: "top heavy lips", definition: "Top-heavy lips have an upper lip that's as full as or fuller than the lower lip.", traits: ["Upper lip as full or fuller than lower", "Prominent upper lip"], body: "## Makeup for top-heavy lips\n\nAdd a lighter shade or gloss to the center of the lower lip to balance.", celebrities: ["Emily Ratajkowski", "Scarlett Johansson"], faqs: [{ q: "Are top-heavy lips rare?", a: "They're less common than a fuller lower lip, which is the typical proportion." }] },
    { slug: "bottom-heavy", name: "Bottom-Heavy Lips", keyword: "bottom heavy lips", definition: "Bottom-heavy lips have a lower lip that's much fuller than the upper lip, more than the typical 1.5:1 proportion.", traits: ["Full lower lip", "Thinner upper lip"], body: "## Makeup for bottom-heavy lips\n\nOverline the upper lip slightly and use a shade a touch lighter on top.", celebrities: ["Gigi Hadid", "Mila Kunis"], faqs: [{ q: "What are bottom-heavy lips?", a: "Lips where the lower lip is much fuller than the upper lip." }] },
    { slug: "wide", name: "Wide Lips", keyword: "wide lips", definition: "Wide lips stretch further across the face; the corners reach roughly to lines dropped from the pupils.", traits: ["Corners near the pupil line", "Broad smile"], body: "## Makeup for wide lips\n\nConcentrate color and gloss at the center, and keep liner slightly inside the corners.", celebrities: ["Julia Roberts", "Anne Hathaway"], faqs: [{ q: "How wide should lips be?", a: "On average, mouth width is about 1.4–1.6× the width of the nose." }] },
    { slug: "round", name: "Round Lips", keyword: "round lips", definition: "Round lips are full but relatively narrow, so the mouth looks compact and rounded.", traits: ["Full", "Narrow width", "Soft Cupid's bow"], body: "## Makeup for round lips\n\nExtend liner slightly toward the corners to elongate.", faqs: [{ q: "What are round lips?", a: "Full lips with a relatively narrow mouth." }] },
    { slug: "downturned", name: "Downturned Lips", keyword: "downturned lips", definition: "Downturned lips have corners that sit lower than the center of the mouth at rest.", traits: ["Corners lower than center", "Serious resting expression"], body: "## Makeup for downturned lips\n\nLift the corners with a tiny upward flick of liner and a dab of concealer under the corners.", faqs: [{ q: "Why do my lip corners turn down?", a: "It's often natural anatomy. It can increase with age as muscles and skin change." }] },
  ],
  faqs: [
    { q: "What are the main lip shapes?", a: "Full, thin, heart-shaped, bow-shaped, top-heavy, bottom-heavy, wide, round and downturned." },
    { q: "What is the ideal lip ratio?", a: "A lower lip about 1.6× the height of the upper lip is often described as ideal." },
    { q: "Can I change my lip shape?", a: "Makeup can change how lips look. Lip shape itself changes slowly with age." },
  ],
};

const headShapes: TypeHub = {
  slug: "head-shapes",
  name: "Head Shapes",
  singular: "head shape",
  keyword: "head shapes",
  title: "Types of Head Shapes: Round, Oval, Long, Flat & More",
  description:
    "A guide to the types of head shapes in adults and babies: round, oval, long, square, flat at the back, egg-shaped and pointed. Learn how to tell yours and which haircuts suit it.",
  intro:
    "Head shape is the outline of the whole skull, not just the face. The most commonly described head shapes are round, oval, long (dolichocephalic), wide (brachycephalic), square, flat at the back, egg-shaped and pointed at the crown. Head shape matters most for very short haircuts and buzz cuts, where the outline shows.",
  body: `## How to check your head shape

1. Wet or slick your hair down, or look at your head with your hair pulled back.
2. Take a photo from the side and from the front.
3. From the side, check whether the back of your head curves out (round/oval) or drops straight down (flat).
4. From the front, compare the width of your head above the ears with its height.

Use our [head shape detector](/head-shape-detector/) for a guided check.

## Head shape in babies

Many babies develop a flat spot (positional plagiocephaly) from lying on their back. It usually improves with tummy time and position changes. Speak to a pediatrician if you're worried. This guide isn't medical advice.

## Head shape and haircuts

If the back of your head is flat, avoid skin fades at the back; keep some length at the crown for a rounded outline. If your head is long, avoid tall styles.`,
  toolSlug: "head-shape-detector",
  items: [
    { slug: "round", name: "Round Head", keyword: "round head shape", definition: "A round head is about as wide as it is long and curves evenly at the back and crown.", traits: ["Even curve", "Similar width and length"], body: "## Haircuts for a round head\n\nAlmost any length works; buzz cuts look good because the outline is even.", faqs: [{ q: "Is a round head shape good for a buzz cut?", a: "Yes, an evenly curved skull is ideal for buzz cuts." }] },
    { slug: "oval", name: "Oval Head", keyword: "oval head shape", definition: "An oval head is slightly longer front-to-back than it is wide, with a smooth curve at the back.", traits: ["Slightly longer than wide", "Smooth curve"], body: "## Haircuts for an oval head\n\nThe most versatile shape for short cuts.", faqs: [{ q: "What's the most common head shape?", a: "Oval and round are the most commonly described adult head shapes." }] },
    { slug: "long", name: "Long Head", keyword: "long head shape", definition: "A long (dolichocephalic) head is noticeably longer front-to-back than it is wide.", traits: ["Long front to back", "Narrow"], body: "## Haircuts for a long head\n\nAvoid height on top; keep some width at the sides.", faqs: [{ q: "What is dolichocephaly?", a: "A head that's long and narrow relative to its width." }] },
    { slug: "flat-back", name: "Flat Back of Head", keyword: "flat back of head", definition: "A flat back of head drops more steeply behind the crown instead of curving outward.", traits: ["Little curve at the back", "Straight drop from crown"], body: "## Haircuts for a flat back of head\n\nKeep length and layers at the crown and back; avoid skin fades there.", faqs: [{ q: "Can adults fix a flat back of head?", a: "Adult skull shape doesn't change, but haircuts with volume at the back disguise it." }] },
    { slug: "square", name: "Square Head", keyword: "square head shape", definition: "A square head has a flat top and fairly straight sides.", traits: ["Flat crown", "Straight sides"], body: "## Haircuts for a square head\n\nTextured, rounded styles soften the corners.", faqs: [{ q: "Does a square head suit a buzz cut?", a: "It can, though textured cuts soften the angles." }] },
    { slug: "egg", name: "Egg-Shaped Head", keyword: "egg shaped head", definition: "An egg-shaped head is wider at the top or back and narrower toward the jaw, like an egg.", traits: ["Wider at top", "Narrower at jaw"], body: "## Haircuts for an egg-shaped head\n\nAdd fullness at the sides near the ears.", faqs: [{ q: "What does an egg-shaped head mean?", a: "The skull is wider at the top or back than at the jaw." }] },
  ],
  faqs: [
    { q: "How many head shapes are there?", a: "Guides usually describe 6–8: round, oval, long, wide, square, flat at the back, egg-shaped and pointed." },
    { q: "Does head shape change?", a: "Adult skull shape is stable. Babies' heads are soft and can change shape in the first year." },
  ],
};

const jawlineShapes: TypeHub = {
  slug: "jawline-shapes",
  name: "Jawline Shapes",
  singular: "jawline shape",
  keyword: "jawline types",
  title: "Jawline Types: Square, Rounded, V-Shaped, Pointed & More",
  description:
    "A guide to jawline types: square, rounded, V-shaped, pointed, wide and narrow. Learn what defines each and how to analyze yours.",
  intro:
    "Jawline shape is defined by the width of the jaw at its corners, the angle of the jaw corner (gonial angle), and the width and length of the chin. The six commonly described types are square, rounded, V-shaped, pointed, wide and narrow.",
  body: `## What makes a jawline "defined"?

A sharper jaw corner (a smaller gonial angle), a jaw that's close to the cheekbones in width, and a well-projected chin all read as a defined jawline. Body fat, posture and lighting change how defined it looks day to day.

Measure yours with the [jawline analyzer](/jawline-analyzer/).`,
  toolSlug: "jawline-analyzer",
  items: [
    { slug: "square", name: "Square Jawline", keyword: "square jawline", definition: "A square jawline is wide with sharp, visible corners below the ears.", traits: ["Sharp angle", "Wide"], body: "## Square jawline\n\nOften described as strong. Short beards follow it well.", faqs: [{ q: "Is a square jawline attractive?", a: "It's widely perceived as strong and attractive, especially in men." }] },
    { slug: "rounded", name: "Rounded Jawline", keyword: "rounded jawline", definition: "A rounded jawline curves smoothly from the ear to the chin without a visible corner.", traits: ["Soft angle", "Curved"], body: "## Rounded jawline\n\nCommon with round and oval faces. A beard can add angles.", faqs: [{ q: "Can a rounded jaw look sharper?", a: "Lower body fat, posture and beard shaping can make it look more defined." }] },
    { slug: "v-shaped", name: "V-Shaped Jawline", keyword: "v shaped jawline", definition: "A V-shaped jawline tapers from the cheekbones to a narrow chin, forming a V.", traits: ["Narrow chin", "Tapered"], body: "## V-shaped jawline\n\nCommon with heart and diamond faces.", faqs: [{ q: "What is a V-line jaw?", a: "A jaw that tapers smoothly to a narrow chin." }] },
    { slug: "pointed", name: "Pointed Jawline", keyword: "pointed chin", definition: "A pointed jawline ends in a narrow, projecting chin.", traits: ["Narrow, long chin"], body: "## Pointed jawline\n\nFull beards balance a pointed chin.", faqs: [{ q: "Is a pointed chin common?", a: "It's common with heart, diamond and inverted triangle faces." }] },
    { slug: "wide", name: "Wide Jawline", keyword: "wide jawline", definition: "A wide jawline is as wide as or wider than the cheekbones.", traits: ["Jaw close to cheek width"], body: "## Wide jawline\n\nCommon with square, triangle and pear faces.", faqs: [{ q: "Is a wide jaw masculine?", a: "Wide jaws are often described as masculine but are common in all genders." }] },
    { slug: "narrow", name: "Narrow Jawline", keyword: "narrow jawline", definition: "A narrow jawline is noticeably narrower than the cheekbones.", traits: ["Jaw much narrower than cheeks"], body: "## Narrow jawline\n\nFull beards and chin-length hairstyles add width.", faqs: [{ q: "Can you widen a narrow jaw?", a: "Beards and hairstyles create width visually; structure itself only changes with procedures." }] },
  ],
  faqs: [
    { q: "What are the types of jawlines?", a: "Square, rounded, V-shaped, pointed, wide and narrow." },
    { q: "What is a good jaw angle?", a: "Gonial angles of roughly 120–130° are often described as defined; larger angles look softer." },
  ],
};

const kibbe: TypeHub = {
  slug: "kibbe-body-types",
  name: "Kibbe Body Types",
  singular: "Kibbe type",
  keyword: "kibbe body types",
  title: "Kibbe Body Types: All 13 Types Explained (with Chart)",
  description:
    "The Kibbe system sorts people into 13 image identities based on the balance of yin (soft, curved) and yang (sharp, long) in their bone structure and flesh. See all 13 Kibbe body types.",
  intro:
    "The Kibbe body type system, created by stylist David Kibbe in 1987, sorts people into 13 image identities based on the balance of yang (long, sharp, angular) and yin (soft, rounded, small) in their bone structure, body and face. The five families are Dramatic, Natural, Classic, Gamine and Romantic, with variations within most of them.",
  body: `## The five Kibbe families

| Family | Balance | Types |
|---|---|---|
| Dramatic | Yang | Dramatic, Soft Dramatic |
| Natural | Soft yang | Flamboyant Natural, Natural, Soft Natural |
| Classic | Balanced | Dramatic Classic, Classic, Soft Classic |
| Gamine | Yin + yang mix | Flamboyant Gamine, Gamine, Soft Gamine |
| Romantic | Yin | Theatrical Romantic, Romantic |

The original book described 13 types. Kibbe later simplified the system to 10 (dropping Classic, Gamine and Natural as standalone types), but most people still use the 13-type version, so we cover all 13.

## How to find your Kibbe type

Take our [Kibbe body type test](/kibbe-body-type-test/). It asks about bone structure, body shape and facial features, then scores yin and yang to suggest your type.`,
  toolSlug: "kibbe-body-type-test",
  items: [
    { slug: "dramatic", name: "Dramatic", keyword: "kibbe dramatic", definition: "Dramatic is pure yang: long, narrow, sharp bone structure with angular facial features and little softness.", traits: ["Long, narrow frame", "Sharp facial features", "Straight shoulders"], body: "## Style lines\n\nLong, sharp, elongated lines; minimal ornament; bold geometric accessories.", celebrities: ["Tilda Swinton", "Anjelica Huston"], faqs: [{ q: "What is Kibbe Dramatic?", a: "The most yang type: long, sharp and angular." }] },
    { slug: "soft-dramatic", name: "Soft Dramatic", keyword: "soft dramatic kibbe", definition: "Soft Dramatic is yang bone structure with yin flesh: a long, large frame with curves and lush features.", traits: ["Tall or long frame", "Curvy", "Full lips and large eyes"], body: "## Style lines\n\nLong lines with draping and luxe fabrics.", celebrities: ["Sophia Loren", "Kate Winslet"], faqs: [{ q: "What is Soft Dramatic?", a: "A long, sharp frame combined with soft curves." }] },
    { slug: "flamboyant-natural", name: "Flamboyant Natural", keyword: "flamboyant natural", definition: "Flamboyant Natural has a long, broad frame with blunt rather than sharp yang.", traits: ["Broad shoulders", "Long limbs", "Blunt angles"], body: "## Style lines\n\nRelaxed, unstructured, oversized silhouettes.", celebrities: ["Cameron Diaz", "Taylor Swift"], faqs: [{ q: "What is Flamboyant Natural?", a: "A long, broad, blunt yang type." }] },
    { slug: "natural", name: "Natural", keyword: "kibbe natural", definition: "Natural is a soft yang type: moderate height, broad and slightly blunt bone structure, athletic look.", traits: ["Moderate height", "Athletic, slightly broad"], body: "## Style lines\n\nCasual, relaxed fabrics and loose fits.", faqs: [{ q: "Does Kibbe Natural still exist?", a: "Kibbe folded it into Flamboyant Natural and Soft Natural, but many people still use it." }] },
    { slug: "soft-natural", name: "Soft Natural", keyword: "soft natural kibbe", definition: "Soft Natural is a slightly broad, blunt frame with a layer of yin softness and curves.", traits: ["Moderate height", "Broad shoulders", "Soft curves"], body: "## Style lines\n\nRelaxed shapes with soft, draping fabrics and a defined waist.", celebrities: ["Brigitte Bardot", "Jennifer Lopez"], faqs: [{ q: "What is Soft Natural?", a: "A blunt, broad frame softened by curves." }] },
    { slug: "dramatic-classic", name: "Dramatic Classic", keyword: "dramatic classic", definition: "Dramatic Classic is balanced and symmetrical, with a slight sharpness in the bones and face.", traits: ["Balanced, moderate frame", "Slightly sharp features"], body: "## Style lines\n\nTailored, polished pieces with crisp edges.", celebrities: ["Gwyneth Paltrow", "Emma Watson"], faqs: [{ q: "What is Dramatic Classic?", a: "A balanced type with a hint of sharpness." }] },
    { slug: "classic", name: "Classic", keyword: "kibbe classic", definition: "Classic is perfectly balanced yin and yang: moderate, symmetrical and refined.", traits: ["Symmetry", "Moderate height", "Refined features"], body: "## Style lines\n\nPolished, symmetrical, moderate tailoring.", faqs: [{ q: "Is Classic still a Kibbe type?", a: "Kibbe later removed pure Classic; most people now type as Dramatic or Soft Classic." }] },
    { slug: "soft-classic", name: "Soft Classic", keyword: "soft classic", definition: "Soft Classic is balanced with a slight softness and roundness.", traits: ["Balanced frame", "Soft curves", "Gentle features"], body: "## Style lines\n\nTailored but softened with draping and rounded details.", celebrities: ["Grace Kelly", "Olivia Wilde"], faqs: [{ q: "What is Soft Classic?", a: "A balanced type with gentle softness." }] },
    { slug: "flamboyant-gamine", name: "Flamboyant Gamine", keyword: "flamboyant gamine", definition: "Flamboyant Gamine combines petite size with more yang: sharp, straight and lively.", traits: ["Petite or compact", "Sharp angles", "Animated features"], body: "## Style lines\n\nCropped, contrasting, playful pieces.", celebrities: ["Audrey Hepburn", "Zoë Kravitz"], faqs: [{ q: "What is Flamboyant Gamine?", a: "A compact, yang-leaning mix of sharp and small." }] },
    { slug: "gamine", name: "Gamine", keyword: "kibbe gamine", definition: "Gamine is an even mix of yin and yang in a compact frame.", traits: ["Compact frame", "Mixed sharp and round features"], body: "## Style lines\n\nBroken lines, contrast and detail.", faqs: [{ q: "Is Gamine still a Kibbe type?", a: "Kibbe now uses only Flamboyant and Soft Gamine." }] },
    { slug: "soft-gamine", name: "Soft Gamine", keyword: "soft gamine", definition: "Soft Gamine is a compact frame with more yin: round, curvy and youthful.", traits: ["Petite", "Curvy", "Rounded features"], body: "## Style lines\n\nFitted, cropped pieces with rounded details.", celebrities: ["Natalie Wood", "Kristen Bell"], faqs: [{ q: "What is Soft Gamine?", a: "A compact, yin-leaning mix of small and soft." }] },
    { slug: "theatrical-romantic", name: "Theatrical Romantic", keyword: "theatrical romantic", definition: "Theatrical Romantic is yin with a hint of sharpness: petite, curvy, with delicate angular features.", traits: ["Petite", "Curvy", "Delicate, slightly sharp features"], body: "## Style lines\n\nFitted, curved, delicate and ornate.", celebrities: ["Rita Hayworth", "Megan Fox"], faqs: [{ q: "What is Theatrical Romantic?", a: "A soft, curvy type with delicate sharpness." }] },
    { slug: "romantic", name: "Romantic", keyword: "kibbe romantic", definition: "Romantic is pure yin: soft, rounded and curvy, with lush features.", traits: ["Soft, round frame", "Curvy", "Lush features"], body: "## Style lines\n\nSoft fabrics, waist definition, rounded shapes.", celebrities: ["Marilyn Monroe", "Elizabeth Taylor"], faqs: [{ q: "What is Kibbe Romantic?", a: "The most yin type: soft, curvy and round." }] },
  ],
  faqs: [
    { q: "How many Kibbe body types are there?", a: "The original system has 13 types. Kibbe's updated system has 10." },
    { q: "What is yin and yang in Kibbe?", a: "Yang is long, sharp and angular. Yin is soft, rounded and small. Your type is the balance of the two." },
    { q: "Is Kibbe based on weight?", a: "No. Kibbe types are based on bone structure and features, which don't change with weight." },
  ],
};

export const TYPE_HUBS: TypeHub[] = [eyeShapes, noseShapes, lipShapes, headShapes, jawlineShapes, kibbe];
export const hubBySlug = (slug: string) => TYPE_HUBS.find((h) => h.slug === slug);
