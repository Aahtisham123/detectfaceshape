// Quiz questions and result texts (English source; translated at render time via useT).
import type { QuizQuestion } from "@/components/tools/Quiz";

export const FACE_QUIZ: QuizQuestion[] = [
  {
    q: "Compared with its width, how long is your face?",
    help: "Look from hairline to chin vs. across your cheekbones.",
    options: [
      { label: "About as long as it is wide", scores: { round: 3, square: 3, pear: 1 } },
      { label: "A little longer than it is wide", scores: { oval: 2, heart: 2, diamond: 2, triangle: 2, "inverted-triangle": 2, pear: 2 } },
      { label: "Clearly longer than it is wide", scores: { oblong: 3, rectangle: 3, oval: 1 } },
    ],
  },
  {
    q: "Which part of your face is widest?",
    options: [
      { label: "Forehead", scores: { heart: 3, "inverted-triangle": 3 } },
      { label: "Cheekbones", scores: { oval: 2, diamond: 3, round: 2 } },
      { label: "Jaw", scores: { triangle: 3, pear: 3 } },
      { label: "They're all about the same", scores: { square: 2, rectangle: 2, oblong: 2 } },
    ],
  },
  {
    q: "How would you describe your jawline?",
    help: "Run a finger along your jaw from ear to chin.",
    options: [
      { label: "Sharp, with a clear corner below the ear", scores: { square: 3, rectangle: 3, triangle: 2, "inverted-triangle": 2 } },
      { label: "Soft and rounded", scores: { round: 3, oval: 2, pear: 2, oblong: 2 } },
      { label: "Narrow, tapering to the chin", scores: { heart: 3, diamond: 2, "inverted-triangle": 1, oval: 1 } },
    ],
  },
  {
    q: "What does your chin look like?",
    options: [
      { label: "Pointed or narrow", scores: { heart: 3, diamond: 3, "inverted-triangle": 2 } },
      { label: "Rounded", scores: { oval: 2, round: 2, oblong: 1, pear: 1 } },
      { label: "Broad and flat", scores: { square: 3, rectangle: 2, triangle: 2 } },
    ],
  },
  {
    q: "How does your forehead compare with your jaw?",
    options: [
      { label: "Forehead is clearly wider", scores: { heart: 3, "inverted-triangle": 2, oval: 1 } },
      { label: "About the same width", scores: { square: 2, rectangle: 2, oblong: 2, round: 1 } },
      { label: "Jaw is clearly wider", scores: { triangle: 3, pear: 3 } },
      { label: "Both are narrow; my cheekbones stick out", scores: { diamond: 4 } },
    ],
  },
  {
    q: "How full are your cheeks?",
    options: [
      { label: "Full and round", scores: { round: 3, pear: 2 } },
      { label: "High, prominent cheekbones", scores: { diamond: 2, heart: 2, oval: 1 } },
      { label: "Flat or straight down the sides", scores: { oblong: 2, rectangle: 2, square: 1 } },
    ],
  },
  {
    q: "What shape is your hairline?",
    options: [
      { label: "Rounded", scores: { round: 2, oval: 1 } },
      { label: "Straight and wide", scores: { square: 2, rectangle: 2 } },
      { label: "Widow's peak (V in the center)", scores: { heart: 3 } },
      { label: "Narrow or not sure", scores: { diamond: 1, triangle: 1, pear: 1, oval: 1 } },
    ],
  },
];

