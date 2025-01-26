import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import group from "../../img/Group.svg";

const Corusel2 = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
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
    </div>
  );
};

export default Corusel2;
