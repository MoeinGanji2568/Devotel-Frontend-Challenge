import { useTodosWithRedux } from "../../hooks/todoRQHook/useTodosWithRedux";
import type { Todo } from "../../types/todo/todo.types";
import AddTodoForm from "./AddTodoForm";
import FilterSection from "./FilterSection";
import TodoCard from "./TodoCard";
import TodoHeader from "./TodoHeader";
import { useDispatch } from "react-redux";
import { reorderTodos } from "../../store/slices/todoSlice";
import { useState, useCallback } from "react";
import { Typography } from "../ui/typography";
import { useTodoStats } from "../../hooks/useTodoStats";

const TodoList = () => {
  const { todos, isLoading, error } = useTodosWithRedux();
  const dispatch = useDispatch();
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [dragStartIndex, setDragStartIndex] = useState<number | null>(null);

  const { completedCount, pendingCount } = useTodoStats(todos);

  const toActualIndex = useCallback(
    (visualIndex: number) => {
      return todos.length - 1 - visualIndex;
    },
    [todos.length]
  );

  const handleDragStart = useCallback(
    (e: React.DragEvent<HTMLDivElement>, index: number) => {
      setDragStartIndex(index);
      e.dataTransfer.effectAllowed = "move";
    },
    []
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>, index: number) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      setDragOverIndex(index);
    },
    []
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>, index: number) => {
      e.preventDefault();
      if (dragStartIndex === null) return;
      if (dragStartIndex === index) return;

      const source = toActualIndex(dragStartIndex);
      const destination = toActualIndex(index);
      if (source !== destination) {
        dispatch(
          reorderTodos({ sourceIndex: source, destinationIndex: destination })
        );
      }

      setDragStartIndex(null);
      setDragOverIndex(null);
    },
    [dispatch, dragStartIndex, toActualIndex]
  );

  const handleDragEnd = useCallback(() => {
    setDragStartIndex(null);
    setDragOverIndex(null);
  }, []);

  return (
    <div className="min-h-screen bg-background-primary transition-colors duration-200">
      <TodoHeader />
      <main className="bg-background-secondary min-h-screen">
        <AddTodoForm />
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filter section */}
            <div className="lg:w-80 lg:sticky top-3 h-fit">
              <FilterSection />
            </div>
            <section className="flex-1 lg:max-w-2xl">
              <div className="bg-card-background rounded-lg shadow-sm border border-card-border p-4 lg:p-6 transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <Typography
                    variant="h2"
                    className="text-xl font-semibold text-text-primary mb-4"
                  >
                    Todo List
                  </Typography>
                  <div className="rounded-full bg-C_primary-100 p-1 px-2 mb-2">
                    <Typography
                      variant="small"
                      className="text-C_gray-50 text-xs "
                    >
                      {completedCount} completed & {pendingCount} pending
                    </Typography>
                  </div>
                </div>
                {isLoading && (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-C_primary-100"></div>
                    <span className="ml-2 text-text-secondary">Loading...</span>
                  </div>
                )}
                {error && (
                  <div className="text-C_red-100 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
                    Something went wrong!
                  </div>
                )}
                {!isLoading && todos?.length === 0 && (
                  <div className="text-center py-8 text-text-tertiary">
                    <p>No todos found. Add a new todo to get started!</p>
                  </div>
                )}
                {!isLoading && todos && todos.length > 0 && (
                  <div className="space-y-3">
                    {todos
                      .slice()
                      .reverse()
                      .map((todo: Todo, index: number) => (
                        <TodoCard
                          key={todo.id}
                          todo={todo}
                          index={index}
                          onDragStart={handleDragStart}
                          onDragOver={handleDragOver}
                          onDrop={handleDrop}
                          onDragEnd={handleDragEnd}
                          isDragOver={dragOverIndex === index}
                        />
                      ))}
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TodoList;
