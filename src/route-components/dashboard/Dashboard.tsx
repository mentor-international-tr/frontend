import "./dashboard.scss";
import React, { useState } from "react";
import MainSidebar from "./components/MainSidebar/MainSidebar";
import StarterContent from "./components/StartingContent/StarterContent";

export interface DashboardProps {}

const Dashboard: React.SFC<DashboardProps> = () => {
  const [groupExists, setGroupExists] = useState(false);
  return (
    <div className="dashboard-container">
      <MainSidebar />
      <StarterContent />
    </div>
  );
};

export default Dashboard;
