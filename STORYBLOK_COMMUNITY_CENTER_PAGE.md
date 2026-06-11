# Storyblok: Community Center page blocks

This page lives at the Next.js route `/programs/community-center` and loads the Storyblok story **`pages/community-center`**. Create that story (Content type **`page`**) and add the blocks below to its **`blocks`** field.

All of these block types are already mapped in code (`src/lib/storyblok.ts`) and rendered by components in `src/components/community-center/`. Navigation, the footer, and the global page background come from the Next.js layout — you do **not** need blocks for them.

> **Background:** identical to the other pages (the fixed `body` texture from `globals.css`). The hero sits on the tan **brown-paper** texture; every other section is transparent over the global navy texture.
>
> **Dotted lines:** each section below the intro starts with a **growing vertical dotted connector** (orange `#FC8F4C`) that animates from 0 → full height (~156px) as it scrolls into view — same component/behaviour as the About page (`GrowingDottedConnector`).
>
> **Horizontal scroll:** the *How the PKCC Supports Our Community* section **pins the page and scrolls the cards from right to left** as you scroll down, then releases — exactly the same GSAP `ScrollTrigger` pin behaviour as the About page “Our Values” section.

---

## Blocks to create

### 1. `community_hero`

Tan paper hero: compass logo + two-line title with colored highlight bars (matches Figma: **“Community”** on navy + **“Support.”** on orange, then **“Built for Real”** plain + **“Life.”** on blue).

| Field                  | Type                     | Notes |
| ---------------------- | ------------------------ | ----- |
| `compass_image`        | Asset (optional)         | Defaults to `/img/logo compass.png` |
| `line1_prefix`         | Text (optional)          | Default: `Community` (sits on navy bar) |
| `line1_highlight`      | Text (optional)          | Default: `Support.` (sits on orange bar) |
| `line2_prefix`         | Text (optional)          | Default: `Built for Real` (no bar) |
| `line2_highlight`      | Text (optional)          | Default: `Life.` (sits on blue bar) |
| `line1_prefix_color`   | Single-option (optional) | `navy` (default) · `green` · `blue` · `orange` |
| `line1_highlight_color`| Single-option (optional) | `orange` (default) · `navy` · `green` · `blue` |
| `line2_highlight_color`| Single-option (optional) | `blue` (default) · `navy` · `green` · `orange` |

---

### 2. `community_intro`

Intro paragraph (centered white text) → green **Become a PKCC Client** button → wide intro photo (placeholder until you add an asset).

| Field          | Type             | Notes |
| -------------- | ---------------- | ----- |
| `body`         | Textarea         | Centered, max ~864px. Defaults to the PKCC welcome paragraph. Line breaks preserved. |
| `button_label` | Text (optional)  | Default: `Become a PKCC Client` |
| `button_link`  | Link (optional)  | Default: `/contact` |
| `image`        | Asset (optional) | Wide ~967×533 crop. Shows a placeholder box if empty. |

**Default `body`:**
> The Project Kompass Community Center (PKCC) is a welcoming, inclusive space designed to support individuals and families during moments of need, transition, and growth. Serving men, women, children, young adults, and older adults, the PKCC provides access to food, basic necessities, life-skills education, and partner-led services—all in a respectful, judgment-free environment.

---

### 3. `community_supports`  ← pinned horizontal-scroll section

“HOW THE PKCC SUPPORTS OUR COMMUNITY” heading (orange `#FC8F4C`, uppercase) + a blue sub-headline, then the horizontally-scrolling cards. The growing dotted connector sits above it.

| Field         | Type            | Allowed nested | Notes |
| ------------- | --------------- | -------------- | ----- |
| `headline`    | Text (optional) | —              | Default: `How the PKCC Supports Our Community` |
| `subheadline` | Textarea (optional) | —          | Default: `The PKCC brings together essential services, shared spaces, and partner supports to strengthen our community.` |
| `cards`       | **Blocks**      | `support_card` only | Preferred field name. (`body` also accepted as a fallback name.) |

---

### 4. `support_card` (nested only — inside `community_supports.cards`)

One service card (310×406 in the design). Color **auto-cycles** navy → green → orange → blue unless you override it.

| Field          | Type             | Notes |
| -------------- | ---------------- | ----- |
| `title`        | Text             | e.g. `Food Pantry` |
| `schedule`     | Text (optional)  | Bold first line, e.g. `Mon · Wed · Fri | 1:00–3:30 PM` |
| `body`         | Textarea         | Card description; max ~334px, line breaks preserved. |
| `card_color`   | Single-option (optional) | Override auto color: `navy` · `green` · `orange` · `blue` |
| `button_label` | Text (optional)  | Optional CTA (blue button), e.g. `Request Computer Access` |
| `button_link`  | Link (optional)  | Where the CTA points |

**Add the following cards** (the design shows six visible at a time; these are the seven services to include):

| # | `title`           | `card_color` (auto) | `schedule` | `body` | `button_label` |
| - | ----------------- | ------------------- | ---------- | ------ | -------------- |
| 1 | Food Pantry       | navy   | `Mon · Wed · Fri | 1:00–3:30 PM` | Clients may access the pantry once per week. Items are provided based on availability and need. | — |
| 2 | Community Closet  | green  | `Mon · Wed · Fri | 1:00–3:30 PM` | Access to essential and seasonal clothing. Visits are available once every three months. | — |
| 3 | Care              | orange | — | Connection to wellness, hygiene, and care resources to support overall health and stability. | — |
| 4 | Essentials        | blue   | — | Everyday basic necessities — hygiene products, household items, and other essential supplies. | — |
| 5 | Computer Access   | navy   | — | Computers are available to assist with job searches, schoolwork, and other essential tasks. Usage is available by appointment. | `Request Computer Access` |
| 6 | Partner Space     | green  | — | Dedicated space for partner-led services and community organizations to connect with clients. | — |
| 7 | Activity Calendar | orange | — | Workshops, classes, and community activities offered throughout the month. | — |

