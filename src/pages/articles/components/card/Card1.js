import React, { useState } from "react";
import "./Card1.css";
// import Elon from "./img/elon.jpg";
import Calender from "./img/ico-calendar.png";
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from "react-bootstrap";

function Card1(props){


    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow() {
    //   setFullscreen(breakpoint);
      setShow(true);
    }


    return(
        <>
        <div className="card1" onClick={() => handleShow()}>

            {/* <div className="thumb-1">
                <img src={require('./img' + props.image)} className="thumb-img" />
            </div> */}

            <div>
                <p className="hustle-text-block">{props.title}</p>
                <div className="hustle-text-block-main">
                    
                    <p className="hustle-speaker">{props.writer}</p>
                    <div className="d-flex date-section">
                        <img src={Calender} className="calendar-ico col-1"/>
                        <p className="hustle-date">{props.year}</p>
                    </div>
                    
                </div>
                {/* {typeof v === 'string' && `below ${v.split('-')[0]}`} */}
            </div>


    

            

        </div>
        
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <div className="col-9 col-md-9 d-flex mx-auto my-auto flex-sm-row flex-column justify-content-center">

            <Col xs={12} md={8} lg={8}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                    
                </Modal.Header>
                <p className="articleWriter"><span style={{color: "white"}}>Author | </span> {props.writer}</p>
                
                
                <Modal.Body>
                    <div style={{overflow:"scroll",overflowX: "hidden",  height:"65vh"}}>
                        <div className="articleContent">{props.article1}</div>
                        <div className="articleContent">{props.article2}</div>
                        <div className="articleContent">{props.article5}</div>
                        <div className="articleContent">{props.article3}</div>
                        <div className="articleContent">{props.article4}</div>
                        
                    </div>
                </Modal.Body>
                {/* <Modal.Body>{props.article2}</Modal.Body>
                <Modal.Body>{props.article3}</Modal.Body>
                <Modal.Body>{props.article4}</Modal.Body>
                <Modal.Body>{props.article5}</Modal.Body> */}
            </Col>
            </div>
        </Modal>
        
        </>
    )
}

export default Card1;