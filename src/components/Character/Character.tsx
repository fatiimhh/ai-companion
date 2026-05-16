import "./Character.css";



type CharacterProps = {
  onClick: () => void;
};

function Character({ onClick }: CharacterProps) {
  return (
    <img
  src="/robot.png"
  alt="robot"
  onClick={onClick}
  className="character"
/>
  );
}

export default Character;