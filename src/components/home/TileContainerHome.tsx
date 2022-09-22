import Tile from "../ui/Tile";

import ImageAppDesignMobile from "../../assets/home/mobile/image-app-design.jpg";
import ImageAppDesignTablet from "../../assets/home/tablet/image-app-design.jpg";
import ImageAppDesignDesktop from "../../assets/home/desktop/image-app-design.jpg";

import ImageWebDesignMobile from "../../assets/home/mobile/image-web-design.jpg";
import ImageWebDesignTablet from "../../assets/home/tablet/image-web-design.jpg";
import ImageWebDesignDesktopLarge from "../../assets/home/desktop/image-web-design-large.jpg";

import ImageGraphicDesignMobile from "../../assets/home/mobile/image-graphic-design.jpg";
import ImageGraphicDesignTablet from "../../assets/home/tablet/image-graphic-design.jpg";
import ImageGraphicDesignDesktop from "../../assets/home/desktop/image-graphic-design.jpg";

const TileContainerHome = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 my-30">
      <Tile
        overlay
        text="WEB DESIGN"
        imageDesktop={ImageWebDesignDesktopLarge}
        imageTablet={ImageWebDesignTablet}
        imageMobile={ImageWebDesignMobile}
      />
      <Tile
        overlay
        text="APP DESIGN"
        imageDesktop={ImageAppDesignDesktop}
        imageTablet={ImageAppDesignTablet}
        imageMobile={ImageAppDesignMobile}
      />
      <Tile
        overlay
        text="GRAPHIC DESIGN"
        imageDesktop={ImageGraphicDesignDesktop}
        imageTablet={ImageGraphicDesignTablet}
        imageMobile={ImageGraphicDesignMobile}
      />
    </section>
  );
};

export default TileContainerHome;
