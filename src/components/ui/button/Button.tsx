import { type FC } from "react";
import { btnType, type ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...rest
}) => {
  return (
    <button className={`btn ${btnType[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
};
