import React from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

const GeneralLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default GeneralLayout;
