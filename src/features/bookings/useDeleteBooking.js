import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBooking";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast.success("Booking deleted successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isPending, mutate };
}
