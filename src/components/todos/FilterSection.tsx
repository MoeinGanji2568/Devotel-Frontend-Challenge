import { RHFTextInput } from "../ui/RHFTextInpt/RHFTextInput";
import RTHSelectOption from "../ui/SelectOpt";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { Search, Filter, X } from "lucide-react";
import { useTodosWithRedux } from "../../hooks/todoRQHook/useTodosWithRedux";
import { setTodos } from "../../store/slices/todoSlice";
import { useAppDispatch } from "../../store/hooks";
import { useState, useEffect, useMemo } from "react";
import type { FilterFormData, Todo } from "../../types/todo/todo.types";

const FILTER_OPTIONS = [
  { value: "all", label: "All" },
  { value: "completed", label: "Completed" },
  { value: "incompleted", label: "Incompleted" },
];

const FilterSection = () => {
  const { todos, data } = useTodosWithRedux();
  const dispatch = useAppDispatch();
  const [originalTodos, setOriginalTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (data?.todos && Array.isArray(data.todos)) {
      setOriginalTodos(data?.todos);
    }
  }, [data]);

  const { register, handleSubmit, reset } = useForm<FilterFormData>();

  const stats = useMemo(() => {
    const completedCount = todos.filter((todo) => todo.completed).length;
    const pendingCount = todos.length - completedCount;
    return { completedCount, pendingCount };
  }, [todos]);

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

      <div className="mt-6 pt-4 border-t border-border-primary">
        <h4 className="text-sm font-medium text-text-primary mb-3">
          Quick Stats
        </h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 text-center border border-green-200 dark:border-green-800">
            <div className="text-lg font-semibold text-green-600 dark:text-green-400">
              {stats.completedCount}
            </div>
            <div className="text-xs text-green-600 dark:text-green-400">
              Completed
            </div>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3 text-center border border-orange-200 dark:border-orange-800">
            <div className="text-lg font-semibold text-orange-600 dark:text-orange-400">
              {stats.pendingCount}
            </div>
            <div className="text-xs text-orange-600 dark:text-orange-400">
              Pending
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
