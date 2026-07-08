# Storyblok: Our Team page blocks

This project maps these **content types** in code (`src/lib/storyblok.ts`). The **Our Team** route loads the story **`pages/our-team`** and renders its root blok (usually `page`) and the **`blocks`** array inside it. Navigation and footer stay in the Next.js layout.

---

## Story to create

| Setting | Value |
| -------- | ----- |
| Content path | `our-team` (folder) |
| Slug / full slug | `pages/our-team` |
| Root component | `page` |

In the `page` blok, add these sections in order under **`blocks`**.

---

## Blocks to create

### 1. `page_hero` (generic — replaces the old `team_hero`)

Tan paper hero: compass, decorative dotted path + “map X”, and **Our** on the paper plus
**Team** on a colored bar. Full field reference in **`STORYBLOK_PAGE_HERO_BLOCK.md`**.
Configure `lines` → one `hero_line` with these `hero_segment`s:

| `text` | `bar_color` |
| ------ | ----------- |
| `Our ` | `none`      |
| `Team` | `green`     |

> The Figma uses an orange bar for “Team”; set `bar_color: orange` on that segment if you
> prefer to match it exactly.

---

### 2. `team_grid_section`

One section title (large **blue** `#4C7FC8` heading) + **growing blue dotted connector** above (same color as the headline; same scroll behavior as About: GSAP `ScrollTrigger` scrub). Below: responsive **4-column** grid of people on the dark page background.

| Field | Type | Allowed nested | Notes |
| ----- | ---- | -------------- | ----- |
| `headline` | Text (optional) | — | e.g. `STAFF` or `Board of Directors` |
| `uppercase` | Boolean (optional) | — | **Set to true** for `STAFF` (all-caps look). **Leave false or unset** for `Board of Directors` (title case) |
| `members` | **Blocks** | `team_member` only | Preferred field name |

**Alternative field name:** the frontend reads **`members` first**, then falls back to **`body`** if `members` is empty (same pattern as About values).

Use **two** instances of `team_grid_section` on the page: one for staff, one for the board.

---

### 3. `team_member` (nested only)

One person: portrait, orange name, white role (Figma).

| Field | Type | Notes |
| ----- | ---- | ----- |
| `name` | Text | Orange, heading font |
| `role` | Text (optional) | White, Montserrat medium ~16px / 26px line height |
| `photo` | Asset (optional) | Square crop; displayed at **202×202** px. If empty, a gray placeholder image is used |

---

## Recommended order in `page.blocks`

1. `page_hero` (generic)
2. `team_grid_section` — headline `STAFF`, **`uppercase`: true**, nested `team_member` entries  
3. `team_grid_section` — headline `Board of Directors`, **`uppercase`: false** (or unset), nested `team_member` entries  

> **Migration note:** the old `team_hero` block is still mapped in code, so existing content
> keeps rendering until you re-author with `page_hero`.

---

## Visual / interaction notes (for editors)

- **Background:** Same as other inner pages: fixed `body` background image + navy base; no extra full-page background blok required.
- **Dotted lines:** Blue vertical segments (**~156px**, `#4C7FC8`) animate from 0 to full height as each `team_grid_section` approaches the viewport while scrolling — same component as About (`GrowingDottedConnector` with `variant="blue"`). About page sections still use orange dividers.
- **Typography:** Section titles use the heading font at large responsive size in **blue** (`#4C7FC8`). Names use **orange** (`#FC8F4C`); roles use **white** body text.

---

## Technical reference

- Component map: `src/lib/storyblok.ts`  
- Route: `src/app/our-team/page.tsx` (story slug `pages/our-team`)  
- UI: `src/components/team/*`, shared connector: `src/components/about/GrowingDottedConnector.tsx`
