import "./dashboard.scss";
import DashSidebar from "./components/DashSidebar/DashSidebar";
import StarterContent from "./components/StartingContent/StarterContent";
import MainContent from "./components/MainContent/MainContent";

export interface DashboardProps {}

const Dashboard: React.SFC<DashboardProps> = () => {
  const [hasFirstGroup, setHasFirstGroup] = useState(true);
  return (
    <div className="dashboard-container">
      <DashSidebar />
      {hasFirstGroup ? <MainContent /> : <StarterContent />}
    </div>
  );
};

export default Dashboard;
