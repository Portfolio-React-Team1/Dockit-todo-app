import "./Onboarding.scss";
import Group182 from "../../assets/images/group182.png";
import Back from "./Links/Back";
import Next from "./Links/Next";

function Onboarding1() {
  return (
    <div className="container-center-horizontal">
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
export default Onboarding1;
