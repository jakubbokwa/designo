import { ReactNode } from "react";

type CardProps = {
  children?: ReactNode;
  imageDesktop: string;
  imageTablet: string;
  imageMobile: string;
  title: string;
  baseClassName?: string;
  pictureClassName?: string;
  style?: "dark" | "light";
};

const CardBig = ({
  children,
  imageDesktop,
  imageTablet,
  imageMobile,
  title,
  baseClassName,
  pictureClassName,
  style = "light",
}: CardProps) => {
  return (
    <div className={`xs:rounded-xl lg:flex overflow-hidden ${baseClassName}`}>
      <picture className={pictureClassName}>
        <source media="(min-width:1024px)" srcSet={imageDesktop} />
        <source media="(min-width:425px)" srcSet={imageTablet} />
        <img
          src={imageMobile}
          alt={title}
          className="w-full h-full lg:w-auto object-cover"
        />
      </picture>
      {children || title}
    </div>
  );
};

export default CardBig;
