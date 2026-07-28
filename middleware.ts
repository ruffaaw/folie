import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, isValidSessionCookieValue } from "@/lib/auth";

const PUBLIC_PATHS = ["/admin/login", "/api/admin/login"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  const sessionCookie = request.cookies.get(COOKIE_NAME)?.value;
  const isValid = await isValidSessionCookieValue(sessionCookie);

  if (!isValid) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "Brak dostępu" }, { status: 401 });
    }
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
