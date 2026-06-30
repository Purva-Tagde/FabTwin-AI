import Layout from "../component/layout/Layout";

function Settings() {
  return (
    <Layout>
      <div className="p-6">

        <h1 className="text-3xl font-bold mb-6">
          Settings
        </h1>

        <div className="bg-white rounded-xl shadow p-8 max-w-4xl">

          <div className="flex justify-between items-center py-4 border-b">
            <div>
              <h2 className="font-semibold">Dark Mode</h2>
              <p className="text-gray-500 text-sm">
                Enable dark theme
              </p>
            </div>

            <input type="checkbox" />
          </div>

          <div className="flex justify-between items-center py-4 border-b">
            <div>
              <h2 className="font-semibold">Email Notifications</h2>
              <p className="text-gray-500 text-sm">
                Receive project updates
              </p>
            </div>

            <input type="checkbox" defaultChecked />
          </div>

          <div className="flex justify-between items-center py-4 border-b">
            <div>
              <h2 className="font-semibold">AI Suggestions</h2>
              <p className="text-gray-500 text-sm">
                Enable AI recommendations
              </p>
            </div>

            <input type="checkbox" defaultChecked />
          </div>

          <div className="flex justify-between items-center py-4">
            <div>
              <h2 className="font-semibold">Auto Backup</h2>
              <p className="text-gray-500 text-sm">
                Backup documents automatically
              </p>
            </div>

            <input type="checkbox" />
          </div>

        </div>

      </div>
    </Layout>
  );
}

export default Settings;