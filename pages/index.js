import React, { useContext, useState } from 'react';
import StateContext from '../context/StateContext';
import Dashboard from '../components/dashboard';

function DisplayDashboard() {
  const [componentState, setComponentState] = useState(StateContext);

  // add initialization for clusters state
  // if (!componentState.clusters) {
  //   setComponentState(prevState => ({
  //     ...prevState,
  //     clusters: []
  //   }));
  // }

  return (
    <StateContext.Provider value={ {componentState, setComponentState } }>
      <Dashboard />
    </StateContext.Provider>
  );
}

export default DisplayDashboard;
