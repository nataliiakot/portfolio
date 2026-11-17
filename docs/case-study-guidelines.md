# Shared case study structure and UI

Established with the user on 5 November 2026. Cleanly is the accepted reference. HR System follows the same visual system. Apply this guidance when other cases are next revised; it does not authorize rewriting them immediately.

## Narrative

1. Project title, concise product premise, role and domain, then an opening product visual.
2. Concrete problem: who is doing what, why it is difficult, and the designer's scope.
3. Roles and needs where useful: role → core need → interface response. Describe real user types; do not invent named personas, biographies, or interview findings.
4. Research: confirmed method and sample, what the supplied evidence establishes, and how it relates to the work. Keep quantitative research separate from usability testing and outcome measurements.
5. Selected decisions: user task/context → design choice → reason → relevant visual. Use meaningful scenario headings rather than a generic list of process phases. Each project retains its own story.
6. Results: shared metric cards for confirmed numbers, then a concise takeaway. Separate product outcomes from design scope such as screen counts. Do not invent baselines, causality, validation, or business impact.
7. End with product screens. Move existing visuals rather than duplicating them.

## Shared presentation

- Reuse CaseStudy, CaseNarrative, CaseOutcomes, CaseImage, and ImageLightbox. Keep a shared type scale, text width, colors, and spacing through `_case-type.scss`.
- Roles use the shared three-column research table, which stacks on mobile.
- Metrics use the shared two-column card grid. A final unpaired card spans both columns; cards stack on mobile. Labels explain each value; descriptions stay short.
- Place research visuals near the decision they support, not in an undifferentiated gallery. For HR System use two compact columns on desktop, one on mobile. A single relevant artifact need not be paired with an unrelated one.
- Product images remain large enough to understand. For HR System use square image corners, as explicitly requested. Keep shared interface cards consistent with Cleanly.
- Every case image supports full-screen viewing, visible native cursor, close button, backdrop dismissal, Escape, and keyboard focus return.
- Keep Ukrainian and English content, control labels, metadata, and document language aligned.
- Avoid repeated images, decorative process diagrams without evidence, external Notion links, heading emojis, and invented claims.
- Update the homepage preview alongside new case imagery; use the user's chosen cover. HR System's selected cover is `src/assets/projects/hr-boost-cover.png`.
- Preserve accepted Cleanly content and unrelated site sections.

## Verification

Run `npm run build` after implementation, plus relevant existing tests. Inspect desktop and mobile, both languages, metric layout, image corners, and full-screen closing behavior. Do not claim a measured performance or outcome without evidence.

## Case writing standard (16 November 2026)

- Use clear English around B2 level: short sentences, familiar words, and active first-person verbs.
- Lead with the designer’s contribution and supported outcomes. Keep scope counts separate from measured results.
- Explain selected decisions with a short hypothesis, what I changed, and the design result. A hypothesis is an expected effect, not evidence of a completed test.
- Keep paragraphs to one point, usually 20–40 words. Remove repeated feature lists and descriptions that the image already explains.
- Preserve research facts and business rules. Do not claim an improvement was measured unless evidence supports it.
- Keep Ukrainian copy aligned and end each case with its existing product images.

## Opening summary

Use the same opening sequence in every case: (1) one heading combining project name, colon, and a short product description; (2) a first-person subtitle explaining what Nataliia designed; (3) three compact white outlined pills for Role, Business domain, and Team; labels and values share one inline 14px style, with natural wrapping; (4) individual metric cards; (5) the existing opening product image. Do not repeat the contribution below the tags. Keep metric categories out of the visible cards and keep confirmed outcomes separate from scope counts through their labels and notes. Stack tags and metric cards on narrow mobile screens. Preserve the lead designer role and confirmed team details. Do not repeat opening metrics in a second “The case at a glance” block. Use burgundy for The problem and Core need labels, and dark green for Design response labels. Cleanly and HR retain fuller research and reasoning in B2 English.

All UI text must be at least 14px, including metadata, metric notes, captions, and mobile navigation. Let content wrap and adapt the layout; do not shrink text below this minimum.

The public site is English-only as requested on 16 November 2026; do not show language controls or apply saved Ukrainian preferences.

## Storytelling revision (16 November 2026)

Each case follows a concrete task: a cleaner waiting for job confirmation; HR reviewing leave with employee and team context; a dispatcher moving from location to trip details; a bank customer checking a payment; a fitness user choosing a session. Introduce the product in the opening line. Explain the tension, the designer’s choice, and what the interface enables. Use short connected paragraphs instead of repeating Hypothesis / What I changed / Design result cards. Keep hypotheses as expectations, preserve supplied evidence, and do not add measured outcomes. Cleanly and HR retain deeper research and reasoning; other cases remain shorter. Keep all supplied visuals in their established order and preserve existing Skills navigation anchors.

## Responsive text wrapping

Apply the shared `caseText` formatter to displayed case copy at render time. Keep single-letter English words attached to the following word, counts attached to their descriptions, and short final words with a preceding word when the phrase stays compact. Use `text-wrap: pretty` for body text and preserve the shared heading styles. Do not insert manual line breaks for a specific viewport or alter source wording, image paths, or anchor IDs to control wrapping. Verify narrow mobile widths and desktop tables for overflow.

## Team details (17 November 2026)

Include Team as one of the three opening project tags. Confirmed Cleanly team: one designer, one project manager, one developer. Confirmed HR System team: three designers, one project manager, four developers. Fleeto records two designers; include the already confirmed project manager and developers without adding an unsupported engineering headcount. Nova Bank and Steady list the lead designer, project manager, and developers without headcounts. Cleanly product visuals are capped at 880px and research evidence at 800px on desktop; retain available width on mobile and full-screen viewing.
