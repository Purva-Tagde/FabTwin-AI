import { useEffect, useState } from "react";

function DashboardHeader() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
  }, []);

  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold">
        Welcome{user ? `, ${user.name}` : ""} 👋
      </h1>

      <p className="text-gray-500 mt-1">
        FabTwin AI Dashboard
      </p>
    </div>
  );
}

export default DashboardHeader;