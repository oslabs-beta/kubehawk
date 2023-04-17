import React from "react";
import Navbar from "./Navbar";
import loginImg from "./assets/login_4.png";
import LandCopy from "./LandCopy";
import SplashInfoLeft from "./SplashInfoLeft";
import SplashInfoRight from "./SplashInfoRight";
import SplashTeam from './SplashTeam';
import GetKlusterInfo from "./GetKlusterInfo";
import { Login } from "./Login";

function Landing() {
  const navItems = ["Login", "help"].map((item, i) => {
    return <li key={item + i}>{item}</li>;
  });

  const infoItems = [
    {
      "header": "Save money with Kuberenetes!",
      "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste nemo atque veniam aut! Itaque architecto nihil repudiandae minus perspiciatis, dolores quaerat ullam, recusandae beatae et quasi a optio illum veniam!",
    },
    {
      "header": "Save money with Kuberenetes!",
      "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste nemo atque veniam aut! Itaque architecto nihil repudiandae minus perspiciatis, dolores quaerat ullam, recusandae beatae et quasi a optio illum veniam!",
    },
    {
      "header": "Save money with Kuberenetes!",
      "text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste nemo atque veniam aut! Itaque architecto nihil repudiandae minus perspiciatis, dolores quaerat ullam, recusandae beatae et quasi a optio illum veniam!",
    },

  ]

  return (
    <div className="landing">
      <Navbar navItems={navItems} kubeButton={<button>Get KubeHawk</button>} />
      <div id="landing-body">
        <div id="landing-login">
          <LandCopy />
          <div id="login-image">
            <img src={loginImg} alt="security_login" />
          </div>
        </div>
        <SplashInfoLeft header={infoItems[0].header} text={infoItems[0].text} image={loginImg}></SplashInfoLeft>
        <SplashInfoRight header={infoItems[1].header} text={infoItems[1].text} image={loginImg}></SplashInfoRight>
        <SplashInfoLeft header={infoItems[2].header} text={infoItems[2].text} image={loginImg}></SplashInfoLeft>
        <SplashTeam></SplashTeam>
      </div>
    </div>
  );
}

export default Landing;
