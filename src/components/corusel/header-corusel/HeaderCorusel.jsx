import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeaderCorusel = ({ data }) => {
  return (
    <div>
      <Swiper
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay,  Mousewheel, Keyboard]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.img} alt="" className="h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeaderCorusel;
