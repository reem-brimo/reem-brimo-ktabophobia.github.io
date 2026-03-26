import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://reem-brimo-ktabophobia.github.io/',
  output: 'static',
  integrations: [sitemap()],
});