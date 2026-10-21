"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import { toast } from "@/lib/toast";
import { useT } from "@/lib/i18n/client";

export default function CopyButton({ text, label, className = "btn sm" }: { text: string; label?: string; className?: string }) {
  const { t } = useT();
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className={className}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          toast("success", t("Copied to clipboard"));
          setTimeout(() => setDone(false), 2000);
        } catch {
          toast("error", t("Couldn't copy. Select the text and copy it manually."));
        }
      }}
    >
      <Icon name={done ? "Check" : "Copy"} size={16} /> {done ? t("Copied") : (label ?? t("Copy"))}
    </button>
  );
}
