import React from "react";
import "./partners.css";
import PartnerCardNational from "./components/partnerCardNational";
import PartnerCard from "./components/partnerCard";
import { Card, Row, Col, Container } from "react-bootstrap";
import Records from "../../../../json/sponsors.json";


const Partners = () =>{
    return(
        <div className={"viewtype-dark d-flex"}>
            
            <div className={"col-12 my-auto"}>
                <div className={"col-md-10 mx-auto my-auto"}>

                    <p className={"view1-title view1-center"}>Our Partners & Sponsors</p>

                    <div class={"view2-info"}>

                        <div className={"d-flex view2-info-dat mx-auto"}>
                            <div className={"col-12 col-md-10 d-flex flex-sm-row flex-column mx-auto"}>
                            <Row>
                                {Records.gold.map((record, k) => {
                                    return(
                                        <Col key={k} xs={12} md={3} lg={3}>
                                            <Card className={"boot-card"}>
                                                <PartnerCardNational img={record.img} title={record.name} type={record.tag}/>
                                            </Card>
                                        </Col>
                                    )
                                    })}
                            </Row>
                            </div>
                        </div>


                        <div className={"d-flex view2-info-dat mx-auto"}>
                            <div className={"col-12 col-md-10 d-flex flex-sm-row flex-column mx-auto"}>
                            <Row>
                                {Records.ordinary.map((record, k) => {
                                    return(
                                        <Col key={k} xs={12} md={4} lg={3}>
                                            <Card className={"boot-card"}>
                                                <PartnerCard img={record.img} title={record.name} type={record.tag}/>
                                            </Card>
                                        </Col>
                                    )
                                    })}
                            </Row>
                            </div>
                        </div>

                        {/* <div className={"d-flex view2-info-dat"}>
                            <div className={"col-12 col-md-10 d-flex flex-sm-row flex-column mx-auto"}>
                                <PartnerCard img={ShownTell} title="Show & Tell" type="Mentoring Partner"/>
                                <PartnerCard img={Accelozo} title="Accelozo" type="Knowledge Partner"/>
                                <PartnerCard img={Trace} title="TRACE" type="Venue Partner"/>
                            </div>
                        </div> */}

    

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Partners;