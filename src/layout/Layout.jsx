import React from "react";
import Fotter from "../components/fotter/Fotter";
import Navbar from "../components/navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Fotter />
    </div>
  );
};

export default Layout;
