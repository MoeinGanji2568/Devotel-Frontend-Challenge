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
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`custom-input ${className}`}
        {...register?.(name as Path<T>)}
        defaultValue={defaultValue}
        disabled={disabled}
      />
      {errors[name] && (
        <p className="text-rose-500 text-sm mt-1">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};
