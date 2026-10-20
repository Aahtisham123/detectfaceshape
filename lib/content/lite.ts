import { FACE_SHAPES } from "./faceShapes";
import { availableTopics } from "./faceShapeTopics";
import { TYPE_HUBS } from "./typeHubs";

/** The few fields the interactive tools need, so the full guide text never ships in client JavaScript. */
export type LiteItem = { slug: string; name: string; definition: string };
export type LiteShape = LiteItem & { topics: string[] };
export type LiteHub = { slug: string; name: string; items: LiteItem[] };
export type Lite = { shapes: LiteShape[]; hubs: Record<string, LiteHub> };

export function liteContent(): Lite {
  return {
    shapes: FACE_SHAPES.map((s) => ({ slug: s.slug, name: s.name, definition: s.definition, topics: availableTopics(s) })),
    hubs: Object.fromEntries(
      TYPE_HUBS.map((h) => [h.slug, { slug: h.slug, name: h.name, items: h.items.map((i) => ({ slug: i.slug, name: i.name, definition: i.definition })) }]),
    ),
  };
}
