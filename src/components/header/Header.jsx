import React from "react";
import { coruselData } from "./data";
import HeaderCorusel from "../corusel/header-corusel/HeaderCorusel";
import TopProducts from "../top-products/TopProducts";
import Clean from "../clean/Clean";
import Contact from "../contact/Contact";

const Header = () => {
  return (
    <div className="mx-auto max-w-[1340px] mb-28">
      <HeaderCorusel data={coruselData} />
      <TopProducts />
      <Clean />
      <Contact />
    </div>
  );
};

export default Header;
