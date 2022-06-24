import React from "react";
import "./Onboarding.scss";
import Group182 from "../../assets/images/group182.png";
import Onboarding2 from "./Onboarding2";

export default function Onboarding1() {
  const [showNextPage, setShowNextPage] = React.useState(false);
  /*React.useEffect(() => {
    setInterval(() => {
      setShowNextPage(true);
    }, 7000);
  }, []);*/
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
          <img className="group-image" src={Group182} alt="busy man" />
          <div className="navi">
            <div className="rectangle-100"> </div>
            <div className="rectangle-10"> </div>
            <div className="rectangle-10"> </div>
          </div>
          <h1 className="screen-title">
            <span> Manage your tasks</span>
          </h1>
          <p className="app-text">
            {" "}
            <span>
              {" "}
              You can easily manage all your daily tasks on Dockit for free
            </span>{" "}
          </p>
          <div className="flex-row">
            <div className="screen-end-links">
              {" "}
              <span className="back">Back</span>{" "}
            </div>
            <div className="frame-121">
              <div className="next" onClick={changePage}>
                <span> Next</span>{" "}
              </div>
            </div>
          </div>
          <div className="navi">
            <div className="rectangle-90"> </div>
          </div>
        </div>
      )}
      {showNextPage && <Onboarding2 />}
    </div>
  );
}
