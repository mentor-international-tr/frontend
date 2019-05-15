import "./dashboard.scss";
import React, { useState, useEffect } from "react";
import DashSidebar from "./components/DashSidebar/DashSidebar";
import StarterContent from "./components/StartingContent/StarterContent";
import MainContent from "./components/MainContent/MainContent";

export interface DashboardProps {}

const Dashboard: React.SFC<DashboardProps> = () => {
  const [hasFirstGroup, setHasFirstGroup] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    setHasFirstGroup(true);
  }, []);
  return (
    <div className="dashboard-container">
      <DashSidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      {hasFirstGroup ? (
        <MainContent setIsSidebarOpen={setIsSidebarOpen} />
      ) : (
        <StarterContent />
      )}
    </div>
  );
};

export default Dashboard;
