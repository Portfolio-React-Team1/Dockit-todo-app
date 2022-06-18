import "./Intro.css";
import Logo from "../../assets/images/dock-it-logo.png";
export default function Intro() {
  return (
    <div className="container-center-horizontal">
      <div className="intro screen">
        <div className="group-173">
          <img className="icon-check-mark" src={Logo} alt="app-logo" />
          <h1 className="app-title">
            <span>Dockit</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
