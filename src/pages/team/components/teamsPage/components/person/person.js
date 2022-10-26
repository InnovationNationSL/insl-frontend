import React from "react";
import "./person.css";

const Person = (props) =>{
    return(
        <div className={"teampersoncard"}>
            <div className={""}>
                <img className={"col-12 col-md-12 person-image"} src={require('../img' + props.image)} alt={props.name}/>
            </div>

            <div className={"person-details"}>
                <div class={"person-name"}><p>{props.name}</p></div>
                <p className={"text-normal year-card-body"}>{props.title}</p>
            </div>

        
        </div>
    )
}

export default Person;