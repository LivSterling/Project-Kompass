# Storyblok: generic `list_section` block

A reusable "headline + list" section with a growing dotted connector above. One block
covers three layouts via `list_style`, plus an optional side image that switches it to a
two-column layout. It replaces `programs_list` (+`program_item`), `housing_expectations`
(+`housing_requirement`), and `community_guidelines`.

Mapped in code (`src/lib/storyblok.ts`) and rendered by
`src/components/shared/ListSection.tsx` and `src/components/shared/ListItem.tsx`.

> **Background:** transparent over the global navy texture. `theme` sets the heading +
> connector color. Accordion rows use the tan brown-paper texture (like the old
> `program_item`).

---

## `list_section` (nestable block)

| Field           | Type                     | Notes                                                                             |
| --------------- | ------------------------ | -------------------------------------------------------------------------------- |
| `headline`      | Text (optional)          | Section title. Hidden if empty.                                                   |
| `theme`         | Single-option (optional) | `green` (default) · `orange` · `navy` · `blue`. Heading + connector color.        |
| `headline_case` | Single-option (optional) | `uppercase` (default) · `capitalize` · `normal`.                                  |
| `list_style`    | Single-option (optional) | `accordion` (default) · `numbered` · `bullets`.                                   |
| `intro`         | Textarea (optional)      | Lead paragraph shown above the list.                                              |
| `bullets`       | Textarea (optional)      | `bullets` style only: newline-separated lines (used when no `items` are set).     |
| `image`         | Asset (optional)         | Side image (511×681 frame). When set, the section becomes a two-column layout.    |
| `items`         | **Blocks**               | `list_item` only. Used by `accordion` and `numbered`. (`body` also accepted.)     |

### `list_style` behavior

| Value       | Renders as                                                              | Source        |
| ----------- | ---------------------------------------------------------------------- | ------------- |
| `accordion` | Expandable paper rows with a circle arrow (old `programs_list`).       | `items`       |
| `numbered`  | `1. Title` + body, auto-colored heading (old `housing_expectations`).  | `items`       |
| `bullets`   | Simple disc bullets.                                                   | `bullets` text, or `items` titles |

---

## `list_item` (nested only — inside `list_section.items`)

One list entry. Which fields matter depends on the parent's `list_style`.

| Field          | Type                     | Notes                                                                          |
| -------------- | ------------------------ | ------------------------------------------------------------------------------ |
| `title`        | Text                     | Row/entry heading (also used as the bullet text in `bullets` style).           |
| `body`         | Textarea                 | Description. Line breaks preserved.                                            |
| `accent_color` | Single-option (optional) | `orange` · `green` · `blue` · `navy`. Overrides the auto color cycle.          |
| `default_open` | Boolean (optional)       | **Accordion only:** open on first render.                                      |
| `button_label` | Text (optional)          | **Accordion only:** blue CTA inside the open panel.                            |
| `button_link`  | Link (optional)          | **Accordion only:** where the CTA points (defaults to `#`).                    |

---

## Per-page presets

| Old block(s)                              | `list_style` | `theme` | image | items                    |
| ----------------------------------------- | ------------ | ------- | ----- | ------------------------ |
| `programs_list` + `program_item`          | `accordion`  | `green` | none  | `list_item` per program  |
| `housing_expectations` + `housing_requirement` | `numbered` | `navy`  | yes   | `list_item` per rule     |
| `community_guidelines`                    | `bullets`    | `orange`| yes   | `bullets` text + `intro` |

> For `community_guidelines`, put the two intro paragraphs in `intro` and the guideline
> list in `bullets` (one per line).

---

## Notes

- Old blocks/components are still mapped in code, so existing stories keep rendering.
  Migrate to `list_section` when convenient.
- Allow `list_section` on the `page` → **blocks** field.
