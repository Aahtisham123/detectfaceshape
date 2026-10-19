"use client";

import { useState, type ReactNode } from "react";

export type QuizOption = { label: string; scores: Record<string, number> };
export type QuizQuestion = { q: string; help?: string; options: QuizOption[] };

/** Generic points-based quiz: each answer adds points to outcomes; the result renders the totals. */
export default function Quiz({
  questions,
  render,
  extra,
}: {
  questions: QuizQuestion[];
  render: (totals: Record<string, number>, reset: () => void) => ReactNode;
  /** Optional step shown after the last question (e.g. photo check); returns extra scores. */
  extra?: (done: (scores: Record<string, number>) => void) => ReactNode;
}) {
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [step, setStep] = useState(0);
  const [bonus, setBonus] = useState<Record<string, number> | null>(extra ? null : {});
  const done = step >= questions.length;

  const totals: Record<string, number> = {};
  answers.forEach((a, i) => {
    if (a === null) return;
    for (const [k, v] of Object.entries(questions[i].options[a].scores)) totals[k] = (totals[k] ?? 0) + v;
  });
  for (const [k, v] of Object.entries(bonus ?? {})) totals[k] = (totals[k] ?? 0) + v;

  const reset = () => {
    setAnswers(questions.map(() => null));
    setStep(0);
    setBonus(extra ? null : {});
  };

  if (done && bonus === null && extra) return <div className="quiz">{extra((s) => setBonus(s))}</div>;
  if (done) return <div className="quiz result">{render(totals, reset)}<button className="btn" onClick={reset}>Retake the quiz</button></div>;

  const q = questions[step];
  return (
    <div className="quiz">
      <div className="quiz-progress" aria-label={`Question ${step + 1} of ${questions.length}`}>
        <span style={{ width: `${(step / questions.length) * 100}%` }} />
      </div>
      <p className="eyebrow">Question {step + 1} of {questions.length}</p>
      <h2 className="quiz-q">{q.q}</h2>
      {q.help && <p className="quiz-help">{q.help}</p>}
      <div className="quiz-options">
        {q.options.map((o, i) => (
          <button
            key={o.label}
            className={`quiz-option${answers[step] === i ? " selected" : ""}`}
            onClick={() => {
              const next = [...answers];
              next[step] = i;
              setAnswers(next);
              setStep(step + 1);
            }}
          >
            {o.label}
          </button>
        ))}
      </div>
      {step > 0 && <button className="btn link" onClick={() => setStep(step - 1)}>← Back</button>}
    </div>
  );
}
