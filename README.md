# Natalia Kot — Portfolio

Fast, English-language UX/UI & Product Designer portfolio built with Astro static output, strict TypeScript, SCSS and GSAP. Lora and Manrope fonts are served locally. The site is light-only with English and Ukrainian language selection.

```sh
npm ci
npm run dev
```

Use Node.js 24 LTS. `npm test` checks project publication rules. `npm run build` runs Astro/TypeScript checks and generates `dist/`. `npm run preview` serves the production build.

## Content and architecture

- `src/content/site.ts` — supplied personal details, experience, expertise, education and contacts.
- `src/content/projects.ts` — typed case studies and publication validation.
- `src/pages/index.astro` — landing page.
- `src/pages/projects/[slug].astro` — statically generated, directly linkable case study routes.
- `src/components/CaseStudy.astro` — reusable case study template; missing sections are omitted.
- `src/pages/404.astro` — not-found page.
- `src/styles/` — SCSS, light-only tokens and local fonts.
- `src/scripts/motion.ts` — dynamically loaded, reduced-motion-aware hero sequence.
- `.agents/skills/` and `.specify/` — preserved agent skills and Spec Kit.

See [the content guide](docs/content-guide.md) for adding projects, CV, certificate links and deployment metadata. The original brief is in `docs/brief.txt`.

## Materials still needed

The CV PDF, a real portrait (optional), and actual project titles, imagery and case-study materials have not been supplied. Five visual references have been applied to the latest design. There are no invented client projects. Development-only layout placeholders are clearly labeled and have no dead links; production renders a contact invitation until real projects are added. The minimal name hero and liquid-glass controls follow the supplied references. A landscape band uses the user-supplied fourth image; provenance is documented in `docs/artwork.md`.

Configure `PUBLIC_SITE_URL` with the real origin before deployment. No hosting or deployment is included.
# portfolio
