import { defineConfig } from 'astro/config';
export default defineConfig({ output: 'static', devToolbar: { enabled: false }, site: process.env.PUBLIC_SITE_URL || undefined });
