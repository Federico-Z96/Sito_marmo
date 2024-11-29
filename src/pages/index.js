import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Navbar";
import MadeByUs from "./MadeByUs";
import ChiSiamo from "./ChiSiamo";
import Storia from "./Storia";
import Contatti from "./Contatti";
import Footer from "./Footer";

export default function Home() {
  useEffect(() => {
    // Inizializza AOS
    AOS.init({
      duration: 1000, // Durata animazioni
      once: true, // Animazione una sola volta
    });

    // Seleziona tutti gli <h*> e <p> dinamicamente
    const headings = document.querySelectorAll(".animated");
    headings.forEach((element) => {
      element.setAttribute("data-aos", "fade-up"); // Assegna l'effetto "fade-up"
    });
  }, []);
  return (
    <>
      {/* <HeaderCarusel /> */}
      <Navbar />
      <main>
        <video
          src="/lavorazione marmo-video.mp4"
          className="w-full max-w-full h-auto object-cover mb-4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <Storia
          id="storia"
          title="Storia"
          leftImage="/lavorazione-sfera-marmo-transformed.jpeg"
          subTitle="La tradizione che incotra l'arte"
          text="Il Tempio del Marmo: una storia di passione e maestria che dura da tre generazioni. Nata agli inizi del Novecento, 
                l'azienda ha le sue radici nella paziente estrazione del marmo dalle montagne. Oggi, grazie all'innovazione e alla 
                collaborazione con grandi nomi dell'architettura, realizza progetti unici per musei e gallerie, trasformando il marmo 
                in opere d'arte. Un connubio perfetto tra tradizione e modernità, capace di soddisfare anche i clienti più esigenti."
          buttonLink="/#contatti"
        />

        <ChiSiamo
          id="chi-siamo"
          title="Chi Siamo"
          subtitle="Un po' della nostra storia"
          imageSrc="/chisiamo-lavorazione-transformed.jpeg"
          extraImageSrc="/annie-spratt-osuiatBDTww-unsplash_edited.jpg"
          description="Il Tempio del Marmo è un'azienda leader nella lavorazione del marmo, specializzata in prodotti di alta qualità per arredare e decorare. Con una tradizione artigianale tramandata da generazioni, offre soluzioni su misura come scale, tavoli, cucine, statue e oggettistica. Ogni pezzo è realizzato con cura e materiali di alta qualità, garantendo durabilità e bellezza senza tempo. L'azienda si distingue per trasformare il marmo in opere d'arte, soddisfacendo una clientela esigente e raffinata."
        />
        <MadeByUs id="made-by-us" />
        <Contatti
          id="contatti"
          title="Contatti"
          imageSrc="/lavorazione-statuajpg-transformed.jpeg"
          imgSfondoCont="/annie-spratt-osuiatBDTww-unsplash_edited.jpg"
          subTitle="Dove trovarci"
          text="Per maggiori informazioni non esitare a contattarci tramite i nostri canali ufficiali."
          socialLinks={[
            {
              icon: "/instagram-brands-solid.svg",
              link: "https://instagram.com",
            },
            {
              icon: "/facebook-brands-solid.svg",
              link: "https://facebook.com",
            },
            {
              icon: "/linkedin-brands-solid.svg",
              link: "https://linkedin.com",
            },
            { icon: "/envelope-solid.svg", link: "mailto:email@gmail.com" },
            { icon: "/youtube-brands-solid.svg", link: "https://youtube.com" },
          ]}
        />
      </main>
      <Footer logo="/un_cubo_di_marmo_senza_sfondo-removebg-preview.png" />
    </>
  );
}
