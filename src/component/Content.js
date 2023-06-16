import React, { useState } from "react";
import "./Content.css";
import Project01 from "./images/Project01.png";
import Project02 from "./images/Project02.png";
import Project03 from "./images/Project03.png";
import Project04 from "./images/Project04.png";
import Project05 from "./images/Project05.png";
import Project06 from "./images/Project06.png";
import Project07 from "./images/Project07.png";
import Project08 from "./images/Project08.png";
import Project09 from "./images/Project09.png";
import Project10 from "./images/Project10.png";
import Project11 from "./images/Project11.png";
import Project12 from "./images/Project12.png";
import Project13 from "./images/Project13.png";
import Project14 from "./images/Project14.png";
import Project15 from "./images/Project15.png";

// stPrLiCo = studentProjectLibraryContent
export default function Content() {
  return (
    // Created the main content in a seperate component//
    <div className="stPrLiCo">
      {/* Created few buttons for the difficulty filters and show per page */}
      <div className="stPrLiCoMain">
        <div stPrLiCoSquareContainerWrapper>
          <div className="stPrLiCoTopBars">
            {/* Difficulty Bars */}
            <div className="stPrLiCoDifficultyFilterBars">
              <button onClick="stPrLiCoBeginner">Beginner </button>
              <button onClick="stPrLiCoIntermediate>">Intermediate </button>
              <button onClick="stPrLiCoAdvanced">Advanced</button>
            </div>
            {/* Created Show Filter Bars */}
            <div className="stPrLiCoShowFilterBars">
              <p className="stPrLiCoTitle">show</p>
              <button onClick="stPrLiCoShowFilterBars5">5</button>
              <button onClick="stPrLiCoShowFilterBars10">10</button>
              <button onClick="stPrLiCoShowFilterBarsAll">All</button>
            </div>
          </div>
          {/* 15 Square Containers */}
          <div className="stPrLiCoSquareContainer">
            <div>
              <img src={Project01} alt="Picture1" className="image1" />
              <span className="text1">Introduction</span>
            </div>
            <div>
              <img src={Project02} alt="Picture2" /> My Birthday
            </div>
            <div>
              <img src={Project03} alt="Picture3" /> 10 Block Challenge
            </div>
            <div>
              <img src={Project04} alt="Picture4" /> Build a band
            </div>
            <div>
              <img src={Project05} alt="Picture5" /> The Bear and the Monkey
            </div>
            <div>
              <img src={Project06} alt="Picture6" /> Debugging
            </div>
            <div>
              <img src={Project07} alt="Picture7" /> About me
            </div>
            <div>
              <img src={Project08} alt="Picture8" /> I am here!
            </div>
            <div>
              <img src={Project09} alt="Picture9" /> Funny Faces
            </div>
            <div>
              <img src={Project10} alt="Picture10" /> It Tickles
            </div>
            <div>
              <img src={Project11} alt="Picture11" /> Penguin in a Desert
            </div>
            <div>
              <img src={Project12} alt="Picture12" /> Time Travel
            </div>
            <div>
              <img src={Project13} alt="Picture13" /> Birthday Card
            </div>
            <div>
              <img src={Project14} alt="Picture14" /> The Lion and the Mouse
              Part 1
            </div>
            <div>
              <img src={Project15} alt="Picture15" /> The Lion and the Mouse
              Part 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
