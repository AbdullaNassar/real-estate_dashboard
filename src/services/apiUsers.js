import supabase from "./supabase";

export async function getUsers(filter, sortBy, paginate) {
  let query = supabase.from("users").select("*", { count: "exact" });

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
    throw new Error("users can not be loaded");
  }
  return { data, count };
}

export async function createUser(newUser) {
  console.log(newUser);
  const { data, error } = await supabase
    .from("users")
    .insert([newUser])
    .select();
  if (error) {
    console.error(error);
    throw new Error("Add new user cannot be done");
  }
  return data;
}

export async function deleteUser(userId) {
  const { error } = await supabase.from("users").delete().eq("id", userId);
  if (error) {
    console.log(error);
    throw new Error("Delete new user failed");
  }
}
