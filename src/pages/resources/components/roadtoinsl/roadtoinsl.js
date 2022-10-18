
import YouTube, { YouTubeProps } from "react-youtube";
import React, { useState } from 'react';

function Roadtoinsl() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const [roadToINSLday, setRoadToINSLday] = useState(1);

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div>
      <div className={""} />
    
      <div className="container">
        <div className="row">
          <div className={"col my-auto"}>
            <div className={"col-md-10 mx-auto my-auto"}>
              <h1 className="title">Road To INSL</h1>
              <p className="text-normal">
                ‘The Road to INSL’ - is a Three-day training program focused on
                setting off the entrepreneurial spark in a young person or
                nurturing the competitiveness inside those already dreaming of
                becoming entrepreneurs. The series of workshop upskills the
                applicants with all the basic techniques from finding an
                investable and innovative idea to implementing it.
              </p>
              <ul>
                <li className="text-normal">
                  The session will be held via Zoom and YouTube platforms. This
                  will be happening as a closed event thus a target audience who
                  are the teams registered with INSL 2022 will only join for it.
                </li>
                <li className="text-normal">
                  The questions regarding the session can be asked via the
                  Slido/ Google form and they will be answered in the Q&A time.
                  However, the participants are not allowed to unmute themselves
                  and ask questions unless there is a special request by a
                  participant.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center button-pack">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class={"btn btn-outline-light" + (roadToINSLday === 1 ? " active" : "")} onClick={() => setRoadToINSLday(1)}>
              Day 01
            </button>
            <button type="button" class={"btn btn-outline-light" + (roadToINSLday === 2 ? " active" : "")} onClick={() => setRoadToINSLday(2)}>
              Day 02
            </button>
            <button type="button" class={"btn btn-outline-light" + (roadToINSLday === 3 ? " active" : "")} onClick={() => setRoadToINSLday(3)}>
              Day 03
            </button>
          </div>
        </div>

        {roadToINSLday===1 ? 
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <h1 className="title">Road to INSL - Day 01</h1>
            <p className="text-normal">
              To start off with the training programs for the teams registered
              in INSL 2022, A welcome and introduction to the startup ecosystem
              will be given to warmly welcome the teams to the ecosystem.
            </p>
            <p className="text-normal">
              A proven, human-centred method for developing game-changing ideas,
              Design Thinking has been embraced by businesses all over the
              world. Participants in this webinar will learn the fundamentals of
              the design thinking methodology and take a closer look at how and
              why it works so well.
            </p>
            <p className="text-normal"><b>Topics Covered</b></p>
            <ul>
              <li className="text-normal">Welcome to the Ecosystem</li>
              <li className="text-normal">Delve into Design Thinking</li>
            </ul>


            <p className="text-normal">Welcome to the Ecosystem</p>
            <ul>
              <li className="text-normal">Speaker : Expecting a Resource Personnel from ICTA</li>
            </ul>

            <p className="text-normal">Delve into Design Thinking</p>
            <ul>
            <li>Speaker :</li>
            <p className="text-normal">
              Mr. Madhawa Herath
              Senior Lecturer at SLIIT
              Principal Consultant of Global Eye International (Pvt.) Ltd.
            </p>
            </ul>
            
          </div>
          <div className="col-4 col-md-4 col-xs-3">
            <YouTube
              videoId="rexmEtYYoAs"
              opts={opts}
              onReady={onPlayerReady}
            />
          </div>
        </div>
        : null}


        {roadToINSLday===2 ? 
        <div className="row">
          <div className="col-md-6">
            <h1 className="title">Road to INSL - Day 02</h1>
            <p className="text-normal">
              The Business Model Canvas is an excellent tool for helping you understand a
              business model precisely. It aids in explaining to customers why they should do
              business with you. The audience will learn about the Business Canvas Model in this
              session, including its essential elements, such as Who are your major
              partners/suppliers? What key activities do your value proposition require? What
              essential assets does your value proposition demand? Moreover, how does it support
              organizational innovation?
            </p>
            <p><b>Topics Covered</b></p>
            <ul>
              <li className="text-normal">How to Develop a Business Canvas Model</li>
            </ul>

            <ul>
            <li>Speaker :</li>
            <p className="text-normal">TBD</p>
            <p>            </p>
            </ul>


          </div>
          <div className="col-4">
            <YouTube
              videoId="rexmEtYYoAs"
              opts={opts}
              onReady={onPlayerReady}
            />
          </div>
        </div>
        : null}


        {roadToINSLday===3 ? 
        <div className="row">
          <div className="col-md-6">
            <h1 className="title">Road to INSL - Day 03</h1>
            <p className="text-normal">
              A Marketing stratagem is a long-term plan for achieving the goals of business by
              understanding the needs of customers and creating a distinct and sustainable
              competitive advantage. It encompasses everything from determining who your
              customers are to deciding what channels you use to reach those customers.
              Therefore it is really important to have a clear game plan when kicking off a business,
            </p>
            <p className="text-normal">
              Also since an emerging entrepreneur needs mentors, investments, markets at
              appropriate times, they will get to pitch their startup idea to various types of people.
              Pitching is simply presenting an overview of our business plan, products, and growth
              trajectory to potential investors and clients. Since pitching is going to portray your
              fabulous business plan in a nutshell, it is really crucial to learn dos and don'ts of
              pitching.
            </p>

            <p className="text-normal">
              In a competition of this calibre, it is also really important to fill the application form
              correctly by providing the relevant and accurate details. Therefore we will conduct a
              session covering Market stratagems, Learn How to Pitch and also a Guide to fill
              the Innovation nation competition application.
            </p>

            <p><b>Topics Covered</b></p>
            <ul>
            
           

            
            <li className="text-normal">Market Stratagems & Learn How to Pitch</li>
            <ul>
              <li>Speaker</li>
              <p className="text-normal">Mr. Mohommad Mafaz</p>
              <p className="text-normal">Co-founder/ Chief Storyteller at Show & Tell
                • Former Chief Executive Officer – We are Designers
                • Former Senior Marketing Manager – Affno</p>
            </ul>

            <li className="text-normal">How to fill the Innovation Nation competition</li>
            <ul>
            <li>Speakers :</li>
            <p className="text-normal">Mr. Supun Hansika - Vice Chair INSL 2022</p>
            <p className="text-normal">Mr. Singhe Silva - Program Team Lead INSL 2022</p>
            </ul>

            </ul>
          </div>
          <div className="col-4 col-md-4 col-xs-6">
            <YouTube
              videoId="rexmEtYYoAs"
              opts={opts}
              onReady={onPlayerReady}
            />
          </div>
        </div>
        : null} 




      </div>
    </div>
  );
}

export default Roadtoinsl;
