export default function Footer({ logo }) {
  return (
    <footer className=" bg-cover bg-center py-16 relative mt-6 bg-gray-800  text-white w-full" >
      <div className="container mx-auto text-center">

        <a
          href="#top"
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

        <p className="text-sm md:text-base font-medium ">
          © {new Date().getFullYear()} Il Tempio del Marmo. Tutti i diritti riservati.
        </p>

        <a
          href="tel:+391234567890"
          className="hover:underline hover:text-bold font-Roboto-t"
        >
          Tel: +39 123 456 7890
        </a>

      </div>
    </footer>
  );
}
