import React from "react";
import "./person.css";

const Person = (props) =>{
    return(
        <div className={"personcard col-md-1  col-lg-2"}>
            <div className={""}>
                <img className={"col-12 col-md-12 person-image"} src={props.img} alt={props.title}/>
            </div>

            <div className={"person-details"}>
                <div class={"person-name"}><p>{props.title}</p></div>
                <p className={"text-normal year-card-body"}>{props.body}</p>
            </div>

        
        </div>
    )
}

export default Person;