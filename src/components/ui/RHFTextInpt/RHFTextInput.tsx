import { type FieldValues, type Path, useForm } from "react-hook-form";
import type { RTHTextFieldProps } from "./Input.types";

export const RHFTextInput = <T extends FieldValues>({
  label,
  placeholder,
  type,
  id,
  name,
  defaultValue,
  disabled,
  register,
  className,
}: RTHTextFieldProps<T>) => {
  const {
    formState: { errors },
  } = useForm();

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
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-lg p-3 border transition-colors duration-200 bg-background-secondary text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-C_primary-100 focus:border-C_primary-100 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        {...register?.(name as Path<T>)}
        defaultValue={defaultValue}
        disabled={disabled}
      />
      {errors[name] && (
        <p className="text-C_red-100 text-sm mt-1">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};
