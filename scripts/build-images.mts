// Renders the site's original vector graphics to compressed WebP (plus PNG/ICO icons for devices).
// Run with `npm run images`; outputs are committed so builds don't need sharp.
import sharp from "sharp";
import { existsSync, mkdirSync, readdirSync, writeFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { faceShapeSvg, faceChartSvg, heroSvg, eyeSvg, lipSvg, noseSvg, headSvg, jawSvg, gridSvg, logoSvg } from "../lib/graphics/svg";
import { FACE_SHAPES } from "../lib/content/faceShapes";
import { hubBySlug } from "../lib/content/typeHubs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pub = join(root, "public");
let total = 0;
const sizes: Record<string, [number, number]> = {};

async function webp(svg: string, rel: string, width: number) {
  const out = join(pub, rel);
  mkdirSync(dirname(out), { recursive: true });
  const info = await sharp(Buffer.from(svg), { density: 300 }).resize({ width }).webp({ quality: 76, effort: 6, smartSubsample: true }).toFile(out);
  // Files are rendered at 2× for sharp high-DPI screens; record the 1× display size for width/height attributes.
  sizes[`/${rel}`] = [Math.round(info.width / 2), Math.round(info.height / 2)];
  total += statSync(out).size;
}

await webp(heroSvg(), "images/hero/face-shape-detector-scan.webp", 1200);
await webp(faceChartSvg(FACE_SHAPES.map((s) => ({ slug: s.slug, name: s.name }))), "images/face-shapes/face-shapes-chart.webp", 1600);
for (const s of FACE_SHAPES) {
  await webp(faceShapeSvg(s.slug, `${s.name} face shape`), `images/face-shapes/${s.slug}-face-shape.webp`, 800);
  // Unlabeled thumbnails for galleries, where the name is already shown as link text.
  await webp(faceShapeSvg(s.slug), `images/face-shapes/thumbs/${s.slug}.webp`, 360);
}

const hubs: [string, (t: string, l?: string) => string, number, number, number][] = [
  ["eye-shapes", eyeSvg, 400, 3, 400],
  ["lip-shapes", lipSvg, 400, 3, 400],
  ["nose-shapes", noseSvg, 400, 3, 400],
  ["head-shapes", headSvg, 400, 3, 400],
  ["jawline-shapes", jawSvg, 300, 3, 300],
];
for (const [hubSlug, draw, w, cols] of hubs) {
  const hub = hubBySlug(hubSlug)!;
  for (const it of hub.items) await webp(draw(it.slug, it.name), `images/${hubSlug}/${it.slug}.webp`, w * 2);
  const chart = gridSvg(hub.items.map((it) => ({ svg: draw(it.slug, it.name), label: it.name })), cols, 400, 300, hub.name);
  await webp(chart, `images/${hubSlug}/${hubSlug}-chart.webp`, 1600);
}

// Real portrait photos: assets/portraits/<shape>-<woman|man>.<ext> → public/images/portraits/<shape>-<woman|man>.webp
const portraitsDir = join(root, "assets/portraits");
if (existsSync(portraitsDir)) {
  for (const f of readdirSync(portraitsDir)) {
    const m = /^([a-z-]+)-(woman|man)\.(jpe?g|png|webp)$/i.exec(f);
    if (!m || !FACE_SHAPES.some((s) => s.slug === m[1])) continue;
    const rel = `images/portraits/${m[1]}-${m[2]}.webp`;
    const out = join(pub, rel);
    mkdirSync(dirname(out), { recursive: true });
    const info = await sharp(join(portraitsDir, f)).rotate().resize({ width: 640, height: 800, fit: "cover", position: "attention" }).webp({ quality: 78, effort: 6 }).toFile(out);
    sizes[`/${rel}`] = [info.width, info.height];
    total += statSync(out).size;
  }
}

// Device icons: PNGs for Apple / Android / PWA, a multi-size favicon.ico.
const png = (size: number, padded = false) => sharp(Buffer.from(logoSvg(size, padded))).png({ compressionLevel: 9 }).toBuffer();
writeFileSync(join(root, "app/apple-icon.png"), await png(180));
mkdirSync(join(pub, "icons"), { recursive: true });
writeFileSync(join(pub, "icons/icon-192.png"), await png(192));
writeFileSync(join(pub, "icons/icon-512.png"), await png(512));
writeFileSync(join(pub, "icons/maskable-512.png"), await png(512, true));
writeFileSync(join(pub, "logo.png"), await png(512));
writeFileSync(join(root, "app/icon.svg"), logoSvg(64));

// ICO container holding 16, 32 and 48 px PNGs.
const icoSizes = [16, 32, 48];
const images = await Promise.all(icoSizes.map((s) => png(s)));
const header = Buffer.alloc(6 + 16 * icoSizes.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(icoSizes.length, 4);
let offset = header.length;
icoSizes.forEach((s, i) => {
  const e = 6 + i * 16;
  header.writeUInt8(s, e);
  header.writeUInt8(s, e + 1);
  header.writeUInt16LE(1, e + 4);
  header.writeUInt16LE(32, e + 6);
  header.writeUInt32LE(images[i].length, e + 8);
  header.writeUInt32LE(offset, e + 12);
  offset += images[i].length;
});
writeFileSync(join(root, "app/favicon.ico"), Buffer.concat([header, ...images]));

writeFileSync(join(root, "lib/image-sizes.json"), JSON.stringify(sizes, null, 1) + "\n");
console.log(`WebP images: ${(total / 1024).toFixed(0)} KB total`);
