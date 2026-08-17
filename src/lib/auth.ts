const AUTH_KEY = "gym_auth";
const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "goldstandard2026";

export interface AuthState {
  isLoggedIn: boolean;
  username: string;
}

export function getAuth(): AuthState {
  if (typeof window === "undefined") return { isLoggedIn: false, username: "" };
  const data = localStorage.getItem(AUTH_KEY);
  if (data) {
    try {
      return JSON.parse(data);
    } catch {
      return { isLoggedIn: false, username: "" };
    }
  }
  return { isLoggedIn: false, username: "" };
}

export function login(username: string, password: string): boolean {
  if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
    const state: AuthState = { isLoggedIn: true, username };
    localStorage.setItem(AUTH_KEY, JSON.stringify(state));
    return true;
  }
  return false;
}

export function logout(): void {
  localStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated(): boolean {
  return getAuth().isLoggedIn;
}
