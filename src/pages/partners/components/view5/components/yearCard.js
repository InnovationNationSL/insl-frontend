import React from "react";
import "./yearCard.css";

const YearCard = (props) =>{
    return(
        <div className={"yearcard col-md-3"}>
            <div className={""}>
                <img className={"col-12 col-md-12 yearcard-img"} src={props.img} alt={props.title}/>
            </div>
            <div class="viewtype-subtitle"><p>{props.title}</p></div>
            
            <p className={"text-normal year-card-body"}>{props.body}</p>
        
        </div>
    )
}

export default YearCard;