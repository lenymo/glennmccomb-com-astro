// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://glennmccomb.com",
  prefetch: true,
  integrations: [react(), mdx(), sitemap()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: ["./src/styles"],
          silenceDeprecations: ["import", "global-builtin", "color-functions"],
        },
      },
    },
  },
});
