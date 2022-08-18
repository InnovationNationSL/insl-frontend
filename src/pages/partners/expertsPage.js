

import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";

import "./home.css";
import View1 from "./components/view1/view1";
import View2 from "./components/view2/view2";
import View3 from "./components/view3/View3";
import View4 from "./components/view4/view4";
import View5 from "./components/view5/view5";
import Faq from "./components/faq/faq";
import Experts from "./components/resourcePeople/experts";

const ExpertsPage = () => {
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
        <Experts />
       
        <Footer />
      </div>
    </div>
  );
};

export default ExpertsPage;
