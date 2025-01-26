import { ArrowLeft } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import hotimg from "../../img/hotimg.svg";
import hotimgicon from "../../img/hotimgicon.svg";
import { catalogDetailCard } from "./data";

const CatalogDetail = () => {
  return (
    <div className="mx-auto w-[1340px] mb-40">
      <div className="flex gap-8">
        <NavLink to="/catalog/all" className="flex items-center gap-2 mb-4">
          <ArrowLeft className="text-[#0B8297]" />
          <p className="text-[#0B8297] text-base font-medium leading-5 font-monserrat">
            Ortga
          </p>
        </NavLink>
        <NavLink
          to="/"
          className="h-6 rounded-xs bg-[#F2F2F2] text-[#A7A7A7] font-monserrat text-xs font-normal leading-[14px] p-2"
        >
          Home Page
        </NavLink>
        <NavLink
          to="/catalog/all"
          className="h-6 rounded-xs bg-[#F2F2F2] text-[#A7A7A7] font-monserrat text-xs font-normal leading-[14px] p-2"
        >
          Barcha kategoriyalar
        </NavLink>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <h1 className="text-[#000000] font-monserrat text-2xl font-medium leading-7">
            Профессиональная ковромоечная машина Santoemma Sabrina HOT
          </h1>
          <div className="relative mt-6">
            <img src={hotimg} alt="" />
            <p
              className="w-40 h-[31px] rounded-[20px] bg-[#0B8297] text-white font-monserrat
             text-base font-bold leading-5 text-center p-1 absolute top-8"
            >
              -35% chegirma
            </p>
          </div>
          <div className="flex items-center gap-1 mt-8">
            <img
              src={hotimgicon}
              alt=""
              className="hover:scale-110 transdition-all delay-100 cursor-pointer"
            />
            <img
              src={hotimgicon}
              alt=""
              className="hover:scale-110 transdition-all delay-100 cursor-pointer"
            />
            <img
              src={hotimgicon}
              alt=""
              className="hover:scale-110 transdition-all delay-100 cursor-pointer"
            />
            <img
              src={hotimgicon}
              alt=""
              className="hover:scale-110 transdition-all delay-100 cursor-pointer"
            />
          </div>
        </div>
        <div className="col-span-4 mt-8">
          <h1 className="text-[#000000] font-monserrat text-lg font-medium leading-5">
            MAXSULOT XARAKTERISTIKASI
          </h1>
          <p className="text-[#727272] font-monserrat text-base font-normal leading-5 py-3">
            Характеристики: Емкость баков: 14/14 лВакуумный мотор: 2-x
            стадийный, 1500 Вт, 3000 мм H2O, 50 л/секВодяной насос c байпасом:
            вибрационный, 70 Вт, 4 6ap, 1,5 л/минШирина уборки: 100 ммКоличество
            форсунок: 1Нагреватель воды: 180 ВтПроизводительность: 60 м
            кв./часДлина кабеля: 10 мДлина шланга: 2,5 мМасса нетто/брутто:
            12/15 кгГабариты/Габариты упаковки: 30х42х53 / 34х53х70 смКомплект
            поставки: шланги H10-RAGNO-M + ручная пластмассовая насадка NS10PN-M
          </p>
        </div>
        <div className="col-span-4 mt-8">
          <div className="w-[350px] h-[315px] rounded-md bg-[#FFFFFF] shadow-xl p-6">
            <h1 className="text-[#0B8297] font-monserrat text-2xl leading-7 uppercase py-3">
              8 568 000 So'm
            </h1>
            <p className="text-[#727272] font-monserrat text-base font-medium leading-5 py-2">
              O'rnatib berish
            </p>
            <p className="text-[#727272] font-monserrat text-base font-medium leading-5 py-2">
              Yetkazib berish
            </p>
            <p className="text-[#727272] font-monserrat text-base font-medium leading-5 py-2">
              Service xizmati
            </p>
            <button className="w-[314px] h-[50px] rounded-xl bg-[#0B8297] text-[#FFFFFF] font-monserrat text-base font-medium mt-8 leading-5">
              Hoziroq xarid qilish
            </button>
          </div>
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-[#000000] font-monserrat text-lg font-medium leading-[22px]">
          Maxsulot haqida batafsil
        </h2>
        <p className=" max-w-[1000px] text-[#5D5D5F] font-monserrat text-lg font-normal leading-5 py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
      <div className="flex items-center justify-between my-6">
        <h1 className="text-[#000000] font-monserrat text-[32px] font-bold leading-3">
          O'xshash mahsulotlar
        </h1>
        <NavLink
          to="/catalog/all"
          className="underline text-[#0B8297] font-monserrat text-lg font-medium leading-4"
        >
          Barchasi
        </NavLink>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {catalogDetailCard.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CatalogDetail;
