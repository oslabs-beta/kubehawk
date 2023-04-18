import { createContext } from 'react';

type StateContextType = {
  componentState: {
    [key: string]: any;
  };
  setComponentState: (state: { ipAddress: any; clusterName: any }) => void;
};

const StateContext = createContext<StateContextType>({
  componentState: {},
  setComponentState: () => {},
});

export default StateContext;
