import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaProjectDiagram,
  FaFileAlt,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

function StatsCards() {
  const [stats, setStats] = useState({
    projects: 0,
    documents: 0,
    users: 0,
    accuracy: "98%",
  });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/dashboard")
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const cards = [
    {
      title: "Projects",
      value: stats.projects,
      icon: <FaProjectDiagram size={28} />,
      color: "bg-blue-500",
    },
    {
      title: "Documents",
      value: stats.documents,
      icon: <FaFileAlt size={28} />,
      color: "bg-green-500",
    },
    {
      title: "Users",
      value: stats.users,
      icon: <FaRobot size={28} />,
      color: "bg-purple-500",
    },
    {
      title: "Accuracy",
      value: stats.accuracy,
      icon: <FaChartLine size={28} />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-6 flex justify-between items-center"
        >
          <div>
            <p className="text-gray-500">{card.title}</p>
            <h2 className="text-3xl font-bold mt-2">{card.value}</h2>
          </div>

          <div className={`${card.color} text-white p-4 rounded-full`}>
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;