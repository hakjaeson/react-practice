import React from "react";
import Footer from "../components/Footer";
import BasicMenu from "../components/menus/BasicMenu";

//객체 구조 분해 할당
const BasicLayout = ({ children }) => {
  return (
    <div className="wrap">
      <header>
        <BasicMenu />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default BasicLayout;
