import React from "react";
import Navbar from "./Navbar";
import loginImg from "./assets/login_4.png";
import LandingMain from "./LandingMain";
import LandingInfoLeft from "./LandingInfoLeft";
import LandingInfoRight from "./LandingInfoRight";
import LandingTeam from "./LandingTeam";
import splash5 from "./assets/splash5.png";
import splash6 from "./assets/splash6.png";
import splash7 from "./assets/splash7.png";
import TeamInfoModal from "./LandingContactModal";

function Landing() {
  const navItems = ["Contact", "About"].map((item, i) => {
    return <li key={item + i}>{item}</li>;
  });

  const infoItems = [
    {
      header: "Track your Resource Utilization with Kubehawk's Dashboard",
      text: "Gain a competitive edge by closely monitoring your Kubernetes resource usage. Our powerful visualizer offers detailed insights into the consumption of CPU, memory, and storage, enabling you to optimize deployments and maximize the efficiency of your infrastructure.",
    },
    {
      header: "Visualize your Cluster's RBAC Data in a Simplified Way",
      text: "Empower your Kubernetes administrators with our cutting-edge visualizer that provides a comprehensive view of Role-Based Access Control information, ensuring optimal security and streamlined management of your cluster permissions.",
    },
    {
      header: "Seamlessly Integrate Kubehawk for Impact",
      text: "Deploy our open-source metrics visualizer directly within your existing Kubernetes cluster for a rapid setup and instant value. Enhance your organization's monitoring capabilities and gain critical insights without any additional hassle or expense.",
    },
  ];

  return (
    <div className="landing">
      <Navbar id="landing-nav" navItems={navItems} kubeButton={<button>Get KubeHawk</button>} />
      <div id="landing-body">
        <div id="landing-top">
          <LandingMain/>
          <div id="login-image">
            <img src={loginImg} alt="security_login" />
          </div>
        </div>
        <LandingInfoLeft
          header={infoItems[0].header}
          text={infoItems[0].text}
          image={splash5}
        ></LandingInfoLeft>
        <LandingInfoRight
          header={infoItems[1].header}
          text={infoItems[1].text}
          image={splash6}
        ></LandingInfoRight>
        <LandingInfoLeft
          header={infoItems[2].header}
          text={infoItems[2].text}
          image={splash7}
        ></LandingInfoLeft>
        <LandingTeam></LandingTeam>
      </div>
    </div>
  );
}

export default Landing;
