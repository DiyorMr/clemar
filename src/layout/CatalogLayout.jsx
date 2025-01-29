import { ArrowLeft } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { catalogClean } from "../pages/catalog/data";
import tool from "../img/tool-front-premium.svg";

const CatalogLayout = ({ children }) => {
  return (
    <div className="mx-auto max-w-[1340px] px-5">
      <NavLink to="/" className="flex items-center gap-2 mb-4">
        <ArrowLeft className="text-[#0B8297]" />
        <p className="text-[#0B8297] text-base font-medium leading-5 font-monserrat">
          Ortga
        </p>
      </NavLink>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3 mb-40">
          <h1 className="text-[#000000] font-monserrat text-base lg:text-3xl font-medium">
            Поломоичные машины
          </h1>
          <p className="text-[#979797] font-monserrat text-xs font-normal text-center">
            2 930 товаров
          </p>
          <h3 className="text-[#1C1E21] font-monserrat text-base font-bold  py-4">
            Категории
          </h3>
          <div className="flex flex-col gap-2">
            {catalogClean.map((item, index) => (
              <NavLink
                key={index}
                to={`/catalog/${item.slug}`}
                className={({ isActive }) =>
                  `flex items-center justify-between max-w-[260px] py-3 rounded-xl p-2 ${
                    isActive
                      ? "bg-[#0B8297] text-white"
                      : "bg-white hover:bg-gray-400 text-[#1C1E21]"
                  }`
                }
              >
                <div>
                  <p className=" font-monserrat text-size font-medium">
                    {item.title}
                  </p>
                </div>
                <div>
                  <img src={item.img} alt="" />
                </div>
              </NavLink>
            ))}
            <div className="bg-[#0B8297] w-[227px] h-[406px] rounded-xl p-6 mt-7">
              <h1 className="text-[#FFFFFF] font-monserrat text-lg font-semibold leading-6 text-center">
                Kale bepul service va kafolat xizmati
              </h1>
              <img src={tool} alt="" className="py-4" />
              <p className="text-[#FFFFFF] font-monserrat text-base font-normal leading-6 text-center">
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-9">{children}</div>
      </div>
    </div>
  );
};

export default CatalogLayout;
