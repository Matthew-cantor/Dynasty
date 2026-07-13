// @ts-check
import { defineConfig } from 'astro/config';

// Static, no-backend site (v1). See Dynasty_Website_Product_Vision.
// Deployed as a GitHub Pages project site: https://matthew-cantor.github.io/Dynasty
// - `base` must match the repo name exactly (case-sensitive).
// - `site` + `base` together give correct canonical + Open Graph URLs.
export default defineConfig({
  site: 'https://matthew-cantor.github.io',
  base: '/Dynasty',
});
