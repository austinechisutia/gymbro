import type { AnchorHTMLAttributes } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "dark";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
}

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = [styles.btn, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} {...rest}>
      {children}
    </a>
  );
}
