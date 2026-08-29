# Storyblok: Transitional Housing page blocks

This page lives at the Next.js route `/transitional-housing` and loads the Storyblok story **`pages/transitional-housing`**. Create that story (Content type **`page`**) and add the blocks below to its **`blocks`** field.

All of these block types are already mapped in code (`src/lib/storyblok.ts`) and rendered by components in `src/components/housing/`. Navigation, the footer, and the global page background come from the Next.js layout — you do **not** need blocks for them.

> **Background:** identical to the other pages (fixed `body` texture from `globals.css`). The hero sits on the tan **brown-paper** texture, every other section is transparent over the global navy texture.
>
> **Dotted lines:** every section below the intro starts with a **growing vertical dotted connector** (navy `#345789`) that animates from 0 → full height (~156px) as it scrolls into view — same component/behaviour as the About page.

---

## Blocks to create

### 1. `page_hero` (generic — replaces the old `housing_hero`)

Tan paper hero: compass logo + two-line title with colored highlight bars. Full field
reference in **`STORYBLOK_PAGE_HERO_BLOCK.md`**. Configure `lines` → two `hero_line`s, each
with a single full-line `hero_segment`:

| Line | `text`                  | `bar_color` |
| ---- | ----------------------- | ----------- |
| 1    | `Transitional Housing.` | `green`     |
| 2    | `Enduring Support.`     | `blue`      |

---

### 2. `intro_section` (generic — replaces the old `housing_intro`)

Centered intro paragraph → green **Submit a Referral** button → wide intro photo. Full
field reference in **`STORYBLOK_INTRO_SECTION_BLOCK.md`**. Configure:

| Field          | Value               |
| -------------- | ------------------- |
| `button_color` | `green`             |
| `button_label` | `Submit a Referral` |
| `image_ratio`  | `967/533`           |
| `body`         | Intro copy          |

---

### 3. `content_section` (generic — replaces the old `housing_eligibility`)

“PROGRAM ELIGIBILITY” heading (navy, uppercase) + centered body. Full field reference in
**`STORYBLOK_CONTENT_SECTION_BLOCK.md`**. Configure:

| Field           | Value                |
| --------------- | -------------------- |
| `headline`      | `Program Eligibility`|
| `theme`         | `navy`               |
| `headline_case` | `uppercase`          |
| `body_align`    | `center`             |
| `body`          | Eligibility copy     |

---

### 4. `list_section` (generic — replaces `housing_expectations` + `housing_requirement`)

“EXPECTATIONS & GUIDELINES” heading + a numbered requirements list (left) and a portrait
photo (right). Full field reference in **`STORYBLOK_LIST_SECTION_BLOCK.md`**. Configure:

| Field           | Value                       |
| --------------- | --------------------------- |
| `headline`      | `Expectations & Guidelines` |
| `theme`         | `navy`                      |
| `list_style`    | `numbered`                  |
| `image`         | Portrait ~511×681 crop      |
| `items`         | 8× `list_item` (below)      |

Each `list_item` auto-numbers (1, 2, 3 …) and auto-colors orange → blue → green → navy
unless you set `accent_color`. **Add 8 instances** to match the Figma layout:

| # | `title`           | `body` |
| - | ----------------- | ------ |
| 1 | Commitment        | Commitment to goal setting and accountability |
| 2 | Education         | Residents must be working and/or enrolled in school for a minimum of 32 hours per week |
| 3 | Finances          | Participation in a mandatory financial literacy and savings programs is required to support long-term financial stability |
| 4 | Life Skills       | Participation in activities, life-skills training and assigned workshops is required |
| 5 | House Duties      | Each resident is responsible for maintaining a clean and organized private room and participating in daily and weekly household chores |
| 6 | Community Service | Give back to the community by donating a minimum of 3-5 hours to service quarterly |
| 7 | Accountability    | Weekly meetings with on-site case manager and commitment to set goals |
| 8 | Community Respect | Residents are expected to show kindness, respect, and accountability toward peers, staff, and shared spaces |

---

### 6. `faq` (generic block — use `theme: navy`)

“FAQ” heading + an interactive accordion. Dotted connector above. This is the shared
`faq` block documented in **`STORYBLOK_FAQ_BLOCK.md`** — configure it for this page as:

| Field                   | Value  | Notes |
| ----------------------- | ------ | ----- |
| `headline`              | `FAQ`  | Default is fine |
| `theme`                 | `navy` | Navy heading + navy connector to match this page |
| `show_bottom_connector` | false  | No trailing connector needed here |
| `default_item_accent`   | `green`| Rows default to green unless overridden |
| `items`                 | `faq_item` blocks | See suggested rows below |

Nested rows use the generic **`faq_item`** block (`question`, `answer`, `accent_color`
of `green`/`blue` for this page, `default_open`). Full field reference is in
`STORYBLOK_FAQ_BLOCK.md`.

**Suggested items (from Figma):**

| `question` | `accent_color` | `default_open` | `answer` |
| ---------- | -------------- | -------------- | -------- |
| Who is eligible for the program? | green | ✅ true | Project Kompass accommodates young women and new moms with babies ages 18-24. Prospective residents could be homeless, or housing insecure. |
| Is this just another shelter? | green | false | — |
| I don't have a job but am homeless. Would that disqualify me? | green | false | — |
| I'm 21+ and I smoke, is that okay? | green | false | — |
| What is the cost of being a participant in the program? | green | false | — |
| How is Project Kompass funded? | blue | ✅ true | Project Kompass is a 501c3 non-profit organization and does not request funding from state or federal sources. Instead, Project Kompass is solely funded by generous donors, grants, and sponsors throughout the Greater Lowell area and beyond. |
| This sounds great, so what's the catch? | green | false | — |
| If I am ineligible for the program, can Project Kompass still help? | green | false | — |
| I'd like to be a part of the PK family, where can I learn more? | green | false | — |
| How do I make a referral? | green | false | — |

> Fill in the remaining answers as content becomes available — the row still opens/closes even with an empty answer.

---

## Recommended order in `page.blocks`

1. `page_hero` (generic)
2. `intro_section` (generic — intro text + referral button + photo)
3. `content_section` (generic — Program Eligibility)
4. `list_section` (generic — `list_style: numbered`, with 8× `list_item`)
5. `faq` (`theme: navy`, with `faq_item` rows)

> **Migration note:** the old `housing_hero`, `housing_intro`, `housing_eligibility`,
> `housing_expectations`, and `housing_requirement` blocks are still mapped in code, so
> existing content keeps rendering until you re-author with the generic blocks.

---

## Visual / interaction notes (for editors)

- **Headings** (Program Eligibility, Expectations & Guidelines, FAQ) use the navy `#345789` brand color, uppercase, Black Han Sans.
- **Numbered guidelines** auto-number and auto-color (orange → blue → green → navy, repeating). Override per item with the `color` field if needed.
- **FAQ** rows are a real accordion: click to expand/collapse. Use `default_open` to pre-open the colored rows shown in the design.
- **Images** are placeholders by default — drop your own assets into each `image` field. Aspect ratios: intro photo ≈ 967×533 (landscape), expectations photo ≈ 511×681 (portrait).
- **Dotted connectors** are built into each section (Eligibility, Expectations, FAQ); no separate divider block is required.

---

## Technical reference

- Component map: `src/lib/storyblok.ts`
- UI components: `src/components/housing/*`
- Route: `src/app/transitional-housing/page.tsx`
- Scroll animation: GSAP `ScrollTrigger` in `src/components/about/GrowingDottedConnector.tsx` (now supports a `navy` variant)
