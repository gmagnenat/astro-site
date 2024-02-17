import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://gm-the-astronaute.netlify.app/',
  integrations: [preact()]
});