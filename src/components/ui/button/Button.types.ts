import { type ButtonHTMLAttributes, type ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "danger";

export const btnType: Record<ButtonVariant, string> = {
  primary: "bg-C_blue-200 text-C_gray-100",
  secondary: "bg-C_gray-100 text-C_gray-600",
  outline: "bg-C_gray-100 text-C_gray-600",
  danger: "bg-C_red-100 text-C_gray-100",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}
