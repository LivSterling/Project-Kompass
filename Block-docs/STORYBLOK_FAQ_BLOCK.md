# Storyblok: generic `faq` block

A reusable FAQ accordion that works on **any** page. It replaces the old page-specific
`housing_faq` / `community_faq` (and their `*_faq_item`) blocks. Create these two block
types once in Storyblok and reuse them everywhere.

Both block types are mapped in code (`src/lib/storyblok.ts`) and rendered by
`src/components/shared/FaqSection.tsx` and `src/components/shared/FaqItem.tsx`.

---

## `faq` (nestable block)

“FAQ” heading + an interactive accordion, with a growing dotted connector above. The
`theme` controls the heading color **and** the connector color so it matches the page it
lives on.


| Field                   | Type                     | Notes                                                                                   |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------- |
| `headline`              | Text (optional)          | Default: `FAQ`                                                                          |
| `theme`                 | Single-option (optional) | `orange` (default) · `navy` · `green` · `blue`. Sets heading + connector color.         |
| `show_bottom_connector` | Boolean (optional)       | Adds a trailing dotted connector below the section (e.g. before the footer).            |
| `default_item_accent`   | Single-option (optional) | Fallback open-state color for items that don't set `accent_color`. Defaults to `theme`. |
| `items`                 | **Blocks**               | `faq_item` only. Preferred field name. (`body` also accepted as a fallback name.)       |


---



## `faq_item` (nested only — inside `faq.items`)

One accordion row. **Collapsed** = dark `#151825` bar with a right-chevron and white text.
**Open** = colored bar, down-chevron, and the answer revealed in dark text. Clicking toggles it.


| Field          | Type                     | Notes                                                                                                              |
| -------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `question`     | Text                     | Row label                                                                                                          |
| `answer`       | Textarea                 | Shown when the row is open; max ~610px, line breaks preserved.                                                     |
| `accent_color` | Single-option (optional) | Open-state color: `orange` · `green` · `blue` · `navy`. Falls back to the section's `default_item_accent`/`theme`. |
| `default_open` | Boolean (optional)       | Start expanded.                                                                                                    |


---



## Per-page presets


| Page                 | `theme`  | `show_bottom_connector` | Typical item accents |
| -------------------- | -------- | ----------------------- | -------------------- |
| Transitional Housing | `navy`   | false                   | `green` / `blue`     |
| Community Center     | `orange` | true                    | `orange` / `green`   |


Suggested question/answer content for each page lives in that page's own doc
(`STORYBLOK_TRANSITIONAL_HOUSING_PAGE.md`, `STORYBLOK_COMMUNITY_CENTER_PAGE.md`).

---



## Visual / interaction notes (for editors)

- **Heading** uses the `theme` brand color, uppercase, Black Han Sans.
- Rows are a real accordion: click to expand/collapse. Use `default_open` to pre-open the
colored rows shown in a design.
- In the `answer` textarea, use real line breaks (Enter) — rows still open/close even with
an empty answer.
- The dotted connector(s) are built into the block; no separate divider block is required.

---



## Technical reference

- Component map: `src/lib/storyblok.ts` (`faq`, `faq_item`)
- UI components: `src/components/shared/FaqSection.tsx`, `src/components/shared/FaqItem.tsx`
- Scroll animation: GSAP `ScrollTrigger` in `src/components/about/GrowingDottedConnector.tsx`

