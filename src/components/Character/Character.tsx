import "./Character.css";



type Props = {
  onClick?: () => void;
  emotion?: string;
};

function Character({ onClick, emotion = "neutral" }: Props) {
  console.log("Character emotion:", emotion);
  
  return (
    <img
      src="/robot.png"
      onClick={onClick}
      className={`character ${emotion}`}
    />
  );
}

export default Character;