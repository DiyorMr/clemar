import { Facebook, Instagram, Mail, MapPin, Send, Youtube } from "lucide-react";
import React from "react";
import logof from "../../img/logof.svg";

const Fotter = () => {
  return (
    <div className=" bg-[#0B8297]">
      <div className="mx-auto max-w-[1100px] flex items-center gap-40 pb-6">
        <div>
          <h1 className="text-[#FFFFFF] font-monserrat text-lg font-medium leading-5 w-[191px] pt-10 pb-5">
            Cleanmarket - Siz va yaqinlaringiz uchun!{" "}
          </h1>
          <h3 className="text-[#FFFFFF] font-monserrat text-sm font-normal leading-4 pb-3">
            Aloqa uchun
          </h3>
          <p className="text-[#FFFFFF] font-monserrat text-xl font-semibold leading-6">
            +998 99 860 60 60
          </p>
          <div className="flex items-center gap-2 mt-5">
            <MapPin className="text-white" />
            <p className="text-white font-monserrat text-base font-normal leading-4 underline cursor-pointer">
              Bizning do’konlar
            </p>
          </div>
          <div className="flex items-center gap-2 mt-5">
            <Mail className="text-white" />
            <p className="text-white font-monserrat text-base font-normal leading-4 cursor-pointer">
              Info@cleanmarket.uz
            </p>
          </div>
          <div className="flex items-center gap-5 text-white pt-6">
            <a href="https://www.instagram.com/cleanmarket.uz/">
              <Instagram />
            </a>
            <a href="https://www.facebook.com/p/Cleanmarketuz-100071256438495/">
              <Facebook />
            </a>
            <a href="https://www.youtube.com/@Clean-market">
              <Youtube />
            </a>
            <a href="https://t.me/cleanmarketuz">
              <Send />
            </a>
          </div>
        </div>
        <div>
          <p className="text-[#FFFFFF] font-monserrat text-lg font-bold leading-5 pt-28">
            Maxsulotlar
          </p>
          <p className="text-white font-monserrat text-sm  font-normal leading-4 pt-8">
            Dush va dush sistemalari
          </p>
          <p className="text-white font-monserrat text-sm  font-normal leading-4  py-[14px]">
            Vanna va keramika
          </p>
          <p className="text-white font-monserrat text-sm  font-normal leading-4 ">
            Smestitel
          </p>
        </div>
        <div>
          <p className="text-[#FFFFFF] font-monserrat text-lg font-bold leading-5 pt-28">
            Ma'lumotlar
          </p>
          <p className="text-white font-monserrat text-sm  font-normal leading-4 pt-8">
            Yetkazib berish
          </p>
          <p className="text-white font-monserrat text-sm  font-normal leading-4  py-[14px]">
            Bizning loyihalar
          </p>
          <p className="text-white font-monserrat text-sm  font-normal leading-4 ">
            Kompaniya haqida
          </p>
        </div>
        <div>
          <img src={logof} alt="" />
        </div>
      </div>
      <div className="bg-[#EAEAEA]">
        <div className="mx-auto max-w-[1100px] flex items-center justify-between p-4">
          <p className="text-[#939393] font-monserrat text-sm font-medium leading-4">
            2023 © Barcha xuquqlar ximoyalangan.
          </p>
          <p className="text-[#939393] font-monserrat text-sm font-medium leading-4">
            Ommaviy taklif
          </p>
          <p className="text-[#939393] font-monserrat text-sm font-medium leading-4">
            Melizz
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
