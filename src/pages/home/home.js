import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

import "./home.css";
import View1 from "./components/view1/view1";
import View2 from "./components/view2/view2";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={""}>

        <div className={"home-bg"} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <View1 />
        <div className={"dark-overlay"}>
            <View2 />
        </div>
    </div>
  );
};

export default Home;
