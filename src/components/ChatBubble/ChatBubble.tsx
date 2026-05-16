import { useState } from "react";
import "./ChatBubble.css";

import Message from "./Message";

type MessageType = {
  text: string;
  sender: "user" | "ai";
};

function ChatBubble() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<MessageType[]>([ // intial message from AI
    {
      text: "Hey!",
      sender: "ai",
    },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: MessageType = {
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    // fake AI response for now
    setTimeout(() => {
      const aiMessage: MessageType = {
        text: "I’m still learning...",
        sender: "ai",
      };

      setMessages((prev) => [...prev, aiMessage]);
    }, 500);
  };

  return (
    <div className="chat-bubble">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <Message
            key={index}
            text={msg.text}
            sender={msg.sender}
          />
        ))}
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Talk to your robot..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBubble;