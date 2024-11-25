import React, {useEffect} from "react";

export default function Navbar() {
    
      
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <ul className="flex justify-center items-center p-2">

        {/* Logo */}
        <li className="mx-4">
          <a href="/" className="flex items-center" data-aos="none">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
          </a>
        </li>

        <li className="mx-4">
          <a
            className="text-black font-bold text-lg px-4 py-2 rounded-md bg-white 
                       transition-all duration-1000 hover:bg-gradient-to-r hover:from-white hover:to-black hover:text-white"
            data-aos="none"           
            href="#storia"
          >
            Storia
          </a>
        </li>

        <li className="mx-4">
          <a
            className="text-black font-bold text-lg px-4 py-2 rounded-md bg-white 
                       transition-all duration-1000 hover:bg-gradient-to-r hover:from-white hover:to-black hover:text-white"
            data-aos="none"
            href="#chi-siamo"
          >
            Chi Siamo
          </a>
        </li>

        <li className="mx-4">
          <a
            className="text-black font-bold text-lg px-4 py-2 rounded-md bg-white 
                       transition-all duration-1000 hover:bg-gradient-to-r hover:from-white hover:to-black hover:text-white"
            data-aos="none"
            href="#made-by-us"
          >
            Made by Us
          </a>
        </li>

        <li className="mx-4">
          <a
            className="text-black font-bold text-lg px-4 py-2 rounded-md bg-white 
                       transition-all duration-1000 hover:bg-gradient-to-r hover:from-white hover:to-black hover:text-white"
            data-aos="none"
            href="#contatti"
          >
            Contatti
          </a>
        </li>

      </ul>
    </nav>
  );
}




