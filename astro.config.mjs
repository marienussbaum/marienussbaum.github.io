// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

// Les anciennes adresses servies comme pages-relais ne vont pas dans le sitemap.
const redirects = JSON.parse(readFileSync(new URL('./src/lib/redirects.json', import.meta.url), 'utf8'));
const stubPaths = new Set(Object.keys(redirects));

export default defineConfig({
  site: 'https://marienussbaum.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => {
        const path = decodeURI(new URL(page).pathname);
        return !stubPaths.has(path);
      },
    }),
  ],
});
