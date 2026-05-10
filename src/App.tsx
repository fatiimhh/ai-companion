import { useState } from "react";

import Character from "./components/Character/Character";
import ChatBubble from "./components/ChatBubble/ChatBubble";

function App() {
  const [showBubble, setShowBubble] = useState(false);

  const handleCharacterClick = () => {
    setShowBubble(!showBubble);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        position: "relative",
        padding: "20px",
      }}
    >
      {showBubble && <ChatBubble />}

      <Character onClick={handleCharacterClick} />
    </div>
  );
}

export default App;