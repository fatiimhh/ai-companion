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

const [isTyping, setIsTyping] = useState(false); // typing indicator

  const handleSend = () => {
  if (!input.trim()) return;

  const userMessage: MessageType = {
    text: input,
    sender: "user",
  };

  setMessages((prev) => [...prev, userMessage]);
  setInput("");

  setIsTyping(true);

  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      {
        text: "Hmm… you're interesting today. I like that.",
        sender: "ai",
      },
    ]);

    setIsTyping(false);
  }, 1200);
};


  return (
    <div className="chat-bubble">
      <ChatHeader />

      <div className="messages-container">
        {messages.map((msg, i) => (
          <Message key={i} text={msg.text} sender={msg.sender} />
        ))}
      </div>

      
    {isTyping && (
      <div className="typing">
        Doo is thinking<span className="dots">...</span>
     </div>
      )}

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