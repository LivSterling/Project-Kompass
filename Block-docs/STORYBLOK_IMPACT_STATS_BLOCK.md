# Storyblok: generic `impact_stats` block

A reusable “big numbers” impact section with a growing dotted connector above, an optional
portrait photo on the left, intro copy, and **three (or more) animated stat counters** on the
right. Each stat **counts up rapidly from zero** when it scrolls into the viewport
(Intersection Observer + eased animation).

Mapped in code (`src/lib/storyblok.ts`) and rendered by
`src/components/shared/ImpactStatsSection.tsx` and
`src/components/shared/ImpactStatItem.tsx`.

> **Background:** transparent over the global navy texture. `theme` sets the heading +
> connector color.

---

## `impact_stats` (nestable block)

| Field     | Type                     | Notes                                                                 |
| --------- | ------------------------ | --------------------------------------------------------------------- |
| `headline`| Text (optional)          | Default: `Project Farm's Positive Impact`                             |
| `intro`   | Textarea (optional)      | Short paragraph beside the stats (~510px). Line breaks preserved.     |
| `theme`   | Single-option (optional) | `green` (default) · `orange` · `navy` · `blue`. Heading + connector.   |
| `image`   | Asset (optional)         | Portrait on the left (~512×683). Placeholder if empty.                |
| `stats`   | **Blocks**               | `impact_stat` only. Preferred field name. (`body` also accepted.)     |

---

## `impact_stat` (nested only — inside `impact_stats.stats`)

One animated counter row.

| Field   | Type                     | Notes                                                          |
| ------- | ------------------------ | -------------------------------------------------------------- |
| `value` | Number                   | Target number (e.g. `86`, `887`, `18`). Counts up from `0`.    |
| `label` | Text                     | Caption below the number (e.g. `Groups`, `Visitors`).          |
| `color` | Single-option (optional) | `navy` · `orange` · `blue` · `green`. Number + label color.    |

### Animation behaviour

- Animation starts once ~35% of the stat row is visible.
- Duration ~1.2s with a fast ease-out (numbers ramp quickly, then settle).
- Runs once per page load (does not re-animate when scrolling back up).
- Respects `prefers-reduced-motion`: shows final values immediately with no animation.

---

## Project Farm preset

| # | `value` | `label`                 | `color`  |
| - | ------- | ----------------------- | -------- |
| 1 | `86`    | `Groups`                | `navy`   |
| 2 | `887`   | `Visitors`              | `orange` |
| 3 | `18`    | `Organizations served`  | `blue`   |

**Suggested `intro`:**
> Project Farm creates space to slow down, reconnect, and experience calm through nature and hands-on interaction with animals, offering meaningful moments of presence, reflection, and connection.

---

## Notes

- Allow `impact_stats` on any `page` → **blocks** field; nest `impact_stat` inside `stats`.
- Reuse on other program pages by duplicating the section and changing values/copy.
