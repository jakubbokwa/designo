import Button from "../ui/Button";

import ImageHeroPhone from "../../assets/home/desktop/image-hero-phone.png";
import { ReactComponent as BgPatternHeroHome } from "../../assets/home/desktop/bg-pattern-hero-home.svg";

const Hero = () => {
  return (
    <section className="h-[843px] bg-primary-peach flex flex-col items-center overflow-hidden relative md:mx-10 md:rounded-2xl">
      <div className="absolute top-[102px] -right-[265px] z-10">
        <BgPatternHeroHome />
      </div>
      <div className="text-white text-center mt-20 md:mt-15 mb-6 md:mb-5 px-6 max-w-xl flex flex-col items-center z-20">
        <h1 className="text-4xl-mobile md:text-4xl mb-3.5 font-medium">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="text-base-mobile md:text-base max-w-md md:px-6">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
      </div>
      <Button className="z-20">LEARN MORE</Button>
      <img
        src={ImageHeroPhone}
        alt="Hero image of a phone"
        className="max-w-none relative bottom-21.25 md:bottom-28 z-10"
      />
    </section>
  );
};

export default Hero;
