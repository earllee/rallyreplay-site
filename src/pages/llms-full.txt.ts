import type { APIRoute } from 'astro';
import { home, pageMarkdown, pageMeta, type PageKey } from '../content/site';
import { absoluteUrl } from '../lib/schema';

export const prerender = true;

function absolutizeMarkdownUrls(markdown: string, site: URL): string {
  return markdown.replace(/\]\((\/[^)\s]*)\)/g, (_, path: string) => `](${absoluteUrl(path, site)})`);
}

export const GET: APIRoute = ({ site }) => {
  const pageOrder = Object.keys(pageMeta) as PageKey[];
  const pages = pageOrder
    .map((key) => absolutizeMarkdownUrls(pageMarkdown(key), site!))
    .join('\n\n---\n\n');
  const body = ['# Replay Rally', `> ${home.directAnswer}`, pages].join('\n\n');

  return new Response(`${body}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
