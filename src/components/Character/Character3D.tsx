import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

type Emotion = "neutral" | "playful" | "teasing" | "curious";

type Props = {
  emotion: Emotion;
};

function Robot({ emotion }: Props) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (emotion === "playful") setScale(1.1);
    else if (emotion === "teasing") setScale(0.95);
    else if (emotion === "curious") setScale(1.2);
    else setScale(1);
  }, [emotion]);

  return (
    <mesh scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={
        emotion === "teasing"
          ? "orange"
          : emotion === "playful"
          ? "lightblue"
          : emotion === "curious"
          ? "purple"
          : "gray"
      } />
    </mesh>
  );
}

export default function Character3D({ emotion }: Props) {
  return (
    <div style={{ width: "200px", height: "200px" }}>
      <Canvas>
        <ambientLight />
        <directionalLight position={[2, 2, 2]} />
        <Robot emotion={emotion} />
      </Canvas>
    </div>
  );
}