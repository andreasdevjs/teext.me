import { cookies } from "next/headers";
import { jwtVerify } from "jose";

import { getSessionConfig } from "./config";
import {
  ExpiredSessionError,
  InvalidSessionError,
  MissingSessionError,
} from "./errors";

// Define SessionPayload
export type SessionPayload = {
  userId: string;
  username: string;
  expiresAt: string; // ISO string for the expiration date
};

export async function getSession(): Promise<SessionPayload | null> {
  // Ensure config values are always defined, otherwise throw an error early
  const {
    secret = "defaultsecret",
    cookieName = "session",
    algorithm = "HS256",
  } = getSessionConfig();

  const sessionToken = cookies().get(cookieName)?.value;
  if (!sessionToken) return null;

  try {
    const key = new TextEncoder().encode(secret);
    const { payload } = await jwtVerify(sessionToken, key, {
      algorithms: [algorithm],
    });

    const session = payload as SessionPayload;

    if (new Date(session.expiresAt) < new Date()) {
      cookies().delete(cookieName); // No need to pass `{ path: '/' }` unless custom
      throw new ExpiredSessionError();
    }

    return session;
  } catch (error) {
    if (
      error instanceof ExpiredSessionError ||
      error instanceof MissingSessionError
    ) {
      throw error;
    }
    throw new InvalidSessionError(); // Generic error for any other verification issues
  }
}
