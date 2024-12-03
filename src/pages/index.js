import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Navbar";
import AnimatedLogo from "./AnimatedLogo";
import MadeByUs from "./MadeByUs";
import ChiSiamo from "./ChiSiamo";
import ContactForm from "./ContactForm";
import Contatti from "./Contatti";
import Footer from "./Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const headings = document.querySelectorAll(".animated");
    headings.forEach((element) => {
      element.setAttribute("data-aos", "fade-up");
    });
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <AnimatedLogo />
        <ChiSiamo
          id="chi-siamo"
          title="Chi Siamo"
          subtitle="Un po' della nostra storia"
          imageSrc="/chisiamo-lavorazione-transformed.jpeg"
          description="Maniscale Marmi è un'azienda leader nella lavorazione del marmo, specializzata in prodotti di alta qualità per arredare e decorare. Con una tradizione artigianale tramandata da generazioni, offre soluzioni su misura come scale, tavoli, cucine, statue e oggettistica. Ogni pezzo è realizzato con cura e materiali di alta qualità, garantendo durabilità e bellezza senza tempo. L'azienda si distingue per trasformare il marmo in opere d'arte, soddisfacendo una clientela esigente e raffinata."
        />
        <MadeByUs id="made-by-us" />
        <ContactForm id="preventivo" />
        <Contatti
          id="contatti"
          title="Contatti"
          imageSrc="/lavorazione-statuajpg-transformed.jpeg"
          subTitle="Dove trovarci"
          text="Via S. Benedetto da Norcia, 3, 91021, Campobello di Mazara TP"
        />
      </main>
      <Footer logo="/un_cubo_di_marmo_senza_sfondo-removebg-preview.png" />
    </>
  );
}
