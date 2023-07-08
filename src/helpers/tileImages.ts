import ImageAppDesignMobile from "../assets/home/mobile/image-app-design.jpg";
import ImageAppDesignTablet from "../assets/home/tablet/image-app-design.jpg";
import ImageAppDesignDesktop from "../assets/home/desktop/image-app-design.jpg";

import ImageWebDesignMobile from "../assets/home/mobile/image-web-design.jpg";
import ImageWebDesignTablet from "../assets/home/tablet/image-web-design.jpg";
import ImageWebDesignDesktopLarge from "../assets/home/desktop/image-web-design-large.jpg";
import ImageWebDesignDesktopSmall from "../assets/home/desktop/image-web-design-small.jpg";

import ImageGraphicDesignMobile from "../assets/home/mobile/image-graphic-design.jpg";
import ImageGraphicDesignTablet from "../assets/home/tablet/image-graphic-design.jpg";
import ImageGraphicDesignDesktop from "../assets/home/desktop/image-graphic-design.jpg";

const tileImages = [
  {
    title: "Web Design",
    imageMobile: ImageWebDesignMobile,
    imageTablet: ImageWebDesignTablet,
    imageDesktop: ImageWebDesignDesktopSmall,
    imageDesktopLarge: ImageWebDesignDesktopLarge,
    href: "/web-design",
  },
  {
    title: "App Design",
    imageMobile: ImageAppDesignMobile,
    imageTablet: ImageAppDesignTablet,
    imageDesktop: ImageAppDesignDesktop,
    href: "/app-design",
  },
  {
    title: "Graphic Design",
    imageMobile: ImageGraphicDesignMobile,
    imageTablet: ImageGraphicDesignTablet,
    imageDesktop: ImageGraphicDesignDesktop,
    href: "/graphic-design",
  },
];

export default tileImages;
