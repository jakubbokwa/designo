import LogoDark from "../../assets/shared/desktop/logo-dark.png";
import { ReactComponent as Hamburger } from "../../assets/shared/mobile/icon-hamburger.svg";

const Header = () => {
  return (
    <header className="max-w-1440 flex justify-between align-center px-6 py-8.5">
      <img src={LogoDark} alt="Dark logo of Designo" className="logo" />
      <nav>
        <Hamburger />
      </nav>
    </header>
  );
};

export default Header;
