"use client";

import Link from "next/link";
import { useState } from "react";
import Quiz, { type QuizQuestion } from "./Quiz";
import { calculateFaceShape, FACE_SHAPE_KEYS as SHAPES, kibbeFromTotals, ranked, seasonFromTotals } from "@/lib/quizLogic";
import FaceCapture from "./FaceCapture";
import ShareCard from "./ShareCard";
import { RankBars, ResultHeader } from "./ui";
import ShapeIllustration from "@/components/ShapeIllustration";
import { FACE_SHAPES } from "@/lib/content/faceShapes";
import { hubBySlug } from "@/lib/content/typeHubs";
import { sampleSkinHue } from "@/lib/face/skin";
import { aOrAn } from "@/lib/text";
import { Icon } from "@/components/icons";
import { toast } from "@/lib/toast";

const shapeName = (k: string) => FACE_SHAPES.find((s) => s.slug === k)?.name ?? k;

/* ------------------------------------------------------------------ face shape quiz */

const FACE_QUIZ: QuizQuestion[] = [
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

export function FaceShapeQuiz() {
  return (
    <Quiz
      questions={FACE_QUIZ}
      render={(totals) => {
        const r = ranked(totals, SHAPES);
        const top = r[0].key;
        return (
          <>
            <ResultHeader eyebrow="Your face shape is probably" title={shapeName(top)} />
            <div className="result-grid">
              <ShapeIllustration shape={top} size={150} />
              <div>
                <p>{FACE_SHAPES.find((s) => s.slug === top)!.definition}</p>
                <div className="result-links">
                  <Link className="btn primary" href={`/face-shapes/${top}/`}>Your {shapeName(top).toLowerCase()} face guide</Link>
                  <Link className="btn" href="/">Confirm with the photo detector</Link>
                </div>
              </div>
            </div>
            <RankBars items={r.map((x) => ({ ...x, label: shapeName(x.key) }))} hrefFor={(k) => `/face-shapes/${k}/`} max={3} />
            <ShareCard headline="My face shape is" value={shapeName(top)} sub="Face shape quiz" emoji="✨" path={`/face-shapes/${top}/`} />
          </>
        );
      }}
    />
  );
}

/* ------------------------------------------------------------------ face shape calculator */

export function FaceShapeCalculator() {
  const [v, setV] = useState({ forehead: "", cheeks: "", jawHalf: "", length: "" });
  const [sharp, setSharp] = useState(false);
  const [result, setResult] = useState<ReturnType<typeof calculateFaceShape> | null>(null);
  const [err, setErr] = useState("");
  const nums = Object.values(v).map(Number);
  const valid = nums.every((n) => n > 0);
  const field = (k: keyof typeof v, label: string, help: string) => (
    <label className="field">
      <span>{label}</span>
      <input inputMode="decimal" type="number" min="0" step="0.1" value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} />
      <small>{help}</small>
    </label>
  );
  return (
    <div className="calc">
      <div className="calc-grid">
        {field("forehead", "Forehead width", "Across the widest part of your forehead")}
        {field("cheeks", "Cheekbone width", "Across the highest points of your cheekbones")}
        {field("jawHalf", "Jawline (one side)", "Chin tip to the jaw corner below your ear")}
        {field("length", "Face length", "Center of hairline to tip of chin")}
      </div>
      <label className="check"><input type="checkbox" checked={sharp} onChange={(e) => setSharp(e.target.checked)} /> My jaw has a sharp, visible corner</label>
      <button
        className="btn primary"
        onClick={() => {
          if (!valid) {
            setErr("Enter all four measurements as positive numbers (inches or centimeters, just be consistent).");
            toast("error", "Please fill in all four measurements.");
            return;
          }
          if (+v.length < +v.cheeks * 0.8 || +v.length > +v.cheeks * 2.5) {
            setErr("Those numbers look unusual. Face length is normally 1–2× your cheekbone width. Double-check you used the same unit.");
            toast("error", "Check your measurements and units.");
            return;
          }
          setErr("");
          setResult(calculateFaceShape({ forehead: +v.forehead, cheeks: +v.cheeks, jawHalf: +v.jawHalf, length: +v.length, sharpJaw: sharp }));
          toast("success", "Calculated! Your face shape is below.");
        }}
      >
        <Icon name="Calculator" size={18} /> Calculate my face shape
      </button>
      {err && <p className="alert" role="alert"><Icon name="TriangleAlert" size={20} /> <span>{err}</span></p>}
      {result && (
        <div className="result">
          <ResultHeader eyebrow="Your face shape" title={shapeName(result[0].key)} />
          <div className="result-grid">
            <ShapeIllustration shape={result[0].key} size={150} />
            <div>
              <p>Length ÷ cheekbones = {(+v.length / +v.cheeks).toFixed(2)}.</p>
              <Link className="btn primary" href={`/face-shapes/${result[0].key}/`}>See your face shape guide</Link>
            </div>
          </div>
          <RankBars items={result.map((x) => ({ ...x, label: shapeName(x.key) }))} hrefFor={(k) => `/face-shapes/${k}/`} max={3} />
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ head shape */

const HEAD_QUIZ: QuizQuestion[] = [
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

export function HeadShapeQuiz() {
  const hub = hubBySlug("head-shapes")!;
  const keys = hub.items.map((i) => i.slug);
  const label = (k: string) => hub.items.find((i) => i.slug === k)?.name ?? k;
  return (
    <Quiz
      questions={HEAD_QUIZ}
      render={(t) => {
        const r = ranked(t, keys);
        const it = hub.items.find((i) => i.slug === r[0].key)!;
        return (
          <>
            <ResultHeader eyebrow="Your head shape" title={it.name} />
            <p>{it.definition}</p>
            <RankBars items={r.map((x) => ({ ...x, label: label(x.key) }))} hrefFor={(k) => `/head-shapes/${k}/`} max={3} />
            <Link className="btn" href={`/head-shapes/${it.slug}/`}>Haircuts for {aOrAn(it.name.toLowerCase())}</Link>
          </>
        );
      }}
    />
  );
}

/* ------------------------------------------------------------------ undertone */

const UNDERTONE_QUIZ: QuizQuestion[] = [
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

const UNDERTONE_INFO: Record<string, { name: string; text: string; colors: string[] }> = {
  warm: { name: "Warm", text: "Your skin has yellow, peach or golden undertones. Earthy and warm colors (camel, olive, coral, mustard, warm red) and gold jewelry suit you.", colors: ["#c8553d", "#e2a34a", "#7a8b3a", "#b97a56", "#d98e73"] },
  cool: { name: "Cool", text: "Your skin has pink, red or bluish undertones. Jewel tones and cool colors (navy, emerald, berry, lavender, pure white) and silver jewelry suit you.", colors: ["#2b3a67", "#0f7b6c", "#8e2c5a", "#9a8fc7", "#5b7db1"] },
  neutral: { name: "Neutral", text: "Your undertones are balanced between warm and cool, so most colors work. Muted shades (dusty pink, jade, soft white, taupe) are especially flattering, and you can wear gold or silver.", colors: ["#c08e8e", "#5f9e8f", "#b8a99a", "#6c7a96", "#d7c4a3"] },
  olive: { name: "Olive", text: "Your skin has a greenish, neutral-to-warm undertone. Deep, rich colors (forest green, plum, burgundy, teal, gold) suit you, and foundations labeled O or olive match best.", colors: ["#2f5d3a", "#6b2d5c", "#7c2230", "#1f6f78", "#b8892b"] },
};

export function UndertoneTest() {
  return (
    <Quiz
      questions={UNDERTONE_QUIZ}
      extra={(done) => <UndertonePhoto done={done} />}
      render={(t) => {
        const r = ranked(t, ["warm", "cool", "neutral", "olive"]);
        const info = UNDERTONE_INFO[r[0].key];
        return (
          <>
            <ResultHeader eyebrow="Your undertone" title={info.name} />
            <p>{info.text}</p>
            <div className="swatches">{info.colors.map((c) => <span key={c} style={{ background: c }} />)}</div>
            <RankBars items={r.map((x) => ({ ...x, label: UNDERTONE_INFO[x.key].name }))} max={4} />
            <div className="result-links">
              <Link className="btn primary" href="/color-analysis/">Find your color season</Link>
              <Link className="btn" href="/foundation-shade-finder/">Find your foundation shade</Link>
            </div>
          </>
        );
      }}
    />
  );
}

function UndertonePhoto({ done }: { done: (s: Record<string, number>) => void }) {
  return (
    <>
      <h2 className="quiz-q">Optional: add a photo color check</h2>
      <p className="quiz-help">Take a photo in daylight with no makeup. We sample your cheeks and forehead. Camera white balance affects this, so it counts as one quiz answer.</p>
      <FaceCapture<{ scores: Record<string, number>; hue: number }>
        guide="face"
        analyze={({ raw, canvas }) => {
          const hue = sampleSkinHue(canvas, raw);
          const scores: Record<string, number> = hue > 60 ? { warm: 2 } : hue < 50 ? { cool: 2 } : { neutral: 2 };
          return { scores, hue };
        }}
        render={(r) => (
          <>
            <p>Your skin hue reads <strong>{Math.round(r.hue)}°</strong> ({r.hue > 60 ? "more golden: warm" : r.hue < 50 ? "more rosy: cool" : "balanced: neutral"}).</p>
            <button className="btn primary" onClick={() => done(r.scores)}><Icon name="Sparkles" size={16} /> See my result</button>
          </>
        )}
      />
      <button className="btn link" onClick={() => done({})}>Skip the photo <Icon name="ArrowRight" size={16} /></button>
    </>
  );
}

/* ------------------------------------------------------------------ seasonal color analysis */

const COLOR_QUIZ: QuizQuestion[] = [
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

const SEASONS: Record<string, { name: string; text: string; colors: string[] }> = {
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

export function ColorAnalysisQuiz() {
  return (
    <Quiz
      questions={COLOR_QUIZ}
      render={(t) => {
        const s = SEASONS[seasonFromTotals(t)];
        return (
          <>
            <ResultHeader eyebrow="Your color season" title={s.name} />
            <p>{s.text}</p>
            <div className="swatches">{s.colors.map((c) => <span key={c} style={{ background: c }} />)}</div>
            <ShareCard headline="My color season is" value={s.name} sub="Seasonal color analysis" emoji="🎨" path="/color-analysis/" />
          </>
        );
      }}
    />
  );
}

/* ------------------------------------------------------------------ foundation */

const FOUNDATION_QUIZ: QuizQuestion[] = [
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

const DEPTHS: Record<string, { name: string; range: string }> = {
  d1: { name: "Fair", range: "100–130" }, d2: { name: "Light", range: "130–200" }, d3: { name: "Light-medium", range: "200–300" },
  d4: { name: "Medium-tan", range: "300–400" }, d5: { name: "Deep", range: "400–500" }, d6: { name: "Very deep", range: "500+" },
};
const CODES: Record<string, string> = { warm: "W, Y or G (warm / yellow / golden)", cool: "C, P or R (cool / pink / rosy)", neutral: "N (neutral)", olive: "O (olive)" };

export function FoundationFinder() {
  return (
    <Quiz
      questions={FOUNDATION_QUIZ}
      render={(t) => {
        const depth = Object.keys(DEPTHS).find((k) => t[k]) ?? "d3";
        const tone = ranked(t, ["warm", "cool", "neutral", "olive"])[0].key;
        return (
          <>
            <ResultHeader eyebrow="Look for" title={`${DEPTHS[depth].name} · ${UNDERTONE_INFO[tone].name}`} />
            <table className="data-table">
              <tbody>
                <tr><th>Depth</th><td>{DEPTHS[depth].name}: typically shade numbers around {DEPTHS[depth].range}</td></tr>
                <tr><th>Undertone code</th><td>{CODES[tone]}</td></tr>
              </tbody>
            </table>
            <p>Shade numbering varies by brand. Pick two or three shades in this range with your undertone code, swatch them on your jawline and check them in daylight.</p>
          </>
        );
      }}
    />
  );
}

/* ------------------------------------------------------------------ kibbe */

// Scores: Y = yang (sharp/long) vs yin, W = width/bluntness, S = size/height (+ tall).
const KIBBE_QUIZ: QuizQuestion[] = [
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

export function KibbeTest() {
  const hub = hubBySlug("kibbe-body-types")!;
  const name = (k: string) => hub.items.find((i) => i.slug === k)?.name ?? k;
  return (
    <Quiz
      questions={KIBBE_QUIZ}
      render={(t) => {
        const r = kibbeFromTotals(t);
        const it = hub.items.find((i) => i.slug === r[0].key)!;
        return (
          <>
            <ResultHeader eyebrow="Your Kibbe type is probably" title={it.name} />
            <p>{it.definition}</p>
            <RankBars items={r.map((x) => ({ ...x, label: name(x.key) }))} hrefFor={(k) => `/kibbe-body-types/${k}/`} max={3} />
            <Link className="btn" href={`/kibbe-body-types/${it.slug}/`}>Style guide for {it.name}</Link>
            <ShareCard headline="My Kibbe type is" value={it.name} sub="Kibbe body type test" emoji="👗" path={`/kibbe-body-types/${it.slug}/`} />
          </>
        );
      }}
    />
  );
}
