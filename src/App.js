import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MessengerCustomerChat from "react-messenger-customer-chat";
import "./App.css";
import Home from "./pages/home/home";
import ExpertsPage from "./pages/partners/expertsPage";
import Resources from "./pages/resources/Resources";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/navbar";
import Team from "./pages/team/team";

const App = () => {

  // const [isOpen, setIsOpen] = useState(false);

  // function toggle() {
  //   setIsOpen(!isOpen);
  // }

  return (
    <div className="">
      <head>
        <title>INSL | 2022 | Web Portal</title>
        <style>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          />
        </style>
      </head>

      <MessengerCustomerChat
        pageId="2047005378906480"
        appId="1436137633526748"
      />

      
      {/* <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
      </div> */}

      <Router>
        <Routes>
          
          <Route path="/experts" element={<ExpertsPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/team" element={<Team />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
