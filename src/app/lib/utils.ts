export function isValidUsername(username: string): boolean {
  // Regular expression to allow only letters, numbers, and dashes
  const regex = /^[a-zA-Z0-9-]+$/;
  return regex.test(username);
}

export function formatCentsToEurs(cents: number) {
  const euros = cents / 100;
  return euros.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
}

export function getPublicDataFromUser(user: any) {
  return {
    userId: user._id.toString(),
    username: user.username,
    messagePrice: user.messagePrice,
    isVerified: user.isVerified,
  };
}

export function sanitizeMessage(message: string): string {
  // Regex to match URLs (http, https, www)
  const urlRegex = /(?:https?:\/\/|www\.)[^\s]+/g;

  // Regex to match domain names (e.g., cruwi.com)
  const domainRegex = /\b(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?!@)\b/g;

  // Regex to match email addresses
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

  // Sanitize URLs
  let sanitizedMessage = message.replace(urlRegex, (url) => {
    return url
      .replace(/\./g, "[dot]") // Replace dots in the domain
      .replace(/https?:\/\//g, "[https://]") // Replace 'http://' or 'https://' with '[https://]'
      .replace(/www\./g, "[www]"); // Replace 'www.' with '[www]'
  });

  // Sanitize domain names (without protocol)
  sanitizedMessage = sanitizedMessage.replace(domainRegex, (domain) => {
    return domain.replace(/\./g, "[dot]");
  });

  // Sanitize email addresses
  sanitizedMessage = sanitizedMessage.replace(emailRegex, (email) => {
    return email.replace(/\./g, "[dot]").replace(/@/g, "[at]");
  });

  return sanitizedMessage;
}
