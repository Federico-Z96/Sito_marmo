import React from "react";

export default function ChiSiamo({ title, subtitle, imageSrc, extraImageSrc, description }) {
  return (
    <section className="py-16 px-8 mx-auto max-w-screen-lg mt-96 relative" data-aos="fade-up">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        <div className="h-auto relative">

          <img 
            src={imageSrc} 
            alt="Chi Siamo" 
            className="w-full h-auto object-cover" 
          />

          {/* <img
            src={extraImageSrc}
            alt="Immagine Sporgente"
            className="absolute top-[-75px] left-20 w-full h-1/2 object-cover z-[-1] "
          /> */}
          <div className="absolute top-[-75px] left-20 w-full h-1/2 object-cover z-[-1] bg-gray-800"></div>
        </div>

        <div className="flex flex-col justify-start h-full ml-20">
          <h2 className="text-8xl font-bold text-gray-800 pl-20" data-aos="fade-up">{title}</h2>
          <h3 className="text-3xl font-bold text-gray-800 mt-4 pl-20" data-aos="fade-up">{subtitle}</h3>
          <p className="text-base text-gray-800 pt-16" data-aos="fade-up">{description}</p>
        </div>
      </div>
    </section>
  );
}




  