import { getCurrentWindow } from "@tauri-apps/api/window";

function App() {
  const handleDrag = async () => {
    const win = getCurrentWindow();
    await win.startDragging();
  };

  return (
    <div
      onMouseDown={handleDrag}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      }}
    >
      <img
        src="/robot.png"
        alt="robot"
        style={{
          width: "120px",
          cursor: "grab",
          userSelect: "none",
        }}
      />
    </div>
  );
}

export default App;