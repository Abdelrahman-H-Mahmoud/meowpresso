export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-')   // Replace multiple - with single -
    .replace(/^-+/, '')       // Trim - from start of text
    .replace(/-+$/, '');      // Trim - from end of text
}

export function createSeoUrl(id: string, title: string): string {
  return `${id}-${slugify(title)}`;
}

export function extractIdFromSeoUrl(seoUrl: string): string {
  return seoUrl.split('-')[0];
} 