# Portfolio — Agent Instructions

## Project Overview

Portfolio is a designer’s portfolio website for showcasing work, case studies, and professional information. The primary technical priority is website speed, especially on mobile devices and slow connections.

Current state: the English portfolio website is implemented from the supplied brief. Four supplied case studies are now implemented: Cleanly, HR Boost, Fleeto and Nova Bank. Fleeto has a supplied low-resolution screenshot. Other case studies currently have typographic covers. The CV PDF has not been supplied. Five visual references were supplied and applied in the latest redesign. Do not present placeholder content as the designer’s actual work.

## Stack and Architecture

- Astro with static generation (`output: 'static'`).
- TypeScript in `strict` mode with `noUncheckedIndexedAccess`.
- SCSS through Sass; CSS custom properties for values that change with the theme.
- GSAP for purposeful animations, respecting `prefers-reduced-motion`.
- Node.js 24 LTS (see `.nvmrc`), npm, and `package-lock.json`.
- Spec Kit: `.specify/` and `.agents/skills/speckit-*/`.

Preserve this stack. Add frameworks, UI libraries, server services, and dependencies only when justified by the task. Use Astro for standard pages and components; implement interactivity through small TypeScript modules.

## File Structure

- `src/pages/` — website routes.
- `src/layouts/Layout.astro` — HTML document, metadata, and initial theme application.
- `src/components/` — reusable components; The header contains navigation and language selection.
- `src/styles/_tokens.scss` — light-only color tokens.
- `src/styles/global.scss` — global styles.
- `src/scripts/motion.ts` — GSAP module.
- `public/` — files served without build processing, when needed.
- `dist/`, `.astro/`, and `node_modules/` — generated files; do not edit manually or commit to Git.

## Core Rules

### Performance

- Preserve static HTML and minimize browser JavaScript.
- Load heavy modules only where needed; keep GSAP in a separate dynamically imported module.
- Use Astro image optimization, appropriate dimensions, and modern formats where suitable. Set image dimensions or aspect ratios to prevent layout shifts.
- Lazy-load images below the fold; do not lazy-load the primary image in the first viewport.
- Minimize font families and weights; prefer locally hosted WOFF2 files for custom fonts.
- Avoid heavy background videos, continuous effects, and dependencies added for minor interactions.
- Aim for a mobile Lighthouse Performance score of 95+. This is a target, not a verified result: do not claim a score without measuring it.

### Styles and Themes

- Write styles in SCSS and use `@use` for shared modules.
- Use semantic CSS variables for component colors; use the light-only palette.
- The site is light-only with a white background, including when the operating system uses dark mode. Do not reintroduce a theme switch or saved theme preference.

### Animation and Accessibility

- Animation supports content and navigation; it must not delay access to content.
- Respect `prefers-reduced-motion`, including changes while the page is open.
- Prefer `transform` and `opacity` for motion; avoid animations that repeatedly trigger layout calculations.
- Clean up GSAP contexts and event listeners when a component or page is no longer in use.
- Use semantic HTML, native buttons, clear control names, and visible keyboard focus.
- Check readability, contrast, and interaction on narrow screens.

### Code and Content

- Preserve strict typing; do not use `any` or disable checks to hide errors.
- Keep components and modules small with clear responsibilities. Avoid abstractions without a concrete need.
- Do not invent the designer’s experience, clients, testimonials, results, or contact details. Clearly identify demonstration content.
- Preserve language and content outside the task’s scope. Support English and Ukrainian using the header language toggle. Keep translations, metadata, accessibility labels, and the document language in sync. English is the default and explicit preferences persist.
- Never store secrets in code, documentation, or client-exposed environment variables.
- Do not overwrite unrelated changes or update dependencies unnecessarily. Keep the lockfile consistent with `package.json`.

## Workflow and Verification

1. Before making changes, read the relevant files, `README.md`, and any existing task specifications.
2. Complete the requested task within its scope while preserving Spec Kit files.
3. For tasks using Spec Kit, read the relevant skill instructions in `.agents/skills/`. The constitution at `.specify/memory/constitution.md` is currently an unfilled template; its placeholders are not agreed project rules.
4. After code changes, run `npm run build`: it checks Astro/TypeScript and generates the static site. Use `npm run check` for a standalone type check.
5. After interface changes, check mobile and desktop layouts, keyboard interaction, and reduced motion. For theme changes, also check page reloads and unavailable `localStorage`.
6. Add meaningful tests for complex logic and regressions; avoid tests that merely duplicate the implementation. Documentation-only changes do not require a build.
7. In the final response, briefly describe what changed, which checks ran, and what remains unverified. Never report a check as successful without running it.

## Commands

```sh
npm ci              # Install dependencies from the lockfile
npm run dev         # Local development; use the URL printed by Astro
npm run check       # Check Astro and TypeScript
npm run build       # Type checking and production build into dist/
npm run preview     # Preview the production build
```

Communicate with the user in Ukrainian unless they request another language. Keep technology names, APIs, and code identifiers in their original form.

## Case study consistency

For any case study creation or revision, follow `docs/case-study-guidelines.md`. Cleanly is the accepted visual reference; preserve its content unless explicitly requested. Reuse shared case components and typography; update the homepage preview when project imagery changes.
