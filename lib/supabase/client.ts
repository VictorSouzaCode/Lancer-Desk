import { createBrowserClient } from "@supabase/ssr";

// This is for client components.
// client components use: import { createClient } from "@/lib/supabase/client"

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}