export const HEAD_QUIZ: QuizQuestion[] = [
  { q: "From the side, how does the back of your head look?", help: "Slick your hair down or check a side photo.", options: [
    { label: "It curves out evenly", scores: { round: 2, oval: 2 } },
    { label: "It drops fairly straight down from the crown", scores: { "flat-back": 4 } },
    { label: "It sticks out a lot behind", scores: { long: 2, egg: 2 } },
  ] },
  { q: "Compared with its width, how long is your head front-to-back?", options: [
    { label: "About the same", scores: { round: 3, square: 1, "flat-back": 1 } },
    { label: "A little longer", scores: { oval: 3, egg: 1 } },
    { label: "Much longer", scores: { long: 3 } },
  ] },
  { q: "What is the top of your head like?", options: [
    { label: "Rounded", scores: { round: 2, oval: 2 } },
    { label: "Fairly flat", scores: { square: 3 } },
    { label: "Higher or pointed at the crown", scores: { egg: 2, long: 1 } },
  ] },
  { q: "From the front, is your head wider at the top or at the jaw?", options: [
    { label: "Wider at the top", scores: { egg: 3 } },
    { label: "About even", scores: { square: 2, round: 1, oval: 1 } },
    { label: "Wider at the jaw", scores: { square: 1, round: 1 } },
  ] },
  { q: "Do the sides of your head (above the ears) look straight or curved?", options: [
    { label: "Straight", scores: { square: 2, long: 1 } },
    { label: "Curved", scores: { round: 2, oval: 2, egg: 1 } },
  ] },
];

export const UNDERTONE_QUIZ: QuizQuestion[] = [
  { q: "In daylight, what color are the veins on your inner wrist?", options: [
    { label: "Green or olive", scores: { warm: 3 } },
    { label: "Blue or purple", scores: { cool: 3 } },
    { label: "A mix, or hard to tell", scores: { neutral: 3 } },
  ] },
  { q: "Which jewelry looks better on you?", options: [
    { label: "Gold", scores: { warm: 2 } },
    { label: "Silver", scores: { cool: 2 } },
    { label: "Both look good", scores: { neutral: 2 } },
  ] },
  { q: "How does your skin react to the sun?", options: [
    { label: "I tan easily and rarely burn", scores: { warm: 2, olive: 1 } },
    { label: "I burn easily and rarely tan", scores: { cool: 2 } },
    { label: "I burn first, then tan", scores: { neutral: 2 } },
  ] },
  { q: "Which looks better next to your face?", options: [
    { label: "Cream or off-white", scores: { warm: 2 } },
    { label: "Bright, pure white", scores: { cool: 2 } },
    { label: "Both look fine", scores: { neutral: 2 } },
  ] },
  { q: "Does your skin ever look slightly green or gray in some lights?", options: [
    { label: "Yes", scores: { olive: 3, neutral: 1 } },
    { label: "No", scores: {} },
  ] },
  { q: "Without makeup, does your skin look more…", options: [
    { label: "Golden, peachy or yellow", scores: { warm: 2 } },
    { label: "Pink, rosy or red", scores: { cool: 2 } },
    { label: "Neither in particular", scores: { neutral: 2 } },
  ] },
];

export const UNDERTONE_INFO: Record<string, { name: string; text: string; colors: string[] }> = {
  warm: { name: "Warm", text: "Your skin has yellow, peach or golden undertones. Earthy and warm colors (camel, olive, coral, mustard, warm red) and gold jewelry suit you.", colors: ["#c8553d", "#e2a34a", "#7a8b3a", "#b97a56", "#d98e73"] },
  cool: { name: "Cool", text: "Your skin has pink, red or bluish undertones. Jewel tones and cool colors (navy, emerald, berry, lavender, pure white) and silver jewelry suit you.", colors: ["#2b3a67", "#0f7b6c", "#8e2c5a", "#9a8fc7", "#5b7db1"] },
  neutral: { name: "Neutral", text: "Your undertones are balanced between warm and cool, so most colors work. Muted shades (dusty pink, jade, soft white, taupe) are especially flattering, and you can wear gold or silver.", colors: ["#c08e8e", "#5f9e8f", "#b8a99a", "#6c7a96", "#d7c4a3"] },
  olive: { name: "Olive", text: "Your skin has a greenish, neutral-to-warm undertone. Deep, rich colors (forest green, plum, burgundy, teal, gold) suit you, and foundations labeled O or olive match best.", colors: ["#2f5d3a", "#6b2d5c", "#7c2230", "#1f6f78", "#b8892b"] },
};

