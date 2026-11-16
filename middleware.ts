import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const destination = new URL(request.url);

  if (pathname === "/speakers" || pathname === "/speakers/") {
    destination.pathname = "/keynote-speakers";
    return NextResponse.redirect(destination, 301);
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    destination.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(destination, 308);
  }
}
