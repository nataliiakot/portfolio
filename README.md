# Nataliia Kot — Portfolio

Bilingual English/Ukrainian UX/UI & Product Designer portfolio. Built with Astro static output, strict TypeScript, SCSS, and GSAP; fonts and project imagery are hosted locally. Includes Cleanly, HR System, Fleeto, Nova Bank, and Steady case studies.

## Development

Use Node.js 24 LTS (see `.nvmrc`).

```sh
npm ci
npm run dev
```

```sh
npm test        # Content publication tests
npm run build   # Astro/TypeScript checks and static build
npm run preview # Preview dist/
```

## Source

- `src/pages/` — homepage, case routes, CV, and 404.
- `src/content/` — project narratives, personal information, and translations.
- `src/components/` — shared UI, case blocks, image lightbox, hero icons, and cursor.
- `src/assets/` — source imagery; Astro generates responsive WebP assets.
- `src/styles/` — shared typography, layout, and responsive styles.
- `public/` — favicons, tool icons, and static files.
- `docs/case-study-guidelines.md` — shared case structure and presentation rules.
- `docs/` — content guidance and asset/evidence provenance.

The site uses a white theme, respects reduced motion, and supports keyboard navigation. Case images open in a full-screen viewer; Escape, the close button, or a click outside the image dismisses it.

## Deployment

```sh
PUBLIC_SITE_URL=https://your-domain.example npm run build
```

Replace the example with the actual public origin for canonical and social URLs. Deploy `dist/` to a static host supporting directory indexes and `404.html`.

Dependencies, generated output, environment secrets, local caches, and unused historical media are not required in the repository. Keep `.env.example` as the configuration template; never commit actual secrets.
