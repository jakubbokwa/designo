import AboutCard from "../components/about/AboutCard";
import RealDealCard from "../components/about/RealDealCard";
import WorldClassTalentCard from "../components/about/WorldClassTalentCard";
import IllustrationsContainerCities from "../components/illustration/IllustrationsContainerCities";

const About = () => {
  return (
    <div>
      <AboutCard className={"sm:mb-30 lg:mb-40"} />
      <WorldClassTalentCard />
      <IllustrationsContainerCities className={"my-30 lg:my-40"} />
      <RealDealCard />
    </div>
  );
};

export default About;
