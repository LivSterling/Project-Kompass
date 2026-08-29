# Storyblok: generic `map_section` block

A reusable "big title lettering on a map background" band — the "Want to Connect? Let's Chat!"
closer on the Our Supporters page. Built to be shared across pages: any page can drop this in
with its own background image, title, paragraph, and button.

Mapped in code (`src/lib/storyblok.ts`) and rendered by
`src/components/shared/MapSection.tsx`. The title reuses the same `hero_line` / `hero_segment`
nested blocks as `page_hero` (via the shared `src/components/shared/HeroTitleLines.tsx`
renderer), so you get the same "solid color highlight bar" title styling for free.

> **Background:** defaults to the tan **brown-paper map** texture
> (`/img/figma/brown-paper-map-clean.png`), but `background_image` can be swapped for any other
> full-bleed image. The paper has ragged, transparent-cut edges baked into the PNG (it's not a
> plain rectangle). The card is locked to the image's native **1080×675 aspect ratio** (via
> Tailwind's `aspect-1080/675`), so the box shape always exactly matches the image shape — the
> full image, every torn edge included, renders edge-to-edge with **zero cropping and zero
> letterboxing** at any screen width. Swapping in a differently-shaped image will letterbox.
>
> The card is also a CSS container-query context (`@container`). The title, body, logo, and
> button are all sized in `cqw` units (a % of the card's *own* width, wrapped in `clamp()` with a
> small-screen floor) instead of viewport units — so the content always scales down together with
> the shrinking card and can never spill past its torn-paper bounds, even on narrow phones where
> the box itself gets quite short.

---

## `map_section` (nestable block)

| Field              | Type                     | Notes                                                                       |
| ------------------ | ------------------------ | ----------------------------------------------------------------------------- |
| `background_image` | Asset (optional)         | Defaults to `/img/figma/brown-paper-map-clean.png`. Native size 1080×675 — a differently-shaped image will letterbox (never crop) inside the same frame. |
| `show_logo`        | Boolean (optional)       | Small compass/logo mark on the side. Defaults to **on**.                      |
| `logo_image`       | Asset (optional)         | Defaults to `/img/logo compass.png`.                                          |
| `lines`            | **Blocks**               | `hero_line` only (same as `page_hero`). The big title, with optional colored highlight-bar segments. Lines get an automatic gap between them (no need for a blank spacer line). |
| `body`             | Textarea (optional)      | Paragraph text under the title. Line breaks preserved.                        |
| `button_label`     | Text (optional)          | Optional CTA under the body. Button only renders when set.                    |
| `button_link`      | Link (optional)          | Where the button points. Defaults to `#` if empty.                            |
| `button_color`     | Single-option (optional) | `green` (default) · `blue` · `orange` · `navy`.                               |
| `content_align`    | Single-option (optional) | `center` (default, matches the Figma preset) · `left`.                        |
| `theme`            | Single-option (optional) | `blue` (default) · `orange` · `navy` · `green`. Color of the trailing connector / map "X" mark. |
| `show_bottom_connector` | Boolean (optional)  | Growing dotted connector + map "X" mark after the paper, leading into the footer. Defaults to **on** — this block is typically the last section on the page. |

---

## `hero_line` / `hero_segment`

Same nested blocks used by `page_hero` — see **`STORYBLOK_PAGE_HERO_BLOCK.md`** for the full
field reference. Each `hero_line` is one line of the title; each `hero_segment` is a run of
text that's either plain or on a colored highlight bar (`green` / `blue` / `navy` / `orange`).

> Since the map background is light (tan paper), plain segments and body text render in
> **black** — this differs from `page_hero`'s `photo` style, where plain segments are white.

---

## Our Supporters preset ("Want to Connect? Let's Chat!")

| Field           | Value                                                        |
| --------------- | ------------------------------------------------------------- |
| `background_image` | The brown-paper map texture (default — leave empty)        |
| `content_align` | `center`                                                       |
| Line 1          | `Want to Connect? ` (blue, full-width bar)                     |
| Line 2          | `Lets Chat!` (orange)                                          |
| `button_label`  | `Contact Us`                                                    |
| `button_link`   | `/contact`                                                      |
| `button_color`  | `green`                                                         |

---

## Notes

- Allow `map_section` on the `page` → **blocks** field.
- This block is intentionally generic ("Map section") so it can be reused anywhere a page needs
  a map-textured closing band — not just Our Supporters.
- **Keep body text short.** Because the card's height is locked to the image's aspect ratio
  (not the content's height), a very long `body` paragraph or a very long line of title text
  will shrink further than intended to stay inside the card rather than growing the card taller.
  A one-line title + one short sentence + a short button label (as in the preset below) is the
  sweet spot this layout was tuned for.