export const COLOR_QUIZ: QuizQuestion[] = [
  { q: "What's your undertone?", help: "Not sure? Take the undertone test first.", options: [
    { label: "Warm (golden, peachy)", scores: { warm: 3 } },
    { label: "Cool (pink, rosy)", scores: { cool: 3 } },
    { label: "Neutral / not sure", scores: { warm: 1, cool: 1 } },
  ] },
  { q: "What's your natural hair color?", options: [
    { label: "Golden blonde, strawberry or light auburn", scores: { warm: 2, light: 2 } },
    { label: "Ash blonde or light ash brown", scores: { cool: 2, light: 2, soft: 1 } },
    { label: "Auburn, red, chestnut or golden brown", scores: { warm: 2, deep: 1, soft: 1 } },
    { label: "Dark brown or black", scores: { deep: 3, clear: 1 } },
  ] },
  { q: "What's your eye color?", options: [
    { label: "Bright blue, green or turquoise", scores: { clear: 2, light: 1 } },
    { label: "Soft gray, gray-blue or gray-green", scores: { soft: 2, cool: 1 } },
    { label: "Hazel, amber or golden brown", scores: { warm: 2, soft: 1 } },
    { label: "Dark brown or black", scores: { deep: 2, clear: 1 } },
  ] },
  { q: "How light or deep is your skin?", options: [
    { label: "Very light to light", scores: { light: 2 } },
    { label: "Medium", scores: { soft: 1 } },
    { label: "Deep", scores: { deep: 3 } },
  ] },
  { q: "How much contrast is there between your hair, skin and eyes?", options: [
    { label: "High (e.g. dark hair, light skin)", scores: { clear: 3 } },
    { label: "Medium", scores: { clear: 1, soft: 1 } },
    { label: "Low (everything blends)", scores: { soft: 3 } },
  ] },
  { q: "Which lipstick looks most natural on you?", options: [
    { label: "Coral or peach", scores: { warm: 2, light: 1 } },
    { label: "Rose or mauve", scores: { cool: 2, soft: 1 } },
    { label: "Brick or terracotta", scores: { warm: 2, deep: 1 } },
    { label: "True red or berry", scores: { cool: 2, clear: 2 } },
  ] },
  { q: "Which black looks better on you?", options: [
    { label: "Pure black looks great", scores: { clear: 2, deep: 1, cool: 1 } },
    { label: "It's harsh; brown or navy look better", scores: { soft: 2, light: 1 } },
  ] },
  { q: "Bright, saturated colors (like fuchsia or cobalt)…", options: [
    { label: "Make me glow", scores: { clear: 3 } },
    { label: "Overwhelm me", scores: { soft: 3 } },
    { label: "Are fine", scores: {} },
  ] },
];

