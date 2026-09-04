import { href } from './url';

export function absoluteUrl(path: string, site: URL): string {
  return new URL(href(path), site).href;
}

export function organizationEntity(site: URL) {
  const root = absoluteUrl('/', site);
  return {
    '@type': 'Organization',
    '@id': `${root}#organization`,
    name: 'Rally Replay',
    url: root,
    logo: absoluteUrl('/brand/icon-1024.png', site),
    founder: { '@type': 'Person', name: 'Earl Lee' },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'earlvlee@gmail.com',
      contactType: 'customer support',
    },
  };
}

export function breadcrumbEntity(name: string, path: string, site: URL) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: absoluteUrl('/', site),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name,
        item: absoluteUrl(path, site),
      },
    ],
  };
}
