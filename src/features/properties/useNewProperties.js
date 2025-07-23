import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createList } from "../../services/apiProperties";
import toast from "react-hot-toast";

export function useCreateList() {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: createList,
    onSuccess: () => {
      toast.success("new list added succssfully");
      queryClient.invalidateQueries({ queryKey: ["properties"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isPending, mutate };
}
