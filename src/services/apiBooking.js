import supabase from "./supabase";

export async function getBookings() {
  const { data, error } = await supabase.from("bookings").select(`
    *,
    guest (
      *
    )
  `);
  if (error) {
    console.log(error);
    throw new Error("bookings can not be loaded");
  }
  return data;
}
