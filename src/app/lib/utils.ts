export function isValidUsername(username: string): boolean {
  // Regular expression to allow only letters, numbers, and dashes
  const regex = /^[a-zA-Z0-9-]+$/;
  return regex.test(username);
}
