import React from "react";
import logo from "./assets/hawk-logo.png";
import NavbarProps from "../types.ts";
import LandingContactModal from "./LandingContactModal";
import LandingAboutUsModal from "./LandingAboutUsModal";

function Navbar(props: NavbarProps) {
  const kubeButton = props.kubeButton || "";

  return (
    <div className="navbar">
      <div className="logo">
        <img id="logo" src={logo} alt="logo" />
        <p>KubeHawk</p>
      </div>
      <div id="left-nav">
        {kubeButton}
        <LandingContactModal></LandingContactModal>
        <LandingAboutUsModal></LandingAboutUsModal>
      </div>
    </div>
  );
}

export default Navbar;
