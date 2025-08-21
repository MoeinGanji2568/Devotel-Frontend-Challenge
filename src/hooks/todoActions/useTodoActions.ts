import toast from "react-hot-toast";
import { useAppDispatch } from "../../store/hooks";
import {
  addTodo,
  updateTodo,
  deleteTodo,
  toggleTodo,
} from "../../store/slices/todoSlice";
import type { Todo } from "../../types/todo/todo.types";

export const useTodoActions = () => {
  const dispatch = useAppDispatch();

  const addNewTodo = (todo: Omit<Todo, "id">) => {
    try {
      toast.success("Todo added successfully");
      dispatch(addTodo({ ...todo, id: Date.now() }));
    } catch (error) {
      toast.error("Failed to add todo");
      console.log(error);
    }
  };

  const updateExistingTodo = (todo: Todo) => {
    try {
      toast.success("Todo updated successfully");
      dispatch(updateTodo(todo));
    } catch (error) {
      toast.error("Failed to update todo");
      console.log(error);
    }
  };

  const removeTodo = (id: number) => {
    try {
      toast.success("Todo deleted successfully");
      dispatch(deleteTodo(id));
    } catch (error) {
      toast.error("Failed to delete todo");
      console.log(error);
    }
  };

  const toggleTodoStatus = (id: number) => {
    try {
      toast.success("Todo status toggled successfully");
      dispatch(toggleTodo(id));
    } catch (error) {
      toast.error("Failed to toggle todo status");
      console.log(error);
    }
  };

  return {
    addNewTodo,
    updateExistingTodo,
    removeTodo,
    toggleTodoStatus,
  };
};
