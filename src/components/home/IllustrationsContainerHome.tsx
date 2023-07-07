import Illustration from "../illustration/Illustration";

import { illustrationsHome } from "../../helpers/illustrations";

const IllustrationsContainerHome = () => {
  return (
    <section className="mx-10 lg:flex lg:gap-7">
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
