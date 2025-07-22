import supabase from "./supabase";

export async function getProperties() {
  const { data, error } = await supabase.from("properites").select(`
    *,
    host (
      *
    )
  `);
  if (error) {
    console.log(error);
    throw new Error("Listings can not be loaded");
  }
  return data;
}
