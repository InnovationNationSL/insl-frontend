
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";

// import "./home.css";

import ProvincialsPage from "./components/provincialsPage/provincialsPage";

const Provincials = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div className={"home-bg"} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      
      <div className={"dark-overlay"}>
        <ProvincialsPage />
       
        <Footer />
      </div>
    </div>
  );
};

export default Provincials;
