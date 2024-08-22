import { createSession } from "./createSession";
import { getSession } from "./getSession";
import { MissingSessionError, SessionError } from "./errors";

export async function updateSession(): Promise<void> {
  try {
    const session = await getSession(); // Retrieve current session
    if (!session) {
      throw new MissingSessionError(); // Throw specific error if session doesn't exist
    }

    // Recreate the session with the same userId, extending the expiration
    await createSession(session.userId);
  } catch (error) {
    if (error instanceof MissingSessionError) {
      throw error; // Propagate known error
    } else {
      throw new SessionError("Failed to update session"); // General error for other issues
    }
  }
}
