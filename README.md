# Rally Replay marketing site

Static marketing, support, privacy, FAQ, and press site for Rally Replay. The site is built with Astro 5 and deploys to GitHub Pages without a client-side UI framework.

## Run locally

Requirements: Node.js 22 and npm.

```sh
npm install
npm run dev
```

The default configuration serves the project at `http://localhost:4321/rallyreplay-site/`.

To preview the production build:

```sh
npm run build
npm run preview
```

To test the custom-domain/root-path configuration:

```sh
SITE_URL=http://localhost:4321 BASE_PATH=/ npm run build
SITE_URL=http://localhost:4321 BASE_PATH=/ npm run preview
```

## Deploy

Pushing `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which installs dependencies, builds `dist/`, and deploys it through GitHub Pages.

The workflow sets these deployment values:

```text
SITE_URL=https://YOUR-GITHUB-PAGES-HOST
BASE_PATH=/rallyreplay-site
```

## Switch to the custom domain

To move the site to `https://rallyreplay.app`:

1. Change the workflow environment to `SITE_URL=https://rallyreplay.app` and `BASE_PATH=/`.
2. Add `public/CNAME` containing `rallyreplay.app`.
3. Configure the domain in the repository’s GitHub Pages settings and update its DNS records.

All site-relative links and assets pass through [`src/lib/url.ts`](src/lib/url.ts), so no search-and-replace is required.

## Set the App Store URL

Set `APP_STORE_URL` in [`src/lib/config.ts`](src/lib/config.ts) and rebuild. The shared CTA automatically changes from the “Coming soon to the App Store” badge to an App Store link everywhere it appears.

## Set the support email

Set `SUPPORT_EMAIL` in [`src/lib/config.ts`](src/lib/config.ts) and rebuild. While it is empty, the site directs people to the support page without rendering an email address or `mailto:` link.

## Edit copy

Final page copy, metadata, screenshot descriptions, press facts, and LLM-facing content live in [`src/content/site.ts`](src/content/site.ts). The six page templates consume that module, and `llms.txt` plus `llms-full.txt` are generated from it during the build so they stay in sync.

Downloadable press images and brand files live in `public/press/` and `public/brand/`. Optimized site screenshots and press thumbnails live in `src/assets/`.
