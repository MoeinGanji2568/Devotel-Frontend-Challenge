import { Typography } from "../ui/typography";
import type { Todo } from "../../types/todo/todo.types";
import type { FC } from "react";
import DeleteTodo from "./DeleteTodo";

interface TodoCardProps {
  todo: Todo;
}

const TodoCard: FC<TodoCardProps> = ({ todo }) => {
  return (
    <div className="bg-C_gray-400 p-3 rounded-lg border border-C_gray-300 max-w-full flex  justify-between">
      <div className="flex gap-5 items-start">
        <input
          type="checkbox"
          className="mt-2"
          checked={todo?.completed}
          onChange={() => {}}
        />
        <Typography
          variant="p"
          className={`text-C_gray-100 max-w-[90%] ${
            todo?.completed ? "line-through" : ""
          }`}
        >
          {todo?.todo}
        </Typography>
      </div>
      <DeleteTodo todoId={todo.id} />
    </div>
  );
};

export default TodoCard;
