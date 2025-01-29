import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Loader from "./components/Loader";
import { catalogCard } from "./data";

const Catalog = () => {
  const location = useLocation();
  const [data, setData] = useState(catalogCard);
  const [loading, setLoading] = useState(false);
  var pathname = location.pathname;
  var slug = pathname.slice(pathname.lastIndexOf("/") + 1, pathname.length);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      slug === "all" && setData(catalogCard);

      slug === "floor-cleaning-machines" &&
        setData(catalogCard.filter((item) => item.category === slug));

      slug === "cleaning-equipment" &&
        setData(catalogCard.filter((item) => item.category === slug));

      slug === "professional" &&
        setData(catalogCard.filter((item) => item.category === slug));

      slug === "toiletries" &&
        setData(catalogCard.filter((item) => item.category === slug));

      setLoading(false);
    }, 1000);
  }, [slug]);

  return (
    <>
      <h1 className="text-[#000000] font-monserrat text-base lg:text-3xl font-medium">
        Categoriyalar
      </h1>
      <div className="grid grid-cols-12 gap-5">
        {loading
          ? <Loader/>
          : data.map((item, index) => (
              <NavLink
                className=" col-span-2 md:col-span-4 my-4 rounded-3xl border-2 p-4 "
                key={index}
                to={`${location.pathname}/${item.id}`}
              >
                <h1 className="text-[#000000] font-monserrat text-xl font-medium">
                  {item.title}
                </h1>
                <img src={item.img} alt="" className="pt-4" />
                <p className="text-[#3A3A3A] font-monserrat text-xs font-normal">
                  {item.text}
                </p>
              </NavLink>
            ))}
      </div>
    </>
  );
};

export default Catalog;
