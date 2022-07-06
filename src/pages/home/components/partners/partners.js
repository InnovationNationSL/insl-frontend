import React from "react";
import "./partners.css";
import PartnerCardNational from "./components/partnerCardNational";
import PartnerCard from "./components/partnerCard";

import Icta from "./img/icta.png";
import Accelozo from "./img/accelozo.png";
import LSEG from "./img/lseg.png";
import ShownTell from "./img/show tell.png";
import Trace from "./img/trace.png";

import Chamathka from "./img/chamathka papers.png";
import Dreamspace from "./img/dreamspace.png";
import Redbull from "./img/redbull.png";


const Partners = () =>{
    return(
        <div className={"viewtype-dark d-flex"}>
            
            <div className={"col my-auto"}>
                <div className={"col-md-10 mx-auto my-auto"}>

                    <p className={"view1-title view1-center"}>Our Partners & Sponsors</p>

                    <div class={"view2-info"}>

                        <div className={"d-flex view2-info-dat mx-auto"}>
                            <div className={"col-md-10 d-flex flex-sm-row flex-column mx-auto"}>

                                <PartnerCardNational img={Icta} title="ICTA" type="National Partner"/>
                                <PartnerCardNational img={LSEG} title="London Stock Exchange" type="Gold Sponsor"/>
                            </div>
                        </div>

                        <div className={"d-flex view2-info-dat"}>
                            <div className={"col-md-10 d-flex flex-sm-row flex-column mx-auto"}>
                                <PartnerCard img={ShownTell} title="Show & Tell" type="Mentoring Partner"/>
                                <PartnerCard img={Accelozo} title="Accelozo" type="Knowledge Partner"/>
                                <PartnerCard img={Trace} title="TRACE" type="Venue Partner"/>
                            </div>
                        </div>

                        <div className={"d-flex view2-info-dat"}>
                            <div className={"col-md-10 d-flex flex-sm-row flex-column mx-auto"}>
                                <PartnerCard img={Chamathka} title="Chamathka Papers" type="Supportive Partner"/>
                                <PartnerCard img={Dreamspace} title="Dreamspace Academy" type="Regional partner"/>
                                <PartnerCard img={Redbull} title="RedBull" type="Beverage Partner"/>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Partners;