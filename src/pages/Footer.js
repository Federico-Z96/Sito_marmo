export default function Footer( logo) {
    return (
      <footer className="w-full bg-cover bg-center py-16 relative mt-6" data-aos="none" style={{ backgroundImage:"url('/marmoSfondo_edited.jpg')" }} >
        <div className="container mx-auto px-8 text-center">
          {/* Logo Azienda */}
          <a
            href="#"
            className="inline-block mb-6"
            data-aos="none"
            aria-label="Torna all'inizio"
          >
            <img
              src={logo}
              alt="Logo Azienda"
              className="w-20 h-20 mx-auto hover:scale-110 transition-transform duration-300"
            />
          </a>
  
          {/* Testo di chiusura */}
          <p className="text-sm md:text-base font-medium" data-aos="none">
            © {new Date().getFullYear()} Il Tempio del Marmo. Tutti i diritti riservati.
          </p>
  
          {/* Telefono */}
          <p className="mt-2 text-sm md:text-base" data-aos="none">
            <a
              href="tel:+391234567890"
              className="hover:underline hover:text-bold transition-colors"
              data-aos="none"
            >
              Tel: +39 123 456 7890
            </a>
          </p>
        </div>
      </footer>
    );
  }
  