import Navbar from "../../components/Navbar/navbar";
import "./style.css";
import YouTube, { YouTubeProps } from "react-youtube";
import React, { useState } from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import Roadtoinsl from "./components/roadtoinsl/roadtoinsl";
import HustleStories from "./components/hustlestories/hustlestories";

function Resources() {
  const [resourceType, setResourceType] = useState(1);

  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div className={"home-bg"} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <div className="text-center button-pack">
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class={"btn btn-outline-light" + (resourceType === 1 ? " active" : "")} onClick={() => setResourceType(1)}>
              Road to INSL
            </button>
            <button type="button" class={"btn btn-outline-light" + (resourceType === 2 ? " active" : "")} onClick={() => setResourceType(2)}>
              Hustle Stories
            </button>

            <a href="https://in.ieee.lk/blog.html" target="_blank" style={{textDecoration:"none", color:"white"}}> 
            <button type="button" class={"btn btn-outline-light"}>
              Workshops
            </button>
            </a>

        </div>
      </div>


      {resourceType===1 ? 
        <div className="row">
          <Roadtoinsl/>
        </div>
        : null}

      {resourceType===2 ? 
        <div className="row">
          <HustleStories/>
        </div>
        : null}

    
    </div>
  );
}

export default Resources;
