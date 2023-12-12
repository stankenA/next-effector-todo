import React, {
  ButtonHTMLAttributes,
  FC,
  MouseEventHandler,
  PropsWithChildren,
} from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";

export type ButtonProps = PropsWithChildren & {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  icon?: React.ReactNode | string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isTransparent?: boolean;
  className?: string;
};

const Button: FC<ButtonProps> = ({
  type,
  icon,
  disabled,
  className,
  onClick,
  isTransparent,
  children,
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        isTransparent && styles.button_transparent,
        className
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon ? icon : null}
      {children}
    </button>
  );
};

export default Button;
