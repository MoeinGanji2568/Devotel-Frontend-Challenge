import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { type FieldValues, useForm } from "react-hook-form";
import z from "zod";
import { useTodoActions } from "../../hooks/todoActions/useTodoActions";
import { Button } from "../ui/button";
import { RHFTextInput } from "../ui/RHFTextInpt/RHFTextInput";

const AddTodoForm = () => {
  const schema = z.object({
    addTodo: z.string().min(1, { message: "Todo is required" }),
  });

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });
  // const { addNewTodo, isPending } = useAddTodo();
  const { addNewTodo } = useTodoActions();

  const onSubmit = (data: FieldValues) => {
    const newData = {
      todo: data?.addTodo,
      completed: false,
      userId: 1,
    };

    addNewTodo(newData);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row px-2 items-stretch sm:items-end justify-center gap-2 relative bottom-7"
      >
        <RHFTextInput
          placeholder="Add a new todo ..."
          type="text"
          id="add-todo"
          name="addTodo"
          className="block w-full md:w-[630px] "
          register={register}
        />
        <Button className="w-full sm:w-auto">
          <div className="flex items-center gap-2">
            Add
            <Plus className="w-4 h-4" />
          </div>
        </Button>
      </form>
    </div>
  );
};

export default AddTodoForm;
