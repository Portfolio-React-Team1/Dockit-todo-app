import React from "react";
import "./StartScreen.scss";
import BackButton from "../../assets/images/back-button.png";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Onboarding3 from "./Onboarding3";

const StartScreen = () => {
    const [goToPrev, setGoToPrev] = React.useState(false);
    const [showLoginPage, setShowLoginPage] = React.useState(false);
    const [showSignUpPage, setShowSignUpPage] = React.useState(false);
  
    function goBack() {
      setGoToPrev(true);
    };
    function changePage() {
      setShowLoginPage(true);
    };
    function newPage() {
      setShowSignUpPage(true);
    };
  return (
  
      <div className="container-center-horizontal">
        {!goToPrev && (
          <div className="start-screen">
            <img
              className="back-button"
              src={BackButton}
              alt="busy man"
              onClick={goBack}
            />
  
            <h1 className="start-screen-title">
              <span> Welcome to Dockit</span>
            </h1>
            <div className="text">
              <span>
              Please login to your account or create a new account to continue
              </span>
            </div>
            
            <div className="frame-121">
              <div className="login" onClick={changePage}>
                <span> LOGIN </span>
              </div>
              {showLoginPage && <Login />}
            </div>
  
            <div className="frame-122">
              <div className="create-account" onClick={newPage}>
                <span> Create account</span>
              </div>
              {showSignUpPage && <Register />}
            </div>
            <div className="rectangle-90"> </div>
          </div>
        )}
  
        {goToPrev && <Onboarding3 />}
      </div>
  )
}

export default StartScreen
