import React from "react";
import "./partnerCard1.css";

const partnerCard1 = (props) =>{
    return(
        <div className={"yearcard col-md-3"}>
            
            <div class="viewtype-subtitle"><p>{props.title}</p></div>
            
            <p className={"text-normal year-card-body"}>{props.body}</p>
        
        </div>
    )
}

export default partnerCard1;