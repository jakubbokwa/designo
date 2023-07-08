import {
  subheroAppDesign,
  subheroGraphicDesign,
  subheroWebDesign,
} from "./subheroInfo";
import { cardsAppDesign, cardsGraphicDesign, cardsWebDesign } from "./cards";
import tileImages from "./tileImages";

type PageType = "graphic" | "app" | "web";

type Card = {
  image: string;
  title: string;
  subtitle: string;
};

type CardsType = Card[];

type Subhero = {
  title: string;
  subtitle: string;
};

type TileImage = {
  title: string;
  imageMobile: string;
  imageTablet: string;
  imageDesktop: string;
  imageDesktopLarge?: string;
  href: string;
};

type TileImages = TileImage[];

const determineType = (
  pageType: PageType
): [Subhero, CardsType, TileImages] => {
  const filterTiles = (targetIdx: number) => {
    return tileImages.filter((_, index) => {
      return index !== targetIdx;
    });
  };

  if (pageType === "web") {
    return [subheroWebDesign, cardsWebDesign, filterTiles(0)];
  }
  if (pageType === "app") {
    return [subheroAppDesign, cardsAppDesign, filterTiles(1)];
  }
  if (pageType === "graphic") {
    return [subheroGraphicDesign, cardsGraphicDesign, filterTiles(2)];
  }
  throw new Error("Incorrect page type provided");
};

export default determineType;
