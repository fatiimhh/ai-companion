import { useState } from "react";
import "./ChatBubble.css";

import ChatHeader from "./ChatHeader";
import Message from "./Message";

type MessageType = {
  text: string;
  sender: "user" | "ai";
};

function ChatBubble() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<MessageType[]>([
    { text: "Hey I’m Doo. Try me.", sender: "ai" },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { text: input, sender: "user" },
    ]);

    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Hmm… interesting. I *could* respond nicely… but where’s the fun in that?",
          sender: "ai",
        },
      ]);
    }, 500);
  };

  return (
    <div className="chat-bubble">
      <ChatHeader />

      <div className="messages-container">
        {messages.map((msg, i) => (
          <Message key={i} text={msg.text} sender={msg.sender} />
        ))}
      </div>

      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Talk to Doo..."
        />

        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatBubble;