import { type FC } from "react";
import { btnType, type ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...rest
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-C_primary-100 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${btnType[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
