// @ts-check
import { defineConfig } from 'astro/config';

// Static, no-backend site (v1). See Dynasty_Website_Product_Vision.
// Served from the root via the custom domain dynasty-volleyball.ca
// (see public/CNAME). No `base` needed — assets resolve at the root.
export default defineConfig({
  site: 'https://dynasty-volleyball.ca',
});
