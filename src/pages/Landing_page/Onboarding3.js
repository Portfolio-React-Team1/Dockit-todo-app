import React from "react";
import "./Onboarding.scss";
import Frame161 from "../../assets/images/frame-161-1.png";
import Back from "./Links/Back";
import Next from "./Links/Next";
// changes by ruby
import StartScreen from './StartScreen'
import { useState } from 'react'
// import Sidebar from "../Sidebar/Sidebar";

const Onboarding3 = () => {
  const [showNextPage, setShowNextPage] = useState(false);

  function changePage() {
    setShowNextPage(true);
  }

  return (
    <div className="d-flex">
      <div>
        {/* <Sidebar /> */}
      </div>

      <div className="container-center-horizontal">
      {!showNextPage && (
        <div className="onboarding-screen">
          <div className="skip">
            <span> Skip</span>
          </div>
          <img className="group-image" src={Frame161} alt="busy man" />
          <div className="navi">
            <div className="rectangle-10"> </div>
            <div className="rectangle-10"> </div>
            <div className="rectangle-100"> </div>
          </div>
          <h1 className="screen-title">
            <span> Organize your tasks</span>
          </h1>
          <p className="app-text">
            {" "}
            <span>
              {" "}
              You can organize your daily tasks by adding your tasks into separate
              categories
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
      </div>
      )}
      {showNextPage && <StartScreen />}
    </div>
  </div>
  );
}

export default Onboarding3
