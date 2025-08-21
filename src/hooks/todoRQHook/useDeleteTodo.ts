import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import todoServices from "../../services/api/todo.sevices";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTodo } = useMutation<void, Error, string>({
    mutationFn: (id: string) => todoServices.deleteTodo(id),
    onError: () => {
      toast.error("Something went wrong");
    },
    onSuccess: () => {
      toast.success("Todo deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["allTodos"] });
    },
  });
  return { deleteTodo };
};
