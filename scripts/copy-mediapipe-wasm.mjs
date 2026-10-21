// Copies the MediaPipe WASM runtime into /public so the face model is served
// from our own origin. Photos are never sent anywhere; only these static files load.
// Also writes gzip copies of the runtime and the face model (13.5 MB → ~4 MB): the browser
// unpacks them itself, so downloads stay small even if the host doesn't compress .wasm files.
import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "node_modules/@mediapipe/tasks-vision/wasm");
const dest = join(root, "public/mediapipe/wasm");

if (!existsSync(src)) {
  console.warn("[copy-mediapipe-wasm] @mediapipe/tasks-vision not installed yet, skipping");
  process.exit(0);
}
mkdirSync(dest, { recursive: true });
cpSync(src, dest, { recursive: true });

const gzip = (from, to) => {
  mkdirSync(dirname(to), { recursive: true });
  writeFileSync(to, gzipSync(readFileSync(from), { level: 9 }));
};
for (const f of ["vision_wasm_internal.wasm", "vision_wasm_nosimd_internal.wasm"]) gzip(join(dest, f), join(dest, `${f}.gz`));
gzip(join(root, "public/models/face_landmarker.task"), join(root, "public/mediapipe/models/face_landmarker.task.gz"));
console.log("[copy-mediapipe-wasm] copied WASM runtime to public/mediapipe/wasm and wrote gzip copies");
