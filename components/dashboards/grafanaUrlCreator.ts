interface GrafanaUrls {
  [key: string]: {
    id: string;
    name: string;
    title: string;
    size: number;
    urls: string[];
  };
}


export function createFrames(id:string, name: string, size: number): string[] {
    const frames: string[] = [];
    //Updates iFrame time to the most recent 1 hour interval
    const currentTime:number = Date.now();
    const fromTime:number = currentTime - 3600000;
    //Create new Grafana Urls depending on which object is chosen
    for (let i = 2; i <= size; i++) {
      const url = `/d-solo/${id}/${name}?orgId=1&refresh=30s&from=${fromTime}&to=${currentTime}&panelId=${i}`;
      frames.push(url);
    }
  
    return frames
}
  
export const grafanaUrls = {
    AlertManager: {
      id: 'alertmanager-overview',
      name: 'alertmanager-overview',
      size: 15,
      urls: createFrames('alertmanager-overview' ,'alertmanager-overview', 15),
    },
    ClusterResources: {
      id: 'efa86fd1d0c121a26444b636a3f509a8',
      name: 'kubernetes-compute-resources-cluster',
      size: 21,
      urls: createFrames('efa86fd1d0c121a26444b636a3f509a8', 'kubernetes-compute-resources-cluster', 21)
    },
    ClusterNetwork: {
      id: 'ff635a025bcfea7bc3dd4f508990a3e9',
      name: 'kubernetes-networking-cluster',
      size: 11,
      urls: createFrames('ff635a025bcfea7bc3dd4f508990a3e9', 'kubernetes-networking-cluster', 11)
    },
    NodeExporter: {
      id: 'l-fKjmPVk',
      name: 'node-exporter-nodes',
      size: 9,
      urls: createFrames('l-fKjmPVk','node-exporter-nodes', 9),
    },
    Kubelet: {
        id: '3138fa155d5915769fbded898ac09fd9',
        name: 'kubernetes-kubelet',
        size: 25,
        urls: createFrames('3138fa155d5915769fbded898ac09fd9', 'kubernetes-kubelet', 25 )
    }
    
    // add more dashboards here
  };