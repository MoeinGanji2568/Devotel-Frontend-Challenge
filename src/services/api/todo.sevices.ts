import type { Todo } from "../../types/todo/todo.types";
import http from "../interceptor/http.service";

export const getTodos = async () => {
  const response = await http.get("/todos");
  return response?.data;
};

export const getTodoById = async (id: string) => {
  const response = await http.get(`/todos/${id}`);
  return response?.data;
};

export const createTodo = async (data: Todo) => {
  const response = await http.post("/todos/add", data);
  return response?.data;
};

export const updateTodo = async (id: string, data: Todo) => {
  const response = await http.put(`/todos/${id}`, data);
  return response?.data;
};

export const deleteTodo = async (id: string) => {
  const response = await http.delete(`/todos/${id}`);
  return response?.data;
};

const todoServices = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};

export default todoServices;
