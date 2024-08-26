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
