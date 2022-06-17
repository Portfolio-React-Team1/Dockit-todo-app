import React from "react";
import "./StartScreen.css";
import BackButton from "../../assets/images/back-button.png";

function StartScreen() {
  return (
    <div className="container-center-horizontal">
      <div className="start-screen">
        <img className="back-button" src={BackButton} alt="busy man" />
        <h1 className="start-screen-title">
          <span> Welcome to Dockit</span>
        </h1>
        <p className="app-text">
          {" "}
          <span>
            {" "}
            Please login to your account or create a new account to continue
          </span>{" "}
        </p>

        <div className="frame-121">
          <div className="login">
            <span> LOGIN </span>
          </div>
        </div>

        <div className="frame-122">
          <div className="create-account">
            <span> Create account</span>
          </div>
        </div>
        <div className="rectangle-90"> </div>
      </div>
    </div>
  );
}

export default StartScreen;
