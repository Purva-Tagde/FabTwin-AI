import Layout from "../component/layout/Layout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", projects: 5 },
  { month: "Feb", projects: 8 },
  { month: "Mar", projects: 12 },
  { month: "Apr", projects: 10 },
  { month: "May", projects: 16 },
  { month: "Jun", projects: 20 },
];

function Analytics() {
  return (
    <Layout>
      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          Analytics Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-5 mb-6">

          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="text-gray-500">Projects</h2>
            <p className="text-3xl font-bold">18</p>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="text-gray-500">Documents</h2>
            <p className="text-3xl font-bold">220</p>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="text-gray-500">AI Requests</h2>
            <p className="text-3xl font-bold">1450</p>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h2 className="text-gray-500">Accuracy</h2>
            <p className="text-3xl font-bold">98%</p>
          </div>

        </div>

        <div className="bg-white rounded-xl shadow p-5">

          <h2 className="text-xl font-semibold mb-4">
            Monthly Progress
          </h2>

          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="projects"
                stroke="#2563eb"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>

        </div>

      </div>
    </Layout>
  );
}

export default Analytics;