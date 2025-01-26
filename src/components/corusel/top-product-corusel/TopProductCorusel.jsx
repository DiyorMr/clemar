import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import imgcorusel1 from "../../../img/tool-front-premium.svg";
import imgcorusel2 from "../../../img/Frame 1000005410.svg";
import imgcorusel3 from "../../../img/linegradientsvg.svg";

const TopProductCorusel = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        spaceBetween={30}
        slidesPerView={1.3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="bg-gray-800 rounded-3xl flex justify-between items-center px-20">
            <span className="text-6xl tracking-wider text-white w-[120px] text-wrap font-semibold">
              Bepul o'rnatib berish
            </span>
            <img src={imgcorusel1} alt="" className="h-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[266px] w-full rounded-[20px] object-cover">
            <img src={imgcorusel2} alt="" className="h-full w-[1024px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imgcorusel3}
            alt=""
            className="object-cover w-full h-[266px] rounded-3xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopProductCorusel;
