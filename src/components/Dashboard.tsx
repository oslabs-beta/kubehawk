import React from 'react';
import ViewSelector from './ViewSelector';
import Navbar from './Navbar';
import Roleview from './Roleview';
import LeftBar from './LeftBar';

function Dashboard() {
  return (
    <div id="dash-container">
      <Navbar />
      <div id="dash-body">
        <LeftBar />
        <div>
          <div className="row">
            <div className="column">
              <iframe src="http://35.232.26.177/d-solo/09ec8aa1e996d6ffcd6817bbaff4db1b/kubernetes-api-server?orgId=1&refresh=10s&from=1680724598500&to=1680728198500&theme=light&panelId=3" width="225" height="100" frameBorder="0"></iframe>
              <iframe src="http://35.232.26.177/d-solo/09ec8aa1e996d6ffcd6817bbaff4db1b/kubernetes-api-server?orgId=1&refresh=10s&from=1680725303587&to=1680728903587&theme=light&panelId=9" width="225" height="100" frameBorder="0"></iframe>
            </div>
            <div className="column">
              <iframe src="http://35.232.26.177/d-solo/a164a7f0339f99e89cea5cb47e9be617/kubernetes-compute-resources-workload?orgId=1&refresh=10s&from=1680724408616&to=1680728008616&theme=light&panelId=10" width="450" height="200" frameBorder="0"></iframe>
            </div>
            <div className="column">
              <iframe src="http://35.232.26.177/d-solo/a164a7f0339f99e89cea5cb47e9be617/kubernetes-compute-resources-workload?orgId=1&refresh=10s&from=1680724432932&to=1680728032932&theme=light&panelId=11" width="450" height="200" frameBorder="0"></iframe>
            </div>
          </div>
          <div className="row">
            <iframe src="http://35.232.26.177/d-solo/a164a7f0339f99e89cea5cb47e9be617/kubernetes-compute-resources-workload?orgId=1&refresh=10s&from=1680724321046&to=1680727921046&theme=light&panelId=1" width="450" height="200" frameBorder="0"></iframe>
          </div>
          <div className="row">
            <iframe src="http://35.232.26.177/d-solo/ff635a025bcfea7bc3dd4f508990a3e9/kubernetes-networking-cluster?orgId=1&refresh=10s&from=1680724478431&to=1680728078431&theme=light&panelId=3" width="450" height="200" frameBorder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
