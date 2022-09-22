import LogoLight from "../../assets/shared/desktop/logo-light.png";

import links from "../../helpers/links";
import footerInfo from "../../helpers/footerInfo";

import CallToAction from "../cta/CallToAction";
import Icons from "../icons/Icons";

const Footer = () => {
  return (
    <footer className="-mt-[70px]">
      <CallToAction />
      <div className="bg-primary-dark text-white flex flex-col items-center px-6 pb-16 pt-[263px]">
        <img src={LogoLight} alt="Light logo of Designo" className="logo" />
        <div className="h-0 w-full border-b border-b-white/10 my-8" />
        <div className="flex flex-col items-center gap-8">
          {links.map((singleLink, index) => {
            const { href, title } = singleLink;
            return (
              <a key={index} href={href}>
                <p className="text-base-mobile tracking-widest">
                  {title.toUpperCase()}
                </p>
              </a>
            );
          })}
        </div>
        <div className="my-10 flex flex-col items-center text-center gap-10 text-white/50">
          {footerInfo.map((singleInformation, index) => {
            const { title, lineOne, lineTwo } = singleInformation;
            return (
              <div key={index}>
                <p className="font-bold text-base">{title}</p>
                <p>{lineOne}</p>
                <p>{lineTwo}</p>
              </div>
            );
          })}
        </div>
        <Icons />
      </div>
    </footer>
  );
};

export default Footer;
