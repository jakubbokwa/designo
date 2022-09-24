import icons from "../../helpers/icons";

const Icons = () => {
  return (
    <div className="flex gap-4">
      {icons.map((singleIcon, index) => {
        const { href, icon } = singleIcon;
        return (
          <a key={index} href={href} target="_blank">
            {icon({
              className: "text-primary-peach hover:text-secondary-peach",
            })}
          </a>
        );
      })}
    </div>
  );
};

export default Icons;
