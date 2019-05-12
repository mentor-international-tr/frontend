import "./dashboard.scss";
import React from "react";
import MainSidebar from "./components/MainSidebar/MainSidebar";

export interface DashboardProps {}

const Dashboard: React.SFC<DashboardProps> = () => {
  return (
    <div>
      <MainSidebar />
    </div>
  );
};

export default Dashboard;
