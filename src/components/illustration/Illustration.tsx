import { FC, ReactNode } from "react";
import { ReactComponent as PatternSmallCircle } from "../../assets/shared/desktop/bg-pattern-small-circle.svg";

type Props = {
  children: ReactNode;
  title: string;
  followUp: ReactNode;
};

const Illustration: FC<Props> = ({ children, title, followUp }) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-12 items-center lg:flex-col lg:gap-0">
      <div>
        <div className="absolute">
          <PatternSmallCircle />
        </div>
        <div className="relative">{children}</div>
      </div>
      <div className="text-center md:text-left lg:text-center max-w-screen-xs lg:max-w-screen-lg">
        <h2 className="text-xl font-medium mt-12 mb-8 md:my-4 lg:mt-12 lg:mb-8">
          {title}
        </h2>
        <span>{followUp}</span>
      </div>
    </div>
  );
};

export default Illustration;
