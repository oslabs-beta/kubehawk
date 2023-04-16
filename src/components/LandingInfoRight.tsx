import React from "react";


const SplashInfoRight = (props) => {
    return (
      <div className="splashinfo">
        <img src={props.image} className="splashleftimg" alt="A picture" />
        <div id="splash.info">
          <h1 id="splash.header">
          {props.header}
          </h1>
          <div id="splash.text">
            {props.text}
          </div>
        </div>
      </div>
    )
}

export default SplashInfoRight;