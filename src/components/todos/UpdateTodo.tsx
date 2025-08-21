import { Pencil } from "lucide-react";
import type { Todo } from "../../types/todo/todo.types";
import { useState } from "react";
import Modal from "../ui/modal/Modal";
import { useForm } from "react-hook-form";
import { RHFTextInput } from "../ui/RHFTextInpt/RHFTextInput";
import { useTodoActions } from "../../hooks/todoActions/useTodoActions";
import { Button } from "../ui/button";

interface UpdateTodoProps {
  todo: Todo;
}

const UpdateTodo = ({ todo }: UpdateTodoProps) => {
  const [isUpdateOpen, setIsUpdateOpen] = useState<boolean>(false);
  const { updateExistingTodo } = useTodoActions();
  const { register, handleSubmit } = useForm<Todo>({
    defaultValues: {
      todo: todo?.todo,
    },
  });
  const onSubmit = (data: Todo) => {
    updateExistingTodo({ ...data, id: todo?.id });
    setIsUpdateOpen(false);
  };
  return (
    <div>
      <Pencil
        className="size-4 text-C_gray-200 cursor-pointer mt-2"
        onClick={() => setIsUpdateOpen(true)}
      />
      <Modal
        title={`Update todo`}
        open={isUpdateOpen}
        onClose={() => setIsUpdateOpen(false)}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <RHFTextInput
            name="todo"
            label="Todo"
            placeholder="Enter todo"
            className="w-full"
            register={register}
            type="text"
            id="todo"
          />
          <div className="flex justify-between">
            <Button type="submit">Update</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsUpdateOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default UpdateTodo;
