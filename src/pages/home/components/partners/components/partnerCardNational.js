import React from "react";
import "./partnerCardNational.css";

const partnerCardNational = (props) =>{
    return(
        <div className={"partnercard-national col-md-12"}>
            <div className={"partner-logo"}>
                <img src={require('../img' + props.img)} alt={props.title} className={"partner-logo-img mx-auto col-12 col-md-12 my-auto"}/>
            </div>
            <div class="viewtype-subtitle-partner-2"><p>{props.type}</p></div>        

            <div class="viewtype-subtitle-partner"><p>{props.title}</p></div>        
        </div>
    )
}

export default partnerCardNational;