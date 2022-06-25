import React from "react";
import "./Intro.scss";
import Logo from "../../assets/images/dock-it-logo.png";
import Onboarding1 from "./Onboarding1";
import { useState } from "react";

export default function Intro() {
  const [showNextPage, setShowNextPage] = useState(false);

  function changePage() {
    setShowNextPage(true);
  }

  return (
    <div className="container-center-horizontal">
      {!showNextPage && (
        <div className="intro screen ">
          <div className="group-173" onClick={changePage}>
            <img className="icon-check-mark" src={Logo} alt="app-logo" />
            <h1 className="app-title">
              <span>Dockit</span>
            </h1>
          </div>
        </div>
      )}

      {showNextPage && <Onboarding1 />}
    </div>
  );
}
