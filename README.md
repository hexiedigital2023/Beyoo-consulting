# BEYOO Consulting — Website

Static marketing site for BEYOO Consulting, a cross-Pacific brand consultancy.

## Structure

- `index.html`, `services.html`, `case-studies.html`, `team.html`, `contact.html` — the five pages
- `assets/site.css`, `assets/site.js` — site-specific styles (buttons, cards, nav, footer, accordions, forms) and behavior
- `assets/design-system/` — the underlying design token system (colors, type, spacing, effects) that `assets/site.css` builds on
- `assets/hexie-mark.png` — brand mark, used as the favicon
- `design-source/` — the original design-tool export this site was built from (not used by the live pages; kept for provenance)

## Running locally

No build step. Serve the folder with any static file server, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploying to GitHub Pages

Push this repo to GitHub, then enable Pages (Settings → Pages → deploy from the `main` branch, root folder). `index.html` is the entry point.

## Known placeholders

- No real brand photography — sections use duotone gradient placeholder tiles.
- Fonts (Hanken Grotesk, Newsreader, JetBrains Mono) are open-source substitutes loaded from Google Fonts; swap for licensed brand fonts if available.
- The contact form has no backend — it fakes a successful submission client-side (see `assets/site.js`).
- Office addresses/phone numbers are placeholders.
