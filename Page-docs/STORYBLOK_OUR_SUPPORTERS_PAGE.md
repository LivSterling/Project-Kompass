# Storyblok: Our Supporters page blocks

This page lives at the Next.js route **`/supporters`** (already linked from the nav as
"Our supporters") and loads the Storyblok story **`pages/supporters`**. Create that story
(Content type **`page`**) and add the blocks below to its **`blocks`** field.

> **Visual Editor:** set the story **Real path** to `/supporters` so Storyblok previews the
> correct URL (not `/pages/supporters`, which 404s).

Navigation, the footer, and the global page background come from the Next.js layout — you do
**not** need blocks for them.

Figma reference: [Our Supporters frame](https://www.figma.com/design/g9FQGi2D4i666yOTHne4py/PK-layout-New?node-id=1121-1747) in **PK-layout-New**.

---

## New / updated blocks used by this page

| Block | Status | Doc |
| ----- | ------ | --- |
| `page_hero` | **Updated** — added `background_style: photo` for pages whose hero isn't on tan paper. | `STORYBLOK_PAGE_HERO_BLOCK.md` |
| `intro_section` | Existing, unchanged. | `STORYBLOK_INTRO_SECTION_BLOCK.md` |
| `content_section` | **Updated** — added optional `button_label` / `button_link` / `button_color`. | `STORYBLOK_CONTENT_SECTION_BLOCK.md` |
| `partner_logos` | **New** — the 3-row scrolling logo "conveyor belt" ("Our Partners" / "Art Partners"). | `STORYBLOK_PARTNER_LOGOS_BLOCK.md` |
| `map_section` | **New** — shareable map-background band with big colored-bar title + paragraph + button ("Want to Connect? Let's Chat!"). | `STORYBLOK_MAP_SECTION_BLOCK.md` |

---

## Blocks to use, in order

### 1. `page_hero` — "Empowering Our Community Together"

Unlike every other page hero, this one is **not** on the tan brown-paper texture — in Figma
it sits on a dark navy background with a faded group photo behind it. Use the new
`background_style: photo` option. Full field reference in **`STORYBLOK_PAGE_HERO_BLOCK.md`**.

| Field               | Value                                             |
| ------------------- | -------------------------------------------------- |
| `background_style`  | `photo`                                             |
| `background_image`  | The faded supporters/group photo from the Figma frame |
| `show_decorations`  | `true` (dotted path + map "X", as in the other heroes) |

`lines`:

| Line | `text`              | `bar_color` |
| ---- | ------------------- | ----------- |
| 1    | `Empowering Our `   | `blue`      |
| 2    | `Community `        | `navy`      |
| 2    | `Together`          | `green`     |

---

### 2. `intro_section` (generic — paragraph only, no button/image)

Centered intro paragraph under the hero. Full field reference in
**`STORYBLOK_INTRO_SECTION_BLOCK.md`**. Leave `button_label` and `image` empty — the paragraph
is the whole section here.

**`body` (from Figma):**

> At the heart of Project Kompass lies a commitment to community-driven action. Our work is fueled by the unwavering support of countless individuals, corporations, and foundations throughout our community and beyond. Their generosity makes everything we do possible. We extend our heartfelt gratitude to all those who have dedicated investment in the mission of Project Kompass enabling us to continue serving those in our community who need it most.

---

### 3. `content_section` (generic — split layout, now with an optional button)

**Let's Build the Future Together** — navy headline, body copy left, photo right. Full field
reference in **`STORYBLOK_CONTENT_SECTION_BLOCK.md`**.

| Field            | Value                                    |
| ---------------- | ------------------------------------------ |
| `headline`       | `Let's Build the Future Together`          |
| `theme`          | `navy`                                     |
| `headline_case`  | `uppercase`                                |
| `body_align`     | `left`                                     |
| `image_position` | `right`                                    |
| `image`          | The photo of two people sitting together (~492×655) from the Figma frame |
| `button_label`   | *(optional — leave empty to match Figma, which has no button here; the field exists now if you want one)* |

> **Note:** the Figma frame's body copy for this section is literally the Project Farm page's
> "farm program offers…" placeholder text (a copy/paste leftover, not real supporters content).
> Write real copy about the future/community-building vision before publishing — don't reuse
> the Project Farm paragraph.

---

### 4. `partner_logos` (new — logo conveyor belt)

**Our Partners** — three rows of logos, top/bottom scrolling left, middle scrolling right,
looping infinitely. Full field reference in **`STORYBLOK_PARTNER_LOGOS_BLOCK.md`**.

| Field      | Value          |
| ---------- | --------------- |
| `headline` | `Our Partners`  |
| `theme`    | `navy`          |

Upload each partner's logo from the Figma frame as a `partner_logo_item` and distribute them
across `top_row`, `middle_row`, and `bottom_row` (roughly 5 per row, matching Figma):

| Row | Partners (from Figma) |
| --- | ----------------------- |
| Top | Parker, Netscout, Horn Family Foundation, Mott, GLCF |
| Middle | (X placeholder), Aaron's Presents, BAE Systems, Century 21, community foundation logo |
| Bottom | Allegro, AAA Northeast, Bombas, Cook.Co, Eastern Bank |

(Theodore Edson Parker and TJX also appear in the Figma frame — add them to whichever row has
room, or add a 4th/5th logo per row; row length just changes the loop duration, not the layout.)

---

### 5. `map_section` (new — shareable map band)

**Want to Connect? Let's Chat!** Full field reference in **`STORYBLOK_MAP_SECTION_BLOCK.md`**.

| Field             | Value           |
| ----------------- | ---------------- |
| `background_image`| Leave empty (defaults to the brown-paper map texture) |
| `content_align`   | `center`         |
| `button_label`    | `Contact Us`     |
| `button_link`     | `/contact`       |
| `button_color`    | `green`          |
| `theme`           | `blue`           |
| `show_bottom_connector` | `true` (default — trailing connector + map "X" mark before the footer) |

`lines`:

| Line | `text`               | `bar_color` |
| ---- | -------------------- | ----------- |
| 1    | `Want to Connect? `  | `blue`      |
| 2    | `Lets Chat!`         | `orange`    |

---

## Recommended order in `page.blocks`

1. `page_hero` (`background_style: photo`)
2. `intro_section` (community-driven-action paragraph)
3. `content_section` (`image_position: right` — Let's Build the Future Together)
4. `partner_logos` (Our Partners conveyor belt)
5. `map_section` (Want to Connect? Let's Chat!)

---

## Visual / interaction notes (for editors)

- **Hero:** the only page hero using `background_style: photo` so far — everything else stays
  on tan paper.
- **Headings** use navy `#345789`, uppercase, Black Han Sans (same as other pages).
- **Connectors:** `content_section` and `partner_logos` each start with their own leading
  connector, and `partner_logos` also has a trailing one (`show_bottom_connector`) — that's the
  single dotted trail between the logo belt and the map section, so don't add a duplicate one
  yourself. `map_section` is the last block, so its own `show_bottom_connector` (on by default)
  draws the final trail + map "X" mark right before the footer.
- **Logo belt:** give each row at least 4–5 logos for a smooth loop; hovering a row pauses it;
  motion is disabled automatically for users with reduced-motion preferences.
- **Map section:** background defaults to `/img/figma/brown-paper-map-clean.png` — already in
  the repo, no upload needed unless you want a different texture. The paper's torn edges are
  baked into the PNG with transparent corners, so it always renders at full size
  (`background-size: contain`) instead of being cropped on short screens.

---

## Technical reference

- Component map: `src/lib/storyblok.ts`
- Route: `src/app/supporters/page.tsx`
- Hero: `src/components/shared/PageHero.tsx` (shared title renderer: `src/components/shared/HeroTitleLines.tsx`)
- Content section: `src/components/shared/ContentSection.tsx`
- Logo conveyor belt: `src/components/shared/PartnerLogosSection.tsx` (animation CSS in `src/app/globals.css`)
- Map section: `src/components/shared/MapSection.tsx`
- Connectors: `src/components/about/GrowingDottedConnector.tsx`
