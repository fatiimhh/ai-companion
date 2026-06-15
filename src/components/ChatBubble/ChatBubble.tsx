import { useState, useEffect, useRef } from "react";

import "./ChatBubble.css";

import ChatHeader from "./ChatHeader";
import Message from "./Message";

import { generateDooReply } from "../../logic/doo/personality";
import type { Emotion, DooContext } from "../../logic/doo/types";

type MessageType = {
  text: string;
  sender: "user" | "ai";
};

type ChatBubbleProps = {
  emotion: Emotion;
  setEmotion: React.Dispatch<React.SetStateAction<Emotion>>;
};

function ChatBubble({
  emotion,
  setEmotion,
}: ChatBubbleProps) {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<MessageType[]>([
    { text: "Hey I’m Doo. Try me", sender: "ai" },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [context, setContext] = useState<DooContext>({
    lastMessages: [],
    messageCount: 0,
  });

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input;

    const userMessage: MessageType = {
      text: userText,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setIsTyping(true);

    setTimeout(() => {
      const nextContext: DooContext = {
        lastMessages: [...context.lastMessages, userText],
        messageCount: context.messageCount + 1,
      };

      const result = generateDooReply(userText, nextContext);

      setMessages((prev) => [
        ...prev,
        {
          text: result.response,
          sender: "ai",
        },
      ]);

      setContext(nextContext);

      // Update Doo's emotion globally
      setEmotion(result.emotion);

      setIsTyping(false);
    }, 1200 + Math.random() * 400);
  };

  return (
    <div className="chat-bubble">
      <ChatHeader />

      {/* Debug panel */}
      <div
        style={{
          fontSize: "12px",
          opacity: 0.6,
          marginBottom: "8px",
        }}
      >
        Emotion: {emotion}
      </div>

      <div className="messages-container">
        {messages.map((msg, i) => (
          <Message
            key={i}
            text={msg.text}
            sender={msg.sender}
          />
        ))}

        {isTyping && (
          <div className="typing">
            Doo is thinking <span className="dots">...</span>
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

        <button onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatBubble;