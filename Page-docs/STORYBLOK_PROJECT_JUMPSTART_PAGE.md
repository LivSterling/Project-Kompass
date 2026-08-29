# Storyblok: Project Jump Start page blocks

This page lives at the Next.js route **`/programs/jump-start`** and loads the Storyblok story
**`pages/jump-start`**. Create that story (Content type **`page`**) and add the blocks below to
its **`blocks`** field.

> **Visual Editor:** set the story **Real path** to `/programs/jump-start` so Storyblok previews
> the correct URL (not `/pages/jump-start`, which 404s).

Navigation, the footer, and the global page background come from the Next.js layout — you do
**not** need blocks for them. The footer already links here (**Programs → Project Jump Start**).

> **Background:** identical to the other program pages. The hero sits on the tan **brown-paper**
> texture; every section below is transparent over the global navy texture.
>
> **Dotted lines:** each section below the hero starts with a **growing vertical dotted
> connector** (blue `#4C7FC8`) that animates from 0 → full height (~156px) as it scrolls into
> view — same component/behaviour as the other pages (`GrowingDottedConnector`).

Figma reference: [Project Jump Start frame](https://www.figma.com/design/g9FQGi2D4i666yOTHne4py/PK-layout-New?node-id=1115-1566) in **PK-layout-New**.

---

## Two new/updated blocks used on this page

1. **`intro_section` was updated** with a new optional `title` field (small heading above the
   body copy) — see **`STORYBLOK_INTRO_SECTION_BLOCK.md`**. This lets the same block cover both
   the scholarship intro *and* the enrollment-status band, since they share one layout.
2. **`counter_section` is brand new** — a headline + body + a row of numbers that **count up
   rapidly from zero** as they scroll into view, e.g. `$100,000` and `45`. See
   **`STORYBLOK_COUNTER_SECTION_BLOCK.md`**.

Everything else on the page reuses the existing generic block library.

---

## Blocks to use

### 1. `page_hero` (generic)

Tan paper hero: compass + **Empowering Brighter Futures Through Vocational and Higher
Education.** with colored highlight bars, no eyebrow. Full field reference in
**`STORYBLOK_PAGE_HERO_BLOCK.md`**. Configure `lines` → three `hero_line`s with these
`hero_segment`s:

| Line | `text`                 | `bar_color` |
| ---- | ---------------------- | ----------- |
| 1    | `Empowering`           | `orange`    |
| 1    | ` ` (space)            | `none`      |
| 1    | `Brighter`             | `blue`      |
| 2    | `Futures`              | `navy`      |
| 2    | ` Through Vocational`  | `none`      |
| 3    | `and Higher `          | `none`      |
| 3    | `Education`            | `green`     |
| 3    | `.`                    | `none`      |

---

### 2. `intro_section` (generic — with new `title` field)

**"What is the Jump Start Scholarship?"** — mini blue heading, centered intro copy, orange
**Apply Now** button. Full field reference in **`STORYBLOK_INTRO_SECTION_BLOCK.md`**. Configure:

| Field          | Value                                    |
| -------------- | ----------------------------------------- |
| `title`        | `What is the Jump Start Scholarship?`     |
| `theme`        | `blue`                                    |
| `button_color` | `orange`                                  |
| `button_label` | `Apply Now`                               |
| `button_link`  | `/contact`                                |
| `body`         | See Figma copy below                      |

**Suggested `body` (from Figma):**

> Together with the Aldrich Family Charitable Foundation and the Greater Lowell Community Foundation, we have created the JumpStart scholarship which provides funding to students who have faced challenges and adversities in their lives and who desire a brighter future by continuing their education through a vocational training program, certificate program, community college, or four-year college/university.
>
> The Jump Start Scholarship is offered every Spring and Fall; watch for details.
>
> This program was established in the Fall of 2023 – to date we have awarded $110,000 to 45 recipients.

---

### 3. `counter_section` (new — animated counters)

**Applicant Benefits and Requirements** — blue headline, eligibility copy, two counters that
count up from zero on scroll. Full field reference in **`STORYBLOK_COUNTER_SECTION_BLOCK.md`**.
Configure:

| Field      | Value                                  |
| ---------- | ---------------------------------------- |
| `headline` | `Applicant Benefits and Requirements`   |
| `theme`    | `blue`                                  |
| `body`     | See Figma copy below                    |
| `counters` | 2× `counter_item` (table below)         |

**Suggested `body` (from Figma):**

> The scholarship offers a $2,500 grant to individuals aged 18 and above, residing in Lowell or Lawrence (including surrounding communities). Eligibility requires a high school diploma, GED, or HISET. Exceptions may be considered for vocational and training programs without specific minimum education requirements.

| # | `value`  | `prefix` | `label`                 | `color`  |
| - | -------- | -------- | ------------------------ | -------- |
| 1 | `100000` | `$`      | `Total Amount Awarded`  | `orange` |
| 2 | `45`     | —        | `Award Recipients`      | `green`  |

---

### 4. `content_section` (generic — split layout)

**Supporting the Journey** — blue headline, body copy left, testimonial graphic right. Full
field reference in **`STORYBLOK_CONTENT_SECTION_BLOCK.md`**. Configure:

| Field            | Value                       |
| ---------------- | ---------------------------- |
| `headline`       | `Supporting the Journey`    |
| `theme`          | `blue`                       |
| `headline_case`  | `uppercase`                  |
| `image_position` | `right`                      |
| `image`          | Testimonial graphic (~507×425) |
| `body`           | See Figma copy below         |

**Suggested `body` (from Figma):**

> Project JumpStart prioritizes students of all ages who have faced life challenges, such as housing instability, trauma, foster care transition, or limited support networks, and supports them throughout their educational journey, allowing individuals to apply multiple times as we believe in walking alongside students through the completion of their training, certification, or schooling.

---

### 5. `intro_section` (generic — second instance, with `title`, no button/image)

**"JumpStart Enrollment Currently Closed"** — same block as #2, just without a button or image,
since it's the same mini-heading-over-centered-copy layout. Configure:

| Field    | Value                                     |
| -------- | ------------------------------------------ |
| `title`  | `JumpStart Enrollment Currently Closed`    |
| `theme`  | `blue`                                     |
| `body`   | See Figma copy below                       |

**Suggested `body` (from Figma):**

> The JumpStart Spring 2026 application process will open early April.
>
> Please follow us on Facebook and Instagram for updates.

Leave `button_label` and `image` empty for this instance.

---

### 6. `faq` (generic — use `theme: blue`)

**FAQ** accordion with blue heading + connectors. Full field reference in
**`STORYBLOK_FAQ_BLOCK.md`**. Configure:

| Field                   | Value    |
| ----------------------- | -------- |
| `headline`              | `FAQ`    |
| `theme`                 | `blue`   |
| `show_bottom_connector` | `false`  |
| `default_item_accent`   | `blue`   |
| `items`                 | `faq_item` rows below |

> **Note:** The Figma frame still shows PKCC placeholder FAQ copy (shared across several program
> pages while final content is being written). Replace with Jump Start–specific
> questions/answers when ready.

**Suggested items (from Figma — update copy for Jump Start):**

| `question` | `accent_color` | `default_open` | `answer` |
| ---------- | -------------- | -------------- | -------- |
| Who can access the PKCC? | navy | ✅ true | The PKCC is open to everyone in the community… *(replace)* |
| Do I need an appointment to receive services? | blue | false | — |
| How do food, clothing, and essential items work at the PKCC? | blue | false | — |
| Are there expectations for behavior while at the PKCC? | blue | false | — |
| Are there other services offered at the PKCC? | blue | false | — |
| How do I get in touch with the PKCC? | orange | ✅ true | Contact block — Visit Us / Call Us / Email Us details |

---

### 7. `donate_banner` (generic)

Photo band + **Donate Today** CTA before the footer. Full field reference in
**`STORYBLOK_DONATE_BANNER_BLOCK.md`**. Configure:

| Field                   | Value                                       |
| ----------------------- | -------------------------------------------- |
| `headline`              | `Transforming Lives, One Donation at a Time` |
| `theme`                 | `blue`                                       |
| `show_bottom_connector` | `true`                                       |
| `button_link`           | `/donate`                                    |
| `background_image`      | Group/community photo in a field (~1048×518) |

---

## Recommended order in `page.blocks`

1. `page_hero`
2. `intro_section` (title: "What is the Jump Start Scholarship?" + Apply Now + no image)
3. `counter_section` (Applicant Benefits and Requirements — $100,000 / 45)
4. `content_section` (`image_position: right` — Supporting the Journey)
5. `intro_section` (title: "JumpStart Enrollment Currently Closed" — no button/image)
6. `faq` (`theme: blue`)
7. `donate_banner`

---

## Visual / interaction notes (for editors)

- **Headings** use blue `#4C7FC8`, uppercase, Black Han Sans (except the two mini `intro_section`
  titles, which are smaller but the same blue/Black Han Sans style).
- **Counters** animate from 0 when scrolled into view, like the impact numbers on other program
  pages — verify in the browser, not only in Storyblok preview.
- **Hero highlight bars:** orange → blue (line 1, "Empowering Brighter"), navy (line 2,
  "Futures"), green (line 3, "Education").
- **Donate banner** uses a **blue** `#4C7FC8` button.
- **Images:** hero uses the shared compass logo; testimonial graphic ≈ 507×425; donate band ≈ 1048×518.

---

## Technical reference

- Component map: `src/lib/storyblok.ts`
- Route: `src/app/programs/jump-start/page.tsx`
- Mini-title intro band: `src/components/shared/IntroSection.tsx`
- Animated counters: `src/components/shared/CounterSection.tsx`, `CounterItem.tsx`,
  `src/hooks/useCountUp.ts`
- Split content section: `src/components/shared/ContentSection.tsx`
- Donate band: `src/components/shared/DonateBanner.tsx`
- Connectors: `src/components/about/GrowingDottedConnector.tsx`
