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

            <Card icon={Icon1} title="A Platform for Growth" description="It is a platform where creativity meets its marketplace,
                    where young minds get to know their opportunities and unite
                    to learn, innovate, and grow as one."/>

            <Card icon={Icon2} title="Get Connected" description="IEEE Innovation Nation will Integrate students, industry
                    professionals, and academia into a collaborative space that
                    celebrates the opportunities created by tech
                    entrepreneurship."/>

            <Card icon={Icon3} title="Entepreneurial Skills" description="It will provide comprehensive training focused on design
                    thinking, market analysis, financial projections, business
                    models, soft skill development, company law, technical
                    aspects relevant to the selected project ideas, etc."/>

            <Card icon={Icon4} title="Way to the Industry" description="The judges of the finale may double as investors, and guide
                    the teams to become noteworthy start-ups and successful
                    entrepreneurs of the future."/>

          </div>
        </div>
      </div>
    </section>
  );
};
export default View3;
