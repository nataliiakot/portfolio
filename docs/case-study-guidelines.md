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
