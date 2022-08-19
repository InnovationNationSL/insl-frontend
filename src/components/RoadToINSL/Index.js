import React from "react";
import Navbar from "../Navbar/navbar";
import "./style.css";
import YouTube, { YouTubeProps } from "react-youtube";

function RoadToINSL() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

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
      <div className={"home-bg"} />
      <Navbar />
      <div className="container">
        <div className="row">
          <div className={"col my-auto"}>
            <div className={"col-md-10 mx-auto my-auto"}>
              <h1 className="title">Road To INSL</h1>
              <p>
                ‘The Road to INSL’ - is a Three-day training program focused on
                setting off the entrepreneurial spark in a young person or
                nurturing the competitiveness inside those already dreaming of
                becoming entrepreneurs. The series of workshop upskills the
                applicants with all the basic techniques from finding an
                investable and innovative idea to implementing it.
              </p>
              <ul>
                <li>
                  The session will be held via Zoom and YouTube platforms. This
                  will be happening as a closed event thus a target audience who
                  are the teams registered with INSL 2022 will only join for it.
                </li>
                <li>
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

        <div className="text-center">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-outline-light active">
              Day 01
            </button>
            <button type="button" class="btn btn-outline-light">
              Day 02
            </button>
            <button type="button" class="btn btn-outline-light">
              Day 03
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h1 className="title">Road to INSL - Day 01</h1>
            <p>
              To start off with the training programs for the teams registered
              in INSL 2022, A welcome and introduction to the startup ecosystem
              will be given to warmly welcome the teams to the ecosystem.
            </p>
            <p>
              A proven, human-centred method for developing game-changing ideas,
              Design Thinking has been embraced by businesses all over the
              world. Participants in this webinar will learn the fundamentals of
              the design thinking methodology and take a closer look at how and
              why it works so well.
            </p>
            <p>Topics Coverd:</p>
            <ul>
              <li>Welcome to the Ecosystem</li>
              <li>Delve into Design Thinking</li>
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
      </div>
    </div>
  );
}

export default RoadToINSL;
