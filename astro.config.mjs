import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://reem-brimo.github.io/reem-brimo-ktabophobia.github.io/',  // Update this to your actual domain
  output: 'static',
  integrations: [sitemap()],
});