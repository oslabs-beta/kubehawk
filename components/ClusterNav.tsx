import ClusterModal from "./addClusterModal";

interface ClusterNavProps {
  clusterIPs?: Array<{ ipAddress: string; clusterName: string }>;
  currentTab?: { ipAddress: string; clusterName: string };
  onTabChange: (tab: { ipAddress: string; clusterName: string }) => void;
  setClusters: (newClusterIPs: Array<{ ipAddress: string; clusterName: string }>) => void;
}



const ClusterNav: React.FC<ClusterNavProps> = ({
  clusterIPs,
  currentTab,
  onTabChange,
  setClusters,
}) => {
  return (
    <nav className="ip-navbar">
      <ul>
        {clusterIPs && clusterIPs.length > 0 ? (
          clusterIPs.map(({ ipAddress, clusterName }) => (
            <li
              key={ipAddress}
              className={ipAddress === clusterIPs.ipAddress ? "active" : ""}
              // onClick={() => onTabChange(clusterIPs)}
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
