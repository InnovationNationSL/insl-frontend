import React from "react";
import "./view5.css";
import YearCard from "./components/yearCard";
import insl18 from "./img/insl2018.png";
import insl19 from "./img/insl2019.png";
import insl20 from "./img/insl2020.jpg";


const View5 = () =>{
    return(
        <div className={"walkdown-main"}>
            <div className={"viewtype-dark walkdown d-flex"}>
                
                <div className={"col my-auto"}>
                    <div className={"col-md-10 mx-auto my-auto"}>

                        <p className={"view1-title view1-center"}>A quick walkdown through past years</p>

                        <div class={"view2-info"}>
                            <div className={"d-flex view2-info-dat"}>
                                <div className={"col-md-10 d-flex flex-sm-row flex-column"}>

                                    <YearCard title="INSL 2018" body="The 2nd installment of the IEEE Innovation Nation Sri 
                                    Lanka commenced in June 2019 with the selection of the final teams followed 8 workshops 
                                    under 8 topics accordance with IEEE Innovation Nation curriculum. " img={insl18}/>
                                    
                                    <YearCard title="INSL 2019" body="The 2nd installment of the IEEE Innovation Nation Sri 
                                    Lanka commenced in June 2019 with the selection of the final teams followed 8 workshops 
                                    under 8 topics accordance with IEEE Innovation Nation curriculum. " img={insl19}/>
                                    
                                    <YearCard title="INSL 2020" body="The 2nd installment of the IEEE Innovation Nation Sri 
                                    Lanka commenced in June 2019 with the selection of the final teams followed 8 workshops 
                                    under 8 topics accordance with IEEE Innovation Nation curriculum. " img={insl20}/>

                                    <YearCard title="INSL 2021" body="The 2nd installment of the IEEE Innovation Nation Sri 
                                    Lanka commenced in June 2019 with the selection of the final teams followed 8 workshops 
                                    under 8 topics accordance with IEEE Innovation Nation curriculum. " img={insl20}/>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default View5;