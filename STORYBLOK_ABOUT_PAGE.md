# Storyblok: About page blocks

This project already maps these **content types** in code (`src/lib/storyblok.ts`):

| Technical name    | React component   | Typical use        |
| ----------------- | ----------------- | ------------------ |
| `page`            | `Page`            | Page wrapper + `blocks` field for sections |
| `hero`            | `Hero`            | Home hero          |
| `hero_simple`     | `HeroSimple`      | Simple hero        |
| `text_section`    | `TextSection`     | Text + optional paper bg |
| `cta_section`     | `CtaSection`      | CTA band           |
| `blog_grid`       | `BlogGrid`        | Blog listing       |
| `blog_card`       | `BlogCard`        | Single card (nested) |
| `stats_section`   | `StatsSection`    | Stats / impact strip |

The **About** route loads the story `pages/about` and renders its root blok (usually `page`) and whatever you put in that page’s **`blocks`** array. You do **not** need new block types for Navigation or Footer; those live in the Next.js layout.

---

## New blocks to create (About page only)

Create these in the Storyblok **Block library** and allow them on the About page’s `page` → **blocks** field (and nested where noted).

### 1. `about_hero`

Tan paper hero: compass, “Who are we?”, and “We are **Project** **Kompass**” with green/navy highlights (matches Figma). Global site background (`body` texture) stays as implemented in CSS.

| Field            | Type        | Notes |
| ---------------- | ----------- | ----- |
| `compass_image`  | Asset (optional) | Defaults to `/img/logo compass.png` if empty |
| `who_heading`    | Text (optional)  | Default: `Who are we?` |
| `line_prefix`    | Text (optional)  | Default: `We are ` (include trailing space if you customize) |
| `highlight_green`| Text (optional)  | Default: `Project` |
| `highlight_blue` | Text (optional)  | Default: `Kompass` |

---

### 2. `about_mission`

“OUR MISSION” (or custom) + centered body on the navy textured background.

| Field      | Type   | Notes |
| ---------- | ------ | ----- |
| `headline` | Text (optional) | Default: `OUR MISSION` |
| `body`     | Text / textarea / Richtext (plain) | Centered; ~864px max width in layout |

---

### 3. `about_impact`

“Our Impact” + two white cards: line chart (Recharts) and donut with center label.

| Field          | Type   | Notes |
| -------------- | ------ | ----- |
| `headline`     | Text (optional) | Default: `Our Impact` |
| `chart_data`   | Textarea (optional) | JSON array of `{ "year", "transitional_housing", "community_center", "project_farm" }`. If empty/invalid, demo data is used. |
| `donut_center` | Text (optional) | Default: `98%` |

---

### 4. `about_history`

“Our History” + wide photo + long text (multiple paragraphs; use blank lines in a textarea or Richtext).

| Field      | Type   | Notes |
| ---------- | ------ | ----- |
| `headline` | Text (optional) | Default: `Our History` |
| `image`    | Asset  | Wide crop; displayed up to ~864px wide |
| `body`     | Text / textarea / Richtext | Preserves line breaks (`whitespace-pre-wrap`) |

---

### 5. `scroll_cards` (generic block — use `card_style: values`)

“Our Values” heading, **growing dotted connector** above, then a **pinned horizontal scroll**:
vertical scroll pauses while cards move **right → left** (GSAP ScrollTrigger). This is the
shared `scroll_cards` block documented in **`STORYBLOK_SCROLL_CARDS_BLOCK.md`** — configure
it for this page as:

| Field                | Value      | Notes |
| -------------------- | ---------- | ----- |
| `headline`           | `Our Values` | Default is fine |
| `theme`              | `orange`   | Orange heading + connector |
| `card_style`         | `values`   | Simpler title/body cards (no schedule or CTA) |
| `auto_color_cards`   | false      | Set `card_color` on each card manually |
| `headline_uppercase` | false      | Title case heading |
| `cards`              | `scroll_card` blocks | See suggested rows below |

Nested rows use the generic **`scroll_card`** block (`title`, `body`, `card_color` of
`navy`/`green`/`orange`). Full field reference is in `STORYBLOK_SCROLL_CARDS_BLOCK.md`.

Add **five** `scroll_card` instances for the Figma layout.

**Suggested cards:**

| `title`   | `card_color` | `body` |
| --------- | ------------ | ------ |
| value 1   | navy         | — |
| value 2   | green        | — |
| value 3   | orange       | — |
| value 4   | navy         | — |
| value 5   | green        | — |

> Replace placeholder titles and fill in body copy as content becomes available.

---

### 6. `about_road`

“The road we’ve traveled” full-width infographic (single image). Includes a **growing dotted connector** above and a small **X** mark asset at the bottom (same family as other pages).

| Field   | Type  | Notes |
| ------- | ----- | ----- |
| `image` | Asset | Full infographic PNG/JPG/SVG |

---

## Recommended order in `page.blocks`

1. `about_hero`  
2. `about_mission`  
3. `about_impact`  
4. `about_history`  
5. `scroll_cards` (`card_style: values`, with 5× `scroll_card`)
6. `about_road`  

Growing orange dotted segments are **built into** each section above (except the hero), so you do **not** need a separate “divider” blok unless you want one for editorial flexibility later.

---

## Visual / interaction notes (for editors)

- **Background:** The fixed `body` background image is unchanged site-wide; About sections sit on top with transparent/navy treatment consistent with the rest of the site.
- **Dotted lines:** Orange vertical rules **animate from 0 to full height** (~156px) as each section approaches the viewport while scrolling.
- **Values:** While the scroll cards block is active, **page scroll is pinned** and maps to **horizontal** motion until all cards have crossed the viewport.

---

## Technical reference

- Component map: `src/lib/storyblok.ts`  
- About UI: `src/components/about/*`
- Scroll cards: `src/components/shared/PinnedCardSection.tsx`, `src/hooks/usePinnedHorizontalScroll.ts`
- Connector: GSAP `ScrollTrigger` in `GrowingDottedConnector`
