import type { APIRoute } from 'astro';
import { home, llmsFacts, pageMeta } from '../content/site';
import { absoluteUrl } from '../lib/schema';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const pages = Object.values(pageMeta)
    .map((page) => `- [${page.title}](${absoluteUrl(page.path, site!)}): ${page.llmsDescription}`)
    .join('\n');
  const facts = llmsFacts.map((fact) => `- ${fact}`).join('\n');
  const body = [
    '# Rally Replay',
    `> ${home.directAnswer}`,
    '## Pages',
    pages,
    '## Facts',
    facts,
    '## Contact',
    'Email [earlvlee@gmail.com](mailto:earlvlee@gmail.com) for support, bug reports, feature requests, or press questions.',
  ].join('\n\n');

  return new Response(`${body}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
