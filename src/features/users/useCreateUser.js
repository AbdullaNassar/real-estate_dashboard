import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../../services/apiUsers";
import toast from "react-hot-toast";

export function useCreateUser() {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toast.success("new user added succssfully");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isPending, mutate };
}
