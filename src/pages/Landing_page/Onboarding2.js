import "./Onboarding.scss";
import Group183 from "../../assets/images/group183.png";
import Back from "./Links/Back";
import Next from "./Links/Next";

function Onboarding2() {
  return (
    <div className="container-center-horizontal">
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
          <Back />
          <Next />
        </div>

        <div className="navi">
          <div className="rectangle-90"> </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding2;
