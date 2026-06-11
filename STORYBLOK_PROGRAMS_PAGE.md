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

### 1. `programs_hero`

Tan paper hero: compass logo + a two-line title where specific phrases sit on colored highlight bars (Figma: **Support** on green, **Meets People** on orange, **Where** on blue). Decorative dotted path + map "X" float on the right (desktop only).

| Field             | Type             | Notes |
| ----------------- | ---------------- | ----- |
| `compass_image`   | Asset (optional) | Defaults to `/img/logo compass.png` |
| `title`           | Textarea (optional) | Default: `Support That Meets People` + newline + `Where They Are.` Use a real line break to split the two lines. |
| `highlight_green` | Text (optional)  | Phrase to highlight green. Default: `Support` |
| `highlight_orange`| Text (optional)  | Phrase to highlight orange. Default: `Meets` |
| `highlight_blue`  | Text (optional)  | Phrase to highlight blue. Default: `Are` |

> The highlight phrases must appear **verbatim** inside `title` to render a colored bar. Leave any highlight blank to skip that color.

---

### 2. `programs_intro`

Centered white intro paragraph → blue **Contact us** button → wide intro photo.

| Field          | Type              | Notes |
| -------------- | ----------------- | ----- |
| `body`         | Textarea          | Centered, max ~864px. Line breaks preserved. Has a sensible default if left blank. |
| `button_label` | Text (optional)   | Default: `Contact us` |
| `button_link`  | Link (optional)   | Default: `/contact` |
| `image`        | Asset (optional)  | Wide ~963×450 crop. Shows a placeholder box if empty. |

---

### 3. `programs_list`

"OUR PROGRAMS" headline (green `#82A969`, uppercase, Black Han Sans) + the four expandable program cards. Includes the growing green dotted connector above.

| Field      | Type            | Allowed nested | Notes |
| ---------- | --------------- | -------------- | ----- |
| `headline` | Text (optional) | —              | Default: `Our Programs` |
| `items`    | **Blocks**      | `program_item` only | Preferred field name. (`body` also accepted as a fallback name.) |

---

### 4. `program_item` (nested only — inside `programs_list.items`)

One expandable program card. **Collapsed** = brown-paper bar, title + a right-pointing circle arrow. **Open** = the arrow rotates to point **down**, a colored highlight bar (one of the four brand colors) appears behind the title, and the body text + a blue **Learn More** button are revealed. Clicking the row toggles it open/closed.

| Field          | Type             | Notes |
| -------------- | ---------------- | ----- |
| `title`        | Text             | e.g. `Housing`, `PKCC`, `Project Farm`, `Jump Start` |
| `body`         | Textarea         | Shown when open; max ~864px, line breaks preserved. |
| `button_label` | Text (optional)  | Default: `Learn More` |
| `button_link`  | Link (optional)  | Default: `/programs` |
| `accent_color` | Single-option (optional) | Open-state bar color: `orange` · `green` · `blue` · `navy`. If left blank it **auto-cycles** orange → green → blue → navy by position. |
| `default_open` | Boolean (optional) | Start expanded (Figma opens **Housing** by default). |

**Add 4 instances** to match the Figma layout:

| # | `title`       | `accent_color` (auto) | `default_open` | `body` |
| - | ------------- | --------------------- | -------------- | ------ |
| 1 | Housing       | orange                | ✅ true        | Through safe transitional housing and the Project Kompass Community Center, we provide adaptable, person-centered support that responds to real-time needs. By walking alongside individuals and families, and in partnership with trusted community organizations, we address immediate challenges such as housing instability, food insecurity, and access to essential resources, while building pathways toward long-term stability, dignity, and independence. |
| 2 | PKCC          | green                 | false          | — (Project Kompass Community Center description) |
| 3 | Project Farm  | blue                  | false          | — |
| 4 | Jump Start    | navy                  | false          | — |

---

### 5. `programs_newsletter`

"STAY CONNECTED" headline (green) + subtitle + an email signup (gray input + orange **Submit** button). Includes a green dotted connector above **and** a trailing connector into the footer.

| Field          | Type            | Notes |
| -------------- | --------------- | ----- |
| `headline`     | Text (optional) | Default: `Stay Connected` |
| `subtitle`     | Text (optional) | Default: `Join Our Mailing List for Updates and Stories of Transformation` |
| `placeholder`  | Text (optional) | Input placeholder. Default: `Email Address` |
| `button_label` | Text (optional) | Default: `Submit` |
| `action_url`   | Text (optional) | If set, the form POSTs the `email` field to this URL (e.g. a Mailchimp/Brevo endpoint). If blank, it shows a local "Thanks for subscribing!" confirmation. |

---

## Recommended order in `page.blocks`

1. `programs_hero`
2. `programs_intro` (intro text + Contact us button + photo)
3. `programs_list` (with 4× `program_item`)
4. `programs_newsletter`

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
