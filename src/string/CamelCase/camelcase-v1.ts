export function camelCase(text:string):string {
  // Step 1: convert to lowercase
  text = text.toLowerCase();

  // Step 2: split words by spaces
  const words = text.trim().split(/\s+/);

  // Step 3 & 4: build camelCase
  return words
    .map((word, index) => {
      if (index === 0) return word; // first word stays lowercase

      // capitalize first letter of other words
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}
