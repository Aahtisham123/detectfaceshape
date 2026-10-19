import type { MetadataRoute } from "next";
import { SITE, absUrl } from "@/lib/site";
import { TOOLS } from "@/lib/content/tools";
import { FACE_SHAPES } from "@/lib/content/faceShapes";
import { availableTopics } from "@/lib/content/faceShapeTopics";
import { TYPE_HUBS } from "@/lib/content/typeHubs";
import { POSTS } from "@/lib/content/blog";
import { shapeImagePath } from "@/components/ShapeIllustration";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE.updated);
  const page = (path: string, priority = 0.6, images?: string[]) => ({ url: absUrl(path), lastModified, priority, ...(images ? { images } : {}) });
  return [
    ...TOOLS.map((t) => page(t.path, t.path === "/" ? 1 : 0.9)),
    page("/tools/", 0.7),
    page("/face-shapes/", 0.9, FACE_SHAPES.map((s) => absUrl(shapeImagePath(s.slug)))),
    page("/face-shapes/women/", 0.7),
    page("/face-shapes/men/", 0.7),
    ...FACE_SHAPES.flatMap((s) => [
      page(`/face-shapes/${s.slug}/`, 0.8, [absUrl(shapeImagePath(s.slug))]),
      ...availableTopics(s).map((t) => page(`/face-shapes/${s.slug}/${t}/`, 0.6)),
    ]),
    ...TYPE_HUBS.flatMap((h) => [page(`/${h.slug}/`, 0.8), ...h.items.map((i) => page(`/${h.slug}/${i.slug}/`, 0.6))]),
    page("/blog/", 0.5),
    ...POSTS.map((p) => page(`/blog/${p.slug}/`, 0.6)),
    page("/about/", 0.3),
    page("/how-it-works/", 0.4),
    page("/privacy/", 0.2),
    page(`/authors/${SITE.author.slug}/`, 0.3),
  ];
}
