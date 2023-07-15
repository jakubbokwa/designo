import Button from "../ui/Button";
import { ReactComponent as BgPatternThreeCircles } from "../../assets/shared/desktop/bg-pattern-three-circles.svg";
import { ReactComponent as BgPatternTwoCircles } from "../../assets/shared/desktop/bg-pattern-two-circles.svg";

const CallToAction = () => {
  return (
    <div className="overflow-hidden relative bg-primary-peach rounded-2xl mx-6 md:mx-10 lg:mx-41 xl:max-w-[1111px] text-white text-center top-[189px]">
      <BgPatternThreeCircles className="absolute -scale-x-100 -top-[102px] -right-[14px] md:-right-[0px] md:-left-[55px]" />
      <BgPatternTwoCircles className="hidden md:block absolute -scale-x-100 rotate-90 md:top-[44px] md:left-[382px]" />
      <div className="relative mx-6 lg:mx-24 xl:mx-41 py-16 lg:py-0 flex flex-col lg:flex-row items-center z-20">
        <div className="flex flex-col items-center lg:items-start lg:my-12 xl:my-16">
          <h2 className="text-4xl-mobile md:text-4xl font-medium mx-6 md:w-7/12 lg:w-3/4 xl:w-6/12 lg:mx-0 lg:text-left mb-4">
            Let's talk about your project
          </h2>
          <p className="text-base-mobile md:text-base w-2/3 md:w-7/12 lg:w-4/5 xl:w-7/12 lg:text-left mt-1.5 pb-8 lg:pb-0">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <Button isDark={false} className="lg:whitespace-nowrap" href="/contact">
          GET IN TOUCH
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
