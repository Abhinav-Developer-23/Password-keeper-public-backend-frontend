import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  let cookie = request.cookies.get("password-keeper-storage");

  console.log("cookie ka value is ", cookie);

  if (!cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (cookie) {
    const jwt = (JSON.parse(cookie.value));

    if (jwt.expireAt < new Date().getTime()) {
      request.cookies.delete('password-keeper-storage')
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: "/password-keeper/save-password",
};
