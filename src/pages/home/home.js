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
import ResourcePeople from "./components/resourcePeople/resourcePeople";
import Partners from "./components/partners/partners";
import Faq from "./components/faq/faq";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div className={"home-bg"} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <View1 />

      <div className={"dark-overlay"}>
        <View2 />
      </div>

        <View3 />
        <View4 />
        <View5 />
      <div className={"dark-overlay"}>
        <ResourcePeople />
        <Partners />
        <Faq />
        <Footer />
      </div>
        
        
      
    </div>
  );
};

export default Home;
