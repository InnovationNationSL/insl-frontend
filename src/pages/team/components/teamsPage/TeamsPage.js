import React from "react";
import Person from "./components/person/person";
import "./TeamsPage.css";
import Records from "../../../../json/teams.json";
import { Card, Row, Col, Container } from "react-bootstrap";

const TeamsPage = () => {
    return (
        <div className={"viewtype-dark-2 d-flex"} id={"resources"}>
            <div className={"col-12 my-auto"}>
                <div className={"resource-people col-md-10 mx-auto my-auto"}>
                    <p className={"view1-title view1-center"}>
                        INSL Team 2022
                    </p>

                    <div class={"view2-info"}>
                        <div className={"d-flex view2-info-dat mx-auto"}>
                            <div className={"col-12 col-md-11 d-flex flex-sm-row flex-column"}>
                                <Row className="row-teams">                            
                                    {Records.chairman.map((record, k) => {
                                    return(
                                        <Col key={k} xs={12} md={4} lg={3}>
                                            <Card className={"boot-card"}>
                                                <Person name={record.name} title={record.title} linkedin={record.linkedin} facebook={record.facebook} image={""} />
                                            </Card>
                                        </Col>
                                    )
                                    })}
                                </Row>
                            </div>
                        </div>

                    </div>


                    


                    <div class={"view2-info"}>

                        <div>
                            <div className="subteam-names">
                                <p>Vice Chairs</p>
                            </div>
                        </div>

                        <div className={"d-flex view2-info-dat mx-auto"}>
                            <div className={"col-12 col-md-11 d-flex flex-sm-row flex-column"}>
                                <Row className="row-teams">                            
                                    {Records.vicechairs.map((record, k) => {
                                    return(
                                        <Col key={k} xs={12} md={4} lg={3}>
                                            <Card className={"boot-card"}>
                                                <Person name={record.name} title={record.title} linkedin={record.linkedin} facebook={record.facebook} image={""} />
                                            </Card>
                                        </Col>
                                    )
                                    })}
                                </Row>
                            </div>
                        </div>
                    </div>



                    <div class={"view2-info"}>

                        <div>
                            <div className="subteam-names">
                                <p>Program Team</p>
                            </div>
                        </div>

                        <div className={"d-flex view2-info-dat mx-auto"}>
                            <div className={"col-12 col-md-11 d-flex flex-sm-row flex-column"}>
                                <Row className="row-teams">                            
                                    {Records.programteam.map((record, k) => {
                                    return(
                                        <Col key={k} xs={12} md={4} lg={3}>
                                            <Card className={"boot-card"}>
                                                <Person name={record.name} title={record.title} linkedin={record.linkedin} facebook={record.facebook} image={""} />
                                            </Card>
                                        </Col>
                                    )
                                    })}
                                </Row>
                            </div>
                        </div>
                    </div>




                    <div class={"view2-info"}>

                        <div>
                            <div className="subteam-names">
                                <p>Secretary Team</p>
                            </div>
                        </div>

                        <div className={"d-flex view2-info-dat mx-auto"}>
                            <div className={"col-12 col-md-11 d-flex flex-sm-row flex-column"}>
                                <Row className="row-teams">                            
                                    {Records.secretaryteam.map((record, k) => {
                                    return(
                                        <Col key={k} xs={12} md={4} lg={3}>
                                            <Card className={"boot-card"}>
                                                <Person name={record.name} title={record.title} linkedin={record.linkedin} facebook={record.facebook} image={""} />
                                            </Card>
                                        </Col>
                                    )
                                    })}
                                </Row>
                            </div>
                        </div>
                    </div>


                    <div class={"view2-info"}>

                        <div>
                            <div className="subteam-names">
                                <p>Publicity Team</p>
                            </div>
                        </div>

                        <div className={"d-flex view2-info-dat mx-auto"}>
                            <div className={"col-12 col-md-11 d-flex flex-sm-row flex-column"}>
                                <Row className="row-teams">                            
                                    {Records.publicityteam.map((record, k) => {
                                    return(
                                        <Col key={k} xs={12} md={4} lg={3}>
                                            <Card className={"boot-card"}>
                                                <Person name={record.name} title={record.title} linkedin={record.linkedin} facebook={record.facebook} image={""} />
                                            </Card>
                                        </Col>
                                    )
                                    })}
                                </Row>
                            </div>
                        </div>
                    </div>



                    <div class={"view2-info"}>

                        <div>
                            <div className="subteam-names">
                                <p>Logistics Team</p>
                            </div>
                        </div>

                        <div className={"d-flex view2-info-dat mx-auto"}>
                            <div className={"col-12 col-md-11 d-flex flex-sm-row flex-column"}>
                                <Row className="row-teams">                            
                                    {Records.logisticsteam.map((record, k) => {
                                    return(
                                        <Col key={k} xs={12} md={4} lg={3}>
                                            <Card className={"boot-card"}>
                                                <Person name={record.name} title={record.title} linkedin={record.linkedin} facebook={record.facebook} image={""} />
                                            </Card>
                                        </Col>
                                    )
                                    })}
                                </Row>
                            </div>
                        </div>
                    </div>


                    <div class={"view2-info"}>

                        <div>
                            <div className="subteam-names">
                                <p>Finance Team</p>
                            </div>
                        </div>

                        <div className={"d-flex view2-info-dat mx-auto"}>
                            <div className={"col-12 col-md-11 d-flex flex-sm-row flex-column"}>
                                <Row className="row-teams">                            
                                    {Records.financeteam.map((record, k) => {
                                    return(
                                        <Col key={k} xs={12} md={4} lg={3}>
                                            <Card className={"boot-card"}>
                                                <Person name={record.name} title={record.title} linkedin={record.linkedin} facebook={record.facebook} image={""} />
                                            </Card>
                                        </Col>
                                    )
                                    })}
                                </Row>
                            </div>
                        </div>
                    </div>


                    <div class={"view2-info"}>

                        <div>
                            <div className="subteam-names">
                                <p>Design Team</p>
                            </div>
                        </div>

                        <div className={"d-flex view2-info-dat mx-auto"}>
                            <div className={"col-12 col-md-11 d-flex flex-sm-row flex-column"}>
                                <Row className="row-teams">                            
                                    {Records.designteam.map((record, k) => {
                                    return(
                                        <Col key={k} xs={12} md={4} lg={3}>
                                            <Card className={"boot-card"}>
                                                <Person name={record.name} title={record.title} linkedin={record.linkedin} facebook={record.facebook} image={""} />
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

export default TeamsPage;
