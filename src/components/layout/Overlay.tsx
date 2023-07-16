type OverlayType = {
  setIsMenuOpen: (arg: boolean) => void;
};

const Overlay = ({ setIsMenuOpen }: OverlayType) => {
  return (
    <div
      onClick={() => {
        setIsMenuOpen(false);
      }}
      className="bg-primary-dark/50 h-screen"
    />
  );
};

export default Overlay;
