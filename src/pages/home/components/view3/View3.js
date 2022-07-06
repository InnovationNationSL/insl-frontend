import React from "react";

import "./View3.css";
import Icon1 from "./Icon1.png";
import Icon2 from "./Icon2.png";
import Icon3 from "./Icon3.png";
import Icon4 from "./Icon4.png";

const View3 = () => {
  return (
    <section className={"view3"}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-lg-12 text-center view3-title"}>
            <h1 className={"title-text"}>
              How will you benefit from IEEE INSL?
            </h1>
          </div>
        </div>
        <div className={"view3card-list"}>
          <div className={"row"}>
            <div className={"col-lg-3"}>
              <div className={"view3Card text-center"}>
                <div className={"mx-auto py-4"}>
                  <img src={Icon1} alt={"card-1"} />
                </div>
                <div className={"card-body text-center"}>
                  <h5 className={"card-title"}>A Platform for Growth</h5>
                  <p className={"card-text text-secondary"}>
                    It is a platform where creativity meets its marketplace,
                    where young minds get to know their opportunities and unite
                    to learn, innovate, and grow as one.
                  </p>
                </div>
              </div>
            </div>
            <div className={"col-lg-3"}>
              <div className={"view3Card text-center"}>
                <div className={"mx-auto py-4"}>
                  <img src={Icon2} alt={"card-1"} />
                </div>
                <div className={"card-body text-center"}>
                  <h5 className={"card-title text-uppercase font-roboto"}>
                    Get Connected
                  </h5>
                  <p className={"card-text text-secondary"}>
                    IEEE Innovation Nation will Integrate students, industry
                    professionals, and academia into a collaborative space that
                    celebrates the opportunities created by tech
                    entrepreneurship.
                  </p>
                </div>
              </div>
            </div>
            <div className={"col-lg-3"}>
              <div className={"view3Card text-center"}>
                <div className={"mx-auto py-4"}>
                  <img src={Icon3} alt={"card-1"} />
                </div>
                <div className={"card-body text-center"}>
                  <h5 className={"card-title text-uppercase font-roboto"}>
                    Entepreneurial Skills
                  </h5>
                  <p className={"card-text text-secondary"}>
                    It will provide comprehensive training focused on design
                    thinking, market analysis, financial projections, business
                    models, soft skill development, company law, technical
                    aspects relevant to the selected project ideas, etc.
                  </p>
                </div>
              </div>
            </div>
            <div className={"col-lg-3"}>
              <div className={"view3Card text-center"}>
                <div className={"mx-auto py-4"}>
                  <img src={Icon4} alt={"card-1"} />
                </div>
                <div className={"card-body text-center"}>
                  <h5 className={"card-title text-uppercase font-roboto"}>
                    Way to the Industry
                  </h5>
                  <p className={"card-text text-secondary"}>
                    The judges of the finale may double as investors, and guide
                    the teams to become noteworthy start-ups and successful
                    entrepreneurs of the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default View3;
