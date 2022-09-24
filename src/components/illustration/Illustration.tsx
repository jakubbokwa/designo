import { FC, ReactNode } from "react";
import { ReactComponent as PatternSmallCircle } from "../../assets/shared/desktop/bg-pattern-small-circle.svg";

type Props = {
  children: ReactNode;
  title?: string;
  followUp?: FC | JSX.IntrinsicElements["p"];
};

const Illustration: FC<Props> = ({ children, title, followUp }) => {
  return (
    <div className="flex flex-col md:flex-row items-center text-center mx-6 mb-20 last:mb-0">
      <div className="relative flex justify-center">
        <div className="absolute">
          <PatternSmallCircle />
        </div>
        <div className="relative">{children}</div>
      </div>
      <div className="md:text-left md:ml-12">
        {title && (
          <h2 className="text-xl font-medium mt-10 md:mt-0 mb-8 md:mb-4">
            {title}
          </h2>
        )}
        <>{followUp && followUp}</>
      </div>
    </div>
  );
};

export default Illustration;
