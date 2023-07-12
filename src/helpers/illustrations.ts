import { ReactComponent as IllustrationPassionate } from "../assets/home/desktop/illustration-passionate.svg";
import { ReactComponent as IllustrationResourceful } from "../assets/home/desktop/illustration-resourceful.svg";
import { ReactComponent as IllustrationFriendly } from "../assets/home/desktop/illustration-friendly.svg";

import { ReactComponent as IllustrationCanada } from "../assets/shared/desktop/illustration-canada.svg";
import { ReactComponent as IllustrationAustralia } from "../assets/shared/desktop/illustration-australia.svg";
import { ReactComponent as IllustrationUnitedKingdom } from "../assets/shared/desktop/illustration-united-kingdom.svg";

const illustrationsHome = [
  {
    icon: IllustrationPassionate({}),
    title: "PASSIONATE",
    followUp:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    icon: IllustrationResourceful({}),
    title: "RESOURCEFUL",
    followUp:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    icon: IllustrationFriendly({}),
    title: "FRIENDLY",
    followUp:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

const illustrationsCities = [
  {
    icon: IllustrationCanada({}),
    title: "CANADA",
  },
  {
    icon: IllustrationAustralia({}),
    title: "AUSTRALIA",
  },
  {
    icon: IllustrationUnitedKingdom({}),
    title: "UNITED KINGDOM",
  },
];

export { illustrationsHome, illustrationsCities };
