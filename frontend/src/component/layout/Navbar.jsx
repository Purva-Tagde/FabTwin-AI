import { FaBell, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="h-16 bg-white shadow-md flex items-center justify-between px-8">

      <h2 className="text-2xl font-semibold">
        FabTwin AI
      </h2>

      <div className="flex items-center gap-6">

        <FaBell className="text-xl cursor-pointer" />

        <div className="flex items-center gap-2">
          <FaUserCircle className="text-3xl text-blue-600" />

          <div>
            <p className="font-semibold">
              {user?.name || "User"}
            </p>

            <p className="text-xs text-gray-500">
              {user?.email || ""}
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;