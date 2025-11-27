export function maskPhone(phone: string): string {
  // Extract digits only
  const digitsOnly = phone.replace(/\D/g, "");

  if (digitsOnly.length <= 4) return digitsOnly;

  // Detect country code (if phone > 10 digits)
  const countryLength = digitsOnly.length - 10;
  const countryCode =
    countryLength > 0 ? digitsOnly.slice(0, countryLength) : "";

  const number = digitsOnly.slice(-10);
  const last4 = number.slice(-4);

  // build masked part
  let maskedPart = "";
  for (let i = 0; i < number.length - 4; i++) {
    maskedPart += "*";
  }

  // Format output
  return (countryCode ? "+" + countryCode + " " : "") + maskedPart + last4;
}
