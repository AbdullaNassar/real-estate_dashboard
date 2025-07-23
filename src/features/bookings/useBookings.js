import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBooking";

export function useBookings(filter, sort, paginate) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["bookings", filter, sort, paginate],
    queryFn: () => getBookings(filter, sort, paginate),
  });
  return { isLoading, data, error };
}
