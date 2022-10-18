import React from "react";
import Person from "./components/person";
import "./experts.css";

// import Dhammika from "./img/dhammika.jpg";
// import Dhanika from "./img/dhanika.jpg";
// import Mafaz from "./img/Mohammed Mafaz.jpg";
// import Aloka from "./img/Aloka Gunasekara.jpg";
// import Jehan from "./img/Jehan.jpg";

// import Chanaka from "./img/Chanaka-Hettige.jpg";
// import Chamika from "./img/Chamika.jpg";
// import Dilini from "./img/Dilini.jpg";
// import Mithushan from "./img/Mithushan Jalangan.jpg";
// import Vidura from "./img/Vidura.jpg";

// import Hirishegan from "./img/Hirishegan Karuneswaran.jpg";
// import Maheshika from "./img/Maheshika.jpg";
// import Thivvyan from "./img/thivvyan.jpg";
// import Subodha from "./img/Subodha.jpg";
// import Indika from "./img/Indika.jpeg";

// import Enosh from "./img/Mr. Enosh Profile.jpg";
// import Alagan from "./img/Mr. Alagan.jpg";
// import Ashan from "./img/Mr. Ashan.jpg";
// import Suman from "./img/Mr. Suman.jpg";
// import Anushiya from "./img/Ms. Anushiya.jpg";

// import Tamasha from "./img/tamasha.jpeg";
// import Rangika from "./img/Prof. Rangika Halwatura 1.jpg";
// import Yasura from "./img/Mr. Yasura Samarakoon.jpg";
// import Ranjith from "./img/Eng. Ranjith G Rubasinghe.jpg";
// import Dulith from "./img/Mr. Dulith Herath.jpg";


import Records from "../../../../json/resourcePeople.json";
import { Card, Row, Col, Container } from "react-bootstrap";

const Experts = () => {
    return (
        <div className={"viewtype-dark-2 d-flex"} id={"resources"}>
            <div className={"col-12 my-auto"}>
                <div className={"resource-people col-md-10 mx-auto my-auto"}>
                    <p className={"view1-title view1-center"}>
                        INSL Experts 2022
                    </p>

                    <div class={"view2-info"}>
                        <div className={"d-flex view2-info-dat mx-auto"}>
                            <div className={"col-12 col-md-11 d-flex flex-sm-row flex-column"}>
                          
                                <Row>
                                    {Records.members.map((record, k) => {

                                    // setBreaker(setBreaker+1);
                                    return(
                                        <Col key={k} xs={12} md={4} lg={2}>
                                            <Card className={"boot-card"}>
                                            <Person
                                                img={record.img}
                                                name={record.name}
                                                tagline={record.tagline}
                                                />
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

export default Experts;
