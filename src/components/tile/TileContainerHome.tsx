import tileImages from "../../helpers/tileImages";
import Tile from "./Tile";

const TileContainerHome = () => {
  return (
    <section className="mx-6 md:mx-0 flex flex-col items-center justify-center gap-6 lg:gap-3.5 my-30 lg:grid lg:grid-rows-2 lg:grid-cols-2">
      {tileImages.map((tile, index) => {
        const {
          href,
          title,
          imageDesktop,
          imageDesktopLarge,
          imageMobile,
          imageTablet,
        } = tile;
        return (
          <div key={index} className="first:lg:row-span-2 w-full">
            <Tile
              text={title.toUpperCase()}
              imageDesktop={imageDesktopLarge || imageDesktop}
              imageMobile={imageMobile}
              imageTablet={imageTablet}
              href={href}
            />
          </div>
        );
      })}
    </section>
  );
};

export default TileContainerHome;
