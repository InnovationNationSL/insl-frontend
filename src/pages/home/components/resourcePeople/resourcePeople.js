import React from "react";
import Person from "./components/person";
import "./resourcePeople.css";

import Dhammika from "./img/dhammika.jpg";
import Dhanika from "./img/dhanika.jpg";
import Mafaz from "./img/Mohammed Mafaz.jpg";
import Aloka from "./img/Aloka Gunasekara.jpg";
import Jehan from "./img/Jehan.jpg";



const ResourcePeople = () =>{
    return(
        <div className={"viewtype-2 viewtype-dark d-flex"}>
            
            <div className={"col my-auto"}>
                <div className={"col-md-10 mx-auto my-auto"}>

                    <p className={"view1-title view1-center"}>INSL Resource People 2022</p>

                    <div class={"view2-info"}>
                     


                        <div className={"d-flex view2-info-dat mx-auto"}>
                            <div className={"col-md-11 d-flex flex-sm-row flex-column"}>
                                <Person img = {Dhammika} title="Mr. Dhammika Marasinghe" body="Activities Chair - IEEE Sri Lanka Section"/>
                                <Person img = {Dhanika} title="Mr. Dhanika Perera" body="Founder of Helakuru, PayHere, ShopHere and CEO of Bhasha"/>
                                <Person img = {Mafaz} title="Mr. Mohammed Mafaz" body="Co-founder/Chief Story Teller - Show and Tell (Pvt) Ltd"/>
                                <Person img = {Aloka} title="Mr. Aloka Gunasekara" body="Director - Startup and Business Ecosystem Innovation - IESC"/>
                                <Person img = {Jehan} title="Mr. Jehan Wijesinghe" body="Co-Founder - IgniterSpace, Head of Product Management - Paladin Analytics"/>

                            </div>
                        </div>


                        <div className={"d-flex view2-info-dat"}>
                            <div className={"col-md-11 d-flex flex-sm-row flex-column"}>
                                <Person img = {Dhammika} title="Mr. Dhammika Marasinghe" body="Activities Chair - IEEE Sri Lanka Section"/>
                                <Person img = {Dhammika} title="Mr. Dhammika Marasinghe" body="Activities Chair - IEEE Sri Lanka Section"/>
                                <Person img = {Dhammika} title="Mr. Dhammika Marasinghe" body="Activities Chair - IEEE Sri Lanka Section"/>
                                <Person img = {Dhammika} title="Mr. Dhammika Marasinghe" body="Activities Chair - IEEE Sri Lanka Section"/>

                            </div>
                        </div>

          
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ResourcePeople;