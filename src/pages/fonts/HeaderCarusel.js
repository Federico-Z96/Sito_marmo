import Carousel from "../Carousel";

export default function HeaderCarusel() {
  const images = [
    { src: "/lavorazioneMarmo.jpeg", alt: "Lavoro 1" },
    { src: "/statue di marmo.jpg", alt: "Lavoro 2" },
    { src: "/taglio-marmo.jpeg", alt: "Lavoro 3" },
  ];

  return (
    <div>
      <h3>Benvenuti al nostro carosello!</h3>
      <Carousel images={images} />
    </div>
  );
}
