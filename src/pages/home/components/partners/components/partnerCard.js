import React from "react";
import "./partnerCard.css";

const partnerCard = (props) =>{
    return(
        <div className={"partnercard col-md-12"}>
            <div className={"partner-logo"}>
                <img src={require('../img' + props.img)} alt={props.title} className={"partner-logo-img mx-auto col-md-12 col-12 my-auto"}/>
            </div>
            <div class="viewtype-subtitle-partner-2"><p>{props.type}</p></div>        

            <div class="viewtype-subtitle-partner"><p>{props.title}</p></div>        
        </div>
    )
}

export default partnerCard;