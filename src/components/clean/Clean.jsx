import { CalendarFold, Eye } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import clean from "../../img/clean.svg";
import Corusel2 from "../corusel/Corusel2";
import CleanCard from "./CleanCard";
import { cleanCardText } from "./data";

const Clean = () => {
  return (
    <div className="mx-auto max-w-[1340px] mb-40 px-5">
      <div className="flex items-center justify-between">
        <h1 className="text-[#000000] font-monserrat text-base sm:text-3xl font-bold">
          Clean market yangiliklari
        </h1>
        <NavLink
          to="/news"
          className="underline text-[#0B8297] font-monserrat text-base md:text-lg font-medium"
        >
          Barcha yangiliklar
        </NavLink>
      </div>

      <div className="my-14 lg:my-9 grid grid-cols-12 rounded-2xl border-1 bg-[#FFFFFF]">
        <div className="col-span-12 lg:col-span-6">
          <img src={clean} alt="" className="w-full h-[285px]" />
        </div>

        <div className="col-span-12 lg:col-span-6">
          <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-12 pt-4">
            <div className="w-[140px] h-[35px] rounded-3xl bg-[#F5F5F7]">
              <h2 className="text-[#0B8297] font-monserrat text-base font-medium leading-5 text-center p-2 cursor-pointer ">
                Actual new
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Eye className="text-[#888888]" />
              <p className="text-[#888888] font-monserrat text-base font-normal leading-5 ">
                16.5 k views
              </p>
            </div>
            <div className="flex items-center gap-3">
              <CalendarFold className="text-[#888888]" />
              <p className="text-[#888888] font-monserrat text-base font-normal leading-5 ">
                05.11.2022
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-[#000000] font-monserrat text-[24px] font-bold leading-3">
              Latest news
            </h1>
            <p className="text-[#959595] font-monserrat text-base font-normal leading-6 lowercase py-3">
              As an effort to keep polishing our services for a more
              satisfactory customer experience, we are very happy
            </p>
            <a
              href="/"
              className="underline text-[#0B8297] font-monserrat text-lg font-medium leading-4"
            >
              Read more...
            </a>
          </div>
        </div>
      </div>
      <CleanCard />
      <div className="my-40">
        <h1 className="text-[#0B8297] font-mulish text-2xl font-bold leading-[65px]">
          Bizga ishonch bildirgan kompaniyalar
        </h1>
        <Corusel2 />
      </div>
      <div>
        <h1 className="text-[#000000] font-monserrat text-[32px] font-bold leading-5">
          F.A.Q.
        </h1>
        {cleanCardText.map((item, index) => (
          <div key={index}>
            <h3 className="text-[#000000] font-monserrat text-base font-semibold leading-5 lowercase pt-9 pb-3">
              {item.title}
            </h3>
            <p className="text-[#959595] font-monserrat text-base font-normal leading-5 lowercase">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clean;
