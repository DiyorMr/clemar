import { ArrowLeft } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import CleanCard from "../../components/clean/CleanCard";
import newsimg from "../../img/newsimg.svg";

const News = () => {
  return (
    <div className="mx-auto max-w-[1340px] px-5">
      <NavLink to="/catalog" className="flex items-center gap-2 mb-4">
        <ArrowLeft className="text-[#0B8297]" />
        <p className="text-[#0B8297] text-base font-medium leading-5 font-monserrat">
          Ortga
        </p>
      </NavLink>
      <div>
        <h1 className="text-[#000000] font-monserrat text-[32px] font-bold leading-9">
          Yangilik nomi zagolovka
        </h1>
        <img src={newsimg} alt="" className="py-8" />
        <p className="text-[#5D5D5F] font-monserrat text-lg font-normal leading-6 pb-3">
          Yangilik chiqqan vaqti:
        </p>
        <p className="text-[#000000] font-monserrat text-2xl font-medium leading-6">
          21.05.2023
        </p>
        <p className="text-[#5D5D5F] font-monserrat text-lg font-normal leading-5 py-6">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.simply dummy text of the printing and
          typesetting industry.
        </p>
      </div>
      <div className="my-10">
        <h1 className="text-[#000000] font-monserrat text-[32px] font-bold leading-9 mb-8">
          Boshqa yangiliklar
        </h1>
        <CleanCard />
      </div>
    </div>
  );
};

export default News;
