import { ogImage, OG_SIZE } from "@/lib/og";

export const alt = "Chart of the 10 face shapes";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogImage("Face Shapes Chart", "All 10 face shapes and how to find yours", "heart");
}
