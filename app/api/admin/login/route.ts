import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { COOKIE_NAME, createSessionCookieValue } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const { password } = await request.json();
  const hash = process.env.ADMIN_PASSWORD_HASH;

  if (!hash || typeof password !== "string") {
    return NextResponse.json(
      { error: "Nieprawidłowe hasło" },
      { status: 401 }
    );
  }

  const isValid = await bcrypt.compare(password, hash);
  if (!isValid) {
    return NextResponse.json(
      { error: "Nieprawidłowe hasło" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, await createSessionCookieValue(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
