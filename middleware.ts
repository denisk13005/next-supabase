import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
// middleware qui va checker si on est connecté avant d'autoriser l'accès à une page, sinon redirige vers login

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log(session, "session");

  if (!session) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }
  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
