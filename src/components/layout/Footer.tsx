import { Link } from "react-router-dom";

import LogoLight from "../../assets/shared/desktop/logo-light.png";

import links from "../../helpers/links";
import footerInfo from "../../helpers/footerInfo";

import CallToAction from "../cta/CallToAction";
import Icons from "../icons/Icons";

const Footer = () => {
  return (
    <footer className="-mt-[70px] xl:flex flex-col items-center relative z-10">
      <CallToAction />
      <div className="bg-primary-dark text-white flex flex-col items-center px-6 md:px-10 lg:px-41 pb-16 md:pb-20 pt-[263px] xl:w-full">
        <div className="w-full flex flex-col md:flex-row flex-wrap items-center md:justify-between lg:mx-41 xl:max-w-[1111px]">
          <Link to="/">
            <img src={LogoLight} alt="Light logo of Designo" className="logo" />
          </Link>
          <div className="h-0 w-full border-b border-b-white/10 my-8 md:order-last" />
          <div className="flex flex-col items-center gap-8 md:gap-10.5 md:flex-row">
            {links.map((singleLink, index) => {
              const { href, title } = singleLink;
              return (
                <Link key={index} to={href}>
                  <p className="text-base-mobile tracking-widest hover:underline hover:underline-offset-2">
                    {title.toUpperCase()}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="lg:mx-41 xl:max-w-[1111px] lg:w-full">
          <div className="my-10 md:my-0 flex flex-col md:flex-row lg:justify-between items-center text-center md:text-left gap-10 text-white/50">
            {footerInfo.map((singleInformation, index) => {
              const { title, lineOne, lineTwo } = singleInformation;
              return (
                <div key={index} className="md:w-[25vw]">
                  <p className="font-bold text-base">{title}</p>
                  <p>{lineOne}</p>
                  <p>{lineTwo}</p>
                </div>
              );
            })}
            <Icons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
