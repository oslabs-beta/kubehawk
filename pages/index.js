import dynamic from 'next/dynamic';
import Dashboard from "../components/Dashboard";


function DisplayDashboard() {

// Use dynamic imports to load the SunburstChart component only on the client-side
const DnD = dynamic(() => import("../components/DnD"), {
  ssr: false, // Disable server-side rendering for this component
});

  return (
    <>
  <Dashboard />
    </>
  );
}

export default DisplayDashboard;
