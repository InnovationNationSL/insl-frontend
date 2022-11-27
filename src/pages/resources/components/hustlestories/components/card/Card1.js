import React from "react";
import "./Card1.css";
// import Elon from "./img/elon.jpg";
import Calender from "./img/ico-calendar.png";

function Card1(props){
    return(
        <div className="card1">

            <div className="thumb-1">
                <img src={require('./img' + props.image)} className="thumb-img" />
            </div>

            <div>
                <p className="hustle-text-block">{props.title}</p>
                <div className="hustle-text-block-main">
                    
                    <p className="hustle-speaker">{props.speakers}</p>
                    <div className="d-flex date-section">
                        <img src={Calender} className="calendar-ico col-1"/>
                        <p className="hustle-date">{props.year}</p>
                    </div>
                    
                </div>
                
            </div>

            

        </div>
    )
}

export default Card1;