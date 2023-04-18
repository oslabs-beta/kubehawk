import React, { useState } from 'react';
import StateContext from '../context/StateContext';
import Dashboard from '../components/dashboard';

function DisplayDashboard() {
  const [componentState, setComponentState] = useState({
    clusters: [],
    currentTab: {},
  })

  return (
    <>
    <StateContext.Provider value={{ componentState, setComponentState }}>
    <Dashboard componentState={componentState} />
    </StateContext.Provider>
    </>
  );
}

export default DisplayDashboard;
