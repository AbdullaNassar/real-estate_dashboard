import supabase from "./supabase";

export async function getUsers() {
  const { data, error } = await supabase.from("users").select("*");
  if (error) {
    console.log(error);
    throw new Error("users can not be loaded");
  }
  return data;
}
