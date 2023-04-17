import React from 'react';

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
       <li className="add-ip" onClick={() => onAddTab("newClusterIP")}>
          +
        </li>
      </ul>
    </nav>
  );
};

export default ClusterNav;
