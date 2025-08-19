import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";
import TodoCard from "./TodoCard";

const TodoList = () => {
  return (
    <div>
      <div className="bg-C_gray-600 h-[200px]">
        <Typography variant="h3" className="text-center text-C_primary-100 p-3">
          Moein Mohsenzadeh - Todo List
        </Typography>
      </div>
      <main className="bg-C_gray-500 h-screen">
        <div className="flex flex-wrap items-center justify-center gap-2 relative bottom-7">
          <input
            type="text"
            placeholder="Add a new todo ..."
            className="custom-input w-[630px] min-w-[350px]"
          />
          <Button className="w-full md:w-auto">
            <div className="flex items-center gap-2">
              Add
              <Plus className="w-4 h-4" />
            </div>
          </Button>
        </div>
        <section className="holder flex flex-col gap-3 mx-auto">
          <TodoCard />
        </section>
      </main>
    </div>
  );
};

export default TodoList;
