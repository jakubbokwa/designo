import { FC, ReactNode } from "react";
import { ReactComponent as PatternSmallCircle } from "../../assets/shared/desktop/bg-pattern-small-circle.svg";
import Button from "../ui/Button";

type Props = {
  children: ReactNode;
  title: string;
};

const IllustrationCity: FC<Props> = ({ children, title }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="absolute">
        <PatternSmallCircle />
      </div>
      <div className="relative">{children}</div>
      <h2 className="text-xl font-medium mt-12 mb-8">{title}</h2>
      <Button type="button">SEE LOCATION</Button>
    </div>
  );
};

export default IllustrationCity;
