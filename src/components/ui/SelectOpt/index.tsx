import type { FieldValues, UseFormRegister, Path } from "react-hook-form";

interface RTHSelectOptionProps<T extends FieldValues = FieldValues> {
  label?: string;
  id: string;
  name: Path<T>;
  options: { value: string | boolean; label: string }[];
  register: UseFormRegister<T>;
  disabled?: boolean;
}

const RTHSelectOption = <T extends FieldValues = FieldValues>({
  label,
  id,
  name,
  options,
  register,
  disabled,
}: RTHSelectOptionProps<T>) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-text-primary mb-2"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        {...register(name)}
        className={`w-full rounded-lg p-3 border transition-colors duration-200 bg-background-secondary text-text-primary focus:outline-none focus:ring-2 focus:ring-C_primary-100 focus:border-C_primary-100 ${
          disabled
            ? "opacity-50 cursor-not-allowed border-border-secondary"
            : "border-border-primary"
        }`}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value.toString()}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RTHSelectOption;
