export class SessionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SessionError";
  }
}

export class ExpiredSessionError extends SessionError {
  constructor() {
    super("Session has expired");
    this.name = "ExpiredSessionError";
  }
}

export class InvalidSessionError extends SessionError {
  constructor() {
    super("Session is invalid");
    this.name = "InvalidSessionError";
  }
}

export class MissingSessionError extends SessionError {
  constructor() {
    super("Session is missing");
    this.name = "MissingSessionError";
  }
}
