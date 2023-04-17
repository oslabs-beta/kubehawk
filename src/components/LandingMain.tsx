import React from "react";
import { useNavigate } from "react-router-dom";
import SplashInfoLeft from "./LandingInfoLeft";

function LandCopy() {
  const navigate = useNavigate();

  function dashboardClick() {
    navigate("/login");
  }

  return (
    <div className="landing-call">
      <div className="landing-copy">
        <span id="landingmain-header">
          <h1>Try KubeHawk Today</h1>
        </span>
        <ul>
          <li className="landing-listelement">Visualize your Kubernetes cluster metrics with our many features</li>
          <li className="landing-listelement">Meaningfully view cluster resource utilization and RBAC information</li>
          <li className="landing-listelement">KubeHawk is entirely open-source, try it for free now</li>
        </ul>
        <button onClick={dashboardClick}>Download</button>
      </div>
    </div>
  );
}

export default LandCopy;
