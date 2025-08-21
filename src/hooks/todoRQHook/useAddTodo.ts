import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import type { Todo } from "../../types/todo/todo.types";
import { createTodo } from "../../services/api/todo.sevices";
import { useQueryClient } from "@tanstack/react-query";

export const useAddTodo = () => {
  const queryClient = useQueryClient();
  const { mutate: addNewTodo, isPending } = useMutation({
    mutationFn: (todo: Omit<Todo, "id">) => createTodo(todo),
    mutationKey: ["add-todo"],
    onSuccess: () => {
      toast.success("Todo added successfully");
      queryClient.invalidateQueries({ queryKey: ["all-todos"] });
    },
    onError: () => {
      toast.error("Failed to add todo");
    },
  });

  return { addNewTodo, isPending };
};

export default useAddTodo;
