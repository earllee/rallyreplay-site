const base = import.meta.env.BASE_URL;

/** Prefix a site-relative URL with Astro's configured base path. */
export function href(path = '/'): string {
  if (!path.startsWith('/')) {
    throw new Error(`href() expects a root-relative path, received: ${path}`);
  }

  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.replace(/^\/+/, '');
  return normalizedPath ? `${normalizedBase}${normalizedPath}` : normalizedBase;
}
