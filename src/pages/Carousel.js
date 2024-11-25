import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel({ images }) {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Navigation, Pagination]}
      className="w-full max-w-5xl mx-auto"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-[500px] object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}




