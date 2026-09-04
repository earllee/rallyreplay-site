import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL ?? 'https://earllee.github.io';
const requestedBase = process.env.BASE_PATH ?? '/rallyreplay-site';
const base = requestedBase === '/' ? '/' : `/${requestedBase.replace(/^\/+|\/+$/g, '')}`;
const indexedRoutes = new Set(['/', '/how-it-works/', '/faq/', '/support/', '/privacy/', '/press/']);

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        const route = base === '/' ? pathname : pathname.slice(base.length) || '/';
        return indexedRoutes.has(route);
      },
    }),
  ],
});
