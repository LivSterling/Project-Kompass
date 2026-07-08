# Storyblok: generic `intro_section` block

A reusable "intro" band: a centered paragraph, an optional CTA button, and an optional
wide image below. It replaces the page-specific `housing_intro`, `community_intro`, and
`programs_intro` blocks (which were near-identical copies).

Mapped in code (`src/lib/storyblok.ts`) and rendered by
`src/components/shared/IntroSection.tsx`.

> **Background:** transparent over the global navy texture, like the old intro blocks.

---

## `intro_section` (nestable block)

| Field          | Type                     | Notes                                                                       |
| -------------- | ------------------------ | --------------------------------------------------------------------------- |
| `body`         | Textarea                 | Centered intro copy; ~864px max width. Line breaks preserved.               |
| `button_label` | Text (optional)          | Button only renders when set.                                               |
| `button_link`  | Link (optional)          | Defaults to `/contact` if empty.                                            |
| `button_color` | Single-option (optional) | `green` (default) · `blue` · `orange` · `navy`.                             |
| `image`        | Asset (optional)         | Wide image shown below the button.                                          |
| `image_ratio`  | Text (optional)          | Aspect ratio for the image frame, e.g. `967/533` (default) or `963/450`.    |

---

## Per-page presets

| Old block         | `button_color` | `button_label` (default)   | `image_ratio` |
| ----------------- | -------------- | -------------------------- | ------------- |
| `housing_intro`   | `green`        | `Submit a Referral`        | `967/533`     |
| `community_intro` | `green`        | `Become a PKCC Client`     | `967/533`     |
| `programs_intro`  | `blue`         | `Contact us`               | `963/450`     |

---

## Notes

- Old intro blocks are still mapped in code, so existing stories keep rendering. Migrate to
  `intro_section` when convenient.
- Allow `intro_section` on the `page` → **blocks** field.
