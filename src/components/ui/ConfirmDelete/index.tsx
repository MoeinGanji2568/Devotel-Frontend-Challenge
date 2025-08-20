import { Trash } from "lucide-react";
import { Button } from "../button";

interface ConfirmDeleteProps {
  resourceName: string;
  onClose: () => void;
  disabled: boolean;
  onConfirm: () => void;
}

function ConfirmDelete({
  resourceName,
  onClose,
  disabled,
  onConfirm,
}: ConfirmDeleteProps) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8 text-C_gray-100">
        Are you sure you want to delete {resourceName}?
      </h2>
      <form action={onConfirm}>
        <div className="flex justify-between items-center gap-x-16">
          <Button
            className="flex-1"
            variant="secondary"
            onClick={onClose}
            type="button"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={onConfirm}
            disabled={disabled}
            variant="primary"
            className="flex gap-x-2 justify-center items-center flex-1"
          >
            <Trash className="w-5" />
            <span>Delete</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
export default ConfirmDelete;
