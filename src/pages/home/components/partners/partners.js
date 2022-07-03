import React from "react";
import "./partners.css";
import PartnerCard1 from "./components/partnerCard1";


const Partners = () =>{
    return(
        <div className={"viewtype-2 viewtype-dark d-flex"}>
            
            <div className={"col my-auto"}>
                <div className={"col-md-10 mx-auto my-auto"}>

                    <p className={"view1-title view1-center"}>Our Partners & Sponsors</p>

                    <div class={"view2-info"}>
                        <div className={"d-flex view2-info-dat"}>
                            <div className={"col-md-10 d-flex flex-sm-row flex-column"}>

                                <PartnerCard1 title="INSL 2018" body="The 2nd installment of the IEEE Innovation Nation Sri 
                                Lanka commenced in June 2019 with the selection of the final teams followed 8 workshops 
                                under 8 topics accordance with IEEE Innovation Nation curriculum. "/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Partners;