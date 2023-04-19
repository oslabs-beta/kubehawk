import React, { useState, useEffect } from 'react';
import 'react-dropdown/style.css';
import { grafanaUrls } from './grafanaUrlCreator';
import {dashTitles} from "../../context/StateContext"
import { StateContext } from '../../context/StateContext';
import { useContext } from 'react';
interface GrafDashboardProps {
  title: dashTitles;
}
export const GrafDashboard: React.FC<GrafDashboardProps> = ({ title }) => {
  const [selectedDashboard, setSelectedDashboard] = useState<any>(null);
  const { componentState, setComponentState } = useContext(StateContext)
  const IPaddress:string = componentState.currentTab.IPaddress


  useEffect(() => {
    setSelectedDashboard(grafanaUrls[title]);
  }, [title]);

  return (
    <div>
      {selectedDashboard && (
        <div>
          {selectedDashboard.urls.map((url: string) => (
            <iframe key={url} src={`http://` + `${IPaddress}${url}`} width="450" height="200"></iframe>
          ))}
        </div>
      )}
    </div>
  );
};
