import React from 'react'
import { useNavigate } from "react-router-dom";


function LandCopy() {

    const navigate = useNavigate();

    function dashboardClick() {
      navigate("/login");
    }
  
  return (
    <div className='landing-copy-section'>
        <div className="landing-copy">
            <span id="tagline">
        <h3>Let your Kubernetes soar</h3>
        </span>
        <span id="headline">
        <h1>Try KubeHawk Today</h1>
        </span>

        <ul>
            <li>Monitor users data metrics</li>
            <li>Control who has access to what</li>
            <li>Get the most out of your data</li>
        </ul>
        <button onClick={dashboardClick}>Dashboard</button>
        </div>
    </div>
  )
}

export default LandCopy