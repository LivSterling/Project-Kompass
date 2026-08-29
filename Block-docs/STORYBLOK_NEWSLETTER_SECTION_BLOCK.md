# Storyblok: generic `newsletter_section` block

A reusable mailing-list signup band with a growing dotted connector above **and** below.
It replaces the page-specific `programs_newsletter`.

Mapped in code (`src/lib/storyblok.ts`) and rendered by
`src/components/shared/NewsletterSection.tsx`.

> **Background:** transparent over the global navy texture. `theme` sets the heading +
> connector color; `button_color` sets the submit button.

---

## `newsletter_section` (nestable block)

| Field          | Type                     | Notes                                                                       |
| -------------- | ------------------------ | --------------------------------------------------------------------------- |
| `headline`     | Text (optional)          | Default: `Stay Connected`.                                                   |
| `subtitle`     | Textarea (optional)      | Default: `Join Our Mailing List for Updates and Stories of Transformation`. |
| `placeholder`  | Text (optional)          | Input placeholder. Default: `Email Address`.                                |
| `button_label` | Text (optional)          | Default: `Submit`.                                                          |
| `theme`        | Single-option (optional) | `green` (default) · `orange` · `navy` · `blue`. Heading + connector color.   |
| `button_color` | Single-option (optional) | `orange` (default) · `green` · `navy` · `blue`.                             |
| `action_url`   | Text (optional)          | POST endpoint. If empty, the form shows an inline "thanks" confirmation.     |

---

## Per-page presets

| Old block             | `theme` | `button_color` |
| --------------------- | ------- | -------------- |
| `programs_newsletter` | `green` | `orange`       |

---

## Notes

- `programs_newsletter` is still mapped in code, so existing stories keep rendering.
  Migrate to `newsletter_section` when convenient.
- Allow `newsletter_section` on the `page` → **blocks** field.
