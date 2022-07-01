import React from "react";
import "./person.css";

const Person = (props) =>{
    return(
        <div className={"yearcard col-md-2"}>
            <div className={""}>
                <img className={"col-md-12"} src={props.img} alt={props.title}/>
            </div>

            <div className={"person-details"}>
                <div class={"person-name"}><p>{props.title}</p></div>
                <p className={"text-normal year-card-body"}>{props.body}</p>
            </div>

        
        </div>
    )
}

export default Person;