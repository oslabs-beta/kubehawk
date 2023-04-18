import React, { useState } from 'react';
import StateContext from '../context/AppStateProvider';
import Dashboard from '../components/dashboard';

function DisplayDashboard() {
  const [componentState, setComponentState] = useState({})

  return (
    <>
    <StateContext.Provider value={{ componentState, setComponentState }}>
    <Dashboard />
    </StateContext.Provider>
    </>
  );
}

export default DisplayDashboard;
