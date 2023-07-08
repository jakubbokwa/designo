import Tile from "./Tile";

type TileImage = {
  title: string;
  imageMobile: string;
  imageTablet: string;
  imageDesktop: string;
  imageDesktopLarge?: string;
  href: string;
};

type TileImages = TileImage[];

type TileContainerProps = { tileImages: TileImages };

const TileContainer = ({ tileImages }: TileContainerProps) => {
  return (
    <section className="mx-6 md:mx-0 flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center">
      {tileImages.map((tile: TileImage, index: number) => {
        const { imageDesktop, imageTablet, imageMobile, href, title } = tile;
        return (
          <Tile
            key={index}
            imageDesktop={imageDesktop}
            imageTablet={imageTablet}
            imageMobile={imageMobile}
            href={href}
            text={title.toUpperCase()}
          />
        );
      })}
    </section>
  );
};

export default TileContainer;
