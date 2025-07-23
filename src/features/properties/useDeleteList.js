import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteList } from "../../services/apiProperties";
import toast from "react-hot-toast";

export function useDeleteList() {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: deleteList,
    onSuccess: () => {
      toast.success("List deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["properties"] });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });
  return { isPending, mutate };
}
