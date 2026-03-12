export function withBase(url?: string): string | undefined {
  if (!url) return url;

  // Leave external and special URLs untouched
  if (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("data:") ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:")
  ) {
    return url;
  }

  // Astro/Vite provides BASE_URL (includes the configured `base`, with trailing slash)
  const base = (import.meta as any).env?.BASE_URL || "/";

  if (url.startsWith("/")) {
    const normalizedBase = String(base).endsWith("/") ? String(base) : `${base}/`;
    return `${normalizedBase}${url.slice(1)}`;
  }

  return url;
}
