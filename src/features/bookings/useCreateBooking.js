import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createBooking } from "../../services/apiBooking";

export function useCreateBooking() {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: createBooking,
    onSuccess: () => {
      toast.success("new booking added succssfully");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isPending, mutate };
}
