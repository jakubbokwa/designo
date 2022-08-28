const Header = () => {
  return (
    <header className="max-w-1440 flex justify-between align-center px-6 py-8.5">
      <img
        src="/shared/desktop/logo-dark.png"
        alt="Light logo of Designo"
        className="logo"
      />
      <nav>
        <img
          src="/shared/mobile/icon-hamburger.svg"
          alt="Drawer icon to open mobile menu"
        />
      </nav>
    </header>
  );
};

export default Header;
