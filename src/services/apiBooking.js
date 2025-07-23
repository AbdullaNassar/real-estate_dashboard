import supabase from "./supabase";

export async function getBookings(filter, sortBy, paginate) {
  let query = supabase
    .from("bookings")
    .select(`*, guest(*)`, { count: "exact" });

  // apply filter to query
  if (filter && filter.value !== "all") {
    query = query.eq(filter.column, filter.value);
  }

  // apply sort to query
  if (sortBy && sortBy !== "all") {
    query = query.order(sortBy);
  }

  // apply paginate
  if (paginate) {
    const { page, limit } = paginate;
    const from = (page - 1) * limit;
    const to = from + limit - 1;
    query = query.range(from, to);
  }
  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error("bookings can not be loaded");
  }
  return { data, count };
}
