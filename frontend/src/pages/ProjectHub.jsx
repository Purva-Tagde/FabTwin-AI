import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../component/layout/Layout";

function ProjectHub() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");

  // Load Projects
  const getProjects = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/projects");
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  // Add Project
  const addProject = async () => {
    const name = prompt("Enter Project Name");

    if (!name) return;

    await axios.post("http://127.0.0.1:5000/projects", {
      name,
      status: "Active",
      updated: "Today",
    });

    getProjects();
  };

  // Delete Project
  const deleteProject = async (id) => {
    await axios.delete(`http://127.0.0.1:5000/projects/${id}`);
    getProjects();
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="p-6">

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold">
            Project Hub
          </h1>

          <button
            onClick={addProject}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            + New Project
          </button>

        </div>

        <input
          type="text"
          placeholder="Search Projects..."
          className="w-full border rounded-lg p-3 mb-6"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="bg-white rounded-xl shadow">

          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Project</th>
                <th>Status</th>
                <th>Updated</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredProjects.map((project) => (

                <tr
                  key={project._id}
                  className="border-t"
                >

                  <td className="p-4">
                    {project.name}
                  </td>

                  <td className="text-green-600">
                    {project.status}
                  </td>

                  <td>
                    {project.updated}
                  </td>

                  <td>

                    <button
                      className="text-blue-600 mr-4"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteProject(project._id)}
                      className="text-red-600"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </Layout>
  );
}

export default ProjectHub;