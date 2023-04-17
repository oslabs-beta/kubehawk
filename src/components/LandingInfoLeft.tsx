import React from "react";


const SplashInfoLeft = (props) => {
    return (
      <div className="splashinfo">
        <div id="splash.info">
          <h1 id="splash.header">
            {props.header}
          </h1>
          <div id="splash.text">
            {props.text}
          </div>
        </div>
        <img src={props.image} className="splashleftimg" alt="A picture" />
      </div>
    )
}

export default SplashInfoLeft;