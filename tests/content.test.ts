import { describe, expect, test } from "vitest";
import { FACE_SHAPES } from "@/lib/content/faceShapes";
import { TYPE_HUBS } from "@/lib/content/typeHubs";
import { TOOLS } from "@/lib/content/tools";
import { POSTS } from "@/lib/content/blog";
import { availableTopics } from "@/lib/content/faceShapeTopics";
import { FACE_SHAPE_KEYS } from "@/lib/quizLogic";

/** Every internal link in our content must point at a page we actually generate. */
function allPaths() {
  const paths = new Set<string>(["/", "/tools/", "/face-shapes/", "/face-shapes/men/", "/face-shapes/women/", "/blog/", "/about/", "/how-it-works/", "/privacy/", "/authors/", "/authors/ahtisham-alam/"]);
  TOOLS.forEach((t) => paths.add(t.path));
  FACE_SHAPES.forEach((s) => {
    paths.add(`/face-shapes/${s.slug}/`);
    availableTopics(s).forEach((t) => paths.add(`/face-shapes/${s.slug}/${t}/`));
  });
  TYPE_HUBS.forEach((h) => {
    paths.add(`/${h.slug}/`);
    h.items.forEach((i) => paths.add(`/${h.slug}/${i.slug}/`));
  });
  POSTS.forEach((p) => paths.add(`/blog/${p.slug}/`));
  return paths;
}

describe("content", () => {
  const paths = allPaths();
  const sources: [string, string][] = [
    ...FACE_SHAPES.map((s) => [`shape:${s.slug}`, s.body] as [string, string]),
    ...TYPE_HUBS.flatMap((h) => [[`hub:${h.slug}`, h.body] as [string, string], ...h.items.map((i) => [`${h.slug}/${i.slug}`, i.body] as [string, string])]),
    ...TOOLS.map((t) => [`tool:${t.slug}`, t.body] as [string, string]),
    ...POSTS.map((p) => [`post:${p.slug}`, p.summary + p.body] as [string, string]),
  ];

  test.each(sources)("internal links resolve (%s)", (_name, body) => {
    const links = [...body.matchAll(/\]\((\/[^)#\s]*)/g)].map((m) => m[1]);
    for (const l of links) expect(paths, `broken link ${l}`).toContain(l);
  });

  test("face shape keys match between content and classifier", () => {
    expect(FACE_SHAPES.map((s) => s.slug).sort()).toEqual([...FACE_SHAPE_KEYS].sort());
  });

  test("slugs are unique and URL-safe", () => {
    const slugs = [...TOOLS.map((t) => t.slug), ...TYPE_HUBS.map((h) => h.slug)];
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9-]+$/);
  });

});
