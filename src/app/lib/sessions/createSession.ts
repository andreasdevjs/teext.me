import { cookies } from "next/headers";
import { SignJWT } from "jose";

import { getSessionConfig } from "./config";

export async function createSession(userId: string): Promise<void> {
  const {
    secret,
    cookieName = "session",
    sessionDuration = "4w",
    algorithm = "HS256",
    cookieOptions,
  } = getSessionConfig();

  const key = new TextEncoder().encode(secret);
  const expiresAt = new Date(Date.now() + parseDuration(sessionDuration));

  const sessionToken = await new SignJWT({ userId, expiresAt })
    .setProtectedHeader({ alg: algorithm })
    .setIssuedAt()
    .setExpirationTime(sessionDuration)
    .sign(key);

  cookies().set(cookieName, sessionToken, {
    ...cookieOptions, // Apply all custom cookie options
    expires: expiresAt, // Override if custom expiration is provided
  });
}

function parseDuration(duration: string): number {
  const unitMultipliers: { [key in "h" | "d" | "w"]: number } = {
    h: 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
    w: 7 * 24 * 60 * 60 * 1000,
  };
  const match = duration.match(/(\d+)([hdw])/);
  if (!match) throw new Error("Invalid session duration format");
  const [, amount, unit] = match;
  return parseInt(amount) * unitMultipliers[unit as "h" | "d" | "w"];
}
