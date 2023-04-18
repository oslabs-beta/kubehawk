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
interface DashboardProps {
  clusters?: Array<{}>;
  currentTab: {};
}

const Dashboard: NextPage<DashboardProps> = (props) => {
  const [componentState, setComponentState] = useState({})
  const [activeTab, setActiveTab] = useState(props.currentTab);

  const [selectedNavItem, setSelectedNavItem] = useState('health');

  const handleLeftNavChange = (navItem) => {
    setSelectedNavItem(navItem);
  };

  const handleTabChange = (clusterIP) => {
    setActiveTab(clusterIP);
  };



  const GrafDashboard = dynamic(() => import('../components/GrafDashboard'), {
    ssr: false,
  });

  const DnD = dynamic(() => import('../components/DnD'), {
    ssr: false,
  });

  return (
    <div id="dash-container">
      <Navbar />
      <ClusterNav
        clusterIPs  = {props.clusters}
        activeTab={activeTab}
        onTabChange={handleTabChange}
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
