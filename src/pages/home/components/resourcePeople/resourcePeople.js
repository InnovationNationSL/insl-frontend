import React from "react";
import Person from "./components/person";
import "./resourcePeople.css";

import Dhammika from "./img/dhammika.jpg";
import Dhanika from "./img/dhanika.jpg";
import Mafaz from "./img/Mohammed Mafaz.jpg";
import Aloka from "./img/Aloka Gunasekara.jpg";
import Jehan from "./img/Jehan.jpg";

import Chanaka from "./img/Chanaka-Hettige.jpg";
import Chamika from "./img/Chamika.jpg";
import Dilini from "./img/Dilini.jpg";
import Mithushan from "./img/Mithushan Jalangan.jpg";
import Vidura from "./img/Vidura.jpg";

import Hirishegan from "./img/Hirishegan Karuneswaran.jpg";
import Maheshika from "./img/Maheshika.jpg";
import Thivvyan from "./img/thivvyan.jpg";
import Subodha from "./img/Subodha.jpg";
import Indika from "./img/Indika.jpeg";

import Enosh from "./img/Mr. Enosh Profile.jpg";
import Alagan from "./img/Mr. Alagan-photo-original.jpg";
import Ashan from "./img/Mr. Ashan.jpg";
import Suman from "./img/Mr. Suman.jpg";
import Anushiya from "./img/Ms. Anushiya.jpg";

import Tamasha from "./img/tamasha.jpeg";
import Rangika from "./img/Prof. Rangika Halwatura 1.jpg";
import Yasura from "./img/Mr. Yasura Samarakoon.jpg";
import Ranjith from "./img/Eng. Ranjith G Rubasinghe.jpg";
import Dulith from "./img/Mr. Dulith Herath.jpg";

const ResourcePeople = () => {
  return (
    <div className={"viewtype-dark d-flex"} id={"resources"}>
      <div className={"col my-auto"}>
        <div className={"col-md-10 mx-auto my-auto"}>
          <p className={"view1-title view1-center"}>
            INSL Resource People 2022
          </p>

          <div class={"view2-info"}>
            <div className={"d-flex view2-info-dat mx-auto"}>
              <div className={"col-md-11 d-flex flex-sm-row flex-column"}>
                <Person
                  img={Dhammika}
                  title="Mr. Dhammika Marasinghe"
                  body="Activities Chair - IEEE Sri Lanka Section"
                />
                <Person
                  img={Dhanika}
                  title="Mr. Dhanika Perera"
                  body="Founder of Helakuru, PayHere, ShopHere and CEO of Bhasha"
                />
                <Person
                  img={Mafaz}
                  title="Mr. Mohammed Mafaz"
                  body="Co-founder/Chief Story Teller - Show and Tell (Pvt) Ltd"
                />
                <Person
                  img={Aloka}
                  title="Mr. Aloka Gunasekara"
                  body="Director - Startup and Business Ecosystem Innovation - IESC"
                />
                <Person
                  img={Jehan}
                  title="Mr. Jehan Wijesinghe"
                  body="Co-Founder - IgniterSpace, Head of Product Management - Paladin Analytics"
                />
              </div>
            </div>

            <div className={"d-flex view2-info-dat mx-auto"}>
              <div className={"col-md-11 d-flex flex-sm-row flex-column"}>
                <Person
                  img={Chanaka}
                  title="Mr. Chanaka Hettige"
                  body="Assistant Instructor and Ph.D. Student at Indiana University Bloomington "
                />
                <Person
                  img={Chamika}
                  title="Mr. Chamika Sudusinghe"
                  body="Secretary - IEEE Region 10 Students Activities Committee"
                />
                <Person
                  img={Dilini}
                  title="Ms. Dilini Ekanayaka"
                  body="Co-Chairman - IEEE SL Inspire, IEEE IN Leadership Team Member"
                />
                <Person
                  img={Mithushan}
                  title="Mr. Mithushan Jalangan"
                  body="Webmaster - IEEE Region 10 YP, IEEE IN Leadership Team Member"
                />
                <Person
                  img={Vidura}
                  title="Mr. Vidura Dhananjaya"
                  body="IEEE SAC Membership Development Sub-Committee Chair"
                />
              </div>
            </div>

            <div className={"d-flex view2-info-dat mx-auto"}>
              <div className={"col-md-11 d-flex flex-sm-row flex-column"}>
                <Person
                  img={Hirishegan}
                  title="Mr. Hirishegan Karuneswaran"
                  body="IT Business Analyst - PickMe"
                />
                <Person
                  img={Maheshika}
                  title="Ms. Maheshika Madubashani"
                  body="IT Business Analyst - PayMedia"
                />
                <Person
                  img={Thivvyan}
                  title="Mr. Thivvyan Karuneswaran"
                  body="Former Publicity Lead INSL 2020"
                />
                <Person
                  img={Subodha}
                  title="Mr. Subodha Iranga"
                  body="Former Logistics Lead INSL 2020"
                />
                <Person
                  img={Indika}
                  title="Mr. Indika De Zoysa"
                  body="Vice President, Enterprise Business Group,Huawei Technologies Lanka Co (Pvt) Ltd"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcePeople;
