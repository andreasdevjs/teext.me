export interface SessionConfig {
  secret: string;
  cookieName?: string;
  sessionDuration?: string; // e.g., "1h", "7d"
  algorithm?: "HS256" | "RS256";
  cookieOptions?: CookieOptions;
}

export interface CookieOptions {
  httpOnly?: boolean;
  secure?: boolean;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  path?: string;
  sameSite?: "lax" | "strict" | "none";
}

const defaultConfig: SessionConfig = {
  secret: process.env.SESSION_PASSWORD || "defaultsecret",
  cookieName: "session",
  sessionDuration: "4w",
  algorithm: "HS256",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  },
};

let config = defaultConfig;

export function setSessionConfig(customConfig: Partial<SessionConfig>) {
  config = { ...defaultConfig, ...customConfig };
}

export function getSessionConfig(): SessionConfig {
  return config;
}
