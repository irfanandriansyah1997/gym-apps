import type { NextRequest } from "next/server";
import { NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest) {
  const { device } = userAgent(request);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";

  if (typeof window === "undefined") {
    process.env.TZ = "Asia/Jakarta";
  }

  request.nextUrl.searchParams.set("viewport", viewport);
  return NextResponse.rewrite(request.nextUrl);
}
