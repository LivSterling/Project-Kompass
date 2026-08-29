# Storyblok: `partner_logos` block (logo conveyor belt)

A three-row, infinitely-scrolling wall of partner/sponsor logos — the "Our Partners" section
of the Our Supporters page (referred to as "Art Partners" during design review; the Figma
headline is **Our Partners**). The **top** and **bottom** rows scroll left; the **middle** row scrolls right.

Mapped in code (`src/lib/storyblok.ts`) and rendered by
`src/components/shared/PartnerLogosSection.tsx`. The marquee animation lives in
`src/app/globals.css` (`.marquee-row` / `.marquee-track` / `@keyframes marquee-left` /
`@keyframes marquee-right`).

> **Background:** transparent over the global navy texture, with a growing dotted connector
> above (like other generic sections). Each logo sits in a white ~288×116 box, matching Figma.

---

## `partner_logos` (nestable block)


| Field           | Type                     | Notes                                                                        |
| --------------- | ------------------------ | ---------------------------------------------------------------------------- |
| `headline`      | Text (optional)          | Section title, e.g. `Our Partners`. Hidden if empty.                         |
| `theme`         | Single-option (optional) | `navy` (default) · `orange` · `green` · `blue`. Heading + connector color.   |
| `headline_case` | Single-option (optional) | `uppercase` (default) · `capitalize` · `normal`.                             |
| `top_row`       | **Blocks**               | `partner_logo_item` only. Scrolls **left**.                                  |
| `middle_row`    | **Blocks**               | `partner_logo_item` only. Scrolls **right** (opposite direction).            |
| `bottom_row`    | **Blocks**               | `partner_logo_item` only. Scrolls **left**.                                  |
| `speed`         | Number (optional)        | Seconds of animation per logo (belt speed). Defaults to `4`. Lower = faster. |
| `show_bottom_connector` | Boolean (optional) | Growing dotted connector after the belt, leading into the next section. Defaults to **on**. |


Add roughly 5–8 logos per row for a smooth loop — very short rows will loop noticeably fast at
the default speed (bump `speed` up if you only have 2–3 logos in a row).

---

## `partner_logo_item` (nested only — inside `top_row` / `middle_row` / `bottom_row`)

One logo box. This is a plain nested component (like `hero_segment`) — it does **not** need a
React component registered in `src/lib/storyblok.ts`; `PartnerLogosSection` renders it directly.


| Field   | Type            | Notes                                                                               |
| ------- | --------------- | ----------------------------------------------------------------------------------- |
| `image` | Asset           | The partner's logo. Row entry is skipped entirely if empty.                         |
| `alt`   | Text (optional) | Partner name, used as the accessible label. Falls back to the asset's own alt text. |
| `link`  | Link (optional) | Makes the logo clickable (opens in a new tab) — e.g. the partner's website.         |


---

## How the belt works

- Each row's logo list is duplicated once in the DOM (`[...items, ...items]`) and animated with
`transform: translateX()`. Because the second copy is pixel-identical to the first, the loop
is seamless regardless of how many logos are in the row.
- Top/bottom rows animate `0% → -50%` (visually moves left); the middle row animates
`-50% → 0%` (visually moves right).
- Hovering a row pauses its animation (`.marquee-row:hover .marquee-track`), and
`prefers-reduced-motion: reduce` disables all belt motion for accessibility.
- Rows are full-bleed (not capped to the 1200px `section-shell`) so the conveyor feels like it
spans the viewport, matching the reference site.

---

## Our Supporters preset


| Field                                 | Value                                                                                                          |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `headline`                            | `Our Partners`                                                                                                 |
| `theme`                               | `navy`                                                                                                         |
| `top_row`, `middle_row`, `bottom_row` | Upload each partner logo shown in the Figma frame, split roughly evenly across the three rows (5–6 logos each) |


---

## Notes

- Allow `partner_logos` on the `page` → **blocks** field.
- Reusable on any page that needs a scrolling logo wall (sponsors, funders, media mentions, etc.).

