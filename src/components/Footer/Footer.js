import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className={"footer-main text-white pt-5 pb-4"}>
      <div className={"container text-center text-md-left"}>
        <div className={"row text-center text-md-left"}>
          <div className={"col-md-3 col-lg-3 col-xl-3 mx-auto mt-3"}>
            {/* <h5 className={"text-uppercase mb-4 font-weight-bold"}>INSL</h5> */}
          </div>
     
          <div className={"col-md-3 col-lg-4 col-xl-4 mx-auto mt-3"}>
            <h5 className={"text-uppercase mb-4 font-weight-bold"}>
              Follow Us
            </h5>
            <p>
              <a href="IEEE.org" className={"text-white"} target="_blank">
                IEEE.org
              </a>
            </p>
            <p>
              <a href="IEEE.lk" className={"text-white"} target="_blank">
                IEEE Sri Lanka Section
              </a>
            </p>
            <p>
              <a href="IEEEyp.lk" className={"text-white"} target="_blank">
                IEEE Young Professionals
              </a>
            </p>
            <p>
              <a href="IEEEwie.lk" className={"text-white"} target="_blank">
                IEEE Women in Engineering
              </a>
            </p>
          </div>
          <div className={"col-md-2 col-lg-2 col-xl-2 mx-auto mt-3"}>
            <h5 className={"text-uppercase mb-4 font-weight-bold"}>Contact</h5>
            <p>
              <i className={"mr-3"}></i>IEEE SL Section Colombo, Sri Lanka
            </p>
            <p>
              <i className={"mr-3"}></i>inslpublicity@gmail.com
            </p>
            <p>
              <i className={"mr-3"}></i>0876544678
            </p>
          </div>
        </div>
        <hr className="mb-3"></hr>
        <div className={"row align-item-center"}>
          <div className={"col-md-7 col-lg-6"}>
            <p>
            All Rights Reserved  ©  <strong>IEEE Innovation Nation Sri Lanka</strong>
            </p>
          </div>
          <div className={"col-md-5 col-lg-4"}>
            {/* <div className={"text-center text-md-right"}>
              <ul className={"list-unstyled list-inline"}>
                <li className={"list-inline-item"}>f</li>
                <li className={"list-inline-item"}>i</li>
                <li className={"list-inline-item"}>l</li>
                <li className={"list-inline-item"}>t</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
