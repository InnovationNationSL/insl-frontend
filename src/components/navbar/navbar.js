import React from "react";
import "./navbar.css";
import logo from "./logo.svg";

const Navbar = () =>{
    return (
        <div className={"navbar"}>
            <div className={"d-flex col"}>
                <div className={"logo-box"}>
                    <img src={logo} alt="INSL Logo" className={"insl-logo"}/>
                </div>

                <div className={"d-flex my-auto nav-array "}>
                    <div className={"nav-btn my-auto"} >
                        <p className={"no-bot-margin"}>HOME</p>
                    </div>

                    <div className={"nav-btn my-auto"}>
                        <p className={"no-bot-margin"}>CONTACT</p>
                    </div>

                    <div className={"nav-btn my-auto"}>
                        <p className={"no-bot-margin"}>HOME</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar;