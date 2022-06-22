import React from "react";
import "./Intro.scss";
import Logo from "../../assets/images/dock-it-logo.png";
import Onboarding1 from "./Onboarding1";

export default function Intro() {
  const [showNextPage, setShowNextPage] = React.useState(false);
  function changePage() {
    setShowNextPage(!showNextPage);
  }
  return (
    <div className="container-center-horizontal">
      {!showNextPage && (
        <div className="intro screen " onClick={changePage}>
          <div className="group-173">
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
