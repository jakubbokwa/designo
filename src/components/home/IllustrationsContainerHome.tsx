import Illustration from "../illustration/Illustration";

import { illustrationsHome } from "../../helpers/illustrations";

const IllustrationsContainerHome = () => {
  return (
    <section>
      {illustrationsHome.map((singleIllustration, index) => {
        return (
          <Illustration
            key={index}
            title={singleIllustration.title}
            followUp={<p>{singleIllustration.followUp}</p>}
          >
            {singleIllustration.icon}
          </Illustration>
        );
      })}
    </section>
  );
};

export default IllustrationsContainerHome;
