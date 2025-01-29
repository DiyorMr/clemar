import React from "react";
import { categoryCardData } from "./data";
import TopProductCorusel from "../corusel/top-product-corusel/TopProductCorusel";
import { NavLink } from "react-router-dom";

const CategoryCard = () => {
  return (
    <div>
      <div className="flex gap-4 lg:flex items-center justify-between mt-32">
        <h1 className="text-[#000000] font-monserrat text-base md:text-3xl font-medium">
          Kategoriyalar
        </h1>
        <NavLink
          to="/catalog"
          className="underline text-[#0B8297] font-monserrat  md:text-lg font-medium"
        >
          Barchasi
        </NavLink>
      </div>
      <div className="grid grid-cols-12 mt-10 gap-6">
        {categoryCardData.map((item, index) => (
          <div className="col-span-12 md:col-span-6 lg:col-span-3 gap-3" key={index}>
            <div className="w-full flex items-center justify-center h-[320px] rounded-3xl border-2">
              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-[#000000] font-monserrat text-xl md:text-3xl font-medium my-10">
          Nega bizni tanlashadi?
        </h1>
        <div>
          <TopProductCorusel />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
