import { createClient } from '@supabase/supabase-js';

// Public client configuration. Security is enforced by Supabase RLS; never put a service-role key here.
const url = 'https://fmoyndkvlibdxsdnjnub.supabase.co';
const publishableKey = 'sb_publishable_ysfcE7AN-ZeKdx2KgKHUQw_aPLethiH';

export const supabase = createClient(url, publishableKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});