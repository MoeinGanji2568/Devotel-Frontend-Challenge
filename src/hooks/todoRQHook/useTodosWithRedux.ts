import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getTodos } from "../../services/api/todo.sevices";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setTodos, setLoading, setError } from "../../store/slices/todoSlice";

export const useTodosWithRedux = () => {
  const dispatch = useAppDispatch();
  const {
    todos,
    loading: reduxLoading,
    error: reduxError,
  } = useAppSelector((state) => state.todos);

  const { data, isLoading, error } = useQuery({
    queryKey: ["all-todos"],
    queryFn: () => getTodos(),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data?.todos && Array.isArray(data.todos)) {
      dispatch(setTodos(data.todos));
    }
  }, [data, dispatch]);

  useEffect(() => {
    dispatch(setLoading(isLoading));
  }, [isLoading, dispatch]);

  useEffect(() => {
    if (error) {
      dispatch(setError(error.message || "Failed to fetch todos"));
    }
  }, [error, dispatch]);

  return {
    todos,
    isLoading: reduxLoading,
    error: reduxError,
    data,
    queryIsLoading: isLoading,
    queryError: error,
  };
};
