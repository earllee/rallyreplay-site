import type { APIRoute } from 'astro';
import { absoluteUrl } from '../lib/schema';

const namedBots = [
  'GPTBot',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'OAI-SearchBot',
];

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const groups = [
    'User-agent: *\nAllow: /',
    ...namedBots.map((bot) => `User-agent: ${bot}\nAllow: /`),
  ];
  const sitemap = absoluteUrl('/sitemap-index.xml', site!);

  return new Response(`${groups.join('\n\n')}\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
