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

## Blocks to use

Prefer the **generic, reusable blocks** below (allowed on the `page` → **blocks** field).
Only `about_impact` and `about_road` stay About-specific.

### 1. `page_hero` (generic — replaces the old `about_hero`)

Tan paper hero: compass, “Who are we?”, and “We are **Project** **Kompass**” with
green/navy highlights. Full field reference in **`STORYBLOK_PAGE_HERO_BLOCK.md`**. Configure:

- `eyebrow`: `Who are we?`
- `lines` → one `hero_line` with these `hero_segment`s:

| `text`   | `bar_color` |
| -------- | ----------- |
| `We are `| `none`      |
| `Project`| `green`     |
| ` `      | `none`      |
| `Kompass`| `navy`      |

---

### 2. `content_section` (generic — replaces the old `about_mission`)

“OUR MISSION” + centered body. Full field reference in
**`STORYBLOK_CONTENT_SECTION_BLOCK.md`**. Configure:

| Field           | Value       |
| --------------- | ----------- |
| `headline`      | `Our Mission` |
| `theme`         | `orange`    |
| `headline_case` | `uppercase` |
| `body_align`    | `center`    |
| `body`          | Mission copy |

---

### 3. `about_impact`

“Our Impact” + two white cards: line chart (Recharts) and donut with center label.

| Field          | Type   | Notes |
| -------------- | ------ | ----- |
| `headline`     | Text (optional) | Default: `Our Impact` |
| `chart_data`   | Textarea (optional) | JSON array of `{ "year", "transitional_housing", "community_center", "project_farm" }`. If empty/invalid, demo data is used. |
| `donut_center` | Text (optional) | Default: `98%` |

---

### 4. `content_section` (generic — replaces the old `about_history`)

“Our History” + wide photo + long text. Full field reference in
**`STORYBLOK_CONTENT_SECTION_BLOCK.md`**. Configure:

| Field            | Value        |
| ---------------- | ------------ |
| `headline`       | `Our History`|
| `theme`          | `orange`     |
| `headline_case`  | `capitalize` |
| `image`          | Wide crop (864×521) |
| `image_position` | `above`      |
| `body_align`     | `left`       |
| `body`           | History copy (line breaks preserved) |

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

1. `page_hero` (generic)
2. `content_section` — Our Mission (generic)
3. `about_impact` (About-specific)
4. `content_section` — Our History (generic)
5. `scroll_cards` (`card_style: values`, with 5× `scroll_card`)
6. `about_road` (About-specific)

Growing orange dotted segments are **built into** each section above (except the hero), so you do **not** need a separate “divider” blok unless you want one for editorial flexibility later.

> **Migration note:** the old `about_hero`, `about_mission`, and `about_history` blocks are
> still mapped in code, so existing content keeps rendering until you re-author with the
> generic blocks.

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
