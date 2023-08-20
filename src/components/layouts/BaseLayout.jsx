import React, { JSX } from "react";
import Header from "../elements/header/Header";
import Footer from "../elements/footer/Footer";

function BaseLayout({ children }) {
  return (
    <div className="bg-slate-700 w-screen min-h-screen [--vh:2vh]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default BaseLayout;
