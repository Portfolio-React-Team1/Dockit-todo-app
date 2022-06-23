import React from "react";
import "./Onboarding.scss";
import Group183 from "../../assets/images/group183.png";
import Onboarding3 from "./Onboarding3";

function Onboarding2() {
  const [showNextPage, setShowNextPage] = React.useState(false);
  React.useEffect(() => {
    setInterval(() => {
      setShowNextPage(true);
    }, 7000);
  }, []);
  function changePage() {
    setShowNextPage(true);
  }
  return (
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
            <div className="screen-end-links">
              {" "}
              <span className="back">Back</span>{" "}
            </div>
            <div className="frame-121">
              <div className="next" onClick={changePage}>
                <span> Next</span>
              </div>
            </div>
          </div>

          <div className="navi">
            <div className="rectangle-90"> </div>
          </div>
        </div>
      )}
      {showNextPage && <Onboarding3 />}
    </div>
  );
}

export default Onboarding2;
