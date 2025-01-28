import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="mx-auto max-w-[1340px] mb-40 px-5">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 flex flex-col gap-2 md:gap-56">
          <div>
            <h1 className="text-[#000000] font-monserrat text-2xl font-bold">
              Biz bilan aloqa
            </h1>
            <p className="text-[#959595] font-monserrat text-sm font-normal pt-4">
              Бизга алокага чикинг операторларимиз 24 соат ичида алокага чикади
              точно тел килишади ховотир омен
            </p>
          </div>
          <div >
            <p className="text-[#00132C] font-monserrat text-sm font-light">
              Бизга алокага чикинг мессенджердан
            </p>
            <p className="text-[#00132C] font-monserrat text-sm font-light">
              Бизнинг телефон ракамимиз
            </p>
            <div className="flex items-center gap-5 pt-4">
              <button className="w-[174px] h-[40px] rounded-xl bg-[#0B8297] text-[#FFFFFF] font-monserrat text-sm font-bold">
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

        <div className="mt-10 col-span-12 md:col-span-6">
          <div>
            <input
              type="text"
              placeholder="Name and surname"
              className="w-full rounded-xl bg-[#F9F9F9] text-[#00132C] font-monserrat text-sm font-normal p-4 outline-none"
            ></input>
            <input
              type="text"
              placeholder="Phone number"
              className="w-full rounded-xl bg-[#F9F9F9] text-[#00132C] font-monserrat text-sm font-normal my-6 p-4 outline-none"
            ></input>
            <textarea
            rows="5"
              type="text"
              placeholder="Xabaringizni yozib qoldiring"
              className="w-full rounded-xl bg-[#F9F9F9] text-[#00132C] font-monserrat text-sm font-normal p-4 outline-none"
            ></textarea>
            <button className="w-full rounded-xl bg-[#0B8297] text-[#FFFFFF] font-monserrat text-sm font-bold mt-6 py-4">
              Send all informations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
