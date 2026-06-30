import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../component/layout/Layout";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [stats, setStats] = useState({
    projects: 0,
    documents: 0,
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

  return (
    <Layout>
      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          My Profile
        </h1>

        <div className="bg-white shadow rounded-xl p-8 max-w-4xl">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="font-semibold">Full Name</label>
              <input
                className="w-full border rounded-lg p-3 mt-2"
                value={user?.name || ""}
                readOnly
              />
            </div>

            <div>
              <label className="font-semibold">Email</label>
              <input
                className="w-full border rounded-lg p-3 mt-2"
                value={user?.email || ""}
                readOnly
              />
            </div>

            <div>
              <label className="font-semibold">Role</label>
              <input
                className="w-full border rounded-lg p-3 mt-2"
                value="AI Engineer"
                readOnly
              />
            </div>

            <div>
              <label className="font-semibold">Department</label>
              <input
                className="w-full border rounded-lg p-3 mt-2"
                value="Manufacturing"
                readOnly
              />
            </div>

          </div>

          {/* Statistics Section */}

          <div className="mt-10">

            <h2 className="text-2xl font-semibold mb-5">
              Activity Summary
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              <div className="bg-blue-100 rounded-lg p-5">
                <h3 className="text-lg font-semibold">
                  Projects
                </h3>

                <p className="text-3xl font-bold mt-2">
                  {stats.projects}
                </p>
              </div>

              <div className="bg-green-100 rounded-lg p-5">
                <h3 className="text-lg font-semibold">
                  Documents
                </h3>

                <p className="text-3xl font-bold mt-2">
                  {stats.documents}
                </p>
              </div>

              <div className="bg-purple-100 rounded-lg p-5">
                <h3 className="text-lg font-semibold">
                  AI Accuracy
                </h3>

                <p className="text-3xl font-bold mt-2">
                  {stats.accuracy}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </Layout>
  );
}

export default Profile;