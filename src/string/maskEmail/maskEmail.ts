export function maskEmail(email: string): string {
  const atIndex = email.indexOf("@");
  if (atIndex <= 0) return email; // invalid email or empty username

  const user = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  if (user.length === 1) {
    return "*" + domain;
  }

  // build masked string efficiently
  let masked = user[0];

  for (let i = 1; i < user.length; i++) {
    masked += "*";
  }

  return masked + domain;
}
