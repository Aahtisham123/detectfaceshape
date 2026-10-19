"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import { toast } from "@/lib/toast";

export default function CopyButton({ text, label = "Copy", className = "btn sm" }: { text: string; label?: string; className?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className={className}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          toast("success", "Copied to clipboard");
          setTimeout(() => setDone(false), 2000);
        } catch {
          toast("error", "Couldn't copy. Select the text and copy it manually.");
        }
      }}
    >
      <Icon name={done ? "Check" : "Copy"} size={16} /> {done ? "Copied" : label}
    </button>
  );
}
