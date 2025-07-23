import supabase from "./supabase";

export async function getProperties(filter, sortBy, paginate) {
  let query = supabase.from("properites").select(
    `
    *,
    host (
      *
    )
  `,
    { count: "exact" }
  );

  // apply filter to query
  if (filter && filter.value !== "all") {
    query = query.eq(filter.column, filter.value);
  }
  // // apply sort to query
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
    throw new Error("Listings can not be loaded");
  }
  return { data, count };
}

export async function createList(newList) {
  const { data, error } = await supabase
    .from("properites")
    .insert([newList])
    .select();
  if (error) {
    console.error(error);
    throw new Error("Add new List cannot be done");
  }
  return data;
}

export async function deleteList(listId) {
  const { error } = await supabase.from("properites").delete().eq("id", listId);
  if (error) {
    console.log(error);
    throw new Error("Delete List failed");
  }
}
