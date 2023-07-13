import webExpress from "../assets/web-design/desktop/image-express.jpg";
import webTransfer from "../assets/web-design/desktop/image-transfer.jpg";
import webPhoton from "../assets/web-design/desktop/image-photon.jpg";
import webBuilder from "../assets/web-design/desktop/image-builder.jpg";
import webBlogr from "../assets/web-design/desktop/image-blogr.jpg";
import webCamp from "../assets/web-design/desktop/image-camp.jpg";

import appAirfilter from "../assets/app-design/desktop/image-airfilter.jpg";
import appEyecam from "../assets/app-design/desktop/image-eyecam.jpg";
import appFaceit from "../assets/app-design/desktop/image-faceit.jpg";
import appTodo from "../assets/app-design/desktop/image-todo.jpg";
import appLoopstudios from "../assets/app-design/desktop/image-loopstudios.jpg";

import graphicTimBrown from "../assets/graphic-design/desktop/image-change.jpg";
import graphicBoxedWater from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import graphicScience from "../assets/graphic-design/desktop/image-science.jpg";

import aboutUsDesktop from "../assets/about/desktop/image-about-hero.jpg";
import aboutUsTablet from "../assets/about/tablet/image-about-hero.jpg";
import aboutUsMobile from "../assets/about/mobile/image-about-hero.jpg";
import aboutWorldClassDesktop from "../assets/about/desktop/image-world-class-talent.jpg";
import aboutWorldClassTablet from "../assets/about/tablet/image-world-class-talent.jpg";
import aboutWorldClassMobile from "../assets/about/mobile/image-world-class-talent.jpg";
import aboutRealDesktop from "../assets/about/desktop/image-real-deal.jpg";
import aboutRealTablet from "../assets/about/tablet/image-real-deal.jpg";
import aboutRealMobile from "../assets/about/mobile/image-real-deal.jpg";

import locationsCanadaDesktop from "../assets/locations/desktop/image-map-canada.png";
import locationsCanadaTablet from "../assets/locations/tablet/image-map-canada.png";
import locationsAustraliaDesktop from "../assets/locations/desktop/image-map-australia.png";
import locationsAustraliaTablet from "../assets/locations/tablet/image-map-australia.png";
import locationsUkDesktop from "../assets/locations/desktop/image-map-united-kingdom.png";
import locationsUkTablet from "../assets/locations/tablet/image-map-uk.png";

const cards = {
  webDesign: [
    {
      image: webExpress,
      title: "Express",
      subtitle: "A multi-carrier shipping website for ecommerce businesses",
    },
    {
      image: webTransfer,
      title: "Transfer",
      subtitle:
        "Site for low-cost money transfers and sending money within seconds",
    },
    {
      image: webPhoton,
      title: "Photon",
      subtitle:
        "A state-of-the-art music player with high‐resolution audio and DSP effects",
    },
    {
      image: webBuilder,
      title: "Builder",
      subtitle: "Connects users with local contractors based on their location",
    },
    {
      image: webBlogr,
      title: "Blogr",
      subtitle:
        "Blogr is a platform for creating an online blog or publication",
    },
    {
      image: webCamp,
      title: "Camp",
      subtitle:
        "Get expert training in coding, data, design, and digital marketing",
    },
  ],
  appDesign: [
    {
      image: appAirfilter,
      title: "Airfilter",
      subtitle:
        "Solving the problem of poor indoor air quality by filtering the air",
    },
    {
      image: appEyecam,
      title: "Eyecam",
      subtitle:
        "Product that lets you edit your favorite photos and videos at any time",
    },
    {
      image: appFaceit,
      title: "Faceit",
      subtitle:
        "Get to meet your favorite internet superstar with the faceit app",
    },
    {
      image: appTodo,
      title: "Todo",
      subtitle: "A todo app that features cloud sync with light and dark mode",
    },
    {
      image: appLoopstudios,
      title: "Loopstudios",
      subtitle: "A VR experience app made for Loopstudios",
    },
  ],
  graphicDesign: [
    {
      image: graphicTimBrown,
      title: "Tim Brown",
      subtitle: "A book cover designed for  Tim Brown's new release, 'Change'",
    },
    {
      image: graphicBoxedWater,
      title: "Boxed Water",
      subtitle: "A simple packaging concept made for Boxed Water",
    },
    {
      image: graphicScience,
      title: "Science!",
      subtitle: "A poster made in collaboration with the Federal Art Project",
    },
  ],
};

const cardsBig = {
  aboutUs: [
    {
      title: "About Us",
      p1: "Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.",
      imageDesktop: aboutUsDesktop,
      imageTablet: aboutUsTablet,
      imageMobile: aboutUsMobile,
    },
    {
      title: "World-class talent",
      p1: "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.",
      p2: "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission.",
      imageDesktop: aboutWorldClassDesktop,
      imageTablet: aboutWorldClassTablet,
      imageMobile: aboutWorldClassMobile,
    },
    {
      title: "The real deal",
      p1: "As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
      p2: "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
      imageDesktop: aboutRealDesktop,
      imageTablet: aboutRealTablet,
      imageMobile: aboutRealMobile,
    },
  ],
  locations: [
    {
      title: "Canada",
      imageDesktop: locationsCanadaDesktop,
      imageTablet: locationsCanadaTablet,
      address: {
        name: "Designo Central Office",
        street: "3886 Wellington Street",
        city: "Toronto, Ontario M9C 3J5",
        phone: "+1 253-863-8967",
        mail: "contact@designo.co",
      },
    },
    {
      title: "Australia",
      imageDesktop: locationsAustraliaDesktop,
      imageTablet: locationsAustraliaTablet,
      address: {
        name: "Designo AU Office",
        street: "19 Balonne Street",
        city: "New South Wales 2443",
        phone: "(02) 6720 9092",
        mail: "contact@designo.au",
      },
    },
    {
      title: "United Kingdom",
      imageDesktop: locationsUkDesktop,
      imageTablet: locationsUkTablet,
      address: {
        name: "Designo UK Office",
        street: "13 Colorado Way",
        city: "Rhyd-y-fro SA8 9GA",

        phone: "078 3115 1400",
        mail: "contact@designo.uk",
      },
    },
  ],
};

const { webDesign, appDesign, graphicDesign } = cards;

const { aboutUs, locations } = cardsBig;

export {
  webDesign as cardsWebDesign,
  appDesign as cardsAppDesign,
  graphicDesign as cardsGraphicDesign,
  aboutUs as cardsBigAboutUs,
  locations as cardsBigLocations,
};
