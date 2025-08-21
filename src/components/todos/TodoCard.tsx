import { CheckCircle2, Circle, GripVertical } from "lucide-react";
import { type FC } from "react";
import { useTodoActions } from "../../hooks/todoActions/useTodoActions";
import type { TodoCardProps } from "../../types/todo/todo.types";
import { Typography } from "../ui/typography";
import DeleteTodo from "./DeleteTodo";

const TodoCard: FC<TodoCardProps> = ({
  todo,
  index,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
  isDragOver,
}) => {
  const { toggleTodoStatus } = useTodoActions();

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={(e) => onDragOver(e, index)}
      onDrop={(e) => onDrop(e, index)}
      onDragEnd={onDragEnd}
      className={`bg-card-background p-4 rounded-lg border border-card-border hover:shadow-md transition-all duration-200 ${
        isDragOver ? "ring-2 ring-C_primary-100" : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className="mt-1 flex-shrink-0 cursor-grab active:cursor-grabbing"
          aria-label="Drag to reorder todo"
          title="Drag to reorder"
        >
          <GripVertical className="w-4 h-4 text-text-tertiary hover:text-text-secondary" />
        </div>

        <button
          className="mt-1 flex-shrink-0"
          onClick={() => toggleTodoStatus(todo.id)}
        >
          {todo?.completed ? (
            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
          ) : (
            <Circle className="w-5 h-5 text-text-tertiary hover:text-text-secondary" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <Typography
            variant="p"
            className={`text-text-primary break-words ${
              todo?.completed ? "line-through text-text-tertiary" : ""
            }`}
          >
            {todo?.todo}
          </Typography>

          {todo?.completed && (
            <div className="mt-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-800">
                Completed
              </span>
            </div>
          )}
        </div>

        <div className="flex-shrink-0">
          <DeleteTodo todoId={todo.id} />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
