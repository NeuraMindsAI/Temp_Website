import { useState, useEffect } from "react";
import { MessageCircle, Send, User, Bot } from "lucide-react";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen((prev) => !prev);

    // Show "Under Construction 🚧" when chat opens for the first time
    if (messages.length === 0) {
      setMessages([{ text: "Under Construction 🚧", sender: "bot" }]);
    }
  };

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    // Respond with "Under Construction 🚧"
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "Under Construction 🚧", sender: "bot" }]);
    }, 500);
  };

  return (
    <>
      {/* Chatbot Floating Button */}
      <button
        className="fixed bottom-5 right-5 bg-violet-600 hover:bg-violet-700 text-white p-4 rounded-full shadow-lg transition z-[9999]"
        onClick={toggleChat}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chatbox Container */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 w-80 bg-violet-900 shadow-lg rounded-lg overflow-hidden border border-gray-600 z-[9999]">
          {/* Chatbox Header */}
          <div className="bg-violet-700 text-white p-3 font-semibold flex justify-between">
            Chatbot
            <button onClick={toggleChat} className="text-white">✕</button>
          </div>

          {/* Messages Area */}
          <div className="h-64 overflow-y-auto p-3 space-y-2 bg-violet-950 text-white">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-center ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && <Bot size={24} className="text-violet-400 mr-2" />}
                <div
                  className={`p-2 rounded-lg max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-violet-500 text-white self-end ml-auto"
                      : "bg-violet-700 text-white"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && <User size={24} className="text-yellow-300 ml-2" />}
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex border-t border-gray-600 p-2 bg-violet-800">
            <input
              type="text"
              className="flex-grow p-2 rounded-md bg-violet-900 text-white border border-gray-500 outline-none"
              placeholder="Write a message..."
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
