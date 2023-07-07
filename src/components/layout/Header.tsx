import { Link } from "react-router-dom";

import LogoDark from "../../assets/shared/desktop/logo-dark.png";
import { ReactComponent as Hamburger } from "../../assets/shared/mobile/icon-hamburger.svg";

import links from "../../helpers/links";

const Header = () => {
  return (
    <header className="max-w-1440 flex justify-between align-center px-6 py-8.5 md:px-10 md:py-16 lg:px-41">
      <Link to="/">
        <img src={LogoDark} alt="Dark logo of Designo" className="logo" />
      </Link>
      <nav>
        <div className="md:hidden">
          <Hamburger />
        </div>
        <div className="hidden md:flex gap-10.5 text-base-mobile tracking-widest">
          {links.map((singleLink, index) => {
            const { href, title } = singleLink;
            return (
              <Link key={index} to={href}>
                <p>{title.toUpperCase()}</p>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
