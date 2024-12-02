import { createClient } from "@supabase/supabase-js";
import AsyncStorage from '@react-native-async-storage/async-storage';

SUPABASE_URL = "https://rohrryvdrrpyhxhqeiyh.supabase.co"
SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvaHJyeXZkcnJweWh4aHFlaXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4OTkxMzcsImV4cCI6MjA0MzQ3NTEzN30.d-sMTzr333OwxB4CvW2TfgoicH8HRx1RjSE4y39qU9M"

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
      },
}
)

export default supabase;