export function countWords(text: string): number {
  const clean = text.trim();

  if (clean.length === 0) return 0;

  return clean.split(/\s+/).length;
}
