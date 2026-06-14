import { useState, useEffect, useRef } from "react";
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

  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

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
      const aiMessage: MessageType = {
        text: "Hmm… you're interesting today. I like that",
        sender: "ai",
      };

      setMessages((prev) => [...prev, aiMessage]);
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

        {isTyping && (
          <div className="typing">
            Doo is thinking<span className="dots">...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
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