export const SEASONS: Record<string, { name: string; text: string; colors: string[] }> = {
  "light-spring": { name: "Light Spring", text: "Warm and light. Wear soft, warm pastels: peach, light coral, warm aqua, buttercream.", colors: ["#f6b89a", "#f28c7a", "#8fd3c7", "#f6e3a1", "#b7d68c"] },
  "warm-spring": { name: "Warm Spring", text: "Warm and fresh. Wear golden yellow, warm green, coral, turquoise and camel.", colors: ["#f2b53a", "#6fb34c", "#f07b5a", "#2cb3a5", "#c9955c"] },
  "clear-spring": { name: "Clear Spring", text: "Bright and warm-leaning. Wear vivid coral, kelly green, bright turquoise and true red.", colors: ["#ff6b5b", "#1fa34a", "#00b2c2", "#e2263c", "#ffd23f"] },
  "light-summer": { name: "Light Summer", text: "Cool and light. Wear powder blue, lavender, soft pink and mint.", colors: ["#a9c8e8", "#c3b3e0", "#f1b8c8", "#b6e0cf", "#d9d4e7"] },
  "cool-summer": { name: "Cool Summer", text: "Cool and gentle. Wear rose, periwinkle, soft navy and blue-gray.", colors: ["#c7708f", "#7f8fd1", "#3f4f7d", "#7d93a8", "#9fb7d6"] },
  "soft-summer": { name: "Soft Summer", text: "Muted and cool. Wear dusty rose, sage, slate blue and mauve.", colors: ["#c0909a", "#9cae95", "#6c7f99", "#a07f99", "#b9b2a5"] },
  "soft-autumn": { name: "Soft Autumn", text: "Muted and warm. Wear sage, camel, salmon, soft teal and khaki.", colors: ["#a4b494", "#c69c6d", "#e3967a", "#5f9796", "#b5a77c"] },
  "warm-autumn": { name: "Warm Autumn", text: "Rich and warm. Wear rust, mustard, olive, pumpkin and chocolate.", colors: ["#b4532a", "#d4a12a", "#6f7b2e", "#e07b2f", "#5c3a21"] },
  "deep-autumn": { name: "Deep Autumn", text: "Deep and warm. Wear burgundy, forest green, deep teal and dark chocolate.", colors: ["#6e1f2b", "#2f4d2f", "#1f5c5c", "#4a2c1e", "#a3541f"] },
  "deep-winter": { name: "Deep Winter", text: "Deep and cool. Wear black, deep emerald, burgundy and sapphire.", colors: ["#111111", "#0b5d45", "#6a0f2e", "#1d3f91", "#f4f4f4"] },
  "cool-winter": { name: "Cool Winter", text: "Cool and crisp. Wear icy blue, fuchsia, royal blue and pure white.", colors: ["#bfe3f5", "#d6247c", "#2342a8", "#ffffff", "#3b3b4f"] },
  "clear-winter": { name: "Clear Winter", text: "Bright and cool. Wear true red, hot pink, cobalt, emerald and black.", colors: ["#d0021b", "#ff2d8a", "#0047ab", "#009b72", "#000000"] },
};

export const FOUNDATION_QUIZ: QuizQuestion[] = [
  { q: "How would you describe your skin depth?", options: [
    { label: "Fair: very light, burns easily", scores: { d1: 1 } },
    { label: "Light", scores: { d2: 1 } },
    { label: "Light-medium", scores: { d3: 1 } },
    { label: "Medium / tan", scores: { d4: 1 } },
    { label: "Deep", scores: { d5: 1 } },
    { label: "Very deep", scores: { d6: 1 } },
  ] },
  ...UNDERTONE_QUIZ.slice(0, 2),
  UNDERTONE_QUIZ[4],
  { q: "When foundation looks wrong on you, it usually looks…", options: [
    { label: "Too pink", scores: { warm: 2 } },
    { label: "Too yellow or orange", scores: { cool: 2 } },
    { label: "Ashy or gray", scores: { warm: 1, olive: 1 } },
    { label: "Not sure", scores: {} },
  ] },
];

export const DEPTHS: Record<string, { name: string; range: string }> = {
  d1: { name: "Fair", range: "100–130" }, d2: { name: "Light", range: "130–200" }, d3: { name: "Light-medium", range: "200–300" },
  d4: { name: "Medium-tan", range: "300–400" }, d5: { name: "Deep", range: "400–500" }, d6: { name: "Very deep", range: "500+" },
};

export const CODES: Record<string, string> = { warm: "W, Y or G (warm / yellow / golden)", cool: "C, P or R (cool / pink / rosy)", neutral: "N (neutral)", olive: "O (olive)" };

