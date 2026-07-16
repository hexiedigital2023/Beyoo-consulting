# Hexie Digital — Design System

The brand and interface system for **Hexie Digital**, a cross-border growth consultancy. Hexie helps overseas companies expand into Canada — navigating regulatory compliance, connecting them with investors and partners — and helps Canadian and American companies source trusted manufacturing partners across Asia.

The system is **modern, professional, and minimalist**, with a tone that is **clear, expert, and culturally fluent**. It is built to feel like a bridge between markets: confident, editorial, and quietly premium.

---

## Sources provided

- `uploads/hexie-logo-favcon.png` — the Hexie brand mark (indigo + cyan + gold, hexagon-derived). Copied to `assets/hexie-mark.png`.
- `uploads/Untitled 2–6.jpg`, `Untitled-11.jpg` — **aesthetic reference screenshots** (a SYPartners consultancy site) supplied by the client as visual direction, *not* Hexie's own assets. They establish the target look: oversized neutral grotesque type, warm off-white canvas, full-bleed numbered brand-color sections, editorial serif for article titles, generous whitespace, thin underlined links.

No codebase, Figma file, brand fonts, or brand photography were provided. See **Caveats** at the end.

---

## Content fundamentals

**Voice:** clear, expert, culturally fluent. Hexie sounds like a trusted advisor who has done this many times and respects every market it touches.

- **Person:** second person for the client ("*We help **you** enter Canada*"); first-person plural for Hexie ("**We** map the terrain"). Never third-person corporate distance.
- **Casing:** sentence case everywhere except mono eyebrow labels, which are UPPERCASE with wide tracking (e.g. `WHAT WE DO — 02`). Never Title Case headlines.
- **Tone:** plain, direct, calm. Short declaratives. Confidence without hype.
- **Numbers & sections:** big, editorial, numbered (`01 / 02 / 03`) — a signature device carried from hero to slides.
- **Cultural sensitivity (core):** the brand spans Canada, the US, and Asia. Copy is respectful and specific; it never leans on stereotype, idiom that won't translate, or cultural shorthand. Bilingual (EN/FR) and multilingual (Mandarin) capability is stated plainly as a feature, not a flourish.
- **Emoji:** never. **Exclamation marks:** effectively never.
- **Examples**
  - ✅ "We help companies belong in new markets."
  - ✅ "Clearing the first gate, the first time."
  - ✅ "A Hexie advisor will reply within one business day — in English, French, or Mandarin."
  - ❌ "Unlock synergistic cross-border paradigms!"
  - ❌ "We're your rockstar growth ninjas 🚀"

---

## Visual foundations

**Overall feel:** editorial, minimalist, high-contrast between calm off-white pages and bold full-bleed color statements. Lots of air. Type does the heavy lifting; decoration is near-zero.

- **Color:** warm off-white canvas (`--paper #F4F3EF`) and near-black warm ink (`--ink-900 #14161A`) carry 90% of surfaces. The three mark colors — **indigo `#3551A3`** (primary), **cyan `#009AB9`** (secondary), **gold `#E5B422`** (accent) — plus a grounding **evergreen `#133A34`** appear as saturated *section fields* (full-bleed backgrounds behind big statements and numbered dividers) and as small functional accents. Never more than one or two field colors adjacent; never gradient-heavy UI (the only gradients live inside placeholder image tiles).
- **Type:** a neutral grotesque (**Hanken Grotesk**) for display, headings, UI, and body; a transitional serif (**Newsreader**) reserved for pull-quotes and article/insight titles; a mono (**JetBrains Mono**) for eyebrow labels, numerals, and data. Display is oversized (up to ~104px) with tight tracking (−0.03em) and weight 500. Headings are semibold, −0.015em. Body is 16/1.5.
- **Spacing:** 8px base rhythm; sections breathe at 64–96px vertical. Generous margins (40px page gutters) are part of the brand — never crowd.
- **Backgrounds:** flat color fields, no textures or patterns. Photography (when present) is warm/neutral, documentary, often duotone or desaturated; here it is represented by branded duotone `Placeholder` tiles until real imagery is supplied.
- **Borders:** hairline `1px` in warm grey (`--border-subtle/default`) for dividers and cards; a bold `1.5–2px` ink border for the "outline" emphasis (echoing the boxed wordmark in the reference). Dividers between list rows are a recurring motif.
- **Corner radii:** restrained and crisp — controls `4px`, cards `8px`, rarely `14px`. The brand leans square, not pill-soft (pills reserved for badges/switch tracks).
- **Cards:** white surface, hairline border, *no* shadow by default (`default`); `raised` adds a soft low-contrast shadow; `outline` uses the bold ink border; `muted` is a filled paper tint. Hover on interactive cards: a 3px lift + soft `shadow-md` + border darkening.
- **Shadows:** soft, warm, low-contrast, used sparingly (`--shadow-xs → lg`). Never harsh or colored (except the cyan focus ring).
- **Motion:** calm and precise. Standard ease `cubic-bezier(0.22,0.61,0.36,1)`; emphasis ease `cubic-bezier(0.16,1,0.3,1)` for expands/toggles. Durations 120/200/360ms. Fades and short translate-ups; no bounce, no decorative loops.
- **Hover states:** primary buttons darken (`indigo-700`); ghost/secondary fill with `paper-2` or invert to ink; links fade to ~55% opacity under a persistent thin underline. **Press:** buttons nudge down 1px.
- **Focus:** 3px cyan focus ring (`--shadow-focus`) on inputs; keyboard-visible and calm.
- **Transparency & blur:** used only for the sticky nav (82% paper + 10px blur) and the dialog scrim (subtle 2px blur). Not a decorative device.

