import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Landing.css";
import Intro from "./Intro";
import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";
import Onboarding3 from "./Onboarding3";
import Start from "./StartScreen";

export default function Landing() {
  return (
    <div className="landing">
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/Onboarding1" element={<Onboarding1 />} />
          <Route path="/Onboarding2" element={<Onboarding2 />} />
          <Route path="/Onboarding3" element={<Onboarding3 />} />
          <Route path="/StartScreen" element={<Start />} />
        </Routes>
      </Router>
    </div>
  );
}
