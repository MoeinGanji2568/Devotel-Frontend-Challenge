import { Typography } from "../ui/typography";
import { ThemeToggle } from "../ui/ThemeToggle";

const TodoHeader = () => {
  return (
    <div className="bg-background-primary border-b border-border-primary transition-colors duration-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Typography
            variant="h3"
            className="text-text-primary font-bold text-xl sm:text-2xl lg:text-3xl"
          >
            Moein Mohsenzadeh - Todo List
          </Typography>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default TodoHeader;
