# Verification — 2026-11-02

- `npm test`: 4 publication-rule tests passed (empty list, drafts/incomplete content, complete content, invalid/duplicate slugs).
- `npm run build`: passed; 0 Astro/TypeScript errors, warnings or hints. Static home and 404 generated; no fake project routes.
- Chrome/Playwright: desktop 1440 × 1000 and mobile 390 × 844, light and dark; 0 page errors. Axe WCAG 2/2.1 A/AA scans reported no violations in those four combinations. This is automated evidence, not a full accessibility certification.
- Verified menu open/close, Escape focus return, anchor navigation, theme persistence across reload, blocked localStorage, system dark mode without JavaScript, and a usable native menu without JavaScript.
- Verified no horizontal overflow at widths 320, 375, 390, 768, 1024 and 1440; English page content and labels; contact URLs; successful font, CSS, script, favicon and hero loads.
- Production excludes development-only project placeholders; unknown project URLs return the 404 page.
- An isolated copy under `/tmp/portfolio-case-fixture` generated a test-only case study. Direct opening, browser refresh, All work navigation, missing optional sections and mobile layout passed; axe reported no violations. The fixture was never added to Portfolio content or its production output. Empty arrays were separately checked for stray zeroes and empty headings.
- GSAP respects a switch to reduced motion during playback. Generated hero WebP variants range from about 26 KB to 142 KB; fonts are served locally.
- A fresh read-only code review identified a test assertion that would block adding real projects; fixed. No further material issues were reported.

Not verified: real CV access and embedded certificate links (PDF missing), real case-study content (not supplied), supplied-image fidelity (reference images missing), external recipients' availability, deployed domain/hosting, or a Lighthouse score. Configure the real `PUBLIC_SITE_URL` before deployment. The generated hero is a documented decorative replacement.

Browser QA used installed headless Chrome after the standard computer-use tool failed to start. Temporary QA servers were stopped; the user-requested development preview remains available at the URL printed by Astro.
