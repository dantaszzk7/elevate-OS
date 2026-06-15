import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Demo mode when Supabase credentials are not configured
export const isDemoMode = !supabaseUrl || !supabaseKey

export const supabase = isDemoMode 
  ? null as any
  : createClient(supabaseUrl, supabaseKey)
