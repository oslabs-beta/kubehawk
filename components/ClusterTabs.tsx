import ClusterModal from "./addClusterModal";

interface ClusterNavProps {
  clusterIPs: Array<{ ipAddress: string; clusterName: string }>;
  activeTab: {};
  onTabChange: (clusterIP: string) => void;
  onAddTab: (newClusterIP: string) => void;
}

const ClusterNav: React.FC<ClusterNavProps> = ({
  clusterIPs,
  activeTab,
  onTabChange,
  onAddTab,
}) => {
  return (
    <nav className="ip-navbar">
      <ul>
        {clusterIPs && clusterIPs.length > 0 ? (
          clusterIPs.map(({ ipAddress, clusterName }) => (
            <li
              key={ipAddress}
              className={ipAddress === activeTab ? "active" : ""}
              onClick={() => onTabChange(ipAddress)}
            >
              {clusterName}
            </li>
          ))
        ) : (
          <></>
        )}
        <ClusterModal />
      </ul>
    </nav>
  );
};

export default ClusterNav;
