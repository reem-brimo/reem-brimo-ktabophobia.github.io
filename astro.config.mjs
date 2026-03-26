import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://reem-brimo.github.io/reem-brimo-ktabophobia.github.io/', // domain + repo path
  base: '/reem-brimo-ktabophobia.github.io/', // the path the site is served under
  output: 'static',
  integrations: [sitemap()],
});
