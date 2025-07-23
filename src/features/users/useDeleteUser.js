import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../../services/apiUsers";
import toast from "react-hot-toast";

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("User deleted successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isPending, mutate };
}
