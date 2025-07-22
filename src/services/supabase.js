import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tcejczlxhuzilvyobair.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZWpjemx4aHV6aWx2eW9iYWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxMzM2NjcsImV4cCI6MjA2ODcwOTY2N30.vmbVgidY8ieAbxtDGUI2dsjR7-TNvRr-YC0zJZW8cZM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
