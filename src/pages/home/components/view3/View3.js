import React from "react";

import "./View3.css";
import Icon1 from "./Icon1.png";
import Icon2 from "./Icon2.png";
import Icon3 from "./Icon3.png";
import Icon4 from "./Icon4.png";
import Card from "./components/card";

const View3 = () => {
  return (
    <section className={"view3 viewtype-dark "}>
      <div className={"container"}>

        <div className={"row"}>
          <div className={"col-12 col-md-12 text-center view3-title"}>
            <h1 className={"view1-title"}>
              How will you benefit from IEEE INSL?
            </h1>
          </div>
        </div>

        <div className={"view3card-list"}>

          <div className={"row"}>

            <Card icon={Icon1} title="A Platform for Growth" description="It serves as a platform where innovation and 
            creativity meet the market, allowing young minds to learn about their prospects and unite to share knowledge and advance humanity."/>

            <Card icon={Icon2} title="Get Connected" description="IEEE Innovation Nation will Integrate students, industry professionals, 
            and academia into a collaborative space that celebrates the opportunities created by tech entrepreneurship."/>

            <Card icon={Icon3} title="Entepreneurial Skills" description="Comprehensive training will be offered with an emphasis on design 
            thinking, market analysis, financial projections, business models, soft skill development, company law, technical aspects pertinent 
            to the project ideas chosen, etc."/>

            <Card icon={Icon4} title="Way to the Industry" description="The judges of the grand finale might also serve as investors, 
            helping the teams develop into notable start-ups and successful entrepreneurs in the future."/>

          </div>
        </div>
      </div>
    </section>
  );
};
export default View3;
