import React from "react";
import "./faq.css";
import "./faq.scss";
import Accordion from 'react-bootstrap/Accordion';

import Carousel from 'react-bootstrap/Carousel';

const Faq = () => {
  return (

    <div className={"col-md-12"}>


      <div
        className={"view4-main my-auto view4-r-bg viewtype-dark d-flex justify-content-center flex-sm-row flex-column"}
        id={"about"}
      >


      <div className={"col-md-6 my-auto"}>      
      
        <div className={"row"}>
          <div className={"col-12 col-md-12 text-center view3-title"}>
            <h1 className={"view1-title faq-tile"}>
              Frequently Asked Questions
            </h1>
          </div>
        </div>

        <div className={"accordian-box"}>
          <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header className={"accordian-title"}>Who should apply for INSL?</Accordion.Header>
                <Accordion.Body style={{color: "black"}}>
                If you are An After A/L student An undergraduate A fresh graduate You are 
                eligible to apply for the competition. 
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>What are the other facts that should be known by the candidates before applying?</Accordion.Header>
                <Accordion.Body style={{color: "black"}}>
                  <ul>
                      <li>Team can consist of 5 or less members.</li>
                      <li>Team members can be from different universities.</li>
                      <li>The details of the team leader take for the further requirements.</li>
                      <li>E.g.: Code of the University representer or provincial coordinator</li>
                      <li>It is more efficient if the team can express their idea with the presentation or video.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>What is the provincial program?</Accordion.Header>
                <Accordion.Body style={{color: "black"}}>
                IEEE INSL Provincial Program is an entrepreneur and startup boost and it will
                 be conducted for the filtered 90 teams of the IEEE INSL program. It is 
                 planned to be conducted together with ICTA, UNDP, Startup Weekend, Trace, 
                 Slasscom EO, etc. This program will be mainly focused on creating a bridge
                  between the Colombo-based Startup support system and the rural university
                   undergraduates. Also, giving them an insight into startups and the 
                   opportunities that are available in the ecosystem will be highlighted here. 
                   Four separate sessions will be arranged focusing on the Northern province, 
                   Eastern Province, Southern Province and Two, Joint Provinces 
                   (North-Western/North Central/Central Provinces and Sabaragamuwa
                    Province/ Uva Province).
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>Who are the provincial coordinator and University representor?</Accordion.Header>
                <Accordion.Body style={{color: "black"}}>
                As to start with the project proceedings, recruitment of Provincial 
                Coordinators/University Representatives will be done with the assistance 
                of the SAC Sri Lanka Section. Here a minimum of one coordinator from each 
                university will be selected (Currently 20 IEEE Student Branches are available). 
                The task of the Provincial coordinator mainly would be branding IEEE INSL among 
                the university undergraduates and establishing INSL as the only Innovation startup 
                program specially focused on the undergraduates in the country.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

        </div>
 
      </div>



    </div>
    </div>
  );
};

export default Faq;
