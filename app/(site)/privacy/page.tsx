import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";
import { metaFor } from "@/lib/meta";

export const metadata: Metadata = metaFor("/privacy/");

const body = `**Short version: your photos and camera feed never leave your device. We don't upload, store or see them, and we don't collect face geometry.**

## Photos and camera

- All face analysis runs in your browser using models downloaded from our site.
- Photos you upload are read directly by your browser and are never transmitted to us or anyone else.
- Camera access is used only while a tool is open and is turned off when you stop the camera or leave the page.
- We do not create, store or transmit face geometry, face templates or any biometric identifiers. Measurements exist only in your browser's memory while the page is open.

This matters because US biometric privacy laws, such as the Illinois Biometric Information Privacy Act (BIPA) and similar laws in Texas and Washington, regulate collecting face geometry. Our tools are designed so that no such data is ever collected.

## Result cards

When you tap **Share my result**, your device creates an image containing only your result (for example "My face shape is Heart"). It never includes your photo. Sharing happens through your device's own share menu.

## Analytics and cookies

We may use privacy-friendly analytics to count page views. These never include photos or results. We don't sell personal data.

## Embedded quiz

The embeddable face shape quiz doesn't use the camera and doesn't collect personal data.

## Children

Our tools are not directed at children under 13.

## Contact

Questions? Email privacy@detectfaceshape.ai.

_Last updated: October 19, 2026._`;

export default function Privacy() {
  return <StaticPage title="Privacy Policy" path="/privacy/" body={body} icon="ShieldCheck" />;
}
