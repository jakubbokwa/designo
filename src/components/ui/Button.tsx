import { FC, ReactNode } from "react";

type Props = {
  isDark?: boolean;
  children: ReactNode;
};

const Button: FC<Props> = ({ isDark, children }) => {
  const buttonClasses = {
    light: "bg-white text-secondary-dark hover:text-white",
    dark: "bg-primary-peach text-white",
  };

  return (
    <button
      type="button"
      className={`${
        isDark ? buttonClasses.dark : buttonClasses.light
      } hover:bg-secondary-peach rounded-lg font-medium text-base-mobile p-4.5`}
    >
      {children}
    </button>
  );
};

export default Button;
