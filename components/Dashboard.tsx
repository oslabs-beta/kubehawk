// Uses NextJS built-in types
import { NextPage } from 'next';
import dynamic, { DynamicOptions } from 'next/dynamic';

import Navbar from '../components/Navbar';
import LeftBar from '../components/LeftBar';
import { useState } from 'react';
import DnD from './DnD';

const Dashboard: NextPage = () => {

  const [selectedNavItem, setSelectedNavItem] = useState('health')

  const handleLeftNavChange = (navItem) => {
    setSelectedNavItem(navItem)
  }
  const GrafDashboard = dynamic(() => import('../components/GrafDashboard'), {
    ssr: false,
  });

  const DnD = dynamic(() => import('../components/DnD'), {
    ssr: false,
  });


  return (
    <div id="dash-container">
      <Navbar />
      <div id="body-nav">
        <LeftBar onNavItemChange={ handleLeftNavChange}/>
      </div>
      <div id="dash-body">
      {selectedNavItem === 'health' && <GrafDashboard /> }
      {selectedNavItem === 'RBAC' && <DnD /> }

    </div>
    </div>

  );
};

export default Dashboard;
