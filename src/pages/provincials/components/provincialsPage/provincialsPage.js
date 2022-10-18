import React from "react";
import ProvinceCard from "./components/provinceCard/provinceCard";
import "./provincialsPage.css";
import Records from "../../../../json/provincials.json";
import { Card, Row, Col, Container } from "react-bootstrap";

const ProvincialsPage = () => {
    return (
        <div className={"viewtype-dark-2 d-flex"} id={"resources"}>
            <div className={"col-12 my-auto"}>
                <div className={"resource-people col-md-10 mx-auto my-auto"}>
                    <p className={"view1-title view1-center"}>
                        Provincial Competitions
                    </p>

                    <div class={"view2-info"}>
                        <div className={"d-flex view2-info-dat mx-auto"}>
                            <div className={"col-12 col-md-11 d-flex flex-sm-row flex-column"}>
                                <Row className="row-teams">       
                                    {Records.province.map((record, k) => {
                                    return(
                                        <Col key={k} xs={12} md={6} lg={4}>
                                            <Card className={"boot-card"}>
                                                <ProvinceCard name={record.name} img={record.image} desc={record.description} date={record.date} location={record.location} />
                                            </Card>
                                        </Col>
                                    )
                                    })}
                                </Row>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProvincialsPage;
