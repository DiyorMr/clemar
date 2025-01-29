import React from "react";
import CategoryCard from "../category-card/CategoryCard";
import ProductCard from "../product-card/ProductCard";
import { topProductDate } from "./data";
import ellips from "../../img/ellips.svg";
import ellipsicon from "../../img/ellipsicon.svg";

const TopProducts = () => {
  return (
    <div className="mx-auto  max-w-[1340px] mb-40 px-5">
      <div className="flex gap-4 lg:flex items-center justify-between mt-20">
        <h1 className="text-[#000000] font-monserrat text-base md:text-3xl font-medium">
          Top tovarlar
        </h1>
        <a
          href="/"
          className="underline text-[#0B8297] font-monserrat  md:text-lg font-medium"
        >
          Barchasi
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-6">
        {topProductDate.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </div>
      <CategoryCard />

      <div className="mt-28">
        <h1 className="text-[#000000] font-monserrat text-base md:text-3xl font-medium">
          Bizni sonlarda
        </h1>
        <div className="bg-[#FCFCFC] mt-10">
          <div className="grid grid-cols-12 ">
            <div className="col-span-12 sm:col-span-6 py-4 lg:col-span-3 relative">
              <img src={ellips} alt="" className="mx-auto" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="text-[#0B8297] font-rische text-6xl font-normal text-center">
                  40K
                </p>
                <p className="text-[#474747] font-monserrat text-lg font-light w-1/2 mx-auto">
                  nominal product
                </p>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 py-4 lg:col-span-3 relative">
              <img src={ellips} alt="" className="mx-auto" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="text-[#0B8297] font-rische text-6xl font-normal text-center">
                  10+
                </p>
                <p className="text-[#474747] font-monserrat text-lg font-light  w-1/2 mx-auto">
                  nominal product
                </p>
              </div>
              <img
                src={ellipsicon}
                alt=""
                className="absolute top-2 -right-7"
              />
            </div>
            <div className="col-span-12 sm:col-span-6 py-4 lg:col-span-3 relative">
              <img src={ellips} alt="" className="mx-auto" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="text-[#0B8297] font-rische text-6xl font-normal text-center">
                  40K
                </p>
                <p className="text-[#474747] font-monserrat text-lg font-light text-center">
                  partners
                </p>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 py-4 lg:col-span-3 relative">
              <img src={ellips} alt="" className="mx-auto" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="text-[#0B8297] font-rische text-6xl font-normal text-center">
                  40K
                </p>
                <p className="text-[#474747] font-monserrat text-lg font-light w-1/2 mx-auto">
                  nominal product
                </p>
              </div>
            </div>
          </div>
          <p className="text-[#848484] font-monserrat text-base font-normal">
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
