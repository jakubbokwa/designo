import { FC } from "react";

import { ReactComponent as IconFacebook } from "../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as IconYoutube } from "../assets/shared/desktop/icon-youtube.svg";
import { ReactComponent as IconTwitter } from "../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as IconPinterest } from "../assets/shared/desktop/icon-pinterest.svg";
import { ReactComponent as IconInstagram } from "../assets/shared/desktop/icon-instagram.svg";

type Icon = {
  href: string;
  icon: FC;
};

const icons: Array<Icon> = [
  {
    href: "https://www.twitter.com",
    icon: IconTwitter,
  },
  {
    href: "https://www.facebook.com",
    icon: IconFacebook,
  },
  {
    href: "https://www.pinterest.com",
    icon: IconPinterest,
  },
  {
    href: "https://www.youtube.com",
    icon: IconYoutube,
  },
  {
    href: "https://www.instagram.com",
    icon: IconInstagram,
  },
];

export default icons;
