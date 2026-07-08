# Storyblok: Our Programs page blocks

This page lives at the Next.js route `/programs` and loads the Storyblok story **`pages/programs`**. Create that story (Content type **`page`**) and add the blocks below to its **`blocks`** field.

All of these block types are already mapped in code (`src/lib/storyblok.ts`) and rendered by components in `src/components/programs/`. Navigation, the footer, and the global page background come from the Next.js layout — you do **not** need blocks for them.

> **Background:** identical to the other pages. The hero sits on the tan **brown-paper** texture; every section below it is transparent over the global navy texture (`/img/bg.png`). The program cards each use the brown-paper texture.
>
> **Dotted lines:** the "Our Programs" and "Stay Connected" sections each begin with a **growing vertical dotted connector** (green `#82A969`) that animates from 0 → full height (~156px) as it scrolls into view — same component/behaviour as the About page. A final connector trails into the footer.
>
> **Brand colors:** green `#82A969` · orange `#FC8F4C` · blue `#4C7FC8` · navy `#345789` · dark navy `#252B42`.

---

## Blocks to create

### 1. `page_hero` (generic — replaces the old `programs_hero`)

Tan paper hero: compass logo + a two-line title where specific phrases sit on colored
highlight bars. Full field reference in **`STORYBLOK_PAGE_HERO_BLOCK.md`**. Configure
`lines` → two `hero_line`s with these `hero_segment`s:

| Line | `text`     | `bar_color` |
| ---- | ---------- | ----------- |
| 1    | `Support`  | `green`     |
| 1    | ` That `   | `none`      |
| 1    | `Meets`    | `orange`    |
| 1    | ` People`  | `none`      |
| 2    | `Where`    | `blue`      |
| 2    | ` They Are.` | `none`    |

---

### 2. `intro_section` (generic — replaces the old `programs_intro`)

Centered intro paragraph → blue **Contact us** button → wide intro photo. Full field
reference in **`STORYBLOK_INTRO_SECTION_BLOCK.md`**. Configure:

| Field          | Value        |
| -------------- | ------------ |
| `button_color` | `blue`       |
| `button_label` | `Contact us` |
| `image_ratio`  | `963/450`    |
| `body`         | Intro copy   |

---

### 3. `list_section` (generic — replaces `programs_list` + `program_item`)

"OUR PROGRAMS" headline (green, uppercase) + the expandable program cards. Full field
reference in **`STORYBLOK_LIST_SECTION_BLOCK.md`**. Configure:

| Field        | Value                  |
| ------------ | ---------------------- |
| `headline`   | `Our Programs`         |
| `theme`      | `green`                |
| `list_style` | `accordion`            |
| `items`      | 4× `list_item` (below) |

Each `list_item` (accordion) shows a brown-paper bar with a circle arrow; when open, a
colored bar appears behind the title and the body + a blue CTA are revealed. Colors
auto-cycle orange → green → blue → navy unless you set `accent_color`. **Add 4 instances**
to match the Figma layout:

| # | `title`       | `accent_color` (auto) | `default_open` | `body` |
| - | ------------- | --------------------- | -------------- | ------ |
| 1 | Housing       | orange                | ✅ true        | Through safe transitional housing and the Project Kompass Community Center, we provide adaptable, person-centered support that responds to real-time needs. By walking alongside individuals and families, and in partnership with trusted community organizations, we address immediate challenges such as housing instability, food insecurity, and access to essential resources, while building pathways toward long-term stability, dignity, and independence. |
| 2 | PKCC          | green                 | false          | — (Project Kompass Community Center description) |
| 3 | Project Farm  | blue                  | false          | — |
| 4 | Jump Start    | navy                  | false          | — |

---

### 5. `newsletter_section` (generic — replaces the old `programs_newsletter`)

"STAY CONNECTED" headline (green) + subtitle + an email signup (gray input + orange
**Submit** button), with a connector above **and** below. Full field reference in
**`STORYBLOK_NEWSLETTER_SECTION_BLOCK.md`**. Configure:

| Field          | Value    |
| -------------- | -------- |
| `theme`        | `green`  |
| `button_color` | `orange` |
| `headline`     | `Stay Connected` (default) |
| `action_url`   | Your POST endpoint (optional) |

---

## Recommended order in `page.blocks`

1. `page_hero` (generic)
2. `intro_section` (generic — intro text + Contact us button + photo)
3. `list_section` (generic — `list_style: accordion`, with 4× `list_item`)
4. `newsletter_section` (generic)

> **Migration note:** the old `programs_hero`, `programs_intro`, `programs_list`,
> `program_item`, and `programs_newsletter` blocks are still mapped in code, so existing
> content keeps rendering until you re-author with the generic blocks.

---

## Visual / interaction notes (for editors)

- **Headings** ("Our Programs", "Stay Connected") use the green `#82A969` brand color, uppercase, Black Han Sans.
- **Program cards** are a real accordion: click to expand/collapse. Use `default_open` to pre-open the card shown open in the design (Housing). When open, the title gets a colored bar and the arrow rotates from → to ↓.
- **Accent colors** auto-cycle orange → green → blue → navy. Override per card with `accent_color`.
- **Images** are placeholders by default — drop your own assets into each `image` field. Intro photo aspect ≈ 963×450 (landscape).
- **Dotted connectors** are built into the `programs_list` and `programs_newsletter` sections; no separate divider block is required.

---

## Technical reference

- Component map: `src/lib/storyblok.ts`
- UI components: `src/components/programs/*`
- Route: `src/app/programs/page.tsx`
- Scroll animation: GSAP `ScrollTrigger` in `src/components/about/GrowingDottedConnector.tsx` (now supports a `green` variant)
