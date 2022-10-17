import React from "react";
import "./person.css";
import img1 from "../img/Mr. Alagan.jpg";

const Person = (props) =>{
    return(
        <div className={"personcard col-md-12  col-lg-12"}>
            <div className={""}>
                <img className={"col-12 col-md-12 person-image"} src={require('../img' + props.img)} alt={props.title}/>
                {/* <img className={"col-12 col-md-12 person-image"} src={img1} alt={props.title}/> */}

            </div>

            <div className={"person-details"}>
                <div class={"person-name-resource"}><p>{props.name}</p></div>
                <p className={"text-normal-resource year-card-body"}>{props.tagline}</p>
            </div>

        </div>
    )
}

export default Person;