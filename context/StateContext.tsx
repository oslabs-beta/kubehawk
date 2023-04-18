import { State } from '@mui/system/cssVars/useCurrentColorScheme';
import { createContext } from 'react';

export type StateContextType = {
  componentState: {
    clusters: { ipAddress: string; clusterName: string; }[];
    currentTab: { ipAddress: string; clusterName: string; };
  };
  setComponentState: (state: StateContextType['componentState']) => void;
  currentTab?: [StateContextType['componentState']['currentTab'], (tab: StateContextType['componentState']['currentTab']) => void];
};

const StateContext = createContext<StateContextType>(
  {
    componentState: {
      clusters: [],
      currentTab: { clusterName: '', ipAddress: '' }
    },
    setComponentState: () => {}
  }
);

export default StateContext;

