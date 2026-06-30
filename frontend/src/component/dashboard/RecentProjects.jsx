function RecentProjects() {

  const projects = [
    "Digital Twin Factory",
    "Predictive Maintenance",
    "Quality Inspection",
    "Energy Monitoring",
    "Machine Vision",
  ];

  return (

    <div className="bg-white shadow rounded-xl p-6">

      <h2 className="text-2xl font-bold mb-4">
        Recent Projects
      </h2>

      <ul className="space-y-3">

        {projects.map((project, index) => (

          <li
            key={index}
            className="border-b pb-2"
          >
            ✅ {project}
          </li>

        ))}

      </ul>

    </div>

  );
}

export default RecentProjects;