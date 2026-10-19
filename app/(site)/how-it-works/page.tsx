import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";
import { FACE_NORMS } from "@/lib/face/faceShape";

export const metadata: Metadata = {
  title: "How Our Face Shape Detector Works (Methodology)",
  description: "The methodology behind our face shape detector: on-device landmark detection, head-pose correction, measurements, calibration on real faces and scoring.",
  alternates: { canonical: "/how-it-works/" },
};

const n = FACE_NORMS;
const body = `This page explains exactly how our tools turn a photo into a result, so you can judge how much to trust it.

## 1. Landmark detection, on your device

We use Google's open-source **MediaPipe Face Landmarker**, which places 478 points on a face, including the irises. It runs as WebAssembly inside your browser. The model files are downloaded once from our own domain. **Your photo is never sent to a server.**

## 2. Head-pose correction

Before measuring, we convert landmarks to pixels and rotate them so your pupils are level, which removes head roll. We also estimate yaw (turning left or right) and pitch (chin up or down). If either is large, we show a warning, because turning your head changes your apparent proportions in ways we can't fully correct.

## 3. Measurements

For face shape we measure:

| Measurement | Landmarks |
|---|---|
| Face length | Top of forehead mesh to chin |
| Cheekbone width | Widest points of the face at the cheekbones |
| Forehead width | Upper forehead, left to right |
| Jaw width | Jaw corners below the ears |
| Chin width | Either side of the chin |
| Jaw angle | Angle at the jaw corner between cheekbone and chin |

All widths are divided by cheekbone width, so photo size and distance don't matter.

## 4. Calibration on real faces

A "wide jaw" only means something relative to real people. We ran the same model on a calibration set of 71 front-facing photos of adults and recorded the average and spread of every ratio:

| Ratio | Average | Standard deviation |
|---|---|---|
| Face length ÷ cheekbone width | ${n.lengthRatio.mean} | ${n.lengthRatio.sd} |
| Forehead ÷ cheekbone width | ${n.foreheadRatio.mean} | ${n.foreheadRatio.sd} |
| Jaw ÷ cheekbone width | ${n.jawRatio.mean} | ${n.jawRatio.sd} |
| Jaw angle | ${n.jawAngle.mean}° | ${n.jawAngle.sd}° |

Your measurements are converted to standard scores against these averages.

## 5. Scoring every shape

Each face shape is defined as a pattern of standard scores. For example, **heart** is a wider-than-average forehead with a narrower-than-average jaw and chin; **oblong** is a longer-than-average face with average widths. We compute how close you are to each pattern and convert the distances into percentages that add up to 100. That's why you see a match for every shape.

## Eyes, nose, lips, symmetry and more

The other tools use the same landmarks and the same calibrate-then-compare approach:

- **Eye shape:** eye openness, canthal tilt, and lid space below the brow.
- **Nose shape:** width relative to eye spacing, length relative to face length, tip lift, and depth cues for bridge and projection.
- **Lip shape:** fullness, upper-to-lower ratio, width, Cupid's bow depth and corner angle.
- **Symmetry:** we fit your facial midline, mirror 37 landmark pairs across it, and measure the mismatch in units of your interpupillary distance.
- **Age:** a separate open-source model (GEAR, via the Human library), also run on your device.

## Known limitations

- **Hairline:** the landmark model stops just below the hairline, so face length and the upper facial third are estimated.
- **Lens distortion:** close-up selfies make faces look narrower and noses bigger. Hold the camera at arm's length.
- **Eyelid creases** aren't landmarked, so hooded and monolid results are inferred.
- **Nose bridge humps** are clearest in profile; from the front they're estimated from depth.
- **Categories are fuzzy.** Stylists disagree about borderline faces, which is why we show your top matches rather than a single label.

## Editorial standards

Guides are written by Ahtisham Alam from published styling conventions and anthropometric references, and are reviewed whenever our tools change. Celebrity examples reflect how those people are commonly described in style media, not measurements of them. Fun tools (attractiveness, age, golden ratio) are labeled as such.`;

export default function HowItWorks() {
  return <StaticPage title="How Our Detector Works" path="/how-it-works/" body={body} />;
}
