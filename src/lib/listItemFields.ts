/** Shared (server-safe) helpers for list_item / list_section fields. */

export type StoryblokRichtext = {
  type?: string;
  content?: Array<{
    type?: string;
    text?: string;
    content?: StoryblokRichtext["content"];
  }>;
};

export type ListItemFields = {
  title?: string | StoryblokRichtext;
  /** API name used in some Storyblok `list_item` schemas instead of `title`. */
  text?: string | StoryblokRichtext;
  headline?: string | StoryblokRichtext;
  heading?: string | StoryblokRichtext;
  name?: string | StoryblokRichtext;
  label?: string | StoryblokRichtext;
  [key: string]: unknown;
};

function richtextToPlain(node: unknown): string {
  if (!node || typeof node !== "object") return "";
  const n = node as StoryblokRichtext & { text?: string };
  if (typeof n.text === "string") return n.text;
  if (!Array.isArray(n.content)) return "";
  return n.content.map(richtextToPlain).join("");
}

function asPlainText(raw: unknown): string {
  if (typeof raw === "string" && raw.trim()) return raw.trim();
  if (raw && typeof raw === "object") {
    const plain = richtextToPlain(raw).trim();
    if (plain) return plain;
  }
  return "";
}

/**
 * Resolve the display title from the preferred `title` field or common
 * Storyblok aliases (`text`, `headline`, `heading`, `name`, `label`).
 *
 * Some spaces used `text` as the API name when creating `list_item`.
 */
export function listItemTitle(blok: ListItemFields): string {
  for (const key of ["title", "text", "headline", "heading", "name", "label"] as const) {
    const plain = asPlainText(blok[key]);
    if (plain) return plain;
  }
  return "";
}
