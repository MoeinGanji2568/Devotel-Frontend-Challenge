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

  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  });
  const { addNewTodo } = useTodoActions();

  const onSubmit = (data: FieldValues) => {
    const newData = {
      todo: data?.addTodo,
      completed: false,
      userId: 1,
    };

    addNewTodo(newData);
    reset(); // Clear form after submission
  };

  return (
    <div className="bg-card-background border-b border-card-border shadow-sm transition-colors duration-200">
      <div className="container mx-auto px-4 py-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end max-w-4xl mx-auto"
        >
          <div className="flex-1">
            <label
              htmlFor="add-todo"
              className="block text-sm font-medium text-text-primary mb-2"
            >
              Add New Todo
            </label>
            <RHFTextInput
              placeholder="What needs to be done?"
              type="text"
              id="add-todo"
              name="addTodo"
              className="w-full bg-background-secondary border-border-primary text-text-primary placeholder-text-tertiary focus:border-C_primary-100 focus:ring-1 focus:ring-C_primary-100"
              register={register}
            />
          </div>
          <Button
            type="submit"
            className="bg-C_primary-100 hover:bg-C_primary-200 text-white px-6 py-2.5 transition-colors duration-200"
          >
            <div className="flex items-center gap-2">
              Add Todo
              <Plus className="w-4 h-4" />
            </div>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddTodoForm;
