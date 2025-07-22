import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUsers";
export function useUsers() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return { data, error, isLoading };
}
