import { NavLink } from "react-router-dom";

import LogoDark from "../../assets/shared/desktop/logo-dark.png";
import { ReactComponent as Hamburger } from "../../assets/shared/mobile/icon-hamburger.svg";
import { ReactComponent as Close } from "../../assets/shared/mobile/icon-close.svg";

import links from "../../helpers/links";
import useScrollDirection from "../../helpers/useScrollDirection";

import Overlay from "./Overlay";

type HeaderType = {
  isMenuOpen: boolean;
  setIsMenuOpen: (arg: boolean) => void;
};

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderType) => {
  const scrollDirection = useScrollDirection();
  return (
    <div
      className={`z-50 sticky md:relative bg-white ${
        scrollDirection === "down" ? "-top-[95px] md:top-0" : "top-0"
      } h-[95px] md:h-full transition-all duration-500`}
    >
      <header
        className="max-w-1440 flex justify-between align-center px-6 py-8.5 md:px-10 md:py-16 lg:px-41"
        onClick={() => {
          if (isMenuOpen) {
            setIsMenuOpen(false);
          }
        }}
      >
        <NavLink to="/">
          <img src={LogoDark} alt="Dark logo of Designo" className="logo" />
        </NavLink>
        <nav>
          <div className="md:hidden">
            {isMenuOpen ? (
              <Close
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              />
            ) : (
              <Hamburger
                onClick={() => {
                  setIsMenuOpen(true);
                }}
              />
            )}
          </div>
          <div className="hidden md:flex gap-10.5 text-base-mobile tracking-widest">
            {links.map((singleLink, index) => {
              const { href, title } = singleLink;
              return (
                <NavLink key={index} to={href}>
                  <p className="hover:underline hover:underline-offset-2">
                    {title.toUpperCase()}
                  </p>
                </NavLink>
              );
            })}
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div className="w-full absolute z-50 md:hidden">
          <div className="bg-primary-dark text-white text-2xl tracking-widest px-6 py-12 flex flex-col gap-y-8">
            {links.map((singleLink, index) => {
              const { href, title } = singleLink;
              return (
                <NavLink
                  key={index}
                  to={href}
                  className={({ isActive }) => {
                    return isActive ? "underline underline-offset-4" : "";
                  }}
                  style={{
                    WebkitTapHighlightColor: "transparent",
                  }}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  <p>{title.toUpperCase()}</p>
                </NavLink>
              );
            })}
          </div>
          <Overlay setIsMenuOpen={setIsMenuOpen} />
        </div>
      )}
    </div>
  );
};

export default Header;
