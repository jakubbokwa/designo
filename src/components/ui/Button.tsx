import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  isDark?: boolean;
  children: ReactNode;
  className?: string;
  href?: string;
  type: "button" | "submit";
};

const Button: FC<Props> = ({
  isDark = true,
  children,
  className,
  href,
  type = "button",
}) => {
  const buttonClasses = {
    light: "bg-white text-secondary-dark hover:text-white",
    dark: "bg-primary-peach text-white",
  };

  return (
    <button
      type={type}
      className={`hover:bg-secondary-peach rounded-lg font-medium text-base-mobile p-4.5 ${
        isDark ? buttonClasses.dark : buttonClasses.light
      } ${className && className}`}
    >
      {href ? <Link to={href}>{children}</Link> : <>{children}</>}
    </button>
  );
};

export default Button;
