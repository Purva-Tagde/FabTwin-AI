import {
  FaHome,
  FaProjectDiagram,
  FaFileAlt,
  FaRobot,
  FaChartBar,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <FaHome />, name: "Dashboard", path: "/" },
    { icon: <FaProjectDiagram />, name: "Projects", path: "/projects" },
    { icon: <FaFileAlt />, name: "Documents", path: "/documents" },
    { icon: <FaRobot />, name: "AI Copilot", path: "/ai" },
    { icon: <FaChartBar />, name: "Analytics", path: "/analytics" },
    { icon: <FaUser />, name: "Profile", path: "/profile" },
    { icon: <FaCog />, name: "Settings", path: "/settings" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="w-64 h-screen bg-slate-900 text-white flex flex-col justify-between">

      <div>

        <div className="p-6 text-2xl font-bold border-b border-slate-700">
          FabTwin AI
        </div>

        <div className="mt-6">

          {menuItems.map((item, index) => (

            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-6 py-4 transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600"
                    : "hover:bg-slate-700"
                }`
              }
            >

              <span className="text-xl">{item.icon}</span>

              <span>{item.name}</span>

            </NavLink>

          ))}

        </div>

      </div>

      <div className="p-6 border-t border-slate-700">

        <button
          onClick={handleLogout}
          className="flex items-center gap-4 hover:text-red-400"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;