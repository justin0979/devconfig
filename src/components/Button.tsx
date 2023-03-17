import { ReactNode } from "react";
import { setClassNames } from "../utilities";

interface ButtonProps {
  id: string | number;
  primary?: boolean;
  secondary?: boolean;
  warning?: boolean;
  active?: boolean;
  onClick?: (id: string | number) => void;
  className?: string;
  children: ReactNode;
  [rest: string]: any;
}

const Button = ({
  id,
  primary,
  secondary,
  warning,
  active,
  onClick = () => {},
  className = "",
  children,
  ...rest
}: ButtonProps) => {
  const cn = setClassNames(className, "px-6", "py-5", {
    "btn-primary": primary,
    "btn-secondary": secondary,
    "btn-warning": warning,
    "btn-active": active,
  });

  return (
    <button {...rest} onClick={() => onClick(id)} className={cn}>
      {children}
    </button>
  );
};

export default Button;
