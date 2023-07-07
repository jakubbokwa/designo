import { FC, ReactNode } from "react";
import { ReactComponent as PatternSmallCircle } from "../../assets/shared/desktop/bg-pattern-small-circle.svg";

type Props = {
  children: ReactNode;
  title?: string;
  followUp?: ReactNode;
};

const Illustration: FC<Props> = ({ children, title, followUp }) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col items-center text-center mx-6 mb-20 lg:mx-0 lg:mb-0 last:mb-0">
      <div className="relative flex justify-center">
        <div className="absolute">
          <PatternSmallCircle />
        </div>
        <div className="relative">{children}</div>
      </div>
      <div className="md:text-left md:ml-12 lg:ml-0 lg:text-center lg:mt-12">
        {title && (
          <h2 className="text-xl font-medium mt-10 md:mt-0 mb-8 md:mb-4 lg:mb-9">
            {title}
          </h2>
        )}
        <span>{followUp && followUp}</span>
      </div>
    </div>
  );
};

export default Illustration;
