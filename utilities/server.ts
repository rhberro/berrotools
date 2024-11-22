import { type CookieOptions, createServerClient } from "@supabase/ssr";
import { cookies } from 'next/headers'

type Cookie = { name: string; value: string; options: CookieOptions };

export async function createClientForServer() {
  const cookieStore = await cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            function setter(cookieToSet: Cookie) {
              const { name, value, options } = cookieToSet;
              return cookieStore.set(name, value, options)
            }
            cookiesToSet.forEach(setter)
          } catch {}
        },
      },
    }
  );
}
