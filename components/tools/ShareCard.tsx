"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";
import { Icon } from "@/components/icons";
import CopyButton from "@/components/ui/CopyButton";
import { toast } from "@/lib/toast";
import { useT } from "@/lib/i18n/client";

/** Draws a shareable 1080×1350 result card (for TikTok / Instagram / Pinterest) on a canvas. No photo is included. */
function drawCard(headline: string, value: string, sub: string, emoji: string) {
  const c = document.createElement("canvas");
  c.width = 1080;
  c.height = 1350;
  const ctx = c.getContext("2d")!;
  const g = ctx.createLinearGradient(0, 0, 1080, 1350);
  g.addColorStop(0, "#1d1a2f");
  g.addColorStop(1, "#4a2f5e");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 1080, 1350);
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(255,255,255,0.75)";
  ctx.font = "500 52px system-ui, sans-serif";
  ctx.fillText(headline, 540, 380);
  ctx.font = "160px system-ui, sans-serif";
  ctx.fillText(emoji, 540, 620);
  ctx.fillStyle = "#f5b84b";
  ctx.font = "800 128px system-ui, sans-serif";
  ctx.fillText(value, 540, 820);
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.font = "400 44px system-ui, sans-serif";
  ctx.fillText(sub, 540, 900);
  ctx.fillStyle = "#ffffff";
  ctx.font = "700 48px system-ui, sans-serif";
  ctx.fillText(SITE.url.replace("https://", ""), 540, 1220);
  return c;
}

export default function ShareCard({ headline, value, sub, emoji = "✨", path }: { headline: string; value: string; sub: string; emoji?: string; path: string }) {
  const { t } = useT();
  const [busy, setBusy] = useState(false);
  const share = async () => {
    const canvas = drawCard(headline, value, sub, emoji);
    const blob: Blob | null = await new Promise((r) => canvas.toBlob(r, "image/png"));
    if (!blob) return toast("error", t("Couldn't create your result card. Try again."));
    const file = new File([blob], "my-result.png", { type: "image/png" });
    const text = `${headline} ${value} ${emoji} ${t("Find yours at {site}", { site: SITE.url.replace("https://", "") })}`;
    const url = `${SITE.url}${path}?utm_source=share&utm_medium=result_card`;
    try {
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], text, url });
        toast("success", t("Thanks for sharing!"));
        return;
      }
    } catch (e) {
      if ((e as Error).name !== "AbortError") toast("error", t("Sharing failed. We'll download the card instead."));
      else return;
    }
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "my-result.png";
    a.click();
    URL.revokeObjectURL(a.href);
    toast("success", t("Result card downloaded. Post it and tag us!"));
  };
  return (
    <div className="share">
      <button className="btn primary" disabled={busy} onClick={async () => { setBusy(true); await share(); setBusy(false); }}>
        <Icon name="Share2" size={16} /> {t("Share my result card")}
      </button>
      <CopyButton text={`${headline} ${value} ${emoji} ${SITE.url}${path}`} label={t("Copy result")} className="btn" />
    </div>
  );
}
