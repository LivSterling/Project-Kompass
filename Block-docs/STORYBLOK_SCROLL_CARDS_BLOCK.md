# Storyblok: generic `scroll_cards` block

A reusable pinned horizontal-scroll card section that works on **any** page. It replaces
the old page-specific `about_values` / `community_supports` (and their `value_card` /
`support_card`) blocks. Create these two block types once in Storyblok and reuse them
everywhere.

Both block types are mapped in code (`src/lib/storyblok.ts`) and rendered by
`src/components/shared/PinnedCardSection.tsx` and `src/components/shared/ScrollCard.tsx`.

---

## `scroll_cards` (nestable block)

Section heading, optional subheadline, growing dotted connector above, then a **pinned
horizontal scroll**: vertical scroll pauses while cards move **right → left** (GSAP
ScrollTrigger).

| Field                 | Type                     | Notes |
| --------------------- | ------------------------ | ----- |
| `headline`            | Text (optional)          | Default: `Our Values` |
| `subheadline`         | Textarea (optional)      | Blue sub-headline below the main heading (Community Center uses this). |
| `theme`               | Single-option (optional) | `orange` (default) · `navy` · `green` · `blue`. Sets heading + connector color. |
| `headline_uppercase`  | Boolean (optional)       | Uppercase the main heading (Community Center). |
| `auto_color_cards`    | Boolean (optional)       | Auto-cycle card colors navy → green → orange → blue by position. Default `true` for `card_style: services`, ignored for `values`. |
| `card_style`          | Single-option (optional) | `values` (About-style cards) · `services` (Community-style cards with schedule/CTA). Default: `services`. |
| `default_card_color`  | Single-option (optional) | Fallback when `auto_color_cards` is off and a card has no `card_color`. Default: `navy`. |
| `cards`               | **Blocks**               | `scroll_card` only. Preferred field name. (`body` also accepted as a fallback name.) |

---

## `scroll_card` (nested only — inside `scroll_cards.cards`)

One colored card in the horizontal row (310×406 in the design).

| Field          | Type                     | Notes |
| -------------- | ------------------------ | ----- |
| `title`        | Text                     | Card heading |
| `body`         | Textarea                 | Description; max ~334px, line breaks preserved. |
| `card_color`   | Single-option (optional) | `navy` · `green` · `orange` · `blue`. Overrides auto-cycle when set. |
| `schedule`     | Text (optional)          | Bold first line above body (`services` style only). |
| `button_label` | Text (optional)          | Optional blue CTA button (`services` style only). |
| `button_link`  | Link (optional)          | Where the CTA points. |

---

## Per-page presets

| Page             | `theme`  | `card_style` | `headline_uppercase` | `auto_color_cards` | `subheadline` |
| ---------------- | -------- | ------------ | -------------------- | ------------------ | ------------- |
| About (Values)   | `orange` | `values`     | false                | false              | — |
| Community Center | `orange` | `services`   | true                 | true               | yes |

Suggested card content for each page lives in that page's own doc
(`STORYBLOK_ABOUT_PAGE.md`, `STORYBLOK_COMMUNITY_CENTER_PAGE.md`).

---

## Visual / interaction notes (for editors)

- **Heading** uses the `theme` brand color, Black Han Sans. Subheadline (when set) is blue `#4C7FC8`.
- While the section is active, **page scroll is pinned** and maps to **horizontal** motion until all cards have crossed the viewport.
- **Services-style** cards auto-cycle colors unless `card_color` is set on a card.
- **Values-style** cards use manual `card_color` per card (no auto-cycle).
- The dotted connector is built into the block; no separate divider block is required.

---

## Technical reference

- Component map: `src/lib/storyblok.ts` (`scroll_cards`, `scroll_card`)
- UI components: `src/components/shared/PinnedCardSection.tsx`, `src/components/shared/ScrollCard.tsx`
- Scroll hook: `src/hooks/usePinnedHorizontalScroll.ts`
- Connector animation: GSAP `ScrollTrigger` in `src/components/about/GrowingDottedConnector.tsx`
