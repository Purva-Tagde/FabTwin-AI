function AIAssistant() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold mb-3">
        AI Assistant
      </h2>

      <p className="text-gray-600 mb-5">
        Ask anything about your factory, machines or documents.
      </p>

      <input
        type="text"
        placeholder="Ask FabTwin AI..."
        className="w-full border rounded-lg p-3"
      />

      <button
        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Ask AI
      </button>

    </div>
  );
}

export default AIAssistant;