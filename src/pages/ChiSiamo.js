import React from "react";

export default function ChiSiamo({ id, title, subtitle, imageSrc, extraImageSrc, description }) {
  return (
    <section id={id} className="py-8 lg:py-20 mt-8 lg:mt-40 px-4 lg:px-0 mx-auto max-w-screen-lg relative" data-aos="fade-up">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        <div className="h-auto relative">

          <img
            src={imageSrc}
            alt="Chi Siamo"
            className="w-full h-auto object-cover"
          />

          <div className="absolute top-[-75px] left-20 w-full h-1/2  md:h-1/3 md:top-[-20px] md:left-[20px] object-cover z-[-1] bg-gray-800 divs"></div>
        </div>

        <div className="flex lg:flex-col lg:justify-start justify-center h-full lg:ml-20 
                        flex-col items-center text-center lg:text-left">
          <h2 className="text-8xl font-bold text-gray-800 lg:pl-20 lg:ml-12" data-aos="fade-up">{title}</h2>
          <h3 className="text-3xl font-bold text-gray-800 mt-4 lg:pl-20 lg:ml-12" data-aos="fade-up">{subtitle}</h3>
          <p className="text-base text-gray-800 pt-4 lg:pl-20" data-aos="fade-up">{description}</p>
        </div>
      </div>
    </section>
  );
}





