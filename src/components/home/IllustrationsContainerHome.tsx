import Illustration from "../illustration/Illustration";

import { illustrationsHome } from "../../helpers/illustrations";

const IllustrationsContainerHome = () => {
  return (
    <section className="mx-6 md:mx-0 flex flex-col gap-20 md:items-center lg:flex-row lg:gap-8 lg:justify-center">
      {illustrationsHome.map((singleIllustration, index) => {
        return (
          <Illustration
            key={index}
            title={singleIllustration.title}
            followUp={
              <p className="text-base">{singleIllustration.followUp}</p>
            }
          >
            {singleIllustration.icon}
          </Illustration>
        );
      })}
    </section>
  );
};

export default IllustrationsContainerHome;
