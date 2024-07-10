import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://obtuse.kr",
  integrations: [tailwind(), sitemap(), mdx()],
  server: {
    host: "0.0.0.0",
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
