import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUsers";
export function useUsers(filter, sort, paginate) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["users", filter, sort, paginate],
    queryFn: () => getUsers(filter, sort, paginate),
  });

  return { data, error, isLoading };
}
