function QuickActions() {

  return (

    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-5">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <button className="bg-blue-600 text-white rounded-lg p-3">
          New Project
        </button>

        <button className="bg-green-600 text-white rounded-lg p-3">
          Upload File
        </button>

        <button className="bg-purple-600 text-white rounded-lg p-3">
          Run AI
        </button>

        <button className="bg-orange-500 text-white rounded-lg p-3">
          Generate Report
        </button>

      </div>

    </div>

  );
}

export default QuickActions;