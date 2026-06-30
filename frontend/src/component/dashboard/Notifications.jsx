function Notifications() {

  const notifications = [
    "Machine 2 temperature is high",
    "New inspection report uploaded",
    "AI completed predictive analysis",
    "Factory Twin synchronized",
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-4">
        Notifications
      </h2>

      <ul className="space-y-3">

        {notifications.map((item, index) => (

          <li
            key={index}
            className="border-b pb-2"
          >
            🔔 {item}
          </li>

        ))}

      </ul>

    </div>
  );
}

export default Notifications;