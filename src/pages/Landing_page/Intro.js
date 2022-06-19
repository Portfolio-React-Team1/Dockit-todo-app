import React from "react";
import { useNavigate } from "react-router-dom";
import "./Intro.css";
import Logo from "../../assets/images/dock-it-logo.png";

export default function Intro() {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/Onboarding1");
  };
  return (
    <div className="container-center-horizontal">
      <div className="intro screen">
        <div className="group-173">
          <img className="icon-check-mark" src={Logo} alt="app-logo" />
          <h1 className="app-title">
            <span>Dockit</span>
          </h1>
        </div>
        <div className="flex-row">
          <div className="frame-121">
            <div className="next" onClick={nextPage}>
              <span> Next</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
