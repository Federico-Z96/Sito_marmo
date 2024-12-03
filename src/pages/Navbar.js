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
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 0; // Altezza dinamica della navbar

        anchors.forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();

                const target = document.querySelector(this.getAttribute("href"));
                if (target) {
                    // Usa getBoundingClientRect per una posizione più precisa
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth",
                    });
                }
                setMenuOpen(false);
            });
        });

        return () => {
            anchors.forEach((anchor) => {
                anchor.removeEventListener("click", () => { });
            });
        };
    }, []);

    return (
        <nav className="p-4 fixed top-0 w-full bg-black shadow-md z-50 flex justify-between lg:justify-center">
            <div className="w-full lg:w-auto flex justify-between lg:justify-center items-center p-2">
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

            <ul
                className={`fixed inset-0 gap-6 bg-black flex flex-col justify-center items-center transition-transform duration-500 transform ${menuOpen ? "translate-y-0" : "-translate-y-full"
                    } md:static md:translate-y-0 md:flex-row md:h-auto md:overflow-visible`}
            >
                <li className="mx-4">
                    <a
                        className="uppercase relative text-white text-[2rem] lg:text-[1rem] font-bold text-lg py-2 transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        href="#chi-siamo"
                    >
                        Chi Siamo
                    </a>
                </li>
                <li className="mx-4">
                    <a
                        className="uppercase relative text-white text-[2rem] lg:text-[1rem] font-bold text-lg py-2 transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        href="#made-by-us"
                    >
                        Made by Us
                    </a>
                </li>
                <li className="mx-4">
                    <a
                        className="uppercase relative text-white text-[2rem] lg:text-[1rem] font-bold text-lg py-2 transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        href="#preventivo"
                    >
                        Preventivo
                    </a>
                </li>
                <li className="mx-4">
                    <a
                        className="uppercase relative text-white text-[2rem] lg:text-[1rem] font-bold text-lg py-2 transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                        href="#contatti"
                    >
                        Contatti
                    </a>
                </li>
            </ul>
        </nav>
    );
}
