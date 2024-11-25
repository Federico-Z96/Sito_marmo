import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

import Navbar from "./Navbar";
import HeaderCarusel from "./fonts/HeaderCarusel";
import MadeByUs from "./fonts/MadeByUs";
import ChiSiamo from "./ChiSiamo";
import Storia from "./Storia";
import Contatti from "./Contatti";
import Footer from "./Footer";


export default function Home() {
    useEffect(() => {
      // Inizializza AOS
      AOS.init({
        duration: 1000, // Durata animazioni
        once: true,     // Animazione una sola volta
      });
  
      // Seleziona tutti gli <h*> e <p> dinamicamente
      const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p");
      headings.forEach((element) => {
        element.setAttribute("data-aos", "fade-up"); // Assegna l'effetto "fade-up"
      });
    }, []);
  return (
    <>
      {/* <HeaderCarusel /> */}
      <Navbar />
      <main>
        <section id="storia" style={{ height: "100vh"}}>
        <Storia
           title="Storia"
           leftImage="/enormi-blocchi-di-marmo-estratto.jpg"
           video="/lavorazione marmo-video.mp4"
           subTitle="La tradizione che incotra l'arte"
           text="Il Tempio del Marmo: una storia di passione e maestria che dura da tre generazioni. Nata agli inizi del Novecento, 
                l'azienda ha le sue radici nella paziente estrazione del marmo dalle montagne. Oggi, grazie all'innovazione e alla 
                collaborazione con grandi nomi dell'architettura, realizza progetti unici per musei e gallerie, trasformando il marmo 
                in opere d'arte. Un connubio perfetto tra tradizione e modernità, capace di soddisfare anche i clienti più esigenti."
           buttonLink="/#contatti"
          />
          

        </section>
        <section id="chi-siamo">
          <ChiSiamo
          title="Chi Siamo"
          subtitle="Un po' della nostra storia"
          imageSrc="/katie-moum-9jNcTRncjgM-unsplash.jpg"
          extraImageSrc="/annie-spratt-osuiatBDTww-unsplash_edited.jpg"
          description="Il Tempio del Marmo è un'azienda leader nella lavorazione del marmo, specializzata nella creazione di prodotti
                        di alta qualità per arredare e decorare ogni ambiente. Con una tradizione artigianale che si tramanda da generazioni,
                        Il Tempio del Marmo offre una vasta gamma di soluzioni su misura, tra cui scale eleganti, tavoli raffinati, cucine funzionali,
                        statue artistiche e oggettistica varia come posaceneri e sottobicchieri. Ogni pezzo è realizzato con la massima cura e attenzione 
                        ai dettagli, utilizzando solo i migliori materiali per garantire durabilità e bellezza senza tempo. Il Tempio del Marmo si distingue
                         per la sua capacità di trasformare il marmo in vere e proprie opere d'arte, soddisfacendo le esigenze di una clientela esigente e raffinata."               
          />
        </section>
        <section
          id="contatti"
          style={{ height: "100vh"}}
        >
          <Contatti
        title="Contatti"
        imageSrc="/OIP.jpeg"
        imgSfondoCont="/annie-spratt-osuiatBDTww-unsplash_edited.jpg"
        subTitle="Dove trovarci"
        text="Per maggiori informazioni non esitare a contattarci tramite i nostri canali ufficiali."
        socialLinks={[
          { icon: "/instagram-brands-solid.svg", link: "https://instagram.com" },
          { icon: "/facebook-brands-solid.svg", link: "https://facebook.com" },
          { icon: "/linkedin-brands-solid.svg", link: "https://linkedin.com" },
          { icon: "/envelope-solid.svg", link: "mailto:yourname@gmail.com" },
          { icon: "/youtube-brands-solid.svg", link: "https://youtube.com" },
        ]}
      />
    </section>
    <section id="made-by-us" >
          <MadeByUs />
        </section>
        
      </main>
      <Footer
      logo=""
      />
    </>
  );
}
