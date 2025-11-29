// src/components/AIChatBox.jsx
import React, { useState } from "react";
import "./AIChatBox.css";

export default function AIChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(true);

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { from: "user", text: input }]);

    setMessages((prev) => [
      ...prev,
      { from: "bot", text: "This is AI reply demo!" }
    ]);

    setInput("");
  };

  return (
    <>
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>

      {open && (
        <div className="chatbox">
          <div className="header">AI Assistant</div>

          <div className="messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.from === "user" ? "user-msg" : "bot-msg"}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="input-box">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
