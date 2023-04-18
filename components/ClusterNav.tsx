import ClusterModal from "./addClusterModal";
import { useContext } from "react";
import StateContext from "../context/StateContext";
interface ClusterNavProps {
  clusterIPs?: Array<{ ipAddress: string; clusterName: string }>;
  currentTab?: { ipAddress: string; clusterName: string };
}
interface AppState {
    clusters: { ipAddress: string; clusterName: string; }[];
    currentTab: { ipAddress: string; clusterName: string; };
  }



const ClusterNav: React.FC<ClusterNavProps> = ({
  clusterIPs,
  currentTab,
}) => {
  const {componentState, setComponentState} = useContext(StateContext)
  const currentIp = componentState.currentTab.ipAddress
  const setCurrentTab = ({ipAddress, clusterName}) => {
    setComponentState((prevState: AppState) => {
      console.log(prevState.currentTab);
      return {
        ...prevState,
        currentTab: { ipAddress, 
          clusterName
        }
      };
    });
  };
  return (
    <nav className="ip-navbar">
      <ul>
        {clusterIPs && clusterIPs.length > 0 ? (
          clusterIPs.map(({ ipAddress, clusterName }) => (
            <li
              key={ipAddress}
              className={ipAddress === currentIp ? "active" : ""}
              onClick={() => setCurrentTab?.({ ipAddress, clusterName })}
            >
              {clusterName}
            </li>
          ))
        ) : (
          <></>
        )}
        <ClusterModal/>
      </ul>
    </nav>
  );
};

export default ClusterNav;
