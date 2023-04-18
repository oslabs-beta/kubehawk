import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { grafanaUrls } from './grafanaUrlCreator';


function GrafDashboard() {
  const [selectedDashboard, setSelectedDashboard] = useState<any>(null);
  // const { ipAddress, clusterName } = router.query;
  const ipAddress: any = 'http://34.123.191.58'
  function handleDashboardChange(option) {
    const dashboard = grafanaUrls[option.value];
    setSelectedDashboard(dashboard);
  }

  return (
        <div>
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
                <iframe key={url} src={ipAddress + url} width="450" height="200"></iframe>
              ))}
            </div>
          )}
        </div>
  );
}

export default GrafDashboard;