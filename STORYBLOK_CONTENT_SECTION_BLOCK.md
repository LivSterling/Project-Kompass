# Storyblok: generic `content_section` block

A reusable "headline + body" band with a growing dotted connector above, an optional
image, and a themeable heading color. It replaces `about_mission`, `housing_eligibility`,
and `about_history`.

Mapped in code (`src/lib/storyblok.ts`) and rendered by
`src/components/shared/ContentSection.tsx`.

> **Background:** transparent over the global navy texture. The `theme` sets both the
> heading color and the connector color so it matches the page it lives on.

---

## `content_section` (nestable block)

| Field            | Type                     | Notes                                                                     |
| ---------------- | ------------------------ | ------------------------------------------------------------------------- |
| `headline`       | Text (optional)          | Big section title. Hidden if empty.                                       |
| `theme`          | Single-option (optional) | `orange` (default) · `navy` · `green` · `blue`. Heading + connector color.|
| `headline_case`  | Single-option (optional) | `uppercase` (default) · `capitalize` · `normal`.                          |
| `body`           | Textarea                 | Body copy; ~864px max width. Line breaks preserved.                       |
| `body_align`     | Single-option (optional) | `center` (default) · `left`.                                              |
| `image`          | Asset (optional)         | Optional image (864×521 frame).                                           |
| `image_position` | Single-option (optional) | `above` (default when image set) · `below` · `none`.                      |

---

## Per-page presets

| Old block            | `theme`  | `headline_case` | `body_align` | image        |
| -------------------- | -------- | --------------- | ------------ | ------------ |
| `about_mission`      | `orange` | `uppercase`     | `center`     | none         |
| `housing_eligibility`| `navy`   | `uppercase`     | `center`     | none         |
| `about_history`      | `orange` | `capitalize`    | `left`       | `above`      |

---

## Notes

- Old blocks are still mapped in code, so existing stories keep rendering. Migrate to
  `content_section` when convenient.
- Allow `content_section` on the `page` → **blocks** field.
