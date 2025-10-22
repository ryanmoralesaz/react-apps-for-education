// CalcButton.jsx
import "../css/calc-button.css";

function CalcButton({ textValue, sendToOutput, index }) {
  const animationDelay = `${index * 0.4}s`;
  return (
    <div
      className="calc-button"
      onClick={() => sendToOutput(textValue)}
      style={{ animationDelay }}
    >
      {textValue}
    </div>
  );
}

export default CalcButton;
