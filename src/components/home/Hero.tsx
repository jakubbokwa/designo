import Button from "../ui/Button";

import ImageHeroPhone from "../../assets/home/desktop/image-hero-phone.png";
import { ReactComponent as BgPatternHeroHome } from "../../assets/home/desktop/bg-pattern-hero-home.svg";

const Hero = () => {
  return (
    <section className="h-[843px] xl:h-[640px] bg-primary-peach flex flex-col xl:flex-row items-center overflow-hidden relative md:rounded-2xl">
      <div className="absolute top-[102px] -right-[265px] z-10 xl:right-0 xl:top-0">
        <BgPatternHeroHome />
      </div>
      <div className="flex flex-col items-center xl:items-start z-20  xl:ml-24">
        <div className="text-white text-center mt-20 md:mt-15 mb-6 md:mb-5 px-6 xl:px-0 xl:-mt-9 max-w-xl flex flex-col items-center xl:text-left xl:items-start">
          <h1 className="text-4xl-mobile md:text-4xl mb-3.5 font-medium xl:w-4/5">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-base-mobile md:text-base max-w-md md:px-6 xl:px-0 xl:my-2.5 xl:w-9/12">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
        </div>
        <Button type="button" className="z-20">
          LEARN MORE
        </Button>
      </div>
      <img
        src={ImageHeroPhone}
        alt="Hero image of a phone"
        className="max-w-none relative xl:absolute bottom-21.25 md:bottom-28 xl:-right-24 xl:-top-8 z-10"
      />
    </section>
  );
};

export default Hero;
