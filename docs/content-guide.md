# Editing the portfolio

## Run locally

Use Node.js 24 LTS and npm. From the project directory:

```sh
npm ci
npm run dev
```

Use the local URL printed by Astro (normally http://localhost:4321). `npm test` checks case-study publication rules; `npm run build` checks TypeScript and builds the static website into `dist/`. `npm run preview` serves that build.

## Personal information

Edit `src/content/site.ts` for biography, contact details, experience, expertise, languages, education and certifications. Keep all visible copy in English. Metrics belong only to the corresponding employment description. The optional external Notion URL is configuration, not a substitute for Selected Work.

## Add the CV

The real CV PDF has not been supplied. Put it at `public/assets/nataliia-kot-cv.pdf`, then set `profile.cvPath` to `/assets/nataliia-kot-cv.pdf`. The desktop and mobile headers will show View CV. Use a website path, not a local filesystem path. Until configured, the link is intentionally absent. After adding the PDF, verify its link and copy any reliably extracted education/certificate URLs into the corresponding `href` fields; do not guess them.

## Add a real case study

Edit the `projects` array in `src/content/projects.ts`. Use the `Project` interface. The following is a schema illustration, not client work; replace every example with supplied materials before publishing:

```ts
{
  slug: 'actual-project-slug',
  title: 'Actual supplied project title',
  category: 'Supplied project category',
  summary: 'A short introduction based on the supplied materials.',
  draft: true,
  cover: {
    src: '/projects/actual-project/cover.webp',
    alt: 'Describe the actual cover image.',
    width: 1600,
    height: 1000,
  },
  role: 'Supplied role', // Optional; likewise scope, year and duration.
  context: ['Supplied context and challenge.'],
  approach: ['Supplied approach and key decisions.'],
  visuals: [{
    src: '/projects/actual-project/detail.webp',
    alt: 'Describe the actual design shown.',
    width: 1600,
    height: 1000,
    caption: 'Explain the visual using supplied information.',
  }],
  results: ['Evidence-supported results and reflections.'],
}
```

Place optimized images in `public/projects/<slug>/`. Provide accurate width/height and descriptive alt text. Public assets are served as-is: optimize these images before adding them. Omit unknown optional fields and sections. Set `draft: false` (or remove the draft flag) only when ready.

A project is published only with a valid unique lowercase hyphenated slug, title, category, summary, complete cover metadata, and at least one nonempty story section. Drafts and incomplete records are excluded from navigation and generated pages. `npm run build` generates `/projects/<slug>/index.html`; use a static host supporting directory indexes and `404.html`. Direct links and browser refresh need no client-side router. Next-project links are generated from published entries only.

No actual projects have been supplied, so production has no project pages. Development mode shows three clearly labeled decorative layout placeholders with no fake case-study links. Production shows the honest empty state with a working contact link. To preview the real production behavior, build and use `npm run preview`.

## Artwork and fonts

Lora and Manrope Latin variable WOFF2 fonts are bundled locally through Fontsource. Palette and theme tokens live in `src/styles/_tokens.scss`; styles live in `src/styles/global.scss`.

`src/assets/landscape.png` is the user-supplied fourth visual reference, shown in a decorative band below the name hero. The name hero, animated selection handles, liquid-glass controls and browser-framed project previews follow the latest five references. `src/assets/hero.png` is an archived, unused generated image. Provenance and the generation prompt are in `docs/artwork.md`. Astro emits responsive WebP sizes for the supplied landscape. Keep text out of the artwork so objects remain visible. `public/social.jpg` is a derivative social crop; regenerate it if the hero changes. No portrait is shown because none was provided.

## Before deployment

Set `PUBLIC_SITE_URL` to the real HTTPS origin (see `.env.example`) before building. This enables absolute canonical and social-image URLs; without a confirmed domain these URLs are intentionally omitted. Open Graph and Twitter title/description tags are already present. Keep `public/social.jpg` available.

This task does not deploy the site. Verify real CV access, certificate links and all supplied project pages once those materials are added. Test mobile and desktop, light and dark themes, keyboard navigation, reduced motion and direct project refreshes.
