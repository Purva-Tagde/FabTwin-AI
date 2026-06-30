import Layout from "../component/layout/Layout";

import DashboardHeader from "../component/dashboard/DashboardHeader";
import StatsCards from "../component/dashboard/StatsCards";
import DashboardCharts from "../component/dashboard/DashboardCharts";
import RecentProjects from "../component/dashboard/RecentProjects";
import Notifications from "../component/dashboard/Notifications";
import QuickActions from "../component/dashboard/QuickActions";
import AIAssistant from "../component/dashboard/AIAssistant";

function Dashboard() {
  return (
    <Layout>
      <DashboardHeader />

      <StatsCards />

      <DashboardCharts />

      <RecentProjects />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
        <Notifications />
        <QuickActions />
      </div>

      <AIAssistant />
    </Layout>
  );
}

export default Dashboard;