import React from 'react';

function InfoPanel(props) {

  //array of urls for info we want with prop drilling included
  // const infoUrls = {
  //   example: `http://${props.clusterUrl}/d-solo/4XuMd2Iiz22/${props.clusterName}?orgId=1&from=1680552901992&to=1680554701992&panelId=16`
  // }

  return (
    <iframe 
      src="http://35.232.26.177/d-solo/efa86fd1d0c121a26444b636a3f509a8/kubernetes-compute-resources-cluster?orgId=1&refresh=10s&from=1680561128280&to=1680564728280&panelId=2" 
      width="450" 
      height="200"
    />
  );
}

export default InfoPanel;