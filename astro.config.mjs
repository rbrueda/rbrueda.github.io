import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Tailwind import

// https://astro.build/config
export default defineConfig({
    site: 'https://rbrueda.github.io',
    integrations: [tailwind()], // Add tailwind integration array
});