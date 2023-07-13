import { cardsBigLocations } from "../helpers/cards";
import CardBig from "../components/card/CardBig";

import { ReactComponent as LocationsDecorationMobile } from "../assets/locations/mobile/locations-three-circles.svg";
import { ReactComponent as LocationsDecorationTablet } from "../assets/locations/tablet/locations-two-circles.svg";

const Locations = () => {
  return (
    <section>
      {cardsBigLocations.map((location, index) => {
        const { title, imageDesktop, imageTablet, address } = location;
        const { name, street, city, phone, mail } = address;
        return (
          <CardBig
            key={index}
            imageMobile={imageDesktop}
            imageTablet={imageTablet}
            imageDesktop={imageDesktop}
            title={title}
            baseClassName={`mb-10 last:mb-0 lg:flex-row lg:gap-7.5 ${
              index % 2 === 0 && "lg:flex-row-reverse"
            }`}
            pictureClassName="md:rounded-xl overflow-hidden lg:w-full lg:max-w-[350px]"
            isLocation
          >
            <section className="relative z-20 flex flex-col md:flex-row md:flex-wrap items-center md:items-end bg-tertiary-peach text-secondary-dark py-20 md:py-22 md:px-19 lg:px-6 lg:gap-x-4 xl:px-24 md:mt-8 lg:m-0 md:rounded-xl overflow-hidden lg:w-full">
              <LocationsDecorationMobile className="md:hidden absolute left-0 top-0 opacity-30" />
              <LocationsDecorationTablet className="hidden md:block absolute left-0 bottom-0 lg:-left-20 xl:left-0 opacity-30" />

              <header className="text-primary-peach lg:whitespace-nowrap text-center md:w-full md:text-left text-4xl font-medium">
                {title}
              </header>
              <div className="flex flex-col items-center md:w-1/2 lg:max-w-[45%] xl:w-1/2 lg:h-full md:items-start my-6 md:mb-0">
                <span className="font-bold">{name}</span>
                <span>{street}</span>
                <span>{city}</span>
              </div>

              <div className="flex flex-col items-center md:w-1/2 lg:max-w-[45%] xl:w-1/2 lg:h-full md:items-start">
                <span className="font-bold">Contact</span>
                <span>P: {phone}</span>
                <span>M: {mail}</span>
              </div>
            </section>
          </CardBig>
        );
      })}
    </section>
  );
};

export default Locations;
