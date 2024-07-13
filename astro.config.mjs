import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://obtuse.kr",
  integrations: [tailwind(), sitemap(), mdx(), react()],
  server: {
    host: "0.0.0.0"
  },
  image: {
    remotePatterns: [{
      protocol: "http",
      hostname: import.meta.env.STRAPI_URL
    }]
  },
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  })
});