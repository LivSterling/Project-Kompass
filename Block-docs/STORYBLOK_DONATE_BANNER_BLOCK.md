# Storyblok: generic `donate_banner` block

A full-width photo band with a headline, a **Donate Today** CTA, growing dotted connectors
above (and optionally below), and a decorative map “X” mark — distinct from the home-page
`cta_section` (which uses a different layout and orange button styling).

Mapped in code (`src/lib/storyblok.ts`) and rendered by
`src/components/shared/DonateBanner.tsx`.

> **Background:** the photo sits inside a ~1048×518 frame with a subtle navy gradient overlay
> so white headline text stays readable. Connectors use `theme`.

---

## `donate_banner` (nestable block)

| Field                   | Type                     | Notes                                                                       |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------- |
| `headline`              | Text (optional)          | Default: `You too can make a difference in helping to support our area youth and young adults!` |
| `button_label`          | Text (optional)          | Default: `Donate Today`                                                     |
| `button_link`           | Link (optional)          | Defaults to `/donate`                                                       |
| `background_image`      | Asset (optional)          | Wide group photo (~1048×518). Placeholder box if empty.                     |
| `theme`                 | Single-option (optional) | `green` (default) · `orange` · `navy` · `blue`. Connector color.            |
| `show_bottom_connector` | Boolean (optional)       | Trailing connector before the footer. Defaults to **on**.                   |

---

## Project Farm preset

| Field                   | Value                                                                 |
| ----------------------- | --------------------------------------------------------------------- |
| `theme`                 | `green`                                                               |
| `show_bottom_connector` | `true`                                                                |
| `button_link`           | `/donate` (or your external donation URL)                             |

---

## vs. `cta_section`

| Block           | Use when…                                                                 |
| --------------- | ------------------------------------------------------------------------- |
| `donate_banner` | Program pages: photo band + blue **Donate Today** button + connectors     |
| `cta_section`   | Home / landing: full-bleed hero-style CTA with orange button              |

---

## Notes

- Allow `donate_banner` on any `page` → **blocks** field.
- Reuse anywhere you need this exact “support our mission” closing band.
