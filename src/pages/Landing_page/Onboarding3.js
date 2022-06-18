import "./Onboarding.css";
import Frame161 from "../../assets/images/frame-161-1.png";

function Onboarding3() {
  return (
    <div className="container-center-horizontal">
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
          <div className="screen-end-links">
            <span className="back">Back</span>
          </div>
          <div className="frame-121">
            <div className="get-started">
              <span> Get Started </span>
            </div>
          </div>
        </div>
        <div className="navi">
          <div className="rectangle-90"> </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding3;
