import React from "react";
import "./view5.css";
import YearCard from "./components/yearCard";
import insl18 from "./img/insl2018.png";
import insl19 from "./img/insl2019.png";
import insl20 from "./img/insl2020.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const View5 = () =>{
    return(
        <div className={"walkdown-main"}>
            <div className={"viewtype-dark walkdown d-flex"}>
                
                <div className={"col my-auto"}>
                    <div className={"col-md-12 col-lg-11 mx-auto my-auto"}>

                        <p className={"view1-title view1-center"}>A quick walkdown through past years</p>

                        <div class={"view2-info"}>
                            <div className={"d-flex view2-info-dat d-flex justify-content-center"}>
                                <div className={"col-md-12 col-lg-10 d-flex flex-sm-row flex-column"}>
                                
                                    <Row className={"justify-content-md-center"}>
                                        
                                        <Col xs={12} md={6} lg={3}>
                                            <YearCard title="INSL 2018" body="IEEE Innovation Nation Sri Lanka (INSL) 
                                            2018 was established to encourage the emerging entrepreneurs on the island to develop 
                                            their ideas further." img={insl18}/>
                                        </Col>
                                        
                                        <Col xs={12} md={6} lg={3}>
                                        <YearCard title="INSL 2019" body="The 2nd installment of IEEE Innovation Nation Sri Lanka 
                                        commenced in June 2019 with the final teams being chosen, followed by 8 workshops covering
                                        8 themes in line with the curriculum of IEEE Innovation Nation." img={insl19}/>
                                        </Col>

                                        <Col xs={12} md={6} lg={3}>
                                        <YearCard title="INSL 2020" body="The 3rd consecutive year of the IEEE Innovation Nation 
                                        Sri Lanka began in May 2020. Due to the pandemic the whole globe was dealing with, all 
                                        IEEE INSL events conducted throughout the year were hosted online. " img={insl20}/>
                                        </Col>

                                        <Col xs={12} md={6} lg={3}>
                                        <YearCard title="INSL 2021" body="In May 2021, IEEE Innovation Nation Sri Lanka's 4th 
                                        installment was launched. The program was able to improve the steady progress of the startup 
                                        community in Sri Lanka by supporting them with new initiatives and strengthening them with 
                                        innovative concepts and new technology." img={insl20}/>
                                        </Col>
                                        
                                    </Row>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default View5;