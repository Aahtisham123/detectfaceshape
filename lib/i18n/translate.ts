export type Dict = Record<string, string>;

/**
 * Looks up an English source string in a dictionary (falling back to English) and fills {placeholders}.
 * Keys are the English text itself, so untranslated strings degrade gracefully.
 */
export function tr(dict: Dict | undefined, s: string, vars?: Record<string, string | number>) {
  let out = dict?.[s] ?? s;
  if (vars) for (const [k, v] of Object.entries(vars)) out = out.replaceAll(`{${k}}`, String(v));
  return out;
}
