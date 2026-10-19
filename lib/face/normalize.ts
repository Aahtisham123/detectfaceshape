import { LM } from "./landmarks";
import { avg, deg, dist, type Pt } from "./geometry";

export type Pose = { rollDeg: number; yaw: number; pitch: number };

export type FaceFrame = {
  /** Landmarks in pixel units, rotated so the eyes are level (roll removed). */
  pts: Pt[];
  pose: Pose;
  /** Interocular distance (pupil to pupil) in pixels: the unit for size checks. */
  iod: number;
  warnings: string[];
};

/**
 * Converts MediaPipe's normalized landmarks to pixel space and removes head roll,
 * so every ratio downstream is measured on a level face.
 */
export function normalizeFace(raw: { x: number; y: number; z: number }[], width: number, height: number): FaceFrame {
  const px = raw.map((p) => ({ x: p.x * width, y: p.y * height, z: p.z * width }));
  const eyeR = px[LM.irisR] ?? avg([px[LM.eyeROuter], px[LM.eyeRInner]]);
  const eyeL = px[LM.irisL] ?? avg([px[LM.eyeLOuter], px[LM.eyeLInner]]);
  const roll = Math.atan2(eyeL.y - eyeR.y, eyeL.x - eyeR.x);
  const c = { x: (eyeR.x + eyeL.x) / 2, y: (eyeR.y + eyeL.y) / 2 };
  const cos = Math.cos(-roll);
  const sin = Math.sin(-roll);
  const pts = px.map((p) => {
    const dx = p.x - c.x;
    const dy = p.y - c.y;
    return { x: c.x + dx * cos - dy * sin, y: c.y + dx * sin + dy * cos, z: p.z };
  });

  const iod = dist(pts[LM.irisR] ?? eyeR, pts[LM.irisL] ?? eyeL);
  const cheekR = pts[LM.cheekRight];
  const cheekL = pts[LM.cheekLeft];
  const halfW = (cheekL.x - cheekR.x) / 2;
  // Yaw: how far the nose tip sits from the cheek midpoint, as a share of half face width.
  const yaw = (pts[LM.noseTip].x - (cheekR.x + halfW)) / halfW;
  // Pitch: nose tip position between the eye line and chin (≈0.35 when looking straight).
  const eyeY = (pts[LM.eyeROuter].y + pts[LM.eyeLOuter].y) / 2;
  const pitch = (pts[LM.noseTip].y - eyeY) / (pts[LM.chin].y - eyeY) - 0.35;

  const warnings: string[] = [];
  if (Math.abs(yaw) > 0.2) warnings.push("Your head is turned to the side. Face the camera straight on for an accurate reading.");
  if (Math.abs(pitch) > 0.09) warnings.push("Your head is tilted up or down. Keep your chin level with the camera.");
  if (Math.abs(deg(roll)) > 15) warnings.push("Your head is tilted sideways. We corrected for it, but a level photo is more accurate.");
  if (iod < 40) warnings.push("Your face is small in the photo. A closer photo gives more precise measurements.");
  const mouthGap = dist(pts[LM.upperLipBottom], pts[LM.lowerLipTop]) / iod;
  if (mouthGap > 0.12) warnings.push("Your mouth is open. Close it gently with a neutral expression for jaw and lip readings.");

  return { pts, pose: { rollDeg: deg(roll), yaw, pitch }, iod, warnings };
}
