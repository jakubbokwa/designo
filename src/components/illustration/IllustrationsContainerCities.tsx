import { illustrationsCities } from "../../helpers/illustrations";
import IllustrationCity from "./IllustractionCity";

type IllustrationsContainerCitiesProps = {
  className?: string;
};

const IllustrationsContainerCities = ({
  className,
}: IllustrationsContainerCitiesProps) => {
  return (
    <section
      className={`${className} flex flex-col gap-20 md:flex-row md:justify-between md:gap-0 xl:justify-center xl:gap-28`}
    >
      {illustrationsCities.map((singleIllustration, index) => {
        return (
          <IllustrationCity key={index} title={singleIllustration.title}>
            {singleIllustration.icon}
          </IllustrationCity>
        );
      })}
    </section>
  );
};

export default IllustrationsContainerCities;
