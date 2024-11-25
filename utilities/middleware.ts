import { type CookieOptions, createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

type Cookie = { name: string; value: string; options: CookieOptions };

export async function updateSession(request: NextRequest) {
  const responsePayload = { request };

  let response = NextResponse.next(responsePayload);

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          function requestCookieSetter(cookie: Cookie) {
            const { name, value } = cookie;
            request.cookies.set(name, value);
          }
          cookiesToSet.forEach(requestCookieSetter);
          response = NextResponse.next(responsePayload);
          function responseCookieSetter(cookie: Cookie) {
            const { name, value, options } = cookie;
            return response.cookies.set(name, value, options);
          }
          cookiesToSet.forEach(responseCookieSetter);
        },
      },
    }
  );

  if (request.nextUrl.pathname === "/") {
    return response;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && !request.nextUrl.pathname.startsWith("/signin") && !request.nextUrl.pathname.startsWith("/signup")) {
    const url = request.nextUrl.clone();
    url.pathname = "/signin";
    return NextResponse.redirect(url);
  }
  return response;
}
