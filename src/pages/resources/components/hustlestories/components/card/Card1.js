import React from "react";
import "./Card1.css";
import Elon from "./img/elon.jpg";
import Calender from "./img/ico-calendar.png";

function Card1(){
    return(
        <div className="card1 col-3">

            <div className="thumb-1">
                <img src={Elon} className="thumb-img" />
            </div>

            <div>
                <p className="hustle-text-block">How to buy Sri Lanka for the minimum price?</p>
                <div className="hustle-text-block-main">
                    <p className="hustle-speaker">Elon Musk</p>
                    <div className="d-flex date-section">
                        <img src={Calender} className="calendar-ico col-1"/>
                        <p className="hustle-date">2021-04-06</p>
                    </div>
                    
                </div>
                
            </div>

            

        </div>
    )
}

export default Card1;