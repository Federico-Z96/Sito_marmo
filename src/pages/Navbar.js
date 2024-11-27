import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
        setMenuOpen(false); // Chiudi il menu dopo il click
      });
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 mb-12">
      <div className="flex justify-center items-center p-2">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/un_cubo_di_marmo_senza_sfondo-removebg-preview.png"
            alt="Logo"
            className="h-10 w-10 object-contain hover:scale-150 transition-transform duration-300"
          />
        </a>

       
      

      {/* Menu */}
      <ul
        className={`flex flex-col md:flex-row justify-center items-center transition-all duration-500 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden md:max-h-full md:overflow-visible`}
      >
        <li className="mx-4">
          <a
            className="text-black font-bold text-lg px-4 py-2 rounded-md bg-white 
                       transition-all duration-1000 hover:bg-gradient-to-r hover:from-white hover:to-gray-800 hover:text-white"
            href="#storia"
          >
            Storia
          </a>
        </li>
        <li className="mx-4">
          <a
            className="text-black font-bold text-lg px-4 py-2 rounded-md bg-white 
                       transition-all duration-1000 hover:bg-gradient-to-r hover:from-white hover:to-gray-800 hover:text-white"
            href="#chi-siamo"
          >
            Chi Siamo
          </a>
        </li>
        <li className="mx-4">
          <a
            className="text-black font-bold text-lg px-4 py-2 rounded-md bg-white 
                       transition-all duration-1000 hover:bg-gradient-to-r hover:from-white hover:to-gray-800 hover:text-white"
            href="#made-by-us"
          >
            Made by Us
          </a>
        </li>
        <li className="mx-4">
          <a
            className="text-black font-bold text-lg px-4 py-2 rounded-md bg-white 
                       transition-all duration-1000 hover:bg-gradient-to-r hover:from-white hover:to-gray-800 hover:text-white"
            href="#contatti"
          >
            Contatti
          </a>
        </li>
      </ul>

       {/* Icona Hamburger */}
       <button
          className="block md:hidden text-black focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-8 h-8 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
}





