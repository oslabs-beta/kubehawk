import type {NextPage} from 'next';
import {Content} from '../components/home/content';
import { StateContext } from '../context/StateContext';
import React, { useState } from 'react';
import { StateContextType } from '../context/StateContext';
const Home: NextPage = () => {
   const [componentState, setComponentState] = useState<StateContextType['componentState']>(
     {
       clusters: [],
       currentTab: { ipAddress: '', clusterName: '' },
     }
   );
   return (
     <StateContext.Provider value={{ componentState, setComponentState }}>
       <Content />
     </StateContext.Provider>
   );
 };
export default Home;

