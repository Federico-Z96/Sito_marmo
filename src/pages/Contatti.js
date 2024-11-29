export default function Contatti({
  id,
  title,
  imageSrc,
  imgSfondoCont,
  subTitle,
  text,
  socialLinks,
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-screen-lg relative mb-24 mt-12 lg:pt-12"
    >
      <h2
        className="text-8xl font-bold text-gray-800 pb-4 text-center lg:text-left"
        data-aos="fade-up"
      >
        {title}
      </h2>

      <div className="relative px-4 md:px-4">
        <img
          src={imageSrc}
          alt="Contatti"
          className="w-full h-auto object-cover"
        />
        <div className="absolute lg:bottom-[-75px] lg:right-[-75px] lg:w-1/2 lg:h-2/3 bg-gray-800 hidden md:block md:w-1/3 md:h-1/3 md:bottom-[-20px] md:right-[-1px] z-[-1] divs"></div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 lg:pt-28 text-center lg:text-left">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 group md:ml-12"
              data-aos="fade-up"
            >
              <span className="flex items-center text-gray-800 font-medium group-hover:underline group-hover:scale-105 group-hover:text-gray-600 transition-all duration-300 break-all ">
                <img
                  src={link.icon}
                  alt={`Icona ${link.link}`}
                  className="w-8 h-8 object-contain mr-2"
                />
                {/* <span>{link.link}</span> */}
                <span>
                  {
                    link.link.startsWith("mailto:")
                      ? link.link.replace("mailto:", "") // Rimuovi "mailto:" solo per la mail
                      : link.link // Lascia invariati gli altri link
                  }
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
