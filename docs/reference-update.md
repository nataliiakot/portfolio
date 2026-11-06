# Reference redesign verification — 2026-11-02

The latest five image references supersede the earlier hero/palette. DESIGN.md records their roles. The visible name is Natalia Kot as requested; original email, LinkedIn and phone URLs remain unchanged.

- Centered, selectable Lora name with pale-blue selection backgrounds and blue handles; one GSAP reveal with reduced-motion support.
- Real navigation in a frosted dock. Primary buttons use a lavender/forest liquid-glass gradient, bright inset rim, static backdrop blur and offset shadow. Opaque fallback preserves function without backdrop-filter.
- Shared browser-frame project previews: blue, pink and green stages. No copied project title, URL, people or marketing claims. Placeholder content is explicitly labeled and development-only.
- Supplied fourth artwork is optimized into 22–136 KB responsive WebP variants. Sources documented in docs/artwork.md.
- Forest, pink, cream and lime tokens support both themes.
- npm test: 4/4 publication tests pass. Production build: 0 type errors or warnings.
- Chrome 1440px desktop and 390px mobile, light/dark: no JS errors, no horizontal overflow; axe WCAG A/AA reported no violations. Menu, keyboard Escape, theme persistence, blocked storage, no-JS system theme and no-JS menu also passed.

The real CV and real case-study materials remain outstanding. No Lighthouse score or deployed-domain behavior is claimed.

Final checks: selection animation returns to a static state when reduced motion is enabled. A measured 320px project-grid overflow was fixed with shrinkable grid columns and explicit frame widths; checks passed at 320/375/768/1024px. Primary-button white text has calculated contrast of at least 6.63:1 at the gradient endpoints after limiting highlight opacity.
