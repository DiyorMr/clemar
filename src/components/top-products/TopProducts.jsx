import React from "react";
import CategoryCard from "../category-card/CategoryCard";
import ProductCard from "../product-card/ProductCard";
import { topProductDate } from "./data";
import ellips from "../../img/ellips.svg";
import ellipsicon from "../../img/ellipsicon.svg";

const TopProducts = () => {
  return (
    <div className="mx-auto max-w-[1340px] mb-40">
      <div className="flex items-center justify-between mt-20">
        <h1 className="text-[#000000] font-monserrat text-[32px] font-medium leading-3">
          Top tovarlar
        </h1>
        <a
          href="/"
          className="underline text-[#0B8297] font-monserrat text-lg font-medium leading-4"
        >
          Barchasi
        </a>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {topProductDate.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </div>
      <CategoryCard />

      <div className="mt-28">
        <h1 className="text-[#000000] font-monserrat text-[32px] font-bold leading-3">
          Biz sonlarda
        </h1>
        <div className="bg-[#FCFCFC] mt-10 p-10">
          <div className="flex items-center justify-center gap-20">
            <div className="relative">
              <img src={ellips} alt="" />
              <div className="">
                <p className="text-[#0B8297] font-rische text-6xl font-normal leading-5 text-center absolute top-14 left-11">
                  40K
                </p>
                <p className="text-[#474747] font-monserrat text-lg font-light leading-3 pt-5 absolute top-20 left-8">
                  nominal product
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={ellips} alt="" />
              <div className="">
                <p className="text-[#0B8297] font-rische text-6xl font-normal leading-5 text-center absolute top-14 left-11">
                  10+
                </p>
                <p className="text-[#474747] font-monserrat text-lg font-light leading-3 pt-5 absolute top-20 left-8">
                  nominal product
                </p>
              </div>
              <img
                src={ellipsicon}
                alt=""
                className="absolute bottom-24 left-36"
              />
            </div>
            <div className="relative">
              <img src={ellips} alt="" />
              <div className="">
                <p className="text-[#0B8297] font-rische text-6xl font-normal leading-5 text-center absolute top-14 left-11">
                  40K
                </p>
                <p className="text-[#474747] font-monserrat text-lg font-light leading-3 pt-5 absolute top-20 left-16">
                  partners
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={ellips} alt="" />
              <div className="">
                <p className="text-[#0B8297] font-rische text-6xl font-normal leading-5 text-center absolute top-14 left-11">
                  40K
                </p>
                <p className="text-[#474747] font-monserrat text-lg font-light leading-3 pt-5 absolute top-20 left-8">
                  nominal product
                </p>
              </div>
            </div>
          </div>
          <p className="text-[#848484] font-monserrat text-base font-normal lowercase leading-6 p-12 ">
            As an effort to keep polishing our services for a more satisfactory
            customer experience, we are very happy to announce the establishment
            of our new SamAutoTrans warehouse! This stands as an embodiment of
            our striving for ever-improving professionalism and quality customer
            service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
