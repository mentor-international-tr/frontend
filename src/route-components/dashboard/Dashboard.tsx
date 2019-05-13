import "./dashboard.scss";
import React, { useState } from "react";
import MainSidebar from "./components/MainSidebar/MainSidebar";
import StarterContent from "./components/StartingContent/StarterContent";
import MainContent from "./components/MainContent/MainContent";

export interface DashboardProps {}

const Dashboard: React.SFC<DashboardProps> = () => {
  const [hasFirstGroup, setHasFirstGroup] = useState(true);
  return (
    <div className="dashboard-container">
      <MainSidebar />
      {hasFirstGroup ? <MainContent /> : <StarterContent />}
    </div>
  );
};

export default Dashboard;
