import React from "react";
import { ArrowRightLeft, Heart } from "lucide-react";
import { NavLink } from "react-router-dom";

const ProductCard = ({ item }) => {
  const statusClass = (status) => {
    console.log(status);
    switch (status) {
      case "news":
        return "bg-[#fff] text-[#000]";
      case "sale":
        return "bg-[#0B8297] text-[#fff]";
      case "recommendation":
        return "bg-[#fff] text-[#0B8297]";
      case "special":
        return "bg-[#FFBC10] text-[##0B8297]";

      default:
        break;
    }
  };
  return (
    <div className="grid-cols-2 lg:col-span-3 border-2 rounded-[14.48px] bg-[#FFFFFF] mt-6">
      <div className="w-full h-[280px]  mx-auto relative p-[14px]">
        <div className="flex items-center justify-center bg-[#F5F5F7] rounded-[9.65px] pb-3">
          <img src={item.img} alt="" className="pt-8" />
        </div>

        <div
          className={`
          w-40 h-10 absolute pb-2 top-3 flex items-center justify-center rounded-tl-md rounded-br-md 
          ${statusClass(item.status)}`}
        >
          <p className={`font-monserrat text-base font-medium leading-5 pt-2`}>
            {item.status_name}
          </p>
        </div>
        <div className=" w-[50px] h-[50px] bg-[#FFFFFF] ml-64 mb-4 flex items-center justify-center absolute top-6 right-6 rounded-lg">
          <Heart className="cursor-pointer text-[#0B8297]" />
        </div>
      </div>

      <div className="p-3">
        <p className="text-[#616161] font-monserrat text-base font-medium leading-6 pb-6 h-24">
          {item.name}
        </p>
        <p className="text-[#000000] font-monserrat text-xl font-semibold leading-7 pb-6">
          {item.price} сум
        </p>
        <div className="flex items-center gap-4">
          <NavLink to="/catalog/all/1" className="w-full md:w-[220px] h-[58px] text-center p-4 rounded-[9.68px] bg-[#F5F5F7]  text-[#000000] font-monserrat text-[22px] font-semibold leading-7 ">
            Xarid qilish
          </NavLink>
          <button className="w-[70px] h-[58px] rounded-[9.68px] bg-[#F5F5F7] flex items-center justify-center ">
            <ArrowRightLeft />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
