import { Filter, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTodosWithRedux } from "../../hooks/todoRQHook/useTodosWithRedux";
import { useAppDispatch } from "../../store/hooks";
import { setTodos } from "../../store/slices/todoSlice";
import type { FilterFormData, Todo } from "../../types/todo/todo.types";
import { RHFTextInput } from "../ui/RHFTextInpt/RHFTextInput";
import RTHSelectOption from "../ui/SelectOpt";
import { Button } from "../ui/button";

const FILTER_OPTIONS = [
  { value: "all", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "incompleted", label: "Incompleted" },
];

const FilterSection = () => {
  const { data } = useTodosWithRedux();
  const dispatch = useAppDispatch();
  const [originalTodos, setOriginalTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (data?.todos && Array.isArray(data.todos)) {
      setOriginalTodos(data?.todos);
    }
  }, [data]);

  const { register, handleSubmit, reset } = useForm<FilterFormData>();

  const onSubmit = (data: FilterFormData) => {
    let filteredTodos = originalTodos;

    if (data.search?.trim()) {
      const searchTerm = data.search.toLowerCase().trim();
      filteredTodos = filteredTodos.filter((todo) =>
        todo.todo.toLowerCase().includes(searchTerm)
      );
    }

    if (data.status && data.status !== "all") {
      const isCompleted = data.status === "completed";
      filteredTodos = filteredTodos.filter(
        (todo) => todo.completed === isCompleted
      );
    }

    dispatch(setTodos(filteredTodos));
  };

  const handleClearFilters = () => {
    reset();
    dispatch(setTodos(originalTodos));
  };

  return (
    <div className="bg-card-background rounded-lg shadow-sm border border-card-border p-4 lg:p-6 transition-colors duration-200">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-C_primary-100" />
        <h3 className="text-lg font-semibold text-text-primary">Filters</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="search"
            className="text-sm font-medium text-text-primary"
          >
            Search Todos
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-tertiary" />
            <RHFTextInput
              name="search"
              placeholder="Search todos..."
              type="text"
              register={register}
              id="search"
              className="pl-10 w-full bg-background-secondary border-border-primary text-text-primary placeholder-text-tertiary focus:border-C_primary-100 focus:ring-1 focus:ring-C_primary-100"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="status"
            className="text-sm font-medium text-text-primary"
          >
            Status
          </label>
          <RTHSelectOption
            name="status"
            options={FILTER_OPTIONS}
            id="status"
            register={register}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button
            type="submit"
            className="flex-1 bg-C_primary-100 hover:bg-C_primary-200 text-white transition-colors duration-200"
          >
            <Search className="w-4 h-4 mr-2" />
            Apply Filters
          </Button>
          <Button
            type="button"
            onClick={handleClearFilters}
            variant="outline"
            className="flex-1 border-border-primary text-text-primary hover:bg-background-tertiary transition-colors duration-200"
          >
            <X className="w-4 h-4 mr-2" />
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FilterSection;
