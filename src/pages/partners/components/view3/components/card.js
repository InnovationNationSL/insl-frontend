import React from "react";

import "./card.css";

const Card = (props) => {
  return (
    <div className={"col-lg-3"}>
        <div className={"view3Card text-center"}>
            <div className={"mx-auto view3-img"}>
                <img src={props.icon} alt={"card-1"} className={"col-md-4 mx-auto my-auto"}/>
            </div>
            <div className={"card-body2 text-center"}>
                <h5 className={"card-title viewtype-subtitle3"}>{props.title}</h5>
                <p className={"text-normal"}>
                    {props.description}
                </p>
            </div>
        </div>
    </div>
)}

export default Card;