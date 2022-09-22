import Button from "../ui/Button";
import { ReactComponent as BgPatternThreeCircles } from "../../assets/shared/desktop/bg-pattern-three-circles.svg";

const CallToAction = () => {
  return (
    <div className="overflow-hidden relative bg-primary-peach rounded-2xl mx-6 text-white text-center top-[189px]">
      <BgPatternThreeCircles className="absolute -scale-x-100 -top-[102px] -right-[14px]" />
      <div className="relative mx-6 py-16 flex flex-col items-center z-20">
        <h2 className="text-4xl-mobile font-medium mx-6">
          Let's talk about your project
        </h2>
        <p className="text-base-mobile mt-1.5 mb-8">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <Button>GET IN TOUCH</Button>
      </div>
    </div>
  );
};

export default CallToAction;
