# Hero icon assets

Generated separately with the built-in Imagegen tool on 5 November 2026.
Saved as `src/assets/hero-icons/{figma,photoshop,chatgpt,claude,codex}.png`.
Responsive WebP derivatives are built by Astro. Original scene images are no longer used in the hero.

## Prompt set

Common prompt: one isolated 3D glossy rounded-square app tile; premium thick glass-resin material, beveled corners, subtle transparent rim, upper-left studio lighting, slight perspective and 12-degree counterclockwise tilt. Centered, 75% of a square canvas, fully visible, generous transparent padding, actual alpha. No scene, ground, labels, extra objects or watermark. Coherent floating icon family, readable at 80px.

- Figma: five rounded segments in red, orange, purple, blue and green on a charcoal tile.
- Photoshop: exact cyan letters “Ps” on a deep midnight-blue tile.
- ChatGPT: white interlocking OpenAI knot on an emerald-green translucent tile.
- Claude: orange radial asterisk sunburst on a warm ivory tile.
- Codex: white terminal chevron and underscore “>_” on a dark charcoal-violet tile.

## Behavior

Icons are decorative with empty alt text and an aria-hidden container. Desktop and mobile placement is defined in `HeroIcons.astro`; imagery is not cropped by a background layer. Gentle float animation and the existing text-selection animation respect reduced motion. Text, navigation, and buttons remain live HTML.
