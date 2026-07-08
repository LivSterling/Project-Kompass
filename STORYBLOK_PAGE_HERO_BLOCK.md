# Storyblok: generic `page_hero` block

A single reusable tan-paper hero that works on **every** interior page. It replaces the
page-specific `about_hero`, `team_hero`, `housing_hero`, `community_hero`, and
`programs_hero` blocks.

Mapped in code (`src/lib/storyblok.ts`) and rendered by
`src/components/shared/PageHero.tsx`.

> **Background:** the hero always sits on the tan **brown-paper** texture
> (`/img/figma/brown-paper.jpg`). The rest of the page stays transparent over the global
> navy texture, exactly like the old per-page heroes.

---

## `page_hero` (nestable block)

Compass logo + a title made of one or more **lines**, where each line is made of one or
more **segments**. A segment is either plain text or text on a colored highlight bar. This
is what lets one block reproduce every page's title (mid-sentence highlights, full-line
bars, plain + highlighted mixes, etc.).

| Field             | Type                     | Notes                                                                       |
| ----------------- | ------------------------ | --------------------------------------------------------------------------- |
| `compass_image`   | Asset (optional)         | Defaults to `/img/logo compass.png` if empty.                               |
| `eyebrow`         | Text (optional)          | Small line above the title (e.g. About's "Who are we?").                     |
| `show_decorations`| Boolean (optional)       | Dotted path + map "X" on the right (desktop). Defaults to **on**.            |
| `lines`           | **Blocks**               | `hero_line` only. Each becomes one line of the title.                        |

---

## `hero_line` (nested only — inside `page_hero.lines`)

One line of the title.

| Field      | Type       | Notes                                            |
| ---------- | ---------- | ------------------------------------------------ |
| `segments` | **Blocks** | `hero_segment` only. Rendered inline, in order.  |

---

## `hero_segment` (nested only — inside `hero_line.segments`)

One run of text. Colored phrases = one segment each; plain runs (including the spaces
between colored phrases) = one segment with `bar_color: none`.

| Field       | Type                     | Notes                                                                    |
| ----------- | ------------------------ | ------------------------------------------------------------------------ |
| `text`      | Text                     | Include leading/trailing spaces on **plain** segments so words don't touch. |
| `bar_color` | Single-option (optional) | `none` (default) · `green` · `blue` · `navy` · `orange`.                  |

> **Tip:** put spaces on the `none` segments, not on the colored ones — a trailing space
> inside a colored bar shows as an extra colored block.

---

## Per-page presets

Recreate the existing heroes with `page_hero` like this (each row of "segments" is one
`hero_line`):

### About (`about_hero`)

- `eyebrow`: `Who are we?`
- Line 1: `We are ` (none) · `Project` (green) · ` ` (none) · `Kompass` (navy)

### Our Team (`team_hero`)

- Line 1: `Our ` (none) · `Team` (green)

### Transitional Housing (`housing_hero`)

- Line 1: `Transitional Housing.` (green)
- Line 2: `Enduring Support.` (blue)

### Community Center (`community_hero`)

- Line 1: `Community` (navy) · ` ` (none) · `Support.` (orange)
- Line 2: `Built for Real ` (none) · `Life.` (blue)

### Programs (`programs_hero`)

- Line 1: `Support` (green) · ` That ` (none) · `Meets` (orange) · ` People` (none)
- Line 2: `Where` (blue) · ` They ` (none) · `Are.` (none)

---

## Notes

- Old heroes (`about_hero`, `team_hero`, `housing_hero`, `community_hero`, `programs_hero`)
  are still mapped in code, so existing published stories keep rendering. Migrate each page
  to `page_hero` when convenient, then the old blocks/components can be removed.
- Allow `page_hero` on the `page` → **blocks** field so any page can use it.
