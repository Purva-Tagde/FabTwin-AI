import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Layout from "../component/layout/Layout";
import ReactMarkdown from "react-markdown";

function AICopilot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  // Auto Scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "You",
      text: message,
    };

    setChat((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:5000/ai", {
        prompt: message,
      });

      setChat((prev) => [
        ...prev,
        {
          sender: "AI",
          text: res.data.response,
        },
      ]);
    } catch (err) {
      setChat((prev) => [
        ...prev,
        {
          sender: "AI",
          text: "Error connecting to AI.",
        },
      ]);
      console.log(err);
    }

    setLoading(false);
    setMessage("");
  };

  return (
    <Layout>
      <div className="p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold">
            AI Copilot
          </h1>

          <button
            onClick={() => setChat([])}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Clear Chat
          </button>

        </div>

        {/* Chat Box */}
        <div className="bg-white rounded-xl shadow h-[450px] overflow-y-auto p-5 mb-5">

          {chat.map((item, index) => (
            <div key={index} className="mb-5">

              <strong>{item.sender}</strong>

              <div className="bg-gray-100 rounded-lg p-3 mt-2 prose max-w-none">
                <ReactMarkdown>
                  {item.text}
                </ReactMarkdown>
              </div>

            </div>
          ))}

          {loading && (
            <p className="text-blue-600 font-medium">
              AI is thinking...
            </p>
          )}

          <div ref={chatEndRef}></div>

        </div>

        {/* Input */}
        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Ask anything about manufacturing, AI, projects..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            className="flex-1 border rounded-lg p-3"
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700"
          >
            Send
          </button>

        </div>

      </div>
    </Layout>
  );
}

export default AICopilot;