import "./Character.css";



type Props = {
  onClick?: () => void;
  emotion?: string;
};

function Character({ onClick, emotion = "neutral" }: Props) {
  return (
    <img
      src="/robot.png"
      onClick={onClick}
      className={`character ${emotion}`}
    />
  );
}

export default Character;