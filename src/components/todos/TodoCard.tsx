import { Trash } from "lucide-react";
import { Typography } from "../ui/typography";

const TodoCard = () => {
  return (
    <div className="bg-C_gray-400 p-3 rounded-lg border border-C_gray-300 max-w-full flex  justify-between">
      <div className="flex gap-5 items-start">
        <input type="checkbox" className="mt-2" />
        <Typography variant="p" className="text-C_gray-100 max-w-[90%]">
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </Typography>
      </div>
      <Trash className="size-5 text-C_gray-200 cursor-pointer mt-2" />
    </div>
  );
};

export default TodoCard;
