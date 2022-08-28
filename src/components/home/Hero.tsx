import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="h-[843px] bg-primary-peach flex flex-col items-center">
      <div className="text-white text-center mt-20 mb-6 px-6 max-w-2xl">
        <h1 className="text-4xl-mobile mb-3.5 font-medium">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="text-base-mobile">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
      </div>
      <Button>GET IN TOUCH</Button>
    </section>
  );
};

export default Hero;
