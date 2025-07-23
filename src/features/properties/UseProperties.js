import { useQuery } from "@tanstack/react-query";
import { getProperties } from "../../services/apiProperties";

export function useProperties(filter, sort, paginate) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["properties", filter, sort, paginate],
    queryFn: () => getProperties(filter, sort, paginate),
  });
  return { isLoading, data, error };
}
