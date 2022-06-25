import React from "react";
import "./view2.css";
import atlasIcon from "./icon.png";
import ButtonCircle from "../../../../components/buttonCircle/buttonCircle";

const View2 = () =>{
    return(
        <div className={"viewtype-2 viewtype-dark d-flex"}>
            <div className={"col-md-6 my-auto"}>
                <div className={"col-md-6 mx-auto my-auto"}>
                    <p className={"view1-title"}>Welcome to IEEE Innovation Nation Sri Lanka</p>
                    <p className={"text-normal"}>The excellence of guidance, mentorship and finances to take your idea or
                        product to the next level.</p>
                    <ButtonCircle text={"Join as a partner"} size={"col-md-8"}/>
                </div>
            </div>

            <div className={"col-md-6"}>
                <img src={atlasIcon} className={"atlasIcon"} alt={"Official icon of the year"}/>
            </div>
        </div>
    )
}

export default View2;