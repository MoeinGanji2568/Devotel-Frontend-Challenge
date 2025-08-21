import classNames from "classnames";
import {
  type TypographyProps,
  type TypographyVariant,
} from "./Typography.types";

const variantClasses: Record<TypographyVariant, string> = {
  h1: "text-4xl font-bold tracking-tight lg:text-5xl text-text-primary",
  h2: "text-3xl font-semibold tracking-tight lg:text-4xl text-text-primary",
  h3: "text-2xl md:text-3xl lg:text-4xl font-bold xl:leading-9 text-text-primary",
  h4: "text-xl font-semibold tracking-tight text-text-primary",
  h5: "text-lg font-semibold tracking-tight text-text-primary",
  h6: "text-base font-medium tracking-tight text-text-primary",
  p: "text-xs md:text-base lg:leading-7 text-text-secondary",
  small: "text-sm text-text-tertiary",
  blockquote:
    "border-l-4 border-border-primary pl-4 italic text-text-secondary",
};

export const Typography = ({
  variant = "p",
  className,
  children,
  as,
}: TypographyProps) => {
  const Component = as || variant;

  return (
    <Component className={classNames(variantClasses[variant], className)}>
      {children}
    </Component>
  );
};
