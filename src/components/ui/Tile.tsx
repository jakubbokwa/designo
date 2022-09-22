import { FC } from "react";
import { ReactComponent as IconRightArrow } from "../../assets/shared/desktop/icon-right-arrow.svg";

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
      } relative overflow-hidden mx-6flex items-center justify-center rounded-2xl`}
    >
      <a href={href}>
        <picture>
          <source media="(min-width:1280px)" srcSet={imageDesktop} />
          <source media="(min-width:768px)" srcSet={imageTablet} />
          <img
            className="relative -z-10 min-w-full min-h-full"
            src={imageMobile}
            alt=""
          ></img>
        </picture>
        <div className="absolute top-[90px] w-max left-0 right-0 mx-auto text-center">
          <p className="mb-3 text-4xl-mobile md:text-4xl text-white font-medium">
            {text}
          </p>
          <div className="flex items-center">
            <p className="text-base-mobile md:text-base text-white tracking-mega-wide mr-5">
              {subtext}
            </p>
            <IconRightArrow />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Tile;
