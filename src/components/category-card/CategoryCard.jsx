import React from "react";
import { categoryCardData } from "./data";
import TopProductCorusel from "../corusel/top-product-corusel/TopProductCorusel";
import { NavLink } from "react-router-dom";

const CategoryCard = () => {
  return (
    <div>
      <div className="flex items-center justify-between mt-32">
        <h1 className="text-[#000000] font-monserrat text-[32px] font-bold leading-3">
          Kategoriyalar
        </h1>
        <NavLink
          to="/catalog"
          className="underline text-[#0B8297] font-monserrat text-lg font-medium leading-4"
        >
          Barchasi
        </NavLink>
      </div>
      <div className="grid grid-cols-12 mt-10">
        {categoryCardData.map((item, index) => (
          <div className="col-span-3 gap-3" key={index}>
            <div className="w-[316px] h-[320px] rounded-3xl border-2">
              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-[#000000] font-monserrat text-[32px] font-bold my-10">
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
