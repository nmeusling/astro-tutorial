import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://app.netlify.com/sites/sparkly-rabanadas-ef3541/deploys/651cccb1ff95b70008080126",
  integrations: [preact()]
});