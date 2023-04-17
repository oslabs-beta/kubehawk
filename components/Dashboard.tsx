// Uses NextJS built-in types
import { NextPage } from 'next';
import dynamic, { DynamicOptions } from 'next/dynamic';

import Navbar from '../components/Navbar';
import LeftBar from '../components/LeftBar';

const Dashboard: NextPage = () => {

  const GrafDashboard = dynamic(() => import('../components/GrafDashboard'), {
    ssr: false,
  });

  return (
    <div id="dash-container">
      <Navbar />
      <div id="body-nav">
        <LeftBar />
      </div>
      <div id="dash-body">
      <GrafDashboard />
    </div>
    </div>

  );
};

export default Dashboard;