> Cards 1, 2 and 5 use the exact copy from the Figma; cards 3, 4, 6, 7 use placeholder copy — replace as final content becomes available.

---

### 5. `community_guidelines`

“PKCC GUIDELINES” heading (orange, uppercase) + a two-column layout: intro paragraphs and a bulleted guidelines list on the left, a portrait photo on the right. Dotted connector above.

| Field      | Type             | Notes |
| ---------- | ---------------- | ----- |
| `headline` | Text (optional)  | Default: `PKCC Guidelines` |
| `body`     | Textarea (optional) | Intro paragraph(s). Defaults to the two PKCC paragraphs. Line breaks preserved. |
| `bullets`  | Textarea (optional) | **One bullet per line.** Defaults to the 7 guidelines below. |
| `image`    | Asset (optional) | Portrait ~508×678 crop. Placeholder box if empty. |

**Default `bullets` (one per line):**
```
We are inclusive of all individuals, regardless of background or circumstance
All client information and conversations are kept confidential
All individuals must present as sober to enter and receive services
Visitors must treat staff, partners, and others with respect
The PKCC is a service-based space, not a hangout location
PKCC staff may deny services if there are safety concerns for self or others
The PKCC is privately operated, not a government agency
```

---

### 6. `community_faq`

“FAQ” heading (orange, uppercase) + an interactive accordion. A dotted connector sits above the heading **and** below the section (matching the Figma divider before the footer).

| Field      | Type            | Allowed nested | Notes |
| ---------- | --------------- | -------------- | ----- |
| `headline` | Text (optional) | —              | Default: `FAQ` |
| `items`    | **Blocks**      | `community_faq_item` only | Preferred field name. (`body` also accepted as a fallback name.) |

---

### 7. `community_faq_item` (nested only — inside `community_faq.items`)

One accordion row. **Collapsed** = dark `#151825` bar with a right-chevron and white text. **Open** = colored bar, down-chevron, and the answer revealed in dark text. Clicking toggles it.

| Field          | Type             | Notes |
| -------------- | ---------------- | ----- |
| `question`     | Text             | Row label |
| `answer`       | Textarea         | Shown when the row is open; max ~610px, line breaks preserved. |
| `accent_color` | Single-option (optional) | Open-state color: `orange` (default) · `green` · `blue` · `navy` |
| `default_open` | Boolean (optional) | Start expanded (Figma opens the first row in orange and the last row in green) |

**Items to create (from Figma):**

| `question` | `accent_color` | `default_open` | `answer` |
| ---------- | -------------- | -------------- | -------- |
| Who can access the PKCC? | orange | ✅ true | The PKCC is open to everyone in the community, including men, women, children, young adults, and older adults. All are welcome. |
| Do I need an appointment to receive services? | orange | false | — |
| How do food, clothing, and essential items work at the PKCC? | orange | false | — |
| Are there expectations for behavior while at the PKCC? | orange | false | — |
| Are there other services offered at the PKCC? | orange | false | — |
| How do I get in touch with the PKCC? | green | ✅ true | You’re welcome to contact us in the way that works best for you.<br><br>Visit Us:<br>192 Appleton Street, Lowell, MA<br><br>Call Us:<br>978-703-2344<br>(This is an automated phone line with options to help route your call.)<br><br>Email Us:<br>For general questions or inquiries, please email info@projectkompass.org.<br><br>Our team will do their best to respond as quickly as possible and help connect you to the appropriate support or resource. |

> In the `answer` textarea, use real line breaks (Enter) instead of `<br>`. Fill in the remaining answers as content becomes available — rows still open/close even with an empty answer.

---

## Recommended order in `page.blocks`

1. `community_hero`
2. `community_intro` (intro text + “Become a PKCC Client” button + photo)
3. `community_supports` (with 7× `support_card`) — pinned horizontal scroll
4. `community_guidelines` (intro text + bullets + portrait photo)
5. `community_faq` (with `community_faq_item` rows)

---

## Visual / interaction notes (for editors)

- **Headings** (How the PKCC Supports Our Community, PKCC Guidelines, FAQ) use the **orange `#FC8F4C`** brand color, uppercase, Black Han Sans.
- **Sub-headline** under the supports heading is **blue `#4C7FC8`**, Black Han Sans.
- **Support cards** auto-cycle navy → green → orange → blue. Override per card with `card_color`. Optional blue CTA button per card (used on *Computer Access*).
- **Supports section pins** and scrolls the cards horizontally as you scroll — the page “stops” until the cards have moved all the way left, then continues. Mirrors the About page “Our Values” section.
- **FAQ** rows are a real accordion: click to expand/collapse. Use `default_open` to pre-open the colored rows shown in the design.
- **Images** are placeholders by default — drop your own assets into each `image` field. Aspect ratios: intro photo ≈ 967×533 (landscape), guidelines photo ≈ 508×678 (portrait).
- **Dotted connectors** are built into each section (Supports, Guidelines, FAQ); no separate divider block is required.

---

## Technical reference

- Component map: `src/lib/storyblok.ts`
- UI components: `src/components/community-center/*`
- Route: `src/app/programs/community-center/page.tsx`
- Scroll animations: GSAP `ScrollTrigger` — growing connector in `src/components/about/GrowingDottedConnector.tsx`; pinned horizontal scroll in `src/components/community-center/CommunitySupports.tsx`.
