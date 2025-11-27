export function snakeCase(text: string): string {
  return text
    .toLowerCase() // convert to lower case
    .trim() // remove extra spaces
    .replace(/\s+/g, "_") // replace spaces with _
    .replace(/[^a-z0-9_]/g, "") // remove special chars
    .replace(/__+/g, "_"); // handle multiple __
}
