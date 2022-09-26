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
                                {/* <Person
                                // img={}
                                title="Mr. Dhammika Marasinghe"
                                body="Activities Chair - IEEE Sri Lanka Section"
                                />
                                <Person
                                // img={}
                                title="Mr. Dhanika Perera"
                                body="Founder - CEO Bhasha Lanka (Pvt) Ltd
                                Founder - CEO PayHere"
                                />
                                <Person
                                // img={}
                                title="Mr. Mohammed Mafaz"
                                body="Co-founder/Chief Story Teller - Show and Tell (Pvt) Ltd"
                                />
                                <Person
                                // img={}
                                title="Mr. Aloka Gunasekara"
                                body="Director - Startup and Business Ecosystem Innovation - IESC"
                                />
                                <Person
                                // img={}
                                title="Mr. Jehan Wijesinghe"
                                body="Co-Founder - IgniterSpace, Head of Product Management - Paladin Analytics"
                                /> */}

                                <Row>
                                    {Records.map((record, k) => {

                                    // setBreaker(setBreaker+1);
                                    return(
                                        <Col key={k} xs={12} md={4} lg={3}>
                                            <Card className={"boot-card"}>
                                                <Person title={record.title} speaker={record.speaker} date={record.date}/>
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
