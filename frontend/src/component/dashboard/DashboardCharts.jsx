import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function DashboardCharts() {
  const data = [
    { month: "Jan", projects: 4 },
    { month: "Feb", projects: 7 },
    { month: "Mar", projects: 10 },
    { month: "Apr", projects: 8 },
    { month: "May", projects: 15 },
    { month: "Jun", projects: 18 },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold mb-4">
        Project Analytics
      </h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
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
  );
}

export default DashboardCharts;