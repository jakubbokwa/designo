type CardProps = {
  image: string;
  title: string;
  subtitle: string;
};

const Card = ({ image, title, subtitle }: CardProps) => {
  return (
    <div className="mb-10 md:mb-8 lg:mb-0 last:mb-0 rounded-2xl overflow-hidden md:flex lg:block">
      <picture className="md:w-1/2 lg:w-full">
        <img src={image} alt={title} />
      </picture>
      <section className="group bg-tertiary-peach hover:bg-primary-peach hover:text-white py-8 px-7.5 md:w-1/2 md:flex md:flex-col md:justify-center lg:block lg:w-full lg:h-full">
        <header className="text-center text-xl font-medium uppercase mb-4 text-primary-peach group-hover:text-white">
          {title}
        </header>
        <p className="text-center">{subtitle}</p>
      </section>
    </div>
  );
};

export default Card;
