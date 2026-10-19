"use client";

import type { FaceLandmarker } from "@mediapipe/tasks-vision";

let instance: Promise<FaceLandmarker> | null = null;
let mode: "IMAGE" | "VIDEO" = "IMAGE";

/** Loads the face model on first use only, so tool pages stay fast until someone clicks Start. */
export function getLandmarker(): Promise<FaceLandmarker> {
  if (!instance) {
    instance = (async () => {
      const { FaceLandmarker, FilesetResolver } = await import("@mediapipe/tasks-vision");
      const fileset = await FilesetResolver.forVisionTasks("/mediapipe/wasm");
      const create = (delegate: "GPU" | "CPU") =>
        FaceLandmarker.createFromOptions(fileset, {
          baseOptions: { modelAssetPath: "/models/face_landmarker.task", delegate },
          runningMode: "IMAGE",
          numFaces: 1,
        });
      try {
        return await create("GPU");
      } catch {
        return await create("CPU");
      }
    })();
    instance.catch(() => {
      instance = null;
    });
  }
  return instance;
}

export async function setMode(lm: FaceLandmarker, next: "IMAGE" | "VIDEO") {
  if (mode !== next) {
    await lm.setOptions({ runningMode: next });
    mode = next;
  }
}
