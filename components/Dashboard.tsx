// Uses NextJS built-in types
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import LeftBar from '../components/LeftBar';
import { useContext, useState } from 'react';
import ClusterNav from './ClusterNav';
import InputCluster from './InputCluster';
import StateContext from '../context/StateContext';
import { StateContextType } from '../context/StateContext';


const Dashboard: NextPage = () => {
  const { componentState, setComponentState} = useContext(StateContext);
  const clusters = componentState.clusters
  const currentTab = componentState.currentTab
  const [selectedNavItem, setSelectedNavItem] = useState('health');
  const handleLeftNavChange = (navItem) => {
    setSelectedNavItem(navItem);
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
        clusterIPs={clusters}
        currentTab={currentTab}
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
