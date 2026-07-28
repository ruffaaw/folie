const COOKIE_NAME = "admin_session";
const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 dni

function getSecret(): string {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("Brak zmiennej środowiskowej AUTH_SECRET");
  return secret;
}

// Buffer nie jest dostępny w Edge runtime (middleware) - używamy btoa/atob,
// które działają identycznie w Node i Edge.
function base64UrlEncode(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function base64UrlDecode(value: string): Uint8Array {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function hmac(payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(payload)
  );
  return base64UrlEncode(new Uint8Array(signature));
}

export async function createSessionCookieValue(): Promise<string> {
  const payload = JSON.stringify({ exp: Date.now() + SESSION_DURATION_MS });
  const encodedPayload = base64UrlEncode(new TextEncoder().encode(payload));
  const signature = await hmac(encodedPayload);
  return `${encodedPayload}.${signature}`;
}

export async function isValidSessionCookieValue(
  value: string | undefined
): Promise<boolean> {
  if (!value) return false;
  const [encodedPayload, signature] = value.split(".");
  if (!encodedPayload || !signature) return false;

  const expectedSignature = await hmac(encodedPayload);
  if (expectedSignature !== signature) return false;

  try {
    const payload = JSON.parse(
      new TextDecoder().decode(base64UrlDecode(encodedPayload))
    );
    return typeof payload.exp === "number" && payload.exp > Date.now();
  } catch {
    return false;
  }
}

export { COOKIE_NAME };
