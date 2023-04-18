import React from 'react';
import ClusterModal from './addClusterModal';
interface ClusterNavProps {
  clusterIPs: string[];
  activeTab: string;
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
        {clusterIPs.map((ipAddress) => (
          <li
            key={ipAddress}
            className={ipAddress === activeTab ? 'active' : ''}
            onClick={() => onTabChange(ipAddress)}
          >
            {ipAddress}
          </li>
        ))}
       {/* <ClusterModal onClick={() => onAddTab("newClusterIP")} /> */}
      </ul>
    </nav>
  );
};

export default ClusterNav;
