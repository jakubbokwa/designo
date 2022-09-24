import { FC } from "react";
import { ReactComponent as IconRightArrow } from "../../assets/shared/desktop/icon-right-arrow.svg";

import { Link } from "react-router-dom";

type Props = {
  imageDesktop: string;
  imageTablet: string;
  imageMobile: string;
  text: string;
  subtext?: string;
  overlay?: boolean;
  href?: string;
};

const Tile: FC<Props> = ({
  imageDesktop,
  imageMobile,
  imageTablet,
  text,
  subtext = "VIEW PROJECTS",
  overlay,
  href = "#",
}) => {
  return (
    <div
      className={`${
        overlay ? "bg-gradient-to-r from-black/[0.35] to-black/[0.35]" : ""
      } relative overflow-hidden mx-6 flex items-center justify-center rounded-2xl`}
    >
      <Link to={href}>
        <picture>
          <source media="(min-width:1280px)" srcSet={imageDesktop} />
          <source media="(min-width:768px)" srcSet={imageTablet} />
          <img
            className="relative -z-10 min-w-full min-h-full"
            src={imageMobile}
            alt=""
          ></img>
        </picture>
        <div className="absolute top-[90px] md:top-[45px] w-max left-0 right-0 mx-auto text-center flex flex-col md:gap-6">
          <p className="mb-3 text-4xl-mobile md:text-4xl text-white font-medium">
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
