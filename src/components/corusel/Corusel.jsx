import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CoruselItem from "./CoruselItem";

const Corusel = ({ data }) => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className='h-full'>
            <CoruselItem data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Corusel;
