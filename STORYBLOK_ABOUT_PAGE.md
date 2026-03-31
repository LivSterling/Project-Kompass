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

### 5. `about_values` (nested + scroll)

“Our Values” heading, **growing dotted connector** above (shared pattern), then a **pinned horizontal scroll**: vertical scroll pauses while cards move **right → left** (GSAP ScrollTrigger). Intended for **five** `value_card` blocks.

| Field   | Type   | Allowed nested components | Notes |
| ------- | ------ | ------------------------- | ----- |
| `headline` | Text (optional) | — | Default: `Our Values` |
| `cards` | **Blocks** | `value_card` only | Preferred field name. |

**Alternative field name:** if you prefer Storyblok’s usual convention, you can name the nested field `body` instead of `cards`; the frontend reads **`cards` first**, then falls back to **`body`**.

---

### 6. `value_card` (nested only)

One colored card in the values row.

| Field         | Type            | Notes |
| ------------- | --------------- | ----- |
| `title`       | Text            | e.g. `value 1` |
| `body`        | Text / textarea | ~334px column in layout |
| `card_color`  | Single option   | Options: `navy`, `green`, `orange` → `#345789`, `#82a969`, `#fc8f4c` |

Add **five** instances inside `about_values` for the Figma layout.

---

### 7. `about_road`

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
5. `about_values` (with 5× `value_card`)  
6. `about_road`  

Growing orange dotted segments are **built into** each section above (except the hero), so you do **not** need a separate “divider” blok unless you want one for editorial flexibility later.

---

## Visual / interaction notes (for editors)

- **Background:** The fixed `body` background image is unchanged site-wide; About sections sit on top with transparent/navy treatment consistent with the rest of the site.
- **Dotted lines:** Orange vertical rules **animate from 0 to full height** (~156px) as each section approaches the viewport while scrolling.
- **Values:** While the values block is active, **page scroll is pinned** and maps to **horizontal** motion until all cards have crossed the viewport.

---

## Technical reference

- Component map: `src/lib/storyblok.ts`  
- About UI: `src/components/about/*`  
- Scroll: GSAP `ScrollTrigger` in `AboutValuesSection` and `GrowingDottedConnector`
