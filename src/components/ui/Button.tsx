import { FC, ReactNode } from "react";

type Props = {
  isDark?: boolean;
  children: ReactNode;
  className?: string;
};

const Button: FC<Props> = ({ isDark, children, className }) => {
  const buttonClasses = {
    light: "bg-white text-secondary-dark hover:text-white",
    dark: "bg-primary-peach text-white",
  };

  return (
    <button
      type="button"
      className={`hover:bg-secondary-peach rounded-lg font-medium text-base-mobile p-4.5 ${
        isDark ? buttonClasses.dark : buttonClasses.light
      } ${className && className}`}
    >
      {children}
    </button>
  );
};

export default Button;
