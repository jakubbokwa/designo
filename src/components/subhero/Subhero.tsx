import { ReactComponent as ThreeCircles } from "../../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg";
import { ReactComponent as FiveCircles } from "../../assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg";

type SubheroProps = {
  subheroInfo: {
    title: string;
    subtitle: string;
  };
};

const Subhero = ({ subheroInfo }: SubheroProps) => {
  const { title, subtitle } = subheroInfo;
  return (
    <section className="bg-primary-peach text-white text-center px-6 py-24 md:py-16 overflow-hidden relative md:rounded-2xl">
      <ThreeCircles className="absolute top-0 right-0 xs:hidden" />
      <FiveCircles className="absolute -top-1/2 -right-1/4 hidden xs:block lg:-right-0" />
      <div className="relative">
        <header className="text-3xl md:text-5xl font-medium mb-6">
          {title}
        </header>
        <p className="text-base-mobile md:text-base max-w-sm mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default Subhero;
