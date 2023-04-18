import { createContext } from 'react';


export type dashTitles = 'AlertManager' | 'ClusterResources' | 'ClusterNetwork' | 'NodeExporter' | 'Kubelet';


export type StateContextType = {
  componentState: {
    clusters: [];
    currentTab: { ipAddress: string; clusterName: string; };
    currentTitle?: dashTitles
  };
  setComponentState: (state: StateContextType['componentState']) => void;
};

export const StateContext = createContext<StateContextType>(
  {
    componentState: {
      clusters: [],
      currentTab: { ipAddress: '', clusterName: '' },
      currentTitle: undefined,
    },
    setComponentState: () => {}
  }
);
