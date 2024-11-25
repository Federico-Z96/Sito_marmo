export default function MadeByUs() {
    return (
      <div className="py-16 px-8 mx-auto max-w-screen-lg mt-60">
        {/* Titoli allineati a destra */}
        <h2 className="text-8xl font-bold text-gray-800 text-right" data-aos="none">Made by Us</h2>
        <h3 className="text-3xl font-bold text-gray-800 mt-2 text-right" data-aos="none">Lavorazioni su misura ideate e realizzate da noi</h3>
  
       
            <img
              src="/public/annie-spratt-osuiatBDTww-unsplash_edited.jpg"
              alt="Immagine di sfondo"
              className="absolute top-[-75px] left-20 w-full h-1/2 object-cover z-[-1]"
              
            />
            {/* Immagine sovrapposta */}
            <img
              src="/statue di marmo.jpg"
              alt="Lavoro 1"
              className="w-full h-auto object-cover"
            />
         
  
        {/* Contenuto diviso in due colonne */}
        <div className="grid grid-cols-2 gap-8 mt-12">
          <div>
            {/* Sottotitolo e paragrafo */}
            <h4 className="text-2xl font-semibold text-gray-800" data-aos="none">La nostra arte e tradizione</h4>
            <p className="text-lg text-gray-600 mt-4" data-aos="fade-up">
              Ogni nostro progetto è il risultato di una combinazione perfetta tra tradizione artigianale e innovazione. 
              Ci impegniamo a creare lavori unici, dove ogni pezzo racconta una storia di passione e competenza.
            </p>
          </div>
  
          <div>
            {/* Ulteriore testo */}
            <p className="text-lg text-gray-600 mt-4" data-aos="none">
              Lavoriamo con il marmo da generazioni, e il nostro team di esperti artigiani è in grado di realizzare ogni tipo di progetto,
              sia che si tratti di piccoli oggetti decorativi, sia che si tratti di grandi opere d'arte da collocare in ambienti pubblici 
              e privati. Ogni pezzo è unico e creato con la massima attenzione ai dettagli.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
