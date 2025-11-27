export function removeSpaces(text: string): string {
  return text.trim().replace(/\s+/g, " ");
}
