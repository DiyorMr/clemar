import React from "react";
import { cleanCardData } from "./data";

const CleanCard = () => {
  return (
    <div className="grid grid-cols-12 gap-5 ">
      {cleanCardData.map((item, index) => (
        <div
          className="col-span-3 h-[454px] rounded-2xl bg-[#FFFFFF] border-2 p-3"
          key={index}
        >
          <img src={item.img} alt="" />
          <h1 className="text-[#000000] font-monserrat text-lg font-semibold leading-7 py-5">
            {item.title}
          </h1>
          <p className="text-[#959595] font-monserrat text-base font-normal leading-6 lowercase pb-6">
            {item.text}
          </p>
          <a
            href="/"
            className="underline text-[#0B8297] font-monserrat text-lg font-semibold leading-4"
          >
            Read more...
          </a>
        </div>
      ))}
    </div>
  );
};

export default CleanCard;
