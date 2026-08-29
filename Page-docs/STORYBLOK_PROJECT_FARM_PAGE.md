# Storyblok: Project Farm page blocks

This page lives at the Next.js route **`/programs/project-farm`** and loads the Storyblok
story **`pages/project-farm`**. Create that story (Content type **`page`**) and add the blocks
below to its **`blocks`** field.

> **Visual Editor:** set the story **Real path** to `/programs/project-farm` so Storyblok
> previews the correct URL (not `/pages/project-farm`, which 404s).

Navigation, the footer, and the global page background come from the Next.js layout — you do
**not** need blocks for them.

> **Background:** identical to the other program pages. The hero sits on the tan
> **brown-paper** texture; every section below is transparent over the global navy texture.
>
> **Dotted lines:** each section below the intro starts with a **growing vertical dotted
> connector** (green `#82A969`) that animates from 0 → full height (~156px) as it scrolls into
> view — same component/behaviour as the other pages (`GrowingDottedConnector`).

Figma reference: [Project Farm frame](https://www.figma.com/design/g9FQGi2D4i666yOTHne4py/PK-layout-New?node-id=1111-1950) in **PK-layout-New**.

---

## Blocks to use

Most of this page reuses the **generic block library**. Only **`impact_stats`** and
**`donate_banner`** are Project Farm–specific (but both are reusable on other pages).

### 1. `page_hero` (generic)

Tan paper hero: compass + **Connection, Nature, and Community** with colored highlight bars.
Full field reference in **`STORYBLOK_PAGE_HERO_BLOCK.md`**. Configure `lines` → two
`hero_line`s with these `hero_segment`s:

| Line | `text`            | `bar_color` |
| ---- | ----------------- | ----------- |
| 1    | `Connection, `     | `green`     |
| 1    | `Nature,`         | `blue`      |
| 2    | `and `            | `none`      |
| 2    | `Community`       | `orange`    |

---

### 2. `intro_section` (generic)

Centered intro copy → orange **Apply Now** button → wide farm photo. Full field reference in
**`STORYBLOK_INTRO_SECTION_BLOCK.md`**. Configure:

| Field          | Value        |
| -------------- | ------------ |
| `button_color` | `orange`     |
| `button_label` | `Apply Now`  |
| `button_link`  | `/contact`   |
| `image_ratio`  | `991/606`    |
| `body`         | See Figma copy below |

**Suggested `body` (from Figma):**

> Project Farm is a hands-on, nature-based program developed in partnership with Hidden Pond Farm & Stables, located in Derry, New Hampshire—just 25 minutes from the Greater Lowell and Lawrence areas. The farm itself is set on 40 acres, featuring open fields, animal paddocks, a large barn, and multiple outbuildings, and is surrounded by an additional 100+ acres of wooded hiking trails, offering expansive space for exploration, movement, and reflection. The property is home to horses, pigs, chickens, and alpacas, providing meaningful, hands-on opportunities to engage with animals and the natural world.
>
> After welcoming more than 850 visitors, Project Farm has proven to be a powerful space for connection, grounding, and shared experience. These moments have reinforced the important role that nature, animals, and open space can play in supporting well-being, learning, and personal growth. Looking ahead, we envision Project Farm continuing to evolve into a dynamic and enriching program, with plans to thoughtfully explore additional activities, seasonal experiences, and events. As we plan for 2026 and beyond, we are excited about the potential to deepen the program's impact and expand the ways individuals and families can connect, recharge, and grow through Project Farm.

---

### 3. `impact_stats` (unique — animated counters)

**Project Farm's Positive Impact** — portrait photo left, intro + three counting stats right.
Full field reference in **`STORYBLOK_IMPACT_STATS_BLOCK.md`**. Configure:

| Field     | Value                              |
| --------- | ---------------------------------- |
| `headline`| `Project Farm's Positive Impact`   |
| `theme`   | `green`                            |
| `image`   | Portrait (~512×683)                |
| `intro`   | See impact stats doc               |
| `stats`   | 3× `impact_stat` (table below)     |

| # | `value` | `label`                | `color`  |
| - | ------- | ---------------------- | -------- |
| 1 | `86`    | `Groups`               | `navy`   |
| 2 | `887`   | `Visitors`             | `orange` |
| 3 | `18`    | `Organizations served` | `blue`   |

---

### 4. `content_section` (generic — split layout)

**What Project Farm Offers** — green headline, body copy left, pig photo right. Full field
reference in **`STORYBLOK_CONTENT_SECTION_BLOCK.md`**. Configure:

| Field            | Value                      |
| ---------------- | -------------------------- |
| `headline`       | `What Project Farm Offers` |
| `theme`          | `green`                    |
| `headline_case`  | `uppercase`                |
| `body_align`     | `left`                     |
| `image_position` | `right`                    |
| `image`          | Pig photo (~509×501)       |
| `body`           | See Figma copy below       |

**Suggested `body` (from Figma):**

> The farm program offers hands-on opportunities to connect with and care for livestock, including alpacas and horses, in a calm, natural setting. Many of the animals at Project Farm have been rescued from local shelters and farms, adding to the sense of purpose and mutual care that defines the experience.
>
> Through interaction with animals and time spent outdoors, participants often experience reduced stress, improved mood, and a deeper sense of connection. These experiences encourage learning, movement, communication, and confidence—supporting emotional well-being, personal growth, and meaningful social interaction in an environment rooted in patience, trust, and presence.

---

### 5. `faq` (generic — use `theme: green`)

**FAQ** accordion with green heading + connectors. Full field reference in
**`STORYBLOK_FAQ_BLOCK.md`**. Configure:

| Field                   | Value    |
| ----------------------- | -------- |
| `headline`              | `FAQ`    |
| `theme`                 | `green`  |
| `show_bottom_connector` | `false`  |
| `default_item_accent`   | `green`  |
| `items`                 | `faq_item` rows below |

> **Note:** The Figma frame still shows PKCC placeholder FAQ copy. Replace with
> Project Farm–specific questions/answers when final content is ready.

**Suggested items (from Figma — update copy for Project Farm):**

| `question` | `accent_color` | `default_open` | `answer` |
| ---------- | -------------- | -------------- | -------- |
| Who can access the PKCC? | navy | ✅ true | The PKCC is open to everyone in the community… *(replace)* |
| Do I need an appointment to receive services? | green | false | — |
| How do food, clothing, and essential items work at the PKCC? | green | false | — |
| Are there expectations for behavior while at the PKCC? | green | false | — |
| Are there other services offered at the PKCC? | green | false | — |
| How do I get in touch with the PKCC? | orange | ✅ true | Contact block from Community Center FAQ |

---

### 6. `donate_banner` (unique)

Photo band + **Donate Today** CTA before the footer. Full field reference in
**`STORYBLOK_DONATE_BANNER_BLOCK.md`**. Configure:

| Field                   | Value    |
| ----------------------- | -------- |
| `theme`                 | `green`  |
| `show_bottom_connector` | `true`   |
| `button_link`           | `/donate`|
| `background_image`      | Group photo in a field (~1048×518) |

---

## Recommended order in `page.blocks`

1. `page_hero`
2. `intro_section` (intro + Apply Now + farm photo)
3. `impact_stats` (with 3× `impact_stat`)
4. `content_section` (`image_position: right` — What Project Farm Offers)
5. `faq` (`theme: green`)
6. `donate_banner`

---

## Visual / interaction notes (for editors)

- **Headings** use green `#82A969`, uppercase, Black Han Sans.
- **Impact stats** animate from 0 when scrolled into view — verify in the browser, not only in Storyblok preview.
- **Donate banner** uses a **blue** `#4C7FC8` button (not orange like the nav Donate Now).
- **Hero highlight bars:** green → blue (line 1), orange (line 2 “Community”).
- **Images:** intro ≈ 991×606 landscape; impact portrait ≈ 512×683; offers pig ≈ 509×501; donate band ≈ 1048×518.

---

## Technical reference

- Component map: `src/lib/storyblok.ts`
- Route: `src/app/programs/project-farm/page.tsx`
- Impact counters: `src/components/shared/ImpactStatsSection.tsx`, `ImpactStatItem.tsx`, `src/hooks/useCountUp.ts`
- Donate band: `src/components/shared/DonateBanner.tsx`
- Connectors: `src/components/about/GrowingDottedConnector.tsx`
