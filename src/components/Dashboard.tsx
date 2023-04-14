import React, { useState } from 'react';
import Navbar from './Navbar';
import LeftBar from './LeftBar';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useLocation } from 'react-router-dom';
import { grafanaUrls, createFrames} from './grafanaUrlCreator.ts' // assuming the file extension is .ts

function Dashboard() {
  const [selectedDashboard, setSelectedDashboard] = useState(null);
  const location = useLocation();
  const {ipAddress, clusterName} = location.state;
  console.log(ipAddress)
  function handleDashboardChange(option) {
    const dashboard = grafanaUrls[option.value];
    setSelectedDashboard(dashboard);
  }

  return (
    <div id="dash-container">
      <Navbar />
      <div id="body-nav">
        <LeftBar />
        <div id="dash-body">
          <div>
            <Dropdown 
              options={Object.keys(grafanaUrls).map(key => ({ value: key, label: key }))} 
              onChange={handleDashboardChange}
              placeholder="Select a dashboard"
            />
          </div>
          {selectedDashboard && (
            <div>
              {selectedDashboard.urls.map(url => (
                // <iframe key={`${ipAddress} + ${url}`} src={`${ipAddress} + ${url}`} width="100%" height="600" />
                <iframe key={url} src={ipAddress + url} width="450" height="200" frameborder="0"></iframe>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
