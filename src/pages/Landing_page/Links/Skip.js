import React from "react";
import StartScreen from "../StartScreen";

import "./Links.scss";

function Skip() {
  const [showStartScreen, setShowStartScreen] = React.useState(false);

  function changePage() {
    setShowStartScreen(true);
  }

  return (
    <>
      {!showStartScreen && (
        <div className="skip" onClick={changePage}>
          <span> Skip</span>
        </div>
      )}

      {showStartScreen && <StartScreen />}
    </>
  );
}

export default Skip;
