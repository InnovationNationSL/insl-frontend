import React from "react";
import "./partnerCard.css";

const partnerCard = (props) =>{
    return(
        <div className={"partnercard col-md-3"}>
            <div className={"partner-logo"}>
                <img src={props.img} alt={props.title} className={"partner-logo-img mx-auto col-md-12 my-auto"}/>
            </div>
            <div class="viewtype-subtitle2"><p>{props.type}</p></div>        

            <div class="viewtype-subtitle"><p>{props.title}</p></div>        
        </div>
    )
}

export default partnerCard;