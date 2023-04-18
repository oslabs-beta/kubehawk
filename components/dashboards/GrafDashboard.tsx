import React, { useState, useEffect } from 'react';
import 'react-dropdown/style.css';
import { grafanaUrls } from './grafanaUrlCreator';
import {dashTitles} from "../../context/StateContext"


interface GrafDashboardProps {
  title: dashTitles;
}
export const GrafDashboard: React.FC<GrafDashboardProps> = ({ title }) => {
  const [selectedDashboard, setSelectedDashboard] = useState<any>(null);
  const ipAddress: any = 'http://34.123.191.58';


  useEffect(() => {
    setSelectedDashboard(grafanaUrls[title]);
  }, [title]);

  return (
    <div>
      {selectedDashboard && (
        <div>
          {selectedDashboard.urls.map((url: string) => (
            <iframe key={url} src={`${ipAddress}${url}`} width="450" height="200"></iframe>
          ))}
        </div>
      )}
    </div>
  );
};