---

## Iconography

- **System:** [**Lucide**](https://lucide.dev) — clean, consistent stroke icons (~1.75px), which match the minimalist, hairline-driven aesthetic. Loaded from CDN in the UI kit (`https://unpkg.com/lucide`). **This is a substitution** (no brand icon set was provided) — flagged for confirmation.
- **Usage:** sparing and functional — inline affordances (chevrons, close ×, check, info, arrows), never decorative icon-per-feature grids. Icon size tracks text; icon buttons are 32/40/48px.
- **Custom glyphs:** the accordion +/× uses two CSS bars (not an icon font) so it animates crisply. The select chevron is a small unicode `▾`. Section numbering uses plain mono numerals, not icons.
- **Emoji / unicode as icons:** emoji never; unicode limited to `×`, `▾`, `↔` in labels.
- **Logo:** the Hexie mark (`assets/hexie-mark.png`) is the only brand illustration. It is small/low-res as provided — a vector version is requested. Never redraw or approximate it.

---

## Components

Reusable React primitives, grouped by concern. Import from the compiled bundle namespace (see any `@dsCard` HTML). This is a from-scratch standard set (no source component library was provided), sized to the brand's needs.

**Forms** (`components/forms/`)
- **Button** — primary / secondary / ghost / accent; sm/md/lg; icons; fullWidth; disabled.
- **IconButton** — square icon-only; ghost / outline / solid.
- **Input** — labelled text field with hint & error states.
- **Textarea** — multi-line field, same API.
- **Select** — native select styled to the field system, custom chevron.
- **Checkbox** — crisp square, indigo fill.
- **Radio** — single-choice, shared `name`.
- **Switch** — on/off toggle.

**Surfaces & data** (`components/surfaces/`)
- **Card** — default / raised / muted / outline; optional interactive hover.
- **Badge** — tinted status pill (7 tones).
- **Tag** — mono keyword chip; active + removable.
- **Stat** — oversized metric numeral + eyebrow + note.

**Navigation** (`components/navigation/`)
- **Tabs** — underline tab bar.
- **Accordion** — hairline-divided expandable list.

**Feedback** (`components/feedback/`)
- **Dialog** — centered modal with scrim (Esc / scrim / × close).
- **Tooltip** — hover/focus label, 4 placements.

*Intentional additions:* **Stat** (big-number proof points are central to a consultancy's storytelling) and the duotone `Placeholder` tile in the website kit (stands in for absent brand photography).

---

## UI kits

- **`ui_kits/website/`** — interactive marketing-site recreation: **Home** (hero, stat band, four numbered brand-color service sections, insight teasers), **Services**, **Insights** (filterable editorial "MOMENTUM" grid), **Contact** (working fake inquiry form). Open `ui_kits/website/index.html`. A full single-page **Landing** (`landing.html`) adds services, strengths, clients, case studies, and team sections.

## Slides

- **`slides/`** — six sample layouts derived directly from the reference aesthetic: **Title**, **Section divider** (numbered color field), **Content**, **Metrics**, **Quote** (serif), **Closing**. Each is a standalone 1280×720 HTML file. (Created because the supplied references are essentially deck layouts and decks are core to consulting work.)

---

## Root index / manifest

- `styles.css` — global entry point; consumers link this only. `@import`s the token + font + base files.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`, `base.css`.
- `components/` — `forms/`, `surfaces/`, `navigation/`, `feedback/` (each: `*.jsx` + `*.d.ts` + `*.prompt.md` + one `@dsCard` HTML).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `ui_kits/website/` — the marketing-site kit.
- `slides/` — sample slide layouts.
- `assets/` — `hexie-mark.png`.
- `SKILL.md` — portable skill wrapper.
- Generated (do not edit): `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`.

---

## Caveats & substitutions

- **Fonts are substitutions.** No brand font files were provided. Hanken Grotesk / Newsreader / JetBrains Mono (Google Fonts) are the closest open matches to the reference's grotesque + editorial-serif pairing. **Please supply the real brand fonts** to replace them.
- **Icons are a substitution** — Lucide stands in for an unspecified brand icon set.
- **No brand photography** — duotone placeholder tiles stand in. Supply real, warm/neutral documentary imagery.
- **The reference screenshots are a third party's site** used only as visual direction; none of that content or imagery is reused.
- **The logo is low-resolution** (62×57) — a vector/SVG version is needed for crisp scaling.
