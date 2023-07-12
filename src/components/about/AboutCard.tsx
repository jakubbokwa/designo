import CardBig from "../card/CardBig";
import { cardsBigAboutUs } from "../../helpers/cards";

import { ReactComponent as AboutDecorationMobile } from "../../assets/about/mobile/bg-pattern-hero-about-mobile.svg";
import { ReactComponent as AboutDecorationDesktop } from "../../assets/about/desktop/bg-pattern-hero-about-desktop.svg";

type AboutCardProps = {
  className?: string;
};

const AboutCard = ({ className }: AboutCardProps) => {
  const aboutCard = cardsBigAboutUs[0];
  const { title, p1, imageMobile, imageTablet, imageDesktop } = aboutCard;
  return (
    <div className={className}>
      <CardBig
        title={title}
        imageDesktop={imageDesktop}
        imageTablet={imageTablet}
        imageMobile={imageMobile}
        baseClassName="flex-row-reverse"
        pictureClassName="lg:w-5/12"
      >
        <section className="relative bg-primary-peach text-white overflow-hidden py-20 px-6 md:px-15 lg:px-24 lg:py-32 lg:w-7/12">
          <AboutDecorationMobile className="lg:hidden absolute -top-[125px] right-0" />
          <AboutDecorationDesktop className="hidden lg:block absolute bottom-0 right-0" />
          <header className="relative text-center lg:text-left text-4xl tracking-normal mb-6">
            {title}
          </header>
          <p className="relative text-base-mobile text-center lg:text-left lg:w-[95%]">
            {p1}
          </p>
        </section>
      </CardBig>
    </div>
  );
};

export default AboutCard;
