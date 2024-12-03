export default function Contatti({
  id,
  title,
  imageSrc,
  subTitle,
  text,
}) {
  return (
    <section id={id} className="mx-auto max-w-screen-lg relative mb-24 mt-12 lg:pt-12" >
      <h2 className="text-8xl font-bold text-gray pb-4 text-center lg:text-left uppercase" data-aos="fade-up">{title}</h2>

      <div className="relative">
        <img
          src={imageSrc}
          alt="Contatti"
          className="w-full h-auto object-cover"
        />
        <div className="absolute lg:bottom-[-75px] lg:right-[-75px] lg:w-1/2 lg:h-2/3 bg-black hidden md:block md:w-1/3 md:h-1/3 md:bottom-[-20px] md:right-[-1px] z-[-1] divs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 ">
        <div className="text-center lg:text-left ">
          <h3
            className="text-3xl font-bold text-gray-800 mt-4"
            data-aos="fade-up"
          >
            {subTitle}
          </h3>
          <p className="text-base text-gray-700 mt-2" data-aos="fade-up">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
