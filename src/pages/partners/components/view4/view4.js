import React from "react";
import "./view4.css";
import Img1 from "./img/1.jpg";
import Img2 from "./img/2.jpg";
import Img3 from "./img/3.jpg";
import Img4 from "./img/4.jpg";
import Img5 from "./img/5.jpg";
import Img6 from "./img/6.jpg";
import Img7 from "./img/7.jpg";
import Img8 from "./img/8.png";

import Carousel from 'react-bootstrap/Carousel';

const View4 = () => {
  return (
    <div
      className={"view4-main  view4-r-bg viewtype-dark d-flex flex-sm-row flex-column"}
      id={"about"}
    >

      

      {/* <div className={"col-md-6 my-auto"}>
        <div className={"col-12 col-md-9 mx-auto my-auto"}>
          <img
            src={Img1}
            className={"col-12 col-md-12 mx-auto"}
            alt={"INSL White Logo"}
          />
        </div>
      </div> */}

      <div className={"col-md-6 my-auto"}>
        <Carousel>
          <Carousel.Item>
            <div className={"col-12 col-md-9 mx-auto my-auto"}>
              <img
                src={Img1}
                className={"col-12 col-md-12 mx-auto"}
                alt={"INSL White Logo"}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={"col-12 col-md-9 mx-auto my-auto"}>
              <img
                src={Img2}
                className={"col-12 col-md-12 mx-auto"}
                alt={"INSL White Logo"}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={"col-12 col-md-9 mx-auto my-auto"}>
              <img
                src={Img3}
                className={"col-12 col-md-12 mx-auto"}
                alt={"INSL White Logo"}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={"col-12 col-md-9 mx-auto my-auto"}>
              <img
                src={Img4}
                className={"col-12 col-md-12 mx-auto"}
                alt={"INSL White Logo"}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={"col-12 col-md-9 mx-auto my-auto"}>
              <img
                src={Img5}
                className={"col-12 col-md-12 mx-auto"}
                alt={"INSL White Logo"}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={"col-12 col-md-9 mx-auto my-auto"}>
              <img
                src={Img6}
                className={"col-12 col-md-12 mx-auto"}
                alt={"INSL White Logo"}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={"col-12 col-md-9 mx-auto my-auto"}>
              <img
                src={Img7}
                className={"col-12 col-md-12 mx-auto"}
                alt={"INSL White Logo"}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={"col-12 col-md-9 mx-auto my-auto"}>
              <img
                src={Img8}
                className={"col-12 col-md-12 mx-auto"}
                alt={"INSL White Logo"}
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>


      <div className={"col-md-6 my-auto"}>
        <div className={"col-10 col-md-8 mx-auto my-auto"}>
          <p className={"view4-textbox view1-title"}>
            What is IEEE Innovation Nation Sri Lanka?
          </p>

          <div class={"view2-info"}>
            <div className={"d-flex view2-info-dat"}>
              <div className={"col-md-11"}>
                <div>
                  <p className={"text-normal"}>
                    IEEE Innovation Nation Sri Lanka strives to provide
                    training, mentoring and financial support to budding
                    entrepreneurs to take their ideas to the next level. Through
                    the competition, we aim to expose the young minds to the
                    global market as full fledged entrepreneurs, and create an
                    opportunity for them to win seed-funding as well
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View4;
