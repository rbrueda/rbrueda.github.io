import flowbitePlugin from 'flowbite/plugin'; 

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js' 
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px', // Standard 1080p/2K
        '4xl': '2560px', // QHD+
        '5xl': '3840px', // 4K UHD
      },
    },
  },
  plugins: [
    flowbitePlugin 
  ],
}