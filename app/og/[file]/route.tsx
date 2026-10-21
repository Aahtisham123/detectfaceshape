import { ImageResponse } from "next/og";
import { allPages, seoFor } from "@/lib/seo";
import { ogKey } from "@/lib/meta";
import { SITE } from "@/lib/site";
import { stripLocale } from "@/lib/i18n/config";
import { CHROME } from "@/lib/i18n/chrome";
import { tr } from "@/lib/i18n/translate";
import { eyeSvg, faceShapeSvg, headSvg, heroSvg, jawSvg, lipSvg, logoSvg, noseSvg } from "@/lib/graphics/svg";

export const dynamic = "force-static";
export const dynamicParams = false;
export const generateStaticParams = () => allPages().map((p) => ({ file: ogKey(p.path) }));

const DRAW: Record<string, (slug: string) => string> = {
  "eye-shapes": eyeSvg, "nose-shapes": noseSvg, "lip-shapes": lipSvg, "head-shapes": headSvg, "jawline-shapes": jawSvg,
};

/** Picks the page's own illustration (face shape, eye, nose, lip, head or jaw type), else the hero graphic. */
function artFor(path: string) {
  const parts = stripLocale(path).split("/").filter(Boolean);
  if (parts[0] === "face-shapes" && parts[1] && !["men", "women"].includes(parts[1])) return faceShapeSvg(parts[1]);
  if (DRAW[parts[0]] && parts[1]) return DRAW[parts[0]](parts[1]);
  if (DRAW[parts[0]]) return DRAW[parts[0]](parts[0] === "nose-shapes" ? "roman" : parts[0] === "lip-shapes" ? "heart" : parts[0] === "eye-shapes" ? "almond" : "round");
  const blogShape = /(oval|round|square|oblong|rectangle|heart|diamond|triangle|pear)/.exec(path)?.[1];
  if (parts[0] === "blog" && blogShape) return faceShapeSvg(blogShape);
  return heroSvg();
}

const OG_TAGLINE = { en: "Free · Private · On-device AI", es: "Gratis · Privado · IA en tu dispositivo", fr: "Gratuit · Privé · IA sur l'appareil", pt: "Grátis · Privado · IA no aparelho" };

const dataUri = (svg: string) => `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const key = (await params).file;
  const page = allPages().find((p) => ogKey(p.path) === key) ?? seoFor("/");
  const art = artFor(page.path);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "linear-gradient(135deg,#1d1a2f 0%,#3b2a5c 60%,#5b3a8c 100%)", color: "#fff", padding: 64, alignItems: "center", gap: 48 }}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img src={dataUri(logoSvg(56))} width={56} height={56} alt="" />
            <div style={{ fontSize: 30, fontWeight: 700 }}>{SITE.name}</div>
          </div>
          <div style={{ display: "flex", marginTop: 36, fontSize: 22, color: "#f5b84b", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}>{tr(CHROME[page.locale ?? "en"], page.section)}</div>
          <div style={{ fontSize: page.title.length > 38 ? 56 : 66, fontWeight: 800, lineHeight: 1.08, marginTop: 12 }}>{page.title}</div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 24, opacity: 0.85 }}>{SITE.domain} · {OG_TAGLINE[page.locale ?? "en"]}</div>
        </div>
        <img src={dataUri(art)} width={400} height={400} alt="" style={{ borderRadius: 28, objectFit: "contain", background: "#fff" }} />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
