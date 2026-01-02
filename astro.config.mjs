import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
    // Remote image domains (if needed in future)
    domains: [],
  },
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // Suppress specific Vite/Rollup warnings about unused imports in Astro's internal modules
          if (
            warning.message.includes("matchHostname") &&
            warning.message.includes("@astrojs/internal-helpers/remote")
          ) {
            return;
          }
          warn(warning);
        },
      },
    },
  },
});
