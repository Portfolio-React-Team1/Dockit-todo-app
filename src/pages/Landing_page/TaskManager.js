import "./Onboarding.css";
import Group182 from "../../assets/images/group182.png";

function TaskManager() {
  return (
    <div className="container-center-horizontal">
      <div className="onboarding-1 screen">
        <div className="skip">
          <span> Skip</span>
        </div>
        <img className="group-182" src={Group182} alt="busy man" />
        <div className="navi">
          <div className="rectangle-100"> </div>
          <div className="rectangle-10"> </div>
          <div className="rectangle-10"> </div>
        </div>
        <h1 className="screen-title">
          <span> Manage your tasks</span>
        </h1>
        <p className="easy-mgt">
          {" "}
          <span>
            {" "}
            You can easily manage all your daily tasks on Dockit for free
          </span>{" "}
        </p>
        <div className="screen-end">
          <div className="back">Back</div>
          <div className="next"> Next</div>
        </div>
        <div className="navi">
          <div className="rectangle-90"> </div>
        </div>
      </div>
    </div>
  );
}
export default TaskManager;
