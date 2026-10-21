"use client";

import Link from "next/link";
import { useState } from "react";
import Quiz, { type QuizQuestion } from "./Quiz";
import { calculateFaceShape, FACE_SHAPE_KEYS as SHAPES, kibbeFromTotals, ranked, seasonFromTotals } from "@/lib/quizLogic";
import FaceCapture from "./FaceCapture";
import ShareCard from "./ShareCard";
import { RankBars, ResultHeader } from "./ui";
import ShapeIllustration from "@/components/ShapeIllustration";
import { useLite } from "./LiteContext";
import { sampleSkinHue } from "@/lib/face/skin";
import { aOrAn } from "@/lib/text";
import { useT } from "@/lib/i18n/client";
import { CODES, COLOR_QUIZ, DEPTHS, FACE_QUIZ, FOUNDATION_QUIZ, HEAD_QUIZ, KIBBE_QUIZ, SEASONS, UNDERTONE_INFO, UNDERTONE_QUIZ } from "@/lib/quizData";
import { Icon } from "@/components/icons";
import { toast } from "@/lib/toast";


/* ------------------------------------------------------------------ face shape quiz */


export function FaceShapeQuiz() {
  const { t, href } = useT();
  const lite = useLite();
  const shapeName = lite.shapeName;
  return (
    <Quiz
      questions={FACE_QUIZ}
      render={(totals) => {
        const r = ranked(totals, SHAPES);
        const top = r[0].key;
        return (
          <>
            <ResultHeader eyebrow={t("Your face shape is probably")} title={shapeName(top)} />
            <div className="result-grid">
              <ShapeIllustration shape={top} size={150} />
              <div>
                <p>{lite.shape(top)!.definition}</p>
                <div className="result-links">
                  <Link className="btn primary" href={href(`/face-shapes/${top}/`)}>{t("Your {shape} face guide", { shape: shapeName(top).toLowerCase() })}</Link>
                  <Link className="btn" href={href("/")}>{t("Confirm with the photo detector")}</Link>
                </div>
              </div>
            </div>
            <RankBars items={r.map((x) => ({ ...x, label: shapeName(x.key) }))} hrefFor={(k) => href(`/face-shapes/${k}/`)} max={3} />
            <ShareCard headline={t("My face shape is")} value={shapeName(top)} sub={t("Face shape quiz")} emoji="✨" path={`/face-shapes/${top}/`} />
          </>
        );
      }}
    />
  );
}

/* ------------------------------------------------------------------ face shape calculator */

