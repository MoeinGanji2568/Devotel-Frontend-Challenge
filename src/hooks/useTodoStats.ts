import { useMemo } from "react";
import type { Todo } from "../types/todo/todo.types";

export const useTodoStats = (todos: Todo[]) => {
  return useMemo(() => {
    const completedCount = todos.filter((todo) => todo.completed).length;
    const pendingCount = todos.length - completedCount;
    return { completedCount, pendingCount };
  }, [todos]);
};
