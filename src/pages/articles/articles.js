import React, { useState } from "react";
import Card1 from "./components/card/Card1";
import Records from "../../json/articles.json";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./articles.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";

const Articles = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
      setIsOpen(!isOpen);
    }

    return (

        <div>
            <div className={"home-bg"} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
                <div>
            <div className="container">
                <div className="row">
                    <div className={"col my-auto"}>
                        <div className={"col-md-10 mx-auto my-auto"}>
                        <h1 className="title">Articles</h1>
                        <p className="text-normal">
                             
                        </p>
                        <p>
                             
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
                                
                                <Col key={k} xs={12} md={4} lg={4}>
                                    <a href={record.link} target="_blank" style={{textDecoration: 'none'}}>
                                    <Card className={"boot-card"}>
                                        <Card1 title={record.title} writer={record.writer} year={record.year} link={record.link} image={record.image} article1={record.article1} article2={record.article2} article3={record.article3} article4={record.article4} article5={record.article6} />
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
        <Footer />
    </div>
    )
};

export default Articles;