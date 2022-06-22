import React, {useEffect, useState} from "react";
import "./buttonCircle.css";
import button from "bootstrap/js/src/button";

//props: text, size
const ButtonCircle = (props) =>{
    return (
        <div className={props.size}>
            <div className={"button-circle mx-auto my-auto"}>
                <div className={"hard-center"}>
                    <p className={"btn-text my-auto"}>{props.text}</p>
                </div>
            </div>
        </div>
    )}

export default ButtonCircle;