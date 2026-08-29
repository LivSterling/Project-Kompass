# Storyblok: generic `counter_section` block

A reusable "big numbers" band: a growing dotted connector, a big themeable headline, an
optional centered paragraph, and a row of **animated counters** side by side. Each counter
**counts up rapidly from zero** when it scrolls into the viewport (Intersection Observer +
eased animation) — the same count-up behaviour as `impact_stats`, just laid out as a
horizontal row instead of a portrait-photo + vertical-stack layout.

Mapped in code (`src/lib/storyblok.ts`) and rendered by
`src/components/shared/CounterSection.tsx` and `src/components/shared/CounterItem.tsx`.

> **Background:** transparent over the global navy texture. `theme` sets the headline +
> connector color.

---

## `counter_section` (nestable block)

| Field           | Type                     | Notes                                                                       |
| --------------- | ------------------------ | ---------------------------------------------------------------------------- |
| `headline`      | Text (optional)          | Big section title, e.g. `Applicant Benefits and Requirements`.               |
| `theme`         | Single-option (optional) | `blue` (default) · `orange` · `navy` · `green`. Headline + connector color.  |
| `headline_case` | Single-option (optional) | `uppercase` (default) · `capitalize` · `normal`.                             |
| `body`          | Textarea (optional)      | Centered paragraph below the headline; ~864px max width. Line breaks preserved. |
| `counters`      | **Blocks**                | `counter_item` only. Renders as a centered, wrapping row.                    |

---

## `counter_item` (nested only — inside `counter_section.counters`)

One animated counter.

| Field    | Type                     | Notes                                                                 |
| -------- | ------------------------ | ---------------------------------------------------------------------- |
| `value`  | Number                   | Target number (e.g. `100000`, `45`). Counts up from `0`.               |
| `prefix` | Text (optional)          | Shown before the number, doesn't animate, e.g. `$`.                    |
| `suffix` | Text (optional)          | Shown after the number, doesn't animate, e.g. `%`, `+`.                |
| `label`  | Text                     | Caption below the number (e.g. `Total Amount Awarded`, `Award Recipients`). |
| `color`  | Single-option (optional) | `blue` (default) · `navy` · `orange` · `green`. Number + label color.  |

### Animation behaviour

- Animation starts once ~35% of the counter is visible.
- Duration ~1.2s with a fast ease-out (numbers ramp quickly, then settle).
- Runs once per page load (does not re-animate when scrolling back up).
- Respects `prefers-reduced-motion`: shows final values immediately with no animation.
- Numbers render with comma separators (e.g. `100,000`) via `toLocaleString()`.

---

## Jump Start preset

**Applicant Benefits and Requirements** — blue headline, eligibility body copy, two counters.

| Field      | Value                                                                   |
| ---------- | ------------------------------------------------------------------------ |
| `headline` | `Applicant Benefits and Requirements`                                   |
| `theme`    | `blue`                                                                   |
| `body`     | `The scholarship offers a $2,500 grant to individuals aged 18 and above, residing in Lowell or Lawrence (including surrounding communities). Eligibility requires a high school diploma, GED, or HISET. Exceptions may be considered for vocational and training programs without specific minimum education requirements.` |

| # | `value`   | `prefix` | `label`               | `color`  |
| - | --------- | -------- | ---------------------- | -------- |
| 1 | `100000`  | `$`      | `Total Amount Awarded` | `orange` |
| 2 | `45`      | —        | `Award Recipients`     | `green`  |

---

## vs. `impact_stats`

| Block             | Use when…                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------- |
| `counter_section` | A headline + optional body + a **row of counters**, no photo (e.g. Jump Start eligibility numbers). |
| `impact_stats`     | A portrait photo beside intro copy + a **vertical stack** of counters (e.g. Project Farm's impact). |

---

## Notes

- Allow `counter_section` on any `page` → **blocks** field; nest `counter_item` inside `counters`.
- Counters wrap responsively — works with two, three, or more `counter_item`s.
- Verify the count-up animation in the browser (not just the Storyblok preview), and confirm it
  triggers as the section scrolls into view, matching the pattern used on other non-profit sites.

---

## Technical reference

- Component map: `src/lib/storyblok.ts` (`counter_section`, `counter_item`)
- UI components: `src/components/shared/CounterSection.tsx`, `src/components/shared/CounterItem.tsx`
- Count-up hook: `src/hooks/useCountUp.ts` (shared with `impact_stat`)
- Connector: `src/components/about/GrowingDottedConnector.tsx`
