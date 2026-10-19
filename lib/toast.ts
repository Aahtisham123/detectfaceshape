"use client";

export type ToastKind = "success" | "error" | "info";
export type ToastDetail = { kind: ToastKind; message: string };

/** Fire-and-forget toast; rendered by <Toaster/> in the site shell. */
export function toast(kind: ToastKind, message: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<ToastDetail>("app-toast", { detail: { kind, message } }));
}
