import { cookies } from "next/headers";

import { getSessionConfig } from "./config";
import { SessionError } from "./errors";

export function deleteSession(): void {
  try {
    const { cookieName = "session" } = getSessionConfig();
    // Correct usage: pass an options object with the name of the cookie and additional properties
    cookies().set({
      name: cookieName,
      value: "",
      path: "/",
      maxAge: -1, // This immediately expires the cookie, effectively deleting it
    });
  } catch (error) {
    throw new SessionError("Failed to delete session"); // Handle any cookie deletion errors
  }
}
