import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import "./Button.scss";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  className?: string;
  actionOnClick?: () => void;
}

const Button = ({
  className,
  actionOnClick,
  children,
  disabled,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      className={`button button--${className}`}
      disabled={disabled}
      onClick={actionOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
