// MediaPipe Face Landmarker indices (478-point mesh, incl. irises).
// "Right"/"left" are the subject's own sides; in an unmirrored photo the subject's right is on image-left.
export const LM = {
  forehead: 10,
  glabella: 9,
  noseBridge: 168,
  noseTip: 1,
  subnasale: 2,
  chin: 152,
  upperLipTop: 0,
  upperLipBottom: 13,
  lowerLipTop: 14,
  lowerLipBottom: 17,
  mouthRight: 61,
  mouthLeft: 291,
  bowRight: 37,
  bowLeft: 267,
  cheekRight: 234,
  cheekLeft: 454,
  foreheadRight: 54,
  foreheadLeft: 284,
  templeRight: 21,
  templeLeft: 251,
  jawRight: 172,
  jawLeft: 397,
  chinRight: 148,
  chinLeft: 377,
  alaRight: 129,
  alaLeft: 358,
  eyeROuter: 33,
  eyeRInner: 133,
  eyeRTop: 159,
  eyeRBottom: 145,
  eyeLOuter: 263,
  eyeLInner: 362,
  eyeLTop: 386,
  eyeLBottom: 374,
  browRMid: 105,
  browLMid: 334,
  browRInner: 107,
  browLInner: 336,
  irisR: 468,
  irisL: 473,
} as const;

/** Face silhouette in drawing order. */
export const FACE_OVAL = [
  10, 338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288, 397, 365, 379, 378, 400, 377, 152, 148, 176, 149,
  150, 136, 172, 58, 132, 93, 234, 127, 162, 21, 54, 103, 67, 109,
];

/** Bilateral pairs used for symmetry and for mirroring (right, left). */
export const SYMMETRIC_PAIRS: [number, number][] = [
  [33, 263], [133, 362], [159, 386], [145, 374], [160, 387], [144, 373], [70, 300], [105, 334], [107, 336],
  [66, 296], [234, 454], [93, 323], [132, 361], [58, 288], [172, 397], [136, 365], [150, 379], [149, 378],
  [176, 400], [148, 377], [54, 284], [103, 332], [67, 297], [109, 338], [21, 251], [162, 389], [127, 356],
  [61, 291], [40, 270], [37, 267], [84, 314], [91, 321], [129, 358], [98, 327], [48, 278], [50, 280], [205, 425],
];

export const MIDLINE = [10, 151, 9, 8, 168, 6, 197, 195, 5, 4, 1, 2, 0, 13, 14, 17, 18, 200, 199, 175, 152];
