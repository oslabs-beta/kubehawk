import { createContext } from 'react';

export type StateContextType = {
  componentState: {
    clusters: [];
    currentTab: { ipAddress: string; clusterName: string; };
  };
  setComponentState: (state: StateContextType['componentState']) => void;
};

export const StateContext = createContext<StateContextType>(
  {
    componentState: {
      clusters: [],
      currentTab: { ipAddress: '', clusterName: '' },
    },
    setComponentState: () => {}
  }
);
