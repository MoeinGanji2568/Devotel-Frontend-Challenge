import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../services/api/todo.sevices";

export const useTodos = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["all-todos"],
    queryFn: () => getTodos(),
  });

  return { data, isLoading, error };
};
