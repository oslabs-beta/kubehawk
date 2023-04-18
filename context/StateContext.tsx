import { State } from '@mui/system/cssVars/useCurrentColorScheme';
import { createContext } from 'react';

export type StateContextType = {
  componentState: {
    clusters: Array<{ipAddress:string, clusterName:string}>;
    currentTab?: { ipAddress?: string, clusterName?: string };
    [key: string]: any;
  };
  setComponentState?: (state: StateContextType['componentState']) => void;
  currentTab?: [StateContextType['componentState']['currentTab'], (tab: StateContextType['componentState']['currentTab']) => void];
};

const StateContext = createContext<StateContextType>(
  {componentState: {
   clusters:[],
    currentTab: { clusterName:'new', ipAddress:'0.0.0.0'}}
  }
);
export default StateContext;

