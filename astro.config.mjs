// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://mistahuman.github.io/template-astro-skeleton-svelte',
  integrations: [
    svelte()
  ],
  vite: {
    plugins: [
      tailwindcss()
    ],
  },
});