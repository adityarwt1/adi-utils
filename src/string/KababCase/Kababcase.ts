export function kebabCase(text: string): string {
  return text
    .toLowerCase() // make everything lower
    .trim() // remove starting/ending spaces
    .replace(/\s+/g, "-") // replace spaces with -
    .replace(/[^a-z0-9-]/g, "") // remove special characters
    .replace(/--+/g, "-"); // fix multiple ---
}
