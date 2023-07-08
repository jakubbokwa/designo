import Card from "./Card";

type CardProps = {
  image: string;
  title: string;
  subtitle: string;
};

type CardContainerProps = {
  images: CardProps[];
};

const CardContainer = ({ images }: CardContainerProps) => {
  return (
    <div className="mx-6 md:mx-0 my-24 lg:grid lg:grid-cols-3 lg:gap-8">
      {images.map((singleImage, index) => {
        const { image, title, subtitle } = singleImage;
        return (
          <Card key={index} image={image} title={title} subtitle={subtitle} />
        );
      })}
    </div>
  );
};

export default CardContainer;
