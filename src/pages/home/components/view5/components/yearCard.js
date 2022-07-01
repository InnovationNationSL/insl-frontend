import React from "react";
import "./yearCard.css";

const YearCard = (props) =>{
    return(
        <div className={"yearcard col-md-3"}>
            
            <div class="viewtype-subtitle"><p>{props.title}</p></div>
            
            <p className={"text-normal year-card-body"}>{props.body}</p>
        
        </div>
    )
}

export default YearCard;