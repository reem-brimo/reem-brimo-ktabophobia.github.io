import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://reem-brimo.github.io/ktabophobia/',
  output: 'static',
  integrations: [sitemap()],
});