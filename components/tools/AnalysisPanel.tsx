"use client";

import { Icon } from "@/components/icons";
import { useT } from "@/lib/i18n/client";

export const STEPS = ["Loading the AI model", "Detecting your face", "Mapping 478 facial landmarks", "Building your results"] as const;
const BADGES = ["Loading AI model…", "Detecting your face…", "Mapping landmarks…", "Almost done…"] as const;

/** Shown while a photo is analyzed: the photo, the four real steps of the pipeline and overall progress. */
export default function AnalysisPanel({ photo, step, progress, title }: { photo: string; step: number; progress: number; title: string }) {
  const { t } = useT();
  const pct = Math.round(progress * 100);
  return (
    <div className="analysis" role="status" aria-live="polite">
      <div className="analysis-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {photo && <img src={photo} alt={t("Your photo")} />}
        <div className="analysis-scan" aria-hidden="true" />
        <p className="analysis-badge"><span className="pulse-dot" /> {t(BADGES[Math.min(step, 3)])}</p>
      </div>
      <div className="analysis-body">
        <p className="analysis-eyebrow"><Icon name="Sparkles" size={18} /> MediaPipe AI</p>
        <h3 className="analysis-title">{title}</h3>
        <p className="analysis-sub">{t("478-point landmark detection running in your browser")}</p>
        <ol className="analysis-steps">
          {STEPS.map((s, i) => {
            const state = i < step ? "done" : i === step ? "active" : "todo";
            return (
              <li key={s} className={state} aria-current={state === "active" ? "step" : undefined}>
                <span className="step-badge">{state === "done" ? <Icon name="Check" size={15} /> : i + 1}</span>
                <span className="step-text">{t(s)}</span>
                {state === "active" && <Icon name="LoaderCircle" size={20} className="spin step-spin" />}
              </li>
            );
          })}
        </ol>
        <div className="analysis-progress">
          <p><span>{t("Progress")}</span><span>{pct}%</span></p>
          <div className="analysis-bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={t("Progress")}>
            <span style={{ transform: `scaleX(${progress})` }} />
          </div>
        </div>
        <p className="analysis-note"><Icon name="ShieldCheck" size={16} /> {t("Processed on your device. Your photo is never uploaded or stored.")}</p>
      </div>
    </div>
  );
}
