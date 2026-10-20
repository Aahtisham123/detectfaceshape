# Face Shape Detector (detectfaceshape.ai)

Free AI face shape detector and face analysis tools, built with Next.js (App Router) and fully static.
Every photo is analyzed **in the browser**. Nothing is uploaded.

## Stack

- **Next.js 16** (App Router, static generation, `trailingSlash: true`), React 19, TypeScript
- **MediaPipe Face Landmarker** (478 landmarks, WASM) for all geometry-based tools, loaded only when a user starts a tool
- **Human + GEAR** (on-device) for the age estimator
- Plain CSS with light and dark themes, no UI framework
- Vitest for unit tests

## Run it

```bash
npm install        # also copies the MediaPipe WASM runtime into public/mediapipe/wasm
npm run dev        # http://localhost:3000
npm test           # unit tests (analyzers, quiz logic, content links, SEO limits)
npm run lint       # type-check
npm run build      # static build
npm run images     # re-render the WebP illustrations, favicons and app icons (needs sharp, a dev dependency)
npm run audit -- http://localhost:3000   # crawl a running build: broken links/images, titles, descriptions, alt text, H1s, canonicals, OG images
```

Node 20.9+ is required.

## Project layout

| Path | What lives there |
|---|---|
| `lib/face/` | Landmark indices, pose normalization, measurements, calibrated classifiers (face, eyes, nose, lips, jaw, symmetry, golden ratio, attractiveness), skin hue sampling |
| `components/tools/` | `FaceCapture` (upload / live camera / overlay) and every tool widget; `ToolWidget` code-splits them per page |
| `lib/content/` | All page content as data: face shapes, type hubs (eyes, nose, lips, head, jawline, Kibbe), tools, blog posts |
| `lib/quizLogic.ts` | Pure scoring for the face shape calculator, Kibbe test and color seasons |
| `app/(site)/` | Pages: `/`, `/[tool or hub]/`, `/[hub]/[type]/`, `/face-shapes/…`, `/blog/…`, about, methodology, privacy, author |
| `app/(embed)/embed/face-shape-quiz/` | Embeddable quiz widget (noindex, attribution link) |
| `app/sitemap.ts`, `app/robots.ts` | Sitemap (with image entries) and robots |
| `public/models/` | Face landmarker and age models, self-hosted |
| `lib/seo.ts` | **Every page's title (≤ 50 chars), meta description (≤ 143), section and image.** Metadata, search, sitemap and OG images all read from it; `tests/seo.test.ts` enforces the limits |
| `lib/graphics/svg.ts` + `scripts/build-images.mts` | Original vector illustrations (face, eye, nose, lip, head, jaw types, hero, logo) rendered to compressed WebP in `public/images/`, plus favicon.ico / PNG app icons |
| `components/layout/` | Sticky header, left sidebar navigation (drawer on mobile), search dialog (⌘K), footer |
| `components/ui/` | Toasts, copy button, cookie banner, back-to-top, scroll progress, scroll-reveal, table of contents |
| `app/og/[file]/route.tsx` | A unique 1200×630 social image per page (`/og/<path>.png`) |
| `assets/portraits/` | Drop real photos named `<shape>-<woman|man>.jpg`; `npm run images` compresses them to WebP and they appear on that face shape page automatically |
| `lib/content/typeExtras.ts` | How-to-tell steps, tips, comparisons and extra FAQs for every eye/nose/lip/head/jaw/Kibbe type page |
| `lib/content/testimonials.ts` | Real user testimonials (empty until you add genuine ones; the section then appears automatically) |

## URL map

- `/` Face Shape Detector (main tool, live camera "face shape filter")
- `/face-shapes/` hub, `/face-shapes/{shape}/`, `/face-shapes/{shape}/{hairstyles-women|hairstyles-men|celebrities|glasses}/`, `/face-shapes/men/`, `/face-shapes/women/`
- Tools: `/face-shape-quiz/`, `/face-shape-calculator/`, `/eye-shape-detector/`, `/nose-shape-detector/`, `/lip-shape-analyzer/`, `/face-symmetry-test/`, `/golden-ratio-face/`, `/attractiveness-test/`, `/how-old-do-i-look/`, `/head-shape-detector/`, `/jawline-analyzer/`, `/skin-undertone-test/`, `/color-analysis/`, `/foundation-shade-finder/`, `/kibbe-body-type-test/`, `/canthal-tilt-calculator/`, `/facial-proportions-calculator/`, `/face-comparison/`
- Guides (separate from tools): `/eye-shapes/`, `/nose-shapes/`, `/lip-shapes/`, `/head-shapes/`, `/jawline-shapes/`, `/kibbe-body-types/`, each with one page per type
- `/blog/{post}/`, `/tools/`, `/about/`, `/how-it-works/`, `/privacy/`, `/authors/ahtisham-alam/`

Topic sub-pages are only generated when a shape has enough unique content (see `lib/content/faceShapeTopics.ts`) to avoid thin pages.

## How the classifiers are calibrated

Each feature (for example jaw width ÷ cheekbone width) is converted to a z-score against norms measured with the same
landmark model on 71 frontal photos. Shapes are defined as prototype patterns in z-space and scored with a Gaussian
similarity, so every result shows a percentage for every shape. Norms live in `lib/face/faceShape.ts` (`FACE_NORMS`)
and `lib/face/classify.ts` (`NORMS`). Recalibrate them if you swap the landmark model. The methodology is public at `/how-it-works/`.

## Deploying

Designed for Vercel (or any Next.js host):

1. Import the repo; the default build command works. Set `NEXT_PUBLIC_SITE_URL=https://detectfaceshape.ai` once the custom domain is live (until then canonicals follow Vercel's production domain automatically; preview deployments are sent `X-Robots-Tag: noindex`). `postinstall` copies the WASM runtime.
2. Add `detectfaceshape.ai` as the primary domain and redirect `www` to it at the domain level. `next.config.ts` also redirects `www`.
3. Production deploys from `main`. Commits must be authored with an email on the GitHub account linked to the Vercel account (here `ahtipazeer@gmail.com`); on the Hobby plan Vercel skips pushes from unknown authors. If a push doesn't deploy, use **Deployments → Create Deployment** with branch `main`.
4. Submit `https://detectfaceshape.ai/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

## Before launch

- Set up the `hello@` and `privacy@` mailboxes referenced on the About and Privacy pages.
- Add analytics if wanted (privacy-friendly; never send photos or results).
- Replace the generated SVG face-shape diagrams with commissioned illustrations when ready (same file names under `/images/face-shapes/`), and add eye, nose and lip illustrations.
- Have a licensed stylist or cosmetologist review the guides, then credit them on the pages.
- Celebrity Look-Alike is intentionally not built yet (needs a licensed image database and publicity-rights review).
