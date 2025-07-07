import { useState, useEffect } from "react";
import { MessageCircle, Send, User, Bot } from "lucide-react";
import axios from "axios";

const API_URL = "https://primary-production-2717.up.railway.app/webhook/f1298804-57c9-4080-9b02-a46c2ff3197e/chat";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    setSessionId(generateSessionId());
  }, []);

  function generateSessionId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
    if (messages.length === 0) {
      setMessages([{ text: "Ask me anything about NeuraMindsAI! 🤖", sender: "bot" }]);
    }
  };

  const sendMessage = async () => {
    if (input.trim() === "") return;
    const userMessage = { text: input, sender: "user" as "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const requestBody = {
      sessionId,
      action: "sendMessage",
      chatInput: input,
    };

    try {
      const response = await axios.post(API_URL, requestBody, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.data.output) {
        setMessages((prev) => [...prev, { text: response.data.output, sender: "bot" as "bot" }]);
      } else {
        setMessages((prev) => [...prev, { text: "⚠️ Error: No output received.", sender: "bot" as "bot" }]);
      }
    } catch (error) {
      console.error("Error calling chat API:", error);
      setMessages((prev) => [...prev, { text: "⚠️ Error: Unable to get response.", sender: "bot" as "bot" }]);
    }
  };

  return (
    <>
      <button
        className="fixed bottom-5 right-5 bg-violet-600 hover:bg-violet-700 text-white p-4 rounded-full shadow-lg transition z-[9999]"
        onClick={toggleChat}
      >
        <MessageCircle size={24} />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-5 w-80 bg-violet-900 shadow-lg rounded-lg border border-gray-600 z-[9999]">
          <div className="bg-violet-700 text-white p-3 flex justify-between">
            Chatbot
            <button onClick={toggleChat} className="text-white">✕</button>
          </div>

          <div className="h-64 overflow-y-auto p-3 space-y-2 bg-violet-950 text-white">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                {msg.sender === "bot" && <Bot size={24} className="text-violet-400 mr-2" />}
                <div className={`p-2 rounded-lg max-w-[75%] ${msg.sender === "user" ? "bg-violet-500" : "bg-violet-700"}`}>
                  {msg.text}
                </div>
                {msg.sender === "user" && <User size={24} className="text-yellow-300 ml-2" />}
              </div>
            ))}
          </div>

          <div className="flex border-t border-gray-600 p-2 bg-violet-800">
            <input
              type="text"
              className="flex-grow p-2 rounded-md bg-violet-900 text-white border border-gray-500 outline-none"
              placeholder="Ask about NeuraMindsAI..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button className="bg-violet-600 hover:bg-violet-700 text-white p-2 rounded-md ml-2" onClick={sendMessage}>
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
