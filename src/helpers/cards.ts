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

const { webDesign, appDesign, graphicDesign } = cards;

export {
  webDesign as cardsWebDesign,
  appDesign as cardsAppDesign,
  graphicDesign as cardsGraphicDesign,
};