export function FaceShapeCalculator() {
  const { t, href } = useT();
  const shapeName = useLite().shapeName;
  const [v, setV] = useState({ forehead: "", cheeks: "", jawHalf: "", length: "" });
  const [sharp, setSharp] = useState(false);
  const [result, setResult] = useState<ReturnType<typeof calculateFaceShape> | null>(null);
  const [err, setErr] = useState("");
  const nums = Object.values(v).map(Number);
  const valid = nums.every((n) => n > 0);
  const field = (k: keyof typeof v, label: string, help: string) => (
    <label className="field">
      <span>{t(label)}</span>
      <input inputMode="decimal" type="number" min="0" step="0.1" value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} />
      <small>{t(help)}</small>
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
      <label className="check"><input type="checkbox" checked={sharp} onChange={(e) => setSharp(e.target.checked)} /> {t("My jaw has a sharp, visible corner")}</label>
      <button
        className="btn primary"
        onClick={() => {
          if (!valid) {
            setErr(t("Enter all four measurements as positive numbers (inches or centimeters, just be consistent)."));
            toast("error", t("Please fill in all four measurements."));
            return;
          }
          if (+v.length < +v.cheeks * 0.8 || +v.length > +v.cheeks * 2.5) {
            setErr(t("Those numbers look unusual. Face length is normally 1–2× your cheekbone width. Double-check you used the same unit."));
            toast("error", t("Check your measurements and units."));
            return;
          }
          setErr("");
          setResult(calculateFaceShape({ forehead: +v.forehead, cheeks: +v.cheeks, jawHalf: +v.jawHalf, length: +v.length, sharpJaw: sharp }));
          toast("success", t("Calculated! Your face shape is below."));
        }}
      >
        <Icon name="Calculator" size={18} /> {t("Calculate my face shape")}
      </button>
      {err && <p className="alert" role="alert"><Icon name="TriangleAlert" size={20} /> <span>{err}</span></p>}
      {result && (
        <div className="result">
          <ResultHeader eyebrow={t("Your face shape")} title={shapeName(result[0].key)} />
          <div className="result-grid">
            <ShapeIllustration shape={result[0].key} size={150} />
            <div>
              <p>{t("Length ÷ cheekbones")} = {(+v.length / +v.cheeks).toFixed(2)}.</p>
              <Link className="btn primary" href={href(`/face-shapes/${result[0].key}/`)}>{t("See your face shape guide")}</Link>
            </div>
          </div>
          <RankBars items={result.map((x) => ({ ...x, label: shapeName(x.key) }))} hrefFor={(k) => href(`/face-shapes/${k}/`)} max={3} />
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ head shape */


export function HeadShapeQuiz() {
  const { t } = useT();
  const hub = useLite().hub("head-shapes");
  const keys = hub.items.map((i) => i.slug);
  const label = (k: string) => hub.items.find((i) => i.slug === k)?.name ?? k;
  return (
    <Quiz
      questions={HEAD_QUIZ}
      render={(totals) => {
        const r = ranked(totals, keys);
        const it = hub.items.find((i) => i.slug === r[0].key)!;
        return (
          <>
            <ResultHeader eyebrow={t("Your head shape")} title={it.name} />
            <p>{it.definition}</p>
            <RankBars items={r.map((x) => ({ ...x, label: label(x.key) }))} hrefFor={(k) => `/head-shapes/${k}/`} max={3} />
            <Link className="btn" href={`/head-shapes/${it.slug}/`}>{t("Haircuts for {a_name}", { a_name: aOrAn(it.name.toLowerCase()), name: it.name.toLowerCase() })}</Link>
          </>
        );
      }}
    />
  );
}

/* ------------------------------------------------------------------ undertone */



export function UndertoneTest() {
  const { t, href } = useT();
  return (
    <Quiz
      questions={UNDERTONE_QUIZ}
      extra={(done) => <UndertonePhoto done={done} />}
      render={(totals) => {
        const r = ranked(totals, ["warm", "cool", "neutral", "olive"]);
        const info = UNDERTONE_INFO[r[0].key];
        return (
          <>
            <ResultHeader eyebrow={t("Your undertone")} title={t(info.name)} />
            <p>{t(info.text)}</p>
            <div className="swatches">{info.colors.map((c) => <span key={c} style={{ background: c }} />)}</div>
            <RankBars items={r.map((x) => ({ ...x, label: t(UNDERTONE_INFO[x.key].name) }))} max={4} />
            <div className="result-links">
              <Link className="btn primary" href={href("/color-analysis/")}>{t("Find your color season")}</Link>
              <Link className="btn" href={href("/foundation-shade-finder/")}>{t("Find your foundation shade")}</Link>
            </div>
          </>
        );
      }}
    />
  );
}

function UndertonePhoto({ done }: { done: (s: Record<string, number>) => void }) {
  const { t } = useT();
  return (
    <>
      <h2 className="quiz-q">{t("Optional: add a photo color check")}</h2>
      <p className="quiz-help">{t("Take a photo in daylight with no makeup. We sample your cheeks and forehead. Camera white balance affects this, so it counts as one quiz answer.")}</p>
      <FaceCapture<{ scores: Record<string, number>; hue: number }>
        guide="face"
        analyze={({ raw, canvas }) => {
          const hue = sampleSkinHue(canvas, raw);
          const scores: Record<string, number> = hue > 60 ? { warm: 2 } : hue < 50 ? { cool: 2 } : { neutral: 2 };
          return { scores, hue };
        }}
        render={(r) => (
          <>
            <p>{t("Your skin hue reads")} <strong>{Math.round(r.hue)}°</strong> ({t(r.hue > 60 ? "more golden: warm" : r.hue < 50 ? "more rosy: cool" : "balanced: neutral")}).</p>
            <button className="btn primary" onClick={() => done(r.scores)}><Icon name="Sparkles" size={16} /> {t("See my result")}</button>
          </>
        )}
      />
      <button className="btn link" onClick={() => done({})}>{t("Skip the photo")} <Icon name="ArrowRight" size={16} /></button>
    </>
  );
}

/* ------------------------------------------------------------------ seasonal color analysis */



export function ColorAnalysisQuiz() {
  const { t } = useT();
  return (
    <Quiz
      questions={COLOR_QUIZ}
      render={(totals) => {
        const s = SEASONS[seasonFromTotals(totals)];
        return (
          <>
            <ResultHeader eyebrow={t("Your color season")} title={t(s.name)} />
            <p>{t(s.text)}</p>
            <div className="swatches">{s.colors.map((c) => <span key={c} style={{ background: c }} />)}</div>
            <ShareCard headline={t("My color season is")} value={t(s.name)} sub={t("Seasonal color analysis")} emoji="🎨" path="/color-analysis/" />
          </>
        );
      }}
    />
  );
}

/* ------------------------------------------------------------------ foundation */



export function FoundationFinder() {
  const { t } = useT();
  return (
    <Quiz
      questions={FOUNDATION_QUIZ}
      render={(totals) => {
        const depth = Object.keys(DEPTHS).find((k) => totals[k]) ?? "d3";
        const tone = ranked(totals, ["warm", "cool", "neutral", "olive"])[0].key;
        return (
          <>
            <ResultHeader eyebrow={t("Look for")} title={`${t(DEPTHS[depth].name)} · ${t(UNDERTONE_INFO[tone].name)}`} />
            <table className="data-table">
              <tbody>
                <tr><th>{t("Depth")}</th><td>{t("{depth}: typically shade numbers around {range}", { depth: t(DEPTHS[depth].name), range: DEPTHS[depth].range })}</td></tr>
                <tr><th>{t("Undertone code")}</th><td>{t(CODES[tone])}</td></tr>
              </tbody>
            </table>
            <p>{t("Shade numbering varies by brand. Pick two or three shades in this range with your undertone code, swatch them on your jawline and check them in daylight.")}</p>
          </>
        );
      }}
    />
  );
}

/* ------------------------------------------------------------------ kibbe */

// Scores: Y = yang (sharp/long) vs yin, W = width/bluntness, S = size/height (+ tall).

export function KibbeTest() {
  const { t } = useT();
  const hub = useLite().hub("kibbe-body-types");
  const name = (k: string) => hub.items.find((i) => i.slug === k)?.name ?? k;
  return (
    <Quiz
      questions={KIBBE_QUIZ}
      render={(totals) => {
        const r = kibbeFromTotals(totals);
        const it = hub.items.find((i) => i.slug === r[0].key)!;
        return (
          <>
            <ResultHeader eyebrow={t("Your Kibbe type is probably")} title={it.name} />
            <p>{it.definition}</p>
            <RankBars items={r.map((x) => ({ ...x, label: name(x.key) }))} hrefFor={(k) => `/kibbe-body-types/${k}/`} max={3} />
            <Link className="btn" href={`/kibbe-body-types/${it.slug}/`}>{t("Style guide for {name}", { name: it.name })}</Link>
            <ShareCard headline={t("My Kibbe type is")} value={it.name} sub={t("Kibbe body type test")} emoji="👗" path={`/kibbe-body-types/${it.slug}/`} />
          </>
        );
      }}
    />
  );
}
