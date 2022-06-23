import React from "react";
import "./Onboarding.scss";
import Frame161 from "../../assets/images/frame-161-1.png";
import StartScreen from "./StartScreen";
function Onboarding3() {
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
              You can organize your daily tasks by adding your tasks into
              separate categories
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
      {showNextPage && <StartScreen />}
    </div>
  );
}

export default Onboarding3;
