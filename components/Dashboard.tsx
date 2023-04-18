// Uses NextJS built-in types
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import Navbar from '../components/Navbar';
import LeftBar from '../components/LeftBar';
import { useState } from 'react';
import ClusterNav from './ClusterTabs';
import InputCluster from './InputCluster';
import addCluster from './addClusterModal'
import ClusterModal from './addClusterModal';
const Dashboard: NextPage = () => {
  const [clusterIPs, setClusterIPs] = useState(['http://34.123.191.58']);
  const [activeTab, setActiveTab] = useState(clusterIPs[0]);

  const [selectedNavItem, setSelectedNavItem] = useState('health');

  const handleLeftNavChange = (navItem) => {
    setSelectedNavItem(navItem);
  };

  const handleTabChange = (clusterIP) => {
    setActiveTab(clusterIP);
  };

  const addTab = (newClusterIP) => {
    setClusterIPs([...clusterIPs, newClusterIP]);
    setActiveTab(newClusterIP);
  };

  const GrafDashboard = dynamic(() => import('../components/GrafDashboard'), {
    ssr: false,
  });

  const DnD = dynamic(() => import('../components/DnD'), {
    ssr: false,
  });

  return (
    <div id="dash-container">

      <ClusterNav
        clusterIPs={clusterIPs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onAddTab={addTab}
      />
      <div id="body-nav">
        <LeftBar onNavItemChange={handleLeftNavChange} />
      </div>
      <div id="dash-body">
        {selectedNavItem === 'health' && <GrafDashboard />}
        {selectedNavItem === 'RBAC' && <DnD />}
        {selectedNavItem === 'settings' && <InputCluster />}
      </div>
    </div>
  );
};

export default Dashboard;
