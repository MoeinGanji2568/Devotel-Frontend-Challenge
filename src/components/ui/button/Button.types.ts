import { type ButtonHTMLAttributes, type ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "danger";

export const btnType: Record<ButtonVariant, string> = {
  primary:
    "bg-C_primary-100 hover:bg-C_primary-200 text-white transition-colors duration-200",
  secondary:
    "bg-background-tertiary hover:bg-border-primary text-text-primary transition-colors duration-200",
  outline:
    "bg-transparent border border-border-primary hover:bg-background-tertiary text-text-primary transition-colors duration-200",
  danger:
    "bg-C_red-100 hover:bg-red-600 text-white transition-colors duration-200",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}