export const KIBBE_QUIZ: QuizQuestion[] = [
  { q: "How tall are you (or how long do you look)?", help: "Women's sizing; for men, shift each answer up about 5 inches.", options: [
    { label: "Petite: under 5'3\" (160 cm) and look small", scores: { S: -2 } },
    { label: "Average: 5'4\"–5'6\" (162–168 cm)", scores: { S: 0 } },
    { label: "Tall or look tall: over 5'7\" (170 cm)", scores: { S: 2, Y: 1 } },
  ] },
  { q: "Your shoulders are…", options: [
    { label: "Sharp and narrow", scores: { Y: 2, W: -1 } },
    { label: "Broad and square or blunt", scores: { Y: 1, W: 2 } },
    { label: "Even, symmetrical, neither broad nor narrow", scores: {} },
    { label: "Sloping and rounded", scores: { Y: -2 } },
  ] },
  { q: "Your arms and legs are…", options: [
    { label: "Long and narrow", scores: { Y: 2, S: 1 } },
    { label: "Long and broad", scores: { W: 2, S: 1 } },
    { label: "In proportion to my body", scores: {} },
    { label: "Short in proportion to my body", scores: { S: -1 } },
  ] },
  { q: "Your hands and feet are…", options: [
    { label: "Long and narrow", scores: { Y: 2 } },
    { label: "Large and wide", scores: { W: 2 } },
    { label: "Average size", scores: {} },
    { label: "Small and delicate", scores: { Y: -2, S: -1 } },
  ] },
  { q: "Your bone structure looks…", options: [
    { label: "Sharp and angular", scores: { Y: 2 } },
    { label: "Blunt and wide", scores: { W: 2 } },
    { label: "Balanced and moderate", scores: {} },
    { label: "Small and delicate", scores: { Y: -1, S: -1 } },
  ] },
  { q: "Your body has…", options: [
    { label: "A straight, lean line", scores: { Y: 2 } },
    { label: "A slightly broad, athletic look", scores: { W: 1 } },
    { label: "Balanced proportions", scores: {} },
    { label: "Soft curves at the bust and hips", scores: { Y: -2 } },
    { label: "A compact, mixed look (some straight, some curved)", scores: { S: -1, G: 2 } },
  ] },
  { q: "If you gain weight, it goes…", options: [
    { label: "Evenly, and I stay fairly straight", scores: { Y: 1 } },
    { label: "Mostly to my bust and hips", scores: { Y: -2 } },
    { label: "To my middle and back", scores: { W: 1 } },
    { label: "Evenly but I look rounder", scores: { Y: -1 } },
  ] },
  { q: "Your facial bones (cheekbones, jaw, nose) are…", options: [
    { label: "Sharp and prominent", scores: { Y: 2 } },
    { label: "Wide and blunt", scores: { W: 2 } },
    { label: "Balanced and even", scores: {} },
    { label: "Soft and rounded", scores: { Y: -2 } },
    { label: "A mix: some sharp, some round", scores: { G: 2 } },
  ] },
  { q: "Your eyes are…", options: [
    { label: "Narrow or almond-shaped", scores: { Y: 1 } },
    { label: "Average and even", scores: {} },
    { label: "Large and round", scores: { Y: -2 } },
  ] },
  { q: "Your lips are…", options: [
    { label: "Thin or straight", scores: { Y: 1 } },
    { label: "Moderate", scores: {} },
    { label: "Full and lush", scores: { Y: -2 } },
  ] },
  { q: "People often describe your look as…", options: [
    { label: "Striking or elegant", scores: { Y: 2 } },
    { label: "Sporty or relaxed", scores: { W: 2 } },
    { label: "Polished or refined", scores: {} },
    { label: "Cute or youthful", scores: { S: -1, G: 2 } },
    { label: "Glamorous or sensual", scores: { Y: -2 } },
  ] },
  { q: "Which outfit looks best on you?", options: [
    { label: "A long, sharp, minimalist column", scores: { Y: 2 } },
    { label: "Relaxed, oversized layers", scores: { W: 2 } },
    { label: "A tailored, symmetrical suit or dress", scores: {} },
    { label: "Cropped, contrasting separates", scores: { G: 2 } },
    { label: "Soft, draped, waist-defined pieces", scores: { Y: -2 } },
  ] },
];
