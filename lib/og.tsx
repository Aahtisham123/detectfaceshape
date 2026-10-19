import { ImageResponse } from "next/og";
import { SHAPE_SPECS, shapeSvgMarkup } from "@/components/ShapeIllustration";

export const OG_SIZE = { width: 1200, height: 630 };

/** Branded social card; optionally draws a face-shape outline (as an inline SVG image). */
export function ogImage(title: string, subtitle: string, shape?: string) {
  const outline = shape && SHAPE_SPECS[shape] ? shapeSvg(shape) : null;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "linear-gradient(135deg,#1d1a2f,#4a2f5e)", color: "#fff", padding: 72, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 30, color: "#f5b84b", fontWeight: 700 }}>DetectFaceShape.ai</div>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1, marginTop: 24 }}>{title}</div>
          <div style={{ fontSize: 32, opacity: 0.85, marginTop: 24 }}>{subtitle}</div>
        </div>
        {outline && <img src={outline} width={320} height={320} alt="" />}
      </div>
    ),
    OG_SIZE,
  );
}

function shapeSvg(shape: string) {
  const svg = shapeSvgMarkup(shape, { guides: false, stroke: "#ffffff", fill: "rgba(255,255,255,0.08)" }).replace(/<rect[^>]*\/>/, "");
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
