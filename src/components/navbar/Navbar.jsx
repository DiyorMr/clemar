import {
  AlignJustify,
  Heart,
  Instagram,
  MapPin,
  Search,
  Send,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import LanguageSwitcher from "../language-switcher/LanguageSwitcher";
import logo from "../../img/logo.svg";

const Navbar = () => {
  return (
    <div>
      <div className="bg-[#0B8297]">
        <div className=" flex items-center justify-between p-3 max-w-[1340px] mx-auto px-5">
          <div className="flex items-center flex-col sm:flex-row gap-1 sm:gap-4">
            <p className="text-white text-xs sm:text-sm md:text-xl font-monserrat font-normal">
              Clean Market dan siz uchun maxsus
            </p>
            <p className="text-white text-xs sm:text-sm md:text-xl font-monserrat font-bold">
              -10% Chegirma
            </p>
          </div>
          <button className="p-2 rounded text-[#0B8297] font-monserrat text-xs md:text-sm font-semibold bg-white text-nowrap">
            Bonusni olish
          </button>
        </div>
      </div>
      <div className="bg-[#F4F5F5] ">
        <div className="max-w-[1340px] flex items-center justify-between  mx-auto px-5">
          <div className=" p-3 flex items-center gap-[9px] cursor-pointer">
            <MapPin className="w-5 h-5" />
            <p className="text-[#727474] font-inter text-sm font-normal leading-5">
              Lokatsiya:
            </p>
            <p className="text-[#020105] font-inter text-sm font-normal leading-5 underline">
              Toshkent
            </p>
          </div>
          <div className="flex items-center gap-10">
            <a href="https://www.instagram.com/cleanmarket.uz/" className="hidden lg:flex items-center gap-2">
              <Instagram className="w-5 h-5" />
              <p className="text-[#000000] font-monserrat text-sm font-normal leading-5">
                Cleanmarket_uz
              </p>
            </a>
            <a href="https://t.me/cleanmarketuz" className="hidden md:flex items-center gap-2">
              <Send className="w-5 h-5" />
              <p className="text-[#000000] font-monserrat text-sm font-normal leading-5">
                t.me/Clean_market
              </p>
            </a>
            <a
              href="+998712007002"
              className="text-[#0B8297] font-monserrat text-base font-semibold hidden sm:inline-block"
            >
              +998 71 200 7 002
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1340px] flex items-center gap-16 my-8 px-5">
        <NavLink to="/" className='hidden md:inline-block'>
          <img src={logo} alt="" />
        </NavLink>

        <div className="flex items-center justify-between md:justify-start w-full md:w-auto gap-5">
          <div className="h-11 p-3 rounded-lg bg-[#60B0211A] flex items-center justify-center cursor-pointer gap-3">
            <AlignJustify className="w-4 h-4" />
            <NavLink
              to="/catalog/all"
              className="text-[#0B8297] font-monserrat text-lg font-normal"
            >
              Katalog
            </NavLink>
          </div>
          <div className="w-full lg:w-[529px]  h-11 rounded-lg flex items-center justify-between border-2 cursor-pointer">
            <input
              type="text"
              placeholder="Qidiruv"
              className="text-[#9A999B] font-monserrat text-base font-normal rounded-tl-md rounded-bl-md w-full h-full pl-4 outline-none border-none"
            />
            <div className="w-[110px] h-[43px] rounded-md bg-[#F0F8E9] flex items-center justify-center ">
              <Search className="w-6 h-6 " />
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Heart className="cursor-pointer" />
          <p className="text-[#000000] font-monserrat text-sm font-normal">
            Sevimlilar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
