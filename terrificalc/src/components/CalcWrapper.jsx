// CalculatorWrapper.jsx
import "../css/CalcWrapper.css";
// import MrTerrific from "../assets/mr-terrific.jpeg";
import { useState } from "react";
import CalcButton from "./CalcButton.jsx";
import buttonValues from "./buttonValues.js";

function CalculatorWrapper() {
  const [output, setOutput] = useState("");
  const sendToOutput = (value) => {
    setOutput(output + value);
  };
  return (
    <div className="calc-wrapper">
      <div className="display-wrapper">
        <div className="primary-display">{output}</div>
        {/* <img className="calcAvatar" src={MrTerrific}></img>*/}
      </div>
      <div className="button-wrapper">
        {buttonValues.map((value, index) => (
          <CalcButton
            key={index}
            textValue={value}
            sendToOutput={sendToOutput}
            index={index}
          ></CalcButton>
        ))}
      </div>
    </div>
  );
}

export default CalculatorWrapper;
