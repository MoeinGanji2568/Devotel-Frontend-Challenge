import { Trash } from "lucide-react";
import Modal from "../ui/modal/Modal";
import ConfirmDelete from "../ui/ConfirmDelete";
import { type FC, useState } from "react";
import { useTodoActions } from "../../hooks/todoActions/useTodoActions";

interface DeleteTodoProps {
  todoId: number;
}

const DeleteTodo: FC<DeleteTodoProps> = ({ todoId }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeTodo } = useTodoActions();
  return (
    <>
      <Trash
        className="size-5 text-C_gray-200 cursor-pointer mt-2"
        onClick={() => setIsDeleteOpen(true)}
      />
      <Modal
        title={`Delete todo`}
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      >
        <ConfirmDelete
          resourceName={`todo`}
          onClose={() => setIsDeleteOpen(false)}
          disabled={false}
          onConfirm={() => {
            removeTodo(Number(todoId));
          }}
        />
      </Modal>
    </>
  );
};

export default DeleteTodo;
