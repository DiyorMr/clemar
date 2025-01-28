import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import group from "../../img/Group.svg";

const Corusel2 = () => {
  return (
    <Swiper
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      modules={[ Autoplay,  Mousewheel, Keyboard]}
      className="mySwiper"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img src={group} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={group} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={group} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Corusel2;
