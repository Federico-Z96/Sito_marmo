import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [menuOpen]);

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
                anchor.removeEventListener("click", () => { });
            });
        };
    }, []);

    return (
        <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex justify-between lg:justify-center">
            <div className="w-full lg:w-auto flex justify-between lg:justify-center items-center p-2">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img
                        src="/un_cubo_di_marmo_senza_sfondo-removebg-preview.png"
                        alt="Logo"
                        className="h-10 w-10 object-contain hover:scale-150 transition-transform duration-300"
                    />
                </a>

                {/* Icona Hamburger */}
                <button
                    className="block md:hidden text-black focus:outline-none z-10"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className={`ham hamRotate ham1 ${menuOpen ? "active" : ""}`}
                        viewBox="0 0 100 100"
                        width="40"
                    >
                        <path
                            className="line top"
                            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                        />
                        <path className="line middle" d="m 30,50 h 40" />
                        <path
                            className="line bottom"
                            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                        />
                    </svg>
                </button>
            </div>

            {/* Menu */}
            <ul
                className={`fixed inset-0 gap-6 bg-white flex flex-col justify-center items-center transition-transform duration-500 transform ${menuOpen ? "translate-y-0" : "-translate-y-full"
                    } md:static md:translate-y-0 md:flex-row md:h-auto md:overflow-visible`}
            >
                <li className="mx-4">
                    <a
                        className="text-black text-[2rem] lg:text-[1rem] font-bold text-lg px-4 py-2 rounded-md bg-white 
                       transition-all duration-300 hover:bg-gradient-to-r hover:from-white hover:to-gray-800 hover:text-white"
                        href="#chi-siamo"
                    >
                        Chi Siamo
                    </a>
                </li>
                <li className="mx-4">
                    <a
                        className="text-black text-[2rem] lg:text-[1rem] font-bold text-lg px-4 py-2 rounded-md bg-white 
                       transition-all duration-300 hover:bg-gradient-to-r hover:from-white hover:to-gray-800 hover:text-white"
                        href="#made-by-us"
                    >
                        Made by Us
                    </a>
                </li>
                <li className="mx-4">
                    <a
                        className="text-black text-[2rem] lg:text-[1rem] font-bold text-lg px-4 py-2 rounded-md bg-white 
                       transition-all duration-300 hover:bg-gradient-to-r hover:from-white hover:to-gray-800 hover:text-white"
                        href="#contatti"
                    >
                        Contatti
                    </a>
                </li>
            </ul>
        </nav>
    );
}
