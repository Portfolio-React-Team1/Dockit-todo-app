import React from "react";
import "./Onboarding.scss";
import Group183 from "../../assets/images/group183.png";
import Back from "./Links/Back";
import Next from "./Links/Next";
// changes by ruby
import { useState } from "react";
import Onboarding3 from "./Onboarding3";
// import Sidebar from "../Sidebar/Sidebar";

function Onboarding2() {
  const [showNextPage, setShowNextPage] = useState(false);

  function changePage() {
    setShowNextPage(true);
  }

  return (
    <div className="d-flex">
      <div>
        {/* <Sidebar /> */}
        <div className="container-center-horizontal">
          {!showNextPage && (
            <div className="onboarding-screen">
              <div className="skip">
                <span> Skip</span>
              </div>
              <img className="group-image" src={Group183} alt="busy man" />
              <div className="navi">
                <div className="rectangle-10"> </div>
                <div className="rectangle-100"> </div>
                <div className="rectangle-10"> </div>
              </div>
              <h1 className="screen-title">
                <span> Create daily routine</span>
              </h1>
              <p className="app-text">
                {" "}
                <span>
                  {" "}
                  In Dockit you can create your personalized routine to stay
                  productive
                </span>{" "}
              </p>
              <div className="flex-row">
                <div>
                  <Back />
                </div>
                <div onClick={changePage}>
                  <Next />
                </div>
              </div>

              <div className="navi">
                <div className="rectangle-90"> </div>
              </div>
            </div>
          )}
          {showNextPage && <Onboarding3 />}
        </div>
      </div>
    </div>
  );
}

export default Onboarding2;
