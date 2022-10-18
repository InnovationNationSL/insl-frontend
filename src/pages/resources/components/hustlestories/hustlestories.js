import React, { useState } from "react";
import Card1 from "./components/card/Card1";
import Records from "../../../../json/hustleStory.json";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./hustlestories.css";

function HustleStories(){
    const [breaker, setBreaker] = useState(0);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className={"col my-auto"}>
                        <div className={"col-md-10 mx-auto my-auto"}>
                        <h1 className="title">Hustle Stories</h1>
                        <p className="text-normal">
                            Hustle story is the key-starting point of the young 
                            entrepreneurs which mainly focus on motivating the 
                            audience with the successful start-up story of a famous 
                            person. Hustle story is conducted as a public event, which 
                            will be open to anyone who is interested. Anyone with the 
                            enthusiasm to step up the world of entrepreneurship and 
                            innovation, can be benefited by this event. 
                        </p>
                        <p>
                            Innovation Nation Sri Lanka 2022, "The Hustle Story" session 
                            was focusing on motivating the audience to be successful future 
                            entrepreneurs and encouraging them to join the startup 
                            ecosystem and was successfully held as a panel discussion on 
                            “Why Sri Lanka needs entrepreneurship in this crisis”
                        </p>
                        </div>
                    </div>
                </div>

                


            </div>


            <div className="col-12 my-auto">
                <div className="d-flex mx-auto row col">
                    <div className="col-9 col-md-9 d-flex mx-auto my-auto flex-sm-row flex-column justify-content-center">
                        <Row>
                            {Records.map((record, k) => {

                            // setBreaker(setBreaker+1);
                            return(
                                
                                <Col key={k} xs={12} md={6} lg={6}>
                                    <a href={record.link} target="_blank" style={{textDecoration: 'none'}}>
                                    <Card className={"boot-card"}>
                                        <Card1 title={record.title} speakers={record.speakers} year={record.year} link={record.link} image={record.image} />
                                    </Card>
                                    </a>
                                </Col>
                                
                            )
                            })}
                        </Row>

                        
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HustleStories;