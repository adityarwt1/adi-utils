export function escapeHTML(text: string): string {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    switch (char) {
      case "<":
        result += "&lt;";
        break;
      case ">":
        result += "&gt;";
        break;
      case "&":
        result += "&amp;";
        break;
      case '"':
        result += "&quot;";
        break;
      case "'":
        result += "&#39;";
        break;

      default:
        result += char;
    }
  }

  return result;
}
