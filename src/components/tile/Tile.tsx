import { FC } from "react";
import { ReactComponent as IconRightArrow } from "../../assets/shared/desktop/icon-right-arrow.svg";

import { Link } from "react-router-dom";

type Props = {
  imageDesktop: string;
  imageTablet: string;
  imageMobile: string;
  text: string;
  subtext?: string;
  href?: string;
};

const Tile: FC<Props> = ({
  imageDesktop,
  imageMobile,
  imageTablet,
  text,
  subtext = "VIEW PROJECTS",
  href = "#",
}) => {
  return (
    <div className="group relative overflow-hidden flex items-center justify-center rounded-2xl w-full">
      <Link to={href} className="relative w-full">
        <div className="absolute bg-black/40 w-full h-full overflow-hidden group-hover:bg-primary-peach/60" />
        <picture>
          <source media="(min-width:1024px)" srcSet={imageDesktop} />
          <source media="(min-width:425px)" srcSet={imageTablet} />
          <img
            className="relative -z-10 min-w-full min-h-full"
            src={imageMobile}
            alt=""
          ></img>
        </picture>
        <div className="absolute top-1/3 md:top-1/4 lg:top-[35%] w-max left-0 right-0 mx-auto text-center flex flex-col md:gap-6 lg:gap-0">
          <p className="mb-3 text-4xl-mobile md:text-4xl lg:text-3xl xl:text-4xl text-white font-medium">
            {text}
          </p>
          <div className="flex items-center justify-center">
            <p className="text-base-mobile md:text-base text-white tracking-mega-wide mr-5">
              {subtext}
            </p>
            <IconRightArrow />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Tile;
