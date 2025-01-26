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
        <div className=" flex items-center justify-between p-3 max-w-[1340px] mx-auto">
          <div className="flex items-center gap-4">
            <p className="text-white text-[22.48px] font-monserrat font-normal leading-6">
              Clean Market dan siz uchun maxsus
            </p>
            <p className="text-white text-[22.48px] font-monserrat font-bold leading-6">
              -10% Chegirma
            </p>
          </div>
          <button className="w-[140px] h-9 rounded text-[#0B8297] font-monserrat text-base font-semibold leading-6 bg-white ">
            Bonusni olish
          </button>
        </div>
      </div>
      <div className="bg-[#F4F5F5] ">
        <div className="md:max-w-[800px] lg:max-w-[1340px] flex items-center justify-between  mx-auto ">
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
            <a href="https://www.instagram.com/cleanmarket.uz/" className="flex items-center gap-2">
              <Instagram className="w-5 h-5" />
              <p className="text-[#000000] font-monserrat text-sm font-normal leading-5">
                Cleanmarket_uz
              </p>
            </a>
            <a href="https://t.me/cleanmarketuz" className="flex items-center gap-2">
              <Send className="w-5 h-5" />
              <p className="text-[#000000] font-monserrat text-sm font-normal leading-5">
                t.me/Clean_market
              </p>
            </a>
            <a
              href="+998712007002"
              className="text-[#0B8297] font-monserrat text-base font-semibold leading-6"
            >
              +998 71 200 7 002
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1340px] flex items-center gap-16 my-8">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>

        <div className="flex items-center gap-[18px]">
          <div className="w-[122px] h-11 rounded-lg bg-[#60B0211A] flex items-center justify-center cursor-pointer gap-2">
            <AlignJustify className="w-4 h-4" />
            <NavLink
              to="/catalog/all"
              className="text-[#0B8297] font-monserrat text-lg font-normal leading-6"
            >
              Katalog
            </NavLink>
          </div>
          <div className="w-[529px] h-11 rounded-lg flex items-center justify-between border-2 cursor-pointer">
            <input
              type="text"
              placeholder="Qidiruv"
              className="text-[#9A999B] font-monserrat text-base font-normal leading-7 pl-4 outline-none border-none"
            />
            <div className="w-[110px] h-[43px] rounded-md bg-[#F0F8E9] flex items-center justify-center ">
              <Search className="w-6 h-6 " />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Heart className="cursor-pointer" />
          <p className="text-[#000000] font-monserrat text-sm font-normal leading-[17px]">
            Sevimlilar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
