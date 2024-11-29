export default function MadeByUs({ id }) {
    return (
        <div id={id} className="py-8 lg:py-20 px-4 lg:px-0 mx-auto max-w-screen-lg">
            {/* Titoli allineati a destra */}
            <h2 className="text-8xl font-bold text-gray-800 lg:text-right lg:text-right text-center">
                Made by Us
            </h2>
            <h3 className="text-3xl font-bold text-gray-800 mt-2 lg:text-right text-center">
                Lavorazioni su misura ideate e realizzate da noi
            </h3>
            <img
                src="/lavorazione-marmo_scultura-OVXjhuq-t-transformed.jpeg"
                alt="Lavoro 1"
                className="w-full h-96 object-cover mt-6"
            />

            {/* Contenuto diviso in due colonne */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-12 items-center text-center lg:text-left">
                <div>
                    {/* Sottotitolo e paragrafo */}
                    <h3 className="text-2xl font-semibold text-gray-800">
                        La nostra arte e tradizione
                    </h3>
                    <p className="text-base lg:text-lg text-gray-600 lg:mt-4">
                        Ogni nostro progetto è il risultato di una combinazione perfetta tra tradizione artigianale e innovazione.
                        Ci impegniamo a creare lavori unici, dove ogni pezzo racconta una storia di passione e competenza.
                    </p>
                </div>

                <div>
                    {/* Ulteriore testo */}
                    <p className="text-base lg:text-lg text-gray-600 lg:mt-4">
                        Lavoriamo con il marmo da generazioni, e il nostro team di esperti artigiani è in grado di realizzare ogni tipo di progetto,
                        sia che si tratti di piccoli oggetti decorativi, sia che si tratti di grandi opere d'arte da collocare in ambienti pubblici
                        e privati. Ogni pezzo è unico e creato con la massima attenzione ai dettagli.
                    </p>
                </div>
            </div>
        </div>
    );
}


