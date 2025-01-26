import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="mx-auto max-w-[1100px] mb-40">
      <div className="flex gap-44">
        <div className="w-[377px]  grid grid-rows-2 grid-flow-col gap-56">
          <div>
            <h1 className="text-[#000000] font-monserrat text-[32px] font-bold leading-5">
              Biz bilan aloqa
            </h1>
            <p className="text-[#959595] font-monserrat text-sm font-normal leading-5  pt-4">
              Бизга алокага чикинг операторларимиз 24 соат ичида алокага чикади
              точно тел килишади ховотир омен
            </p>
          </div>
          <div className="">
            <p className="text-[#00132C] font-monserrat text-sm font-light leading-[22px]">
              Бизга алокага чикинг мессенджердан
            </p>
            <p className="text-[#00132C] font-monserrat text-sm font-light leading-[22px]">
              Бизнинг телефон ракамимиз
            </p>
            <div className="flex items-center gap-5 pt-4">
              <button className="w-[174px] h-[40px] rounded-xl bg-[#0B8297] text-[#FFFFFF] font-monserrat text-sm font-bold leading-3">
                +998 99 011 89 34
              </button>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/p/Cleanmarketuz-100071256438495/">
                  <Facebook className="text-[#0B8297] w-9 h-9 bg-[#a1eadd] rounded-full p-2" />
                </a>
                <a href="https://x.com/CleanmarketM">
                  <Twitter className="text-[#0B8297] w-9 h-9 bg-[#a1eadd] rounded-full p-2" />
                </a>
                <a href="https://www.instagram.com/cleanmarket.uz/">
                  <Instagram className="text-[#0B8297] w-9 h-9 bg-[#a1eadd] rounded-full p-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div>
            <input
              type="text"
              placeholder="Name and surname"
              className="w-[529px] h-[63px] rounded-xl bg-[#F9F9F9] text-[#00132C] font-monserrat text-sm font-normal leading-[23px] p-6 outline-none"
            ></input>
            <input
              type="text"
              placeholder="Phone number"
              className="w-[529px] h-[63px] rounded-xl bg-[#F9F9F9] text-[#00132C] font-monserrat text-sm font-normal leading-[23px] p-6 my-6 outline-none"
            ></input>
            <input
              type="text"
              placeholder="Xabaringizni yozib qoldiring"
              className="w-[529px] h-[132px] rounded-xl bg-[#F9F9F9] text-[#00132C] font-monserrat text-sm font-normal leading-[23px] pb-16 pl-6 my-6 outline-none"
            ></input>
            <button className="w-[532px] h-[63px] rounded-xl bg-[#0B8297] text-[#FFFFFF] font-monserrat text-sm font-bold leading-3">
              Send all informations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
