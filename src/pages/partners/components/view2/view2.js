import React from "react";
import "./view2.css";
import atlasIcon from "./icon.png";
import ButtonCircle from "../../../../components/buttonCircle/buttonCircle";
import LogoWhite from "../../../../images/logo-white-01.svg";
import Industry from "../../../../images/Icon awesome-industry.png";
import LightBlub from "../../../../images/Icon awesome-lightbulb.png";

const View2 = () =>{
    return(
        <div className={"viewtype-2 viewtype-dark d-flex"}>
            <div className={"col-md-6 my-auto"}>
                <div className={"col-md-6 mx-auto my-auto"}>
                    <img src={LogoWhite} alt={"INSL White Logo"} />
                </div>
            </div>

            <div className={"col-md-6 my-auto"}>
                <div className={"col-10 col-md-8 mx-auto my-auto"}>
                    <p className={"view1-title"}>Why you should be a part of INSL</p>

                    <div class={"view2-info"}>
                        <div className={"d-flex view2-info-dat"}>
                            <div className={"col-3 col-md-2"}>
                                <div className={"mx-auto my-auto"}>
                                    <img className={"mx-auto"} src={Industry} alt={"Industry icon"} />
                                </div>

                            </div>
                            <div className={"col-md-11"}>
                                <div>
                                    <p className={"viewtype-subtitle"}>Economic Potency</p>
                                </div>
                                <div>
                                    <p className={"text-normal"}>Be a part of Innovation Nation Sri Lanka 2021 in order to contribute towards the
                                        economic dynamism by spurring innovation</p>
                                </div>

                            </div>

                        </div>


                        <div className={"d-flex"}>
                            <div className={"col-3 col-md-2"}>
                                <div className={"mx-auto"}>
                                    <img src={LightBlub} alt={"Industry icon"} />
                                </div>
                            </div>
                            <div className={"col-md-11"}>
                                <div>
                                    <p className={"viewtype-subtitle"}>Innovativeness</p>
                                </div>
                                <div>
                                    <p>It will be a platform for new entrepreneurs to bring new ideas to the table, much
                                        needed to stir innovation and generate competition.</p>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default View2;