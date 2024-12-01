import React from "react";

export default function Storia({ id, title, leftImage, subTitle, text, buttonLink }) {
  return (
    <section id={id} className="py-8 lg:py-20 px-4 lg:px-0 md:px-8 mx-auto max-w-screen-lg">
      {/* Video sopra il titolo */}
      <div className="mb-8">
        {/* <video
          src={video}
          className="w-full max-w-full h-auto object-cover  mb-4"
          autoPlay
          muted
          loop
          playsInline
          data-aos="fade-up"
        ></video> */}
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-800 text-center pt-12" data-aos="fade-up">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Colonna sinistra: immagine */}
        <div className="flex justify-center">
          <img
            src={leftImage}
            alt="Storia"
            className="w-full max-w-full h-96 object-cover "
            data-aos="fade-up"
          />
        </div>

        <div className="flex flex-col justify-center ">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left" data-aos="fade-up">
            {subTitle}
          </h3>
          <p className="text-base text-gray-700 mb-4 text-center lg:text-left" data-aos="fade-up">
            {text}
          </p>
          <a
            href={buttonLink}
            className="inline-block text-black text-center px-6 py-3 hover:bg-gray-800 hover:text-white rounded-md border-2 border-gray-800 self-start storia-btn "
            data-aos="fade-up"
          >
            Scopri di più
          </a>
        </div>
      </div>
    </section>
  );
}




