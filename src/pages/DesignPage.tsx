import determineType from "../helpers/determineType";

import Subhero from "../components/subhero/Subhero";
import { ReactComponent as Decoration } from "../assets/shared/desktop/bg-pattern-leaf.svg";
import CardContainer from "../components/card/CardContainer";
import TileContainer from "../components/tile/TileContainer";

type PageType = "graphic" | "app" | "web";

type DesignPageProps = {
  type: PageType;
};

const DesignPage = ({ type }: DesignPageProps) => {
  const [subHeroInfo, images, tileImages] = determineType(type);

  return (
    <div className="relative">
      <Subhero subheroInfo={subHeroInfo} />
      <Decoration className="hidden lg:block absolute -z-10 top-[126px] left-[-164px]" />
      <CardContainer images={images} />
      <TileContainer tileImages={tileImages} />
    </div>
  );
};

export default DesignPage;
