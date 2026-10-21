import type { LocaleContent } from "../types";
import { tools } from "./tools";
import { shapesA } from "./shapes1";
import { shapesB } from "./shapes2";
import { hub, hubNames, items, pages } from "./rest";

export const content: LocaleContent = { tools, shapes: { ...shapesA, ...shapesB }, hub, items, hubNames, pages };
