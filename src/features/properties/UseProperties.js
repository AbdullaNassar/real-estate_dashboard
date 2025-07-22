import { useQuery } from "@tanstack/react-query";
import { getProperties } from "../../services/apiProperties";

export function useProperties() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["properties"],
    queryFn: getProperties,
  });
  return { isLoading, data, error };
}
