import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CoruselItem = ({ data }) => {
  const bgFunc = (text) => {
    switch (text) {
      case "Bepul o'rnatib berish":
        return "bg-black";

      default:
        return "";
    }
  };
  return data?.text ? (
    <div className={`relative ${bgFunc(data.text)}`}>
      <p className="absolute top-4 text-white">{data?.text}</p>
      <img src={data.img} alt="" />
    </div>
  ) : (
    <img src={data.img} alt="" className="h-full" />
  );
};

export default CoruselItem;
