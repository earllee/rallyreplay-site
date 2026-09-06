import type { APIRoute } from 'astro';
import { home, llmsFacts, pageMeta } from '../content/site';
import { SUPPORT_EMAIL } from '../lib/config';
import { absoluteUrl } from '../lib/schema';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const pages = Object.values(pageMeta)
    .map((page) => `- [${page.title}](${absoluteUrl(page.path, site!)}): ${page.llmsDescription}`)
    .join('\n');
  const supportUrl = absoluteUrl('/support/', site!);
  const developerFact = `Developer: independent solo developer. Support: ${supportUrl}${
    SUPPORT_EMAIL ? `, ${SUPPORT_EMAIL}` : ''
  }.`;
  const facts = [...llmsFacts, developerFact].map((fact) => `- ${fact}`).join('\n');
  const contact = `Use the support page at ${supportUrl} for support, bug reports, feature requests, or press questions.${
    SUPPORT_EMAIL ? ` Email ${SUPPORT_EMAIL}.` : ''
  }`;
  const body = [
    '# Replay Rally',
    `> ${home.directAnswer}`,
    '## Pages',
    pages,
    '## Facts',
    facts,
    '## Contact',
    contact,
  ].join('\n\n');

  return new Response(`${body}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
