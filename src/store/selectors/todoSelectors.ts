import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../index";

export const selectTodos = (state: RootState) => state.todos.todos;
export const selectTodosLoading = (state: RootState) => state.todos.loading;
export const selectTodosError = (state: RootState) => state.todos.error;

export const selectCompletedTodos = createSelector([selectTodos], (todos) =>
  todos.filter((todo) => todo.completed)
);

export const selectPendingTodos = createSelector([selectTodos], (todos) =>
  todos.filter((todo) => !todo.completed)
);

export const selectTodosCount = createSelector(
  [selectTodos],
  (todos) => todos.length
);

export const selectCompletedTodosCount = createSelector(
  [selectCompletedTodos],
  (completedTodos) => completedTodos.length
);

export const selectPendingTodosCount = createSelector(
  [selectPendingTodos],
  (pendingTodos) => pendingTodos.length
);

export const selectTodoById = createSelector(
  [selectTodos, (_state: RootState, id: number) => id],
  (todos, id) => todos.find((todo) => todo.id === id)
);
