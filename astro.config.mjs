// @ts-check
import { defineConfig } from 'astro/config';

// Static, no-backend site (v1). See Dynasty_Website_Product_Vision.
// Deployed as a GitHub Pages project site: https://<username>.github.io/DynastyVB
// - `base` must match the repo name; change it if the repo is named differently.
// - Once you know the Pages URL (or buy dynastyvb.ca), set `site` to enable
//   canonical + Open Graph URL tags, e.g. site: 'https://<username>.github.io'.
export default defineConfig({
  base: '/DynastyVB',
});
