import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "Face Shape Detector: free AI, no upload";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage("What is my face shape?", "Free AI face shape detector. Your photo never leaves your device.", "oval");
}
