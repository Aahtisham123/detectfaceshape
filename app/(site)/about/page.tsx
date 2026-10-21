import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";
import { metaFor } from "@/lib/meta";
import { organization } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = metaFor("/about/");

const body = `Face Shape Detector is a set of free tools that measure your face and explain what the measurements mean for hair, glasses, makeup and grooming.

## Why we built it

Most face shape advice asks you to judge your own face in a mirror, which is surprisingly hard. Most online detectors upload your photo to a server. We wanted something that measures precisely and never sees your photo.

## What makes it different

- **On-device analysis.** Every tool runs in your browser. Your photo is never uploaded or stored. [How it works](/how-it-works/).
- **Calibrated on real faces.** Our classifiers compare you with measurements from real photos, not idealized drawings.
- **Honest results.** You see a percentage for every shape, because most people are a blend. Fun tools like the attractiveness test are labeled as fun.
- **Tools and guides together.** Every result links to a guide on what to do with it.

## Who's behind it

Face Shape Detector is built and written by [${SITE.author.name}](/authors/${SITE.author.slug}/). ${SITE.author.bio}

## Contact

Spotted a mistake or want to suggest a tool? Email hello@detectfaceshape.cc.`;

export default function About() {
  return <StaticPage title="About Face Shape Detector" path="/about/" body={body} icon="Info" extra={organization()} />;
}
