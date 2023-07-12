import CardBig from "../card/CardBig";
import { cardsBigAboutUs } from "../../helpers/cards";

import { ReactComponent as WorldClassTalentDecorationMobile } from "../../assets/shared/desktop/bg-pattern-three-circles.svg";

const WorldClassTalentCard = () => {
  const worldClassTalentCard = cardsBigAboutUs[1];
  const { title, p1, p2, imageMobile, imageTablet, imageDesktop } =
    worldClassTalentCard;

  const paragraphs = [p1, p2];

  return (
    <div>
      <CardBig
        title={title}
        imageDesktop={imageDesktop}
        imageTablet={imageTablet}
        imageMobile={imageMobile}
        pictureClassName="lg:w-full xl:w-5/12"
      >
        <section className="relative bg-tertiary-peach text-primary-peach overflow-hidden py-20 px-6 md:px-15 xl:px-24 xl:py-32 lg:w-full xl:w-7/12">
          <WorldClassTalentDecorationMobile className="absolute bottom-0 left-0 lg:top-0 opacity-30" />
          {/* <WorldClassTalentDecorationDesktop className="hidden lg:block absolute bottom-0 right-0" /> */}
          <header className="relative text-center lg:text-left text-4xl tracking-normal mb-6">
            {title}
          </header>
          {}

          {paragraphs.map((paragraph, index) => {
            return (
              <p
                key={index}
                className="relative text-base-mobile text-center lg:text-left lg:w-[95%] text-black mb-6 last:mb-0"
              >
                {paragraph}
              </p>
            );
          })}
        </section>
      </CardBig>
    </div>
  );
};

export default WorldClassTalentCard;
