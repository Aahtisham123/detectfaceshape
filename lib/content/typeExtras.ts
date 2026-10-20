import type { Faq } from "./types";

/** Extra, type-specific depth for every type page: how to tell, practical tips, look-alike comparisons, more FAQs. */
export type TypeExtra = {
  howToTell: string[];
  tips: { title: string; items: string[] };
  compare: { slug: string; diff: string }[];
  faqs: Faq[];
};

export const TYPE_EXTRAS: Record<string, TypeExtra> = {
  /* ------------------------------------------------------------ eyes */
  "eye-shapes/almond": {
    howToTell: ["Look straight ahead: the iris touches both the upper and lower lid, with no white showing above or below.", "The eye is roughly two to three times as long as it is tall.", "The outer corner narrows to a soft point and often sits level with, or slightly above, the inner corner."],
    tips: { title: "Makeup tips for almond eyes", items: ["A classic winged liner follows the natural taper; start thin at the inner corner and thicken toward the wing.", "Put a medium shade in the crease to show off the eye's length.", "A light shimmer on the center of the lid catches the light without changing the shape.", "Most lash styles suit almond eyes; curl lashes to open the outer corners."] },
    compare: [{ slug: "round", diff: "Round eyes show white above or below the iris; almond eyes don't." }, { slug: "upturned", diff: "Upturned eyes have a clearly lifted outer corner; almond eyes are closer to level." }],
    faqs: [{ q: "What is the most attractive eye shape?", a: "Almond eyes are often called the ideal in makeup guides because they're balanced, but research on attractiveness points to brightness, symmetry and expression far more than to outline." }],
  },
  "eye-shapes/round": {
    howToTell: ["Look straight ahead in a mirror: you can see white above or below the iris, or both.", "The eye looks nearly as tall as it is wide, with a curved rather than tapered outer corner.", "The crease is usually clearly visible."],
    tips: { title: "Makeup tips for round eyes", items: ["To elongate, extend liner past the outer corner and keep it thin on the inner half.", "Concentrate darker shadow on the outer third and blend outward.", "Skip heavy liner all around the eye, which can make round eyes look smaller.", "To play up roundness instead, line the waterline in nude and focus mascara on the center lashes."] },
    compare: [{ slug: "almond", diff: "Almond eyes are longer, with the iris touching both lids." }, { slug: "protruding", diff: "Protruding eyes sit forward with lots of visible lid; round eyes describe the outline only." }],
    faqs: [{ q: "Are round eyes common?", a: "Yes. Round eyes are common across all backgrounds and are often perceived as youthful and expressive." }],
  },
  "eye-shapes/hooded": {
    howToTell: ["Relax your face and look straight ahead: if you can see little or none of your eyelid, your eyes are likely hooded.", "Lift your brow gently with a fingertip; if a crease appears that was hidden, the skin above it is the hood.", "Eyeshadow on the lid tends to transfer to the brow bone during the day."],
    tips: { title: "Makeup tips for hooded eyes", items: ["Apply crease shadow above your natural crease, with your eyes open, so it stays visible.", "Use a thin liner and tightline the upper waterline to keep lid space open.", "Try a 'bat wing' liner: angled up and drawn with the eye open, so it doesn't fold.", "Waterproof or long-wear formulas reduce transfer onto the hood."] },
    compare: [{ slug: "monolid", diff: "Monolids have no crease at all; hooded eyes have a crease that's covered." }, { slug: "deep-set", diff: "Deep-set eyes sit back under the brow bone; hooding is skin folding over the crease. Many people have both." }],
    faqs: [{ q: "Do hooded eyes get worse with age?", a: "Often, yes. Skin loses elasticity over time, so the fold above the crease can become more pronounced." }],
  },
  "eye-shapes/monolid": {
    howToTell: ["Look straight into a mirror with your eyes open: there's no visible fold between the lash line and the brow.", "Gently close your eyes: the lid is smooth, without a crease line.", "Monolids are often slightly upturned and can look narrower when you smile."],
    tips: { title: "Makeup tips for monolids", items: ["Use a gradient: darkest at the lash line, fading upward, to create depth without a crease.", "Draw liner a little thicker than you think; some of it will be hidden when your eyes are open.", "Tightlining and curled lashes make the eye look more open.", "Shimmer in the center of the lid adds dimension."] },
    compare: [{ slug: "hooded", diff: "Hooded eyes have a crease hidden by skin; monolids have no crease." }, { slug: "almond", diff: "Almond eyes have a visible crease; the outline can otherwise be similar." }],
    faqs: [{ q: "Can monolids be detected from a photo?", a: "Only indirectly. Landmark models don't track the crease, so detectors infer monolids from eye openness and lid space; confirm in a mirror." }],
  },
  "eye-shapes/upturned": {
    howToTell: ["Imagine a straight line through the inner and outer corner of each eye.", "If the outer corner sits higher than the inner corner, your eyes are upturned (positive canthal tilt).", "The lower lash line often appears to sweep upward toward the temple."],
    tips: { title: "Makeup tips for upturned eyes", items: ["Emphasize the lift with a sharp, upward wing.", "To balance it, add a soft line along the outer half of the lower lashes.", "Keep lower-lash shadow on the outer third so it doesn't drag the eye down.", "Curl and coat the outer lashes most."] },
    compare: [{ slug: "downturned", diff: "Downturned eyes have the outer corner lower than the inner corner." }, { slug: "almond", diff: "Almond eyes may tilt up slightly; upturned eyes tilt up clearly." }],
    faqs: [{ q: "How many degrees is an upturned eye?", a: "Most people measure about +2° to +6°. Above roughly +6° reads as clearly upturned. Measure yours with our canthal tilt calculator." }],
  },
  "eye-shapes/downturned": {
    howToTell: ["Draw an imaginary line from the inner to the outer corner of each eye.", "If the outer corner is lower than the inner corner, your eyes are downturned.", "The outer lashes may appear to angle down toward the cheek."],
    tips: { title: "Makeup tips for downturned eyes", items: ["Lift the outer corner with a liner flick that angles up toward the end of the brow.", "Keep lower-lash liner to the inner two-thirds of the eye.", "Place the darkest shadow on the upper outer corner, blended upward.", "Curl lashes and focus mascara on the outer lashes, pointing them up."] },
    compare: [{ slug: "upturned", diff: "Upturned eyes lift at the outer corner instead." }, { slug: "hooded", diff: "Hooding over the outer corner can make eyes look downturned even with a neutral tilt." }],
    faqs: [{ q: "Are downturned eyes attractive?", a: "Yes. Downturned eyes give a soft, gentle expression and are common among well-known actors." }],
  },
  "eye-shapes/deep-set": {
    howToTell: ["Look at your face in profile: the eyes sit noticeably behind the brow bone.", "The upper lid is often shadowed, even in good light.", "The brow bone looks prominent and the eyes can appear smaller from the front."],
    tips: { title: "Makeup tips for deep-set eyes", items: ["Use light, reflective shades on the lid to bring it forward.", "Keep dark shadows on the outer corner rather than deep in the crease.", "Highlight just under the brow arch to lift the area.", "Thin liner works better than heavy, smoky looks, which can recede the eye further."] },
    compare: [{ slug: "hooded", diff: "Hooded eyes are about skin over the crease; deep-set eyes are about how far back the eye sits." }, { slug: "protruding", diff: "Protruding eyes are the opposite: they sit forward." }],
    faqs: [{ q: "Are deep-set eyes genetic?", a: "Mostly. They come from the shape of the brow bone and eye socket, which are largely inherited." }],
  },
  "eye-shapes/protruding": {
    howToTell: ["In profile, the eyes sit forward relative to the brow bone and cheekbones.", "A lot of eyelid is visible between lashes and brow.", "The eyes look large and open even with a relaxed face."],
    tips: { title: "Makeup tips for protruding eyes", items: ["Matte, medium-to-dark lid shades help the lid recede.", "Smudge liner softly rather than drawing a crisp line.", "Avoid frosted shimmer across the whole lid, which brings it forward.", "Define brows well to balance the eye area."] },
    compare: [{ slug: "deep-set", diff: "Deep-set eyes sit back under the brow bone." }, { slug: "round", diff: "Round describes the outline; protruding describes how far forward the eye sits." }],
    faqs: [{ q: "Should I see a doctor about protruding eyes?", a: "Naturally prominent eyes are normal. If your eyes become more prominent over weeks or months, see a doctor, as it can be a sign of thyroid eye disease." }],
  },
  "eye-shapes/close-set": {
    howToTell: ["Measure the gap between your inner eye corners.", "Compare it with the width of one eye from corner to corner.", "If the gap is noticeably smaller than one eye width, your eyes are close-set."],
    tips: { title: "Makeup and brow tips for close-set eyes", items: ["Highlight the inner corners and the inside of the brow bone.", "Keep darker shadow and liner on the outer half of the eye.", "Start brows directly above the inner eye corner, not closer to the nose.", "Extend liner slightly past the outer corner to widen the look."] },
    compare: [{ slug: "wide-set", diff: "Wide-set eyes have a gap larger than one eye width." }, { slug: "almond", diff: "Spacing is separate from shape: almond eyes can be close-set, average or wide-set." }],
    faqs: [{ q: "What is the ideal distance between eyes?", a: "The classic rule of fifths says the gap should equal one eye width. Most faces vary a little either way." }],
  },
  "eye-shapes/wide-set": {
    howToTell: ["Measure the gap between your inner eye corners.", "Compare it with the width of one eye.", "If the gap is clearly larger than one eye width, your eyes are wide-set."],
    tips: { title: "Makeup and brow tips for wide-set eyes", items: ["Add depth on the inner corners with a medium shade.", "Start liner right at the inner corner and keep the wing short.", "Let brows start a little closer to the nose to frame the eyes.", "Concentrate mascara on the inner lashes."] },
    compare: [{ slug: "close-set", diff: "Close-set eyes have a gap smaller than one eye width." }, { slug: "round", diff: "Spacing and shape are independent; round eyes can be wide-set too." }],
    faqs: [{ q: "Are wide-set eyes a sign of anything?", a: "In almost everyone, wide-set eyes are simply a natural variation. Extremely wide spacing can occasionally be part of a medical condition, which a doctor would assess." }],
  },

  /* ------------------------------------------------------------ nose */
  "nose-shapes/greek": {
    howToTell: ["Check your profile: the bridge runs in one straight line from forehead to tip.", "There's no visible bump or scoop along the bridge.", "Straight on, the nose is narrow to medium width with a straight tip."],
    tips: { title: "Contouring a Greek nose", items: ["Minimal contour is needed; a thin line of highlight down the bridge enhances the straight profile.", "Soft shading at the sides of the bridge adds definition in photos.", "Keep blush and bronzer balanced so the nose stays the center line of the face."] },
    compare: [{ slug: "roman", diff: "A Roman nose curves outward at the bridge." }, { slug: "celestial", diff: "A celestial nose dips slightly and turns up at the tip." }],
    faqs: [{ q: "Is a Greek nose rare?", a: "A perfectly straight bridge is less common than a slight curve or bump, but Greek noses are found across all populations." }],
  },
  "nose-shapes/roman": {
    howToTell: ["In profile, the bridge curves outward, often with a slight bump near the top.", "The nose is usually medium to long.", "The tip is fairly straight rather than hooked down."],
    tips: { title: "Styling tips for a Roman nose", items: ["Side parts and soft volume balance a strong profile.", "Frames with a lower bridge sit comfortably on a prominent bridge.", "If contouring, a soft matte shade on the bump and highlight above and below it smooths the line."] },
    compare: [{ slug: "hawk", diff: "A hawk nose curves more and the tip points down." }, { slug: "greek", diff: "A Greek nose is completely straight." }, { slug: "bumpy", diff: "A bumpy nose has a localized hump rather than an overall outward curve." }],
    faqs: [{ q: "Why is it called a Roman nose?", a: "The name comes from the strong, curved noses on ancient Roman statues and coins." }],
  },
  "nose-shapes/nubian": {
    howToTell: ["Straight on, compare your nostril width with the gap between your inner eye corners: a Nubian nose is wider.", "The bridge is long and fairly low.", "The nostrils are rounded and visible from slightly below."],
    tips: { title: "Contouring a Nubian nose", items: ["If you want to slim it visually, shade down the sides of the bridge and highlight the center.", "Keep contour soft and blended; harsh lines look obvious on wider noses.", "Many people prefer to leave it uncontoured and focus on brows and lips."] },
    compare: [{ slug: "fleshy", diff: "A fleshy nose is large overall with a bulbous tip; a Nubian nose is defined by a wide base and long, low bridge." }, { slug: "button", diff: "A button nose is small and short." }],
    faqs: [{ q: "Is the Nubian nose an ethnic category?", a: "No. The name is historical. Wide-based noses appear in many populations and are especially common in people of African descent." }],
  },
  "nose-shapes/hawk": {
    howToTell: ["In profile, the bridge has a pronounced curve.", "The tip points downward, like a beak.", "The nose usually looks long and projects forward."],
    tips: { title: "Styling tips for a hawk nose", items: ["Fuller hair at the sides and back balances a strong profile.", "Frames with a solid bridge sit well and draw the eye to the brows.", "A soft contour under the tip can visually lift it in photos."] },
    compare: [{ slug: "roman", diff: "A Roman nose curves less and has a straighter tip." }, { slug: "bumpy", diff: "A bumpy nose has a hump but not the downward-pointing tip." }],
    faqs: [{ q: "Can a photo show a hawk nose?", a: "A front photo shows length and tip angle; the curve itself is clearest in profile." }],
  },
  "nose-shapes/button": {
    howToTell: ["Your nose is short and small relative to your face.", "The tip is rounded and turns up slightly.", "In profile, the bridge is low and fairly straight or slightly scooped."],
    tips: { title: "Makeup tips for a button nose", items: ["A dot of highlight on the tip and bridge enhances the shape.", "Little or no contour is needed.", "Defined brows and lashes balance the small nose."] },
    compare: [{ slug: "snub", diff: "A snub nose turns up more clearly and shows the nostrils from the front." }, { slug: "celestial", diff: "A celestial nose is longer, with a dip along the bridge." }],
    faqs: [{ q: "Do button noses change with age?", a: "Noses tend to lengthen and the tip drops slightly with age, so button noses often look a little longer later in life." }],
  },
  "nose-shapes/snub": {
    howToTell: ["Look straight into a mirror: you can see a good part of your nostrils.", "The nose is short.", "In profile, the tip angles clearly upward."],
    tips: { title: "Makeup tips for a snub nose", items: ["A small amount of shade under the tip can make it appear less upturned in photos.", "Highlight only the upper bridge to lengthen the look.", "Balance with defined brows and lips."] },
    compare: [{ slug: "button", diff: "A button nose is rounder and less upturned." }, { slug: "celestial", diff: "A celestial nose is longer and has a scooped bridge." }],
    faqs: [{ q: "What angle makes a nose snub?", a: "Noses with a nasolabial angle well above about 105–110° tend to look clearly upturned." }],
  },
  "nose-shapes/celestial": {
    howToTell: ["In profile, the bridge dips slightly in the middle.", "The tip turns up.", "The nose is medium length, longer than a snub or button nose."],
    tips: { title: "Makeup tips for a celestial nose", items: ["Highlight down the bridge and the tip to emphasize the curve.", "A light contour along the sides keeps it defined in photos.", "No correction needed: it's one of the most requested nose shapes."] },
    compare: [{ slug: "snub", diff: "A snub nose is shorter and more upturned." }, { slug: "greek", diff: "A Greek nose has a straight bridge with no dip." }],
    faqs: [{ q: "Is a celestial nose the same as a ski-slope nose?", a: "Yes, 'ski-slope' describes the same scooped bridge with an upturned tip." }],
  },
  "nose-shapes/fleshy": {
    howToTell: ["The nose is large with a rounded, prominent tip.", "Straight on, the lower third looks fuller than the bridge.", "The nostrils are wide and rounded."],
    tips: { title: "Contouring a fleshy nose", items: ["Shade lightly on either side of the tip and highlight the center of the tip.", "Blend well; soft shading looks more natural than sharp lines.", "Balance with fuller brows and defined lips."] },
    compare: [{ slug: "nubian", diff: "A Nubian nose is defined by a wide base and long, low bridge rather than a bulbous tip." }, { slug: "button", diff: "A button nose is small and short." }],
    faqs: [{ q: "Is a fleshy nose the most common nose shape?", a: "It's often described as the most common, though there's no large scientific survey of nose shapes." }],
  },
  "nose-shapes/bumpy": {
    howToTell: ["In profile, there's a distinct bump on the bridge.", "Straight on, the bridge can look slightly wider at the bump.", "The rest of the nose can be straight."],
    tips: { title: "Contouring a bumpy nose", items: ["Apply a soft matte shade directly on the bump.", "Highlight above and below the bump to straighten the line visually.", "Glasses with a high bridge can sit across the bump comfortably."] },
    compare: [{ slug: "roman", diff: "A Roman nose has an overall outward curve; a bumpy nose has a localized hump." }, { slug: "hawk", diff: "A hawk nose adds a downward-pointing tip." }],
    faqs: [{ q: "Can a nose bump appear later in life?", a: "A bump can become more visible after an injury, and noses also change slowly with age." }],
  },

  /* ------------------------------------------------------------ lips */
  "lip-shapes/full": {
    howToTell: ["With lips relaxed, both lips have plenty of height relative to their width.", "The vermilion border (the edge of the pink part) is clearly defined.", "The lower lip is usually a little fuller than the upper."],
    tips: { title: "Makeup tips for full lips", items: ["Line exactly on your natural border for a crisp shape.", "Matte and satin finishes show off fullness; gloss adds even more volume.", "Deep shades look striking; blot for a softer stain."] },
    compare: [{ slug: "thin", diff: "Thin lips have a narrow vermilion and less height." }, { slug: "round", diff: "Round lips are full but narrow." }],
    faqs: [{ q: "Do lips get thinner with age?", a: "Yes. Lips lose volume and definition gradually as collagen decreases." }],
  },
  "lip-shapes/thin": {
    howToTell: ["The pink part of both lips is narrow compared with your mouth width.", "The Cupid's bow can be subtle.", "Lip color can disappear when you smile."],
    tips: { title: "Makeup tips for thin lips", items: ["Light, glossy shades reflect light and look fuller.", "Line just on the outer edge of your natural border, especially at the center.", "A dot of highlight above the Cupid's bow adds dimension.", "Very dark matte shades can make thin lips look smaller."] },
    compare: [{ slug: "full", diff: "Full lips have more height relative to width." }, { slug: "bow", diff: "Bow-shaped lips can be thin but have a pronounced Cupid's bow." }],
    faqs: [{ q: "Are thin lips unattractive?", a: "No. Lip fullness is a matter of taste and trend, and many admired faces have thin lips." }],
  },
  "lip-shapes/heart": {
    howToTell: ["The Cupid's bow has two clear peaks and a defined dip.", "The upper lip is relatively full.", "The lower lip narrows toward the corners, completing a heart shape."],
    tips: { title: "Makeup tips for heart-shaped lips", items: ["Trace the peaks with liner to sharpen the bow.", "Keep color even on both lips to maintain balance.", "A touch of gloss on the lower lip center adds fullness."] },
    compare: [{ slug: "bow", diff: "Bow-shaped lips share the defined bow but are thinner." }, { slug: "top-heavy", diff: "Top-heavy lips have a fuller upper lip without necessarily a sharp bow." }],
    faqs: [{ q: "Are heart-shaped lips rare?", a: "They're less common than a balanced lip shape, and very defined Cupid's bows are often seen as a striking feature." }],
  },
  "lip-shapes/bow": {
    howToTell: ["The center of the upper lip dips into a sharp V.", "The two peaks either side are high and well defined.", "Overall fullness is moderate to thin."],
    tips: { title: "Makeup tips for bow-shaped lips", items: ["Use a pencil to define the V and the peaks.", "Highlight the skin just above the bow.", "Satin shades show the shape better than heavy gloss."] },
    compare: [{ slug: "heart", diff: "Heart-shaped lips are fuller." }, { slug: "thin", diff: "Thin lips may have a soft, less defined bow." }],
    faqs: [{ q: "What is a Cupid's bow?", a: "The double curve of the upper lip: two peaks with a dip in the center below the philtrum." }],
  },
  "lip-shapes/top-heavy": {
    howToTell: ["Compare the height of your upper and lower lip with your mouth relaxed.", "If the upper lip is as tall as or taller than the lower lip, you're top-heavy.", "The upper lip often looks prominent in profile."],
    tips: { title: "Makeup tips for top-heavy lips", items: ["Add a lighter shade or gloss to the center of the lower lip.", "Line the lower lip slightly outside its edge if you want balance.", "Keep the upper lip matte and the lower lip glossy."] },
    compare: [{ slug: "bottom-heavy", diff: "Bottom-heavy lips have a much fuller lower lip." }, { slug: "heart", diff: "Heart-shaped lips have a full upper lip and a sharp bow." }],
    faqs: [{ q: "What is the normal upper-to-lower lip ratio?", a: "On average the lower lip is about 1.5–1.7 times the height of the upper lip." }],
  },
  "lip-shapes/bottom-heavy": {
    howToTell: ["The lower lip is clearly fuller than the upper.", "The difference is bigger than the typical 1.5:1 ratio.", "The upper lip may look thin by comparison."],
    tips: { title: "Makeup tips for bottom-heavy lips", items: ["Overline the upper lip slightly at the peaks.", "Use a shade a touch lighter on the upper lip.", "Gloss only the upper lip to balance volume."] },
    compare: [{ slug: "top-heavy", diff: "Top-heavy lips are the opposite: a fuller upper lip." }, { slug: "full", diff: "Full lips are full on both lips." }],
    faqs: [{ q: "Are bottom-heavy lips common?", a: "Yes. A fuller lower lip is the typical proportion; bottom-heavy simply means more so." }],
  },
  "lip-shapes/wide": {
    howToTell: ["Imagine vertical lines down from your pupils.", "If your mouth corners reach or pass those lines, your mouth is wide.", "Your smile spreads broadly across the face."],
    tips: { title: "Makeup tips for wide lips", items: ["Focus color and gloss at the center of the lips.", "Keep liner slightly inside the corners.", "Bright shades suit wide lips and make a confident statement."] },
    compare: [{ slug: "round", diff: "Round lips are narrow and full." }, { slug: "full", diff: "Full describes height; wide describes width. Lips can be both." }],
    faqs: [{ q: "How wide should lips be?", a: "On average the mouth is about 1.4–1.6 times the width of the nose." }],
  },
  "lip-shapes/round": {
    howToTell: ["The lips are full but the mouth is relatively narrow.", "The Cupid's bow is soft.", "Seen straight on, the lips look compact and rounded."],
    tips: { title: "Makeup tips for round lips", items: ["Extend liner slightly toward the corners to add width.", "Use matte shades at the corners and gloss at the center sparingly.", "Defined brows balance a compact mouth."] },
    compare: [{ slug: "wide", diff: "Wide lips stretch further across the face." }, { slug: "full", diff: "Full lips can be any width; round lips are full and narrow." }],
    faqs: [{ q: "Can round lips look wider?", a: "Yes. Lining slightly past the natural corners and keeping color even creates a wider look." }],
  },
  "lip-shapes/downturned": {
    howToTell: ["Relax your mouth completely and look in a mirror.", "If the corners sit lower than the line where your lips meet, they're downturned.", "People may say you look serious when you're relaxed."],
    tips: { title: "Makeup tips for downturned lips", items: ["Draw a tiny upward flick of liner at each corner.", "Dab concealer just under the corners to lift them visually.", "Keep the lower lip color slightly lighter at the corners."] },
    compare: [{ slug: "heart", diff: "Heart-shaped lips usually have neutral or slightly lifted corners." }, { slug: "thin", diff: "Thin lips can be downturned or not; the corners are what define downturned." }],
    faqs: [{ q: "Can downturned lips be lifted?", a: "Makeup can lift them visually. Cosmetic treatments exist but are best discussed with a qualified professional." }],
  },

  /* ------------------------------------------------------------ head */
  "head-shapes/round": {
    howToTell: ["Slick your hair down and take a side photo.", "The back of the head curves out evenly from crown to nape.", "From above or the side, length and width look similar."],
    tips: { title: "Best haircuts for a round head", items: ["Buzz cuts and crew cuts look clean because the outline is even.", "Skin fades work all the way round.", "Add a little height on top if your face is also round."] },
    compare: [{ slug: "oval", diff: "An oval head is slightly longer front to back." }, { slug: "flat-back", diff: "A flat back drops straight down instead of curving out." }],
    faqs: [{ q: "How do I know if my head is round?", a: "If the back of your head curves out evenly in a side photo and your head looks about as long as it is wide, it's round." }],
  },
  "head-shapes/oval": {
    howToTell: ["In a side photo, the head is a little longer front to back than it is wide.", "The back curves smoothly with no flat area.", "The crown is gently rounded."],
    tips: { title: "Best haircuts for an oval head", items: ["Almost any short cut works, including buzz cuts.", "Textured crops and tapers show the smooth outline.", "Longer styles fall naturally without needing volume at the back."] },
    compare: [{ slug: "round", diff: "A round head is as wide as it is long." }, { slug: "long", diff: "A long head is much longer front to back." }],
    faqs: [{ q: "Is an oval head the most common?", a: "Oval and round are the most commonly described adult head shapes." }],
  },
  "head-shapes/long": {
    howToTell: ["In a side photo, the head is clearly longer front to back than it is wide from the front.", "The back of the head often projects out.", "The face may also look long."],
    tips: { title: "Best haircuts for a long head", items: ["Avoid tall styles; keep height on top low.", "Keep some fullness at the sides to add width.", "Medium lengths and fringes suit long heads well."] },
    compare: [{ slug: "oval", diff: "An oval head is only slightly longer than wide." }, { slug: "egg", diff: "An egg-shaped head is wider at the top or back." }],
    faqs: [{ q: "What is the medical term for a long head?", a: "Dolichocephaly. In adults it's simply a natural variation." }],
  },
  "head-shapes/flat-back": {
    howToTell: ["In a side photo, the back of the head drops fairly straight down from the crown.", "Hair at the back may lie flat or stick up at the crown.", "Many people notice it most after a short haircut."],
    tips: { title: "Best haircuts for a flat back of head", items: ["Ask your barber to leave more length at the crown and back.", "Avoid high skin fades at the back; a low taper keeps a rounded outline.", "Layers and texture at the back add the curve that's missing."] },
    compare: [{ slug: "round", diff: "A round head curves out evenly at the back." }, { slug: "square", diff: "A square head is flat on top rather than at the back." }],
    faqs: [{ q: "Is a flat back of head from sleeping as a baby?", a: "Sometimes. Positional flattening in infancy is common; in adults it's harmless and easily disguised with a haircut." }],
  },
  "head-shapes/square": {
    howToTell: ["The top of the head looks fairly flat.", "The sides above the ears are straight rather than curved.", "Very short haircuts show distinct 'corners'."],
    tips: { title: "Best haircuts for a square head", items: ["Textured, rounded styles soften the corners.", "Keep a little length on top rather than a flat-top.", "Side parts with movement work well."] },
    compare: [{ slug: "round", diff: "A round head curves on top and at the sides." }, { slug: "flat-back", diff: "A flat back is flat behind; a square head is flat on top." }],
    faqs: [{ q: "Can I get a buzz cut with a square head?", a: "Yes, though a slightly longer textured cut usually looks softer." }],
  },
  "head-shapes/egg": {
    howToTell: ["From the front, the head is wider at the top than near the jaw.", "From the side, the back or crown is the widest point.", "The face tapers toward the chin."],
    tips: { title: "Best haircuts for an egg-shaped head", items: ["Add fullness at the sides near the ears to balance a wide crown.", "Avoid height on top.", "Fringes and side-swept styles work well."] },
    compare: [{ slug: "oval", diff: "An oval head is evenly curved." }, { slug: "long", diff: "A long head is long rather than wide at the top." }],
    faqs: [{ q: "What does an egg-shaped head mean?", a: "That the skull is wider at the top or back than at the jaw. It's a normal variation." }],
  },

  /* ------------------------------------------------------------ jawline */
  "jawline-shapes/square": {
    howToTell: ["Run a finger from below your ear toward your chin: you'll feel a clear corner.", "Your jaw is about as wide as your cheekbones.", "The chin is broad and flat rather than pointed."],
    tips: { title: "Grooming and style tips", items: ["Short beards and stubble follow a square jaw well.", "Short-sided haircuts show off the angle.", "To soften it, choose round frames and layered hair around the jaw."] },
    compare: [{ slug: "rounded", diff: "A rounded jaw curves without a corner." }, { slug: "wide", diff: "A wide jaw can be soft; a square jaw is defined by its angle." }],
    faqs: [{ q: "What face shapes have a square jaw?", a: "Square, rectangle and triangle face shapes usually have square jaws." }],
  },
  "jawline-shapes/rounded": {
    howToTell: ["Your jaw curves smoothly from ear to chin without a corner.", "The chin is rounded.", "The jaw angle looks soft in photos, even straight on."],
    tips: { title: "Grooming and style tips", items: ["A boxed beard kept shorter on the cheeks and longer at the chin adds angles.", "Angular glasses add structure.", "Good posture (chin slightly forward) makes the jaw look more defined in photos."] },
    compare: [{ slug: "square", diff: "A square jaw has a clear corner below the ear." }, { slug: "v-shaped", diff: "A V-shaped jaw tapers to a narrow chin." }],
    faqs: [{ q: "Can a rounded jaw become more defined?", a: "Lower body fat, posture and beard shaping change how defined it looks; bone structure stays the same." }],
  },
  "jawline-shapes/v-shaped": {
    howToTell: ["Your jaw tapers steadily from the cheekbones to the chin.", "The chin is narrow.", "The lower face forms a V when you look straight ahead."],
    tips: { title: "Grooming and style tips", items: ["Chin-length hair adds width where the face narrows.", "Full beards balance a narrow chin.", "Bottom-heavy glasses frames add width to the lower face."] },
    compare: [{ slug: "pointed", diff: "A pointed jaw ends in a longer, more projecting chin." }, { slug: "narrow", diff: "A narrow jaw is narrow throughout, not tapered." }],
    faqs: [{ q: "Which face shapes have V-shaped jaws?", a: "Heart, diamond and inverted triangle faces usually do." }],
  },
  "jawline-shapes/pointed": {
    howToTell: ["Your chin is narrow and projects forward or down.", "The jaw narrows sharply toward it.", "In profile the chin is prominent."],
    tips: { title: "Grooming and style tips", items: ["Full beards add width and soften the point.", "Hair with volume at chin level balances the lower face.", "Avoid very long goatees, which exaggerate the point."] },
    compare: [{ slug: "v-shaped", diff: "A V-shaped jaw tapers but the chin is less prominent." }, { slug: "rounded", diff: "A rounded jaw has a soft, rounded chin." }],
    faqs: [{ q: "Is a pointed chin attractive?", a: "A defined chin is often seen as attractive; whether it reads as pointed depends on the rest of the face." }],
  },
  "jawline-shapes/wide": {
    howToTell: ["Compare jaw width with cheekbone width: they're about the same, or the jaw is wider.", "The lower face looks broad.", "The jaw can be soft or angular."],
    tips: { title: "Grooming and style tips", items: ["Keep beards short on the sides.", "Add volume at the temples and crown.", "Browline and cat-eye frames draw attention upward."] },
    compare: [{ slug: "square", diff: "A square jaw is defined by sharp corners." }, { slug: "narrow", diff: "A narrow jaw is clearly narrower than the cheekbones." }],
    faqs: [{ q: "Which face shapes have a wide jaw?", a: "Square, rectangle, triangle and pear face shapes." }],
  },
  "jawline-shapes/narrow": {
    howToTell: ["Your jaw is clearly narrower than your cheekbones.", "The lower face looks slim.", "The chin is often small."],
    tips: { title: "Grooming and style tips", items: ["Full beards add width.", "Chin-length bobs and waves fill the lower face.", "Avoid tight fades, which emphasize a narrow jaw."] },
    compare: [{ slug: "v-shaped", diff: "A V-shaped jaw tapers from wide cheekbones to the chin." }, { slug: "wide", diff: "A wide jaw is as wide as the cheekbones." }],
    faqs: [{ q: "Can exercises widen my jaw?", a: "Not meaningfully. Jaw width is set by bone; beards and hairstyles change how wide it looks." }],
  },

  /* ------------------------------------------------------------ kibbe */
  "kibbe-body-types/dramatic": {
    howToTell: ["You're tall or look tall, with long, narrow limbs.", "Your shoulders are sharp and straight.", "Your facial features are angular: sharp cheekbones, a narrow nose and a defined jaw."],
    tips: { title: "Style guidelines for Dramatic", items: ["Long, unbroken vertical lines: column dresses, wide-leg trousers, long coats.", "Sharp tailoring with strong shoulders.", "Bold, geometric jewelry in large scale.", "Avoid frills, ruffles and lots of small detail."] },
    compare: [{ slug: "soft-dramatic", diff: "Soft Dramatic has the same length with added curves and lush features." }, { slug: "flamboyant-natural", diff: "Flamboyant Natural is long but broad and blunt rather than narrow and sharp." }],
    faqs: [{ q: "Do you have to be tall to be a Dramatic?", a: "You need to look long. Kibbe considers the overall impression of length, not only height." }],
  },
  "kibbe-body-types/soft-dramatic": {
    howToTell: ["You look tall or long, with a large frame.", "You also have curves at the bust and hips.", "Your features are lush: full lips, large eyes."],
    tips: { title: "Style guidelines for Soft Dramatic", items: ["Long lines with draping and wrapping.", "Defined waist with flowing fabrics.", "Large, ornate jewelry.", "Avoid stiff, boxy shapes and tiny prints."] },
    compare: [{ slug: "dramatic", diff: "Dramatic is narrower and sharper, without the curves." }, { slug: "theatrical-romantic", diff: "Theatrical Romantic is petite rather than long." }],
    faqs: [{ q: "What is the difference between Soft Dramatic and Romantic?", a: "Both have curves, but Soft Dramatic has a long, large frame; Romantic is moderate to small and softer overall." }],
  },
  "kibbe-body-types/flamboyant-natural": {
    howToTell: ["You look tall, with broad shoulders and long limbs.", "Your bone structure is blunt and wide rather than sharp.", "Your body tends to look athletic and open."],
    tips: { title: "Style guidelines for Flamboyant Natural", items: ["Relaxed, unstructured, oversized silhouettes.", "Long open layers, boyfriend blazers, wide trousers.", "Natural textures: linen, suede, chunky knits.", "Avoid tight, tailored, fussy outfits."] },
    compare: [{ slug: "soft-natural", diff: "Soft Natural is shorter or more moderate, with more curves." }, { slug: "dramatic", diff: "Dramatic is narrow and sharp rather than broad and blunt." }],
    faqs: [{ q: "Is Flamboyant Natural the most common Kibbe type?", a: "It's one of the most frequently self-reported types, though there's no reliable data." }],
  },
  "kibbe-body-types/natural": {
    howToTell: ["You're moderate in height with a slightly broad, blunt frame.", "You look athletic rather than curvy or sharp.", "Your features are open and friendly rather than delicate."],
    tips: { title: "Style guidelines for Natural", items: ["Casual, relaxed shapes with ease of movement.", "Natural fabrics and soft structure.", "Minimal, organic jewelry.", "Avoid stiff tailoring and lots of detail."] },
    compare: [{ slug: "soft-natural", diff: "Soft Natural adds curves." }, { slug: "flamboyant-natural", diff: "Flamboyant Natural is longer and larger." }],
    faqs: [{ q: "Why did Kibbe remove the Natural type?", a: "In his updated system he folded it into Flamboyant Natural and Soft Natural, but many people still find it useful." }],
  },
  "kibbe-body-types/soft-natural": {
    howToTell: ["You're moderate or petite in height with slightly broad shoulders.", "You have soft curves at the bust and hips.", "Your features are soft and friendly."],
    tips: { title: "Style guidelines for Soft Natural", items: ["Relaxed shapes with a defined waist.", "Soft, drapey fabrics like jersey and silk.", "Wrap dresses and belted cardigans.", "Avoid boxy, stiff or very sharp shapes."] },
    compare: [{ slug: "flamboyant-natural", diff: "Flamboyant Natural is longer, larger and less curvy." }, { slug: "soft-classic", diff: "Soft Classic is more symmetrical and refined, less broad." }],
    faqs: [{ q: "What celebrities are Soft Natural?", a: "Brigitte Bardot is a frequently cited example." }],
  },
  "kibbe-body-types/dramatic-classic": {
    howToTell: ["You're moderate in height with a balanced, symmetrical frame.", "Your features are refined with a hint of sharpness.", "You look polished in tailored clothing."],
    tips: { title: "Style guidelines for Dramatic Classic", items: ["Tailored, symmetrical pieces with crisp edges.", "Sheath dresses, structured blazers, straight trousers.", "Clean, refined jewelry.", "Avoid oversized, sloppy or very ornate styles."] },
    compare: [{ slug: "soft-classic", diff: "Soft Classic has more softness and roundness." }, { slug: "dramatic", diff: "Dramatic is longer and sharper." }],
    faqs: [{ q: "Is Dramatic Classic common?", a: "It's a frequently assigned type in online Kibbe communities." }],
  },
  "kibbe-body-types/classic": {
    howToTell: ["You're moderate in height and proportion.", "Your body and face look symmetrical and balanced.", "Nothing about your frame is extreme: not sharp, broad, petite or curvy."],
    tips: { title: "Style guidelines for Classic", items: ["Polished, moderate, symmetrical outfits.", "Tailored but not severe.", "Matching sets and refined accessories.", "Avoid extremes of scale or very casual looks."] },
    compare: [{ slug: "dramatic-classic", diff: "Dramatic Classic adds a little sharpness." }, { slug: "soft-classic", diff: "Soft Classic adds a little softness." }],
    faqs: [{ q: "Does the Classic type still exist?", a: "Kibbe removed pure Classic in his updated system; most people now type as Dramatic Classic or Soft Classic." }],
  },
  "kibbe-body-types/soft-classic": {
    howToTell: ["You're moderate in height with a balanced frame.", "You have gentle curves and a soft overall look.", "Your features are refined and rounded."],
    tips: { title: "Style guidelines for Soft Classic", items: ["Tailoring softened with draping and rounded details.", "Fit-and-flare and wrap dresses.", "Delicate, elegant jewelry.", "Avoid sharp angles and oversized pieces."] },
    compare: [{ slug: "dramatic-classic", diff: "Dramatic Classic is sharper." }, { slug: "romantic", diff: "Romantic is curvier and lusher." }],
    faqs: [{ q: "Which celebrities are Soft Classic?", a: "Grace Kelly is the classic example." }],
  },
  "kibbe-body-types/flamboyant-gamine": {
    howToTell: ["You're petite or compact.", "Your features mix sharp and round, with more sharpness.", "You look lively and animated."],
    tips: { title: "Style guidelines for Flamboyant Gamine", items: ["Cropped, contrasting separates.", "Bold color blocking and graphic prints.", "Sharp, playful accessories.", "Avoid long, flowing, unbroken lines."] },
    compare: [{ slug: "soft-gamine", diff: "Soft Gamine is rounder and curvier." }, { slug: "dramatic", diff: "Dramatic is long rather than compact." }],
    faqs: [{ q: "Who is a famous Flamboyant Gamine?", a: "Audrey Hepburn is the best-known example." }],
  },
  "kibbe-body-types/gamine": {
    howToTell: ["You're compact or petite.", "You have an even mix of sharp and round features.", "Your style looks best broken up into pieces."],
    tips: { title: "Style guidelines for Gamine", items: ["Broken lines and contrast.", "Fitted, cropped pieces with detail.", "Playful accessories.", "Avoid long, monotone looks."] },
    compare: [{ slug: "flamboyant-gamine", diff: "Flamboyant Gamine leans sharper." }, { slug: "soft-gamine", diff: "Soft Gamine leans softer." }],
    faqs: [{ q: "Does Gamine still exist in Kibbe?", a: "Kibbe now uses only Flamboyant Gamine and Soft Gamine." }],
  },
  "kibbe-body-types/soft-gamine": {
    howToTell: ["You're petite or compact.", "You have curves and rounded features.", "You look youthful and lively."],
    tips: { title: "Style guidelines for Soft Gamine", items: ["Fitted, cropped pieces with rounded details.", "Defined waist and playful prints.", "Small to medium jewelry.", "Avoid oversized, long or very sharp shapes."] },
    compare: [{ slug: "flamboyant-gamine", diff: "Flamboyant Gamine is sharper." }, { slug: "theatrical-romantic", diff: "Theatrical Romantic is softer and more delicate." }],
    faqs: [{ q: "What is the difference between Soft Gamine and Romantic?", a: "Soft Gamine is compact with a mix of sharp and round; Romantic is pure softness and curves." }],
  },
  "kibbe-body-types/theatrical-romantic": {
    howToTell: ["You're petite with an hourglass figure.", "Your features are delicate with a hint of sharpness.", "You look glamorous rather than cute."],
    tips: { title: "Style guidelines for Theatrical Romantic", items: ["Fitted, curve-following silhouettes.", "Ornate, delicate detail and luxurious fabrics.", "Sparkling, intricate jewelry.", "Avoid boxy, oversized or stiff shapes."] },
    compare: [{ slug: "romantic", diff: "Romantic is fully soft, without the sharp edge." }, { slug: "soft-dramatic", diff: "Soft Dramatic is long and large." }],
    faqs: [{ q: "Who is a famous Theatrical Romantic?", a: "Rita Hayworth is often cited." }],
  },
  "kibbe-body-types/romantic": {
    howToTell: ["Your frame is soft and rounded.", "You have pronounced curves.", "Your features are lush: full lips, large eyes, soft cheeks."],
    tips: { title: "Style guidelines for Romantic", items: ["Soft, flowing fabrics with waist definition.", "Rounded necklines and draped details.", "Delicate, ornate jewelry.", "Avoid sharp tailoring and geometric shapes."] },
    compare: [{ slug: "theatrical-romantic", diff: "Theatrical Romantic adds a delicate sharpness." }, { slug: "soft-classic", diff: "Soft Classic is more balanced and less curvy." }],
    faqs: [{ q: "Who are famous Romantics?", a: "Marilyn Monroe and Elizabeth Taylor are classic examples." }],
  },
};
