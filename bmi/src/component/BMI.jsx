import { useState } from "react";
import "./BMI.css";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");

const calculateBMI = () => {
  if (!height || !weight) return;

  const h = Number(height) / 100;
  const w = Number(weight);

  const calculated = w / (h * h);

  setBmi(calculated.toFixed(2));

  if (calculated < 18.5) setStatus("under");
  else if (calculated < 25) setStatus("normal");
  else setStatus("over");
};


  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      <input
        type="number"
        placeholder="Height (cm)"
        onChange={(e) => setHeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Weight (kg)"
        onChange={(e) => setWeight(e.target.value)}
      />

      <button onClick={calculateBMI}>Calculate</button>

      {bmi && <h2 className="result">Your BMI: {bmi}</h2>}

      {status === "under" && (
        <div className="statusBox">
          <h3 className="under">You are Underweight</h3>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
            alt="underweight"
          />
        </div>
      )}

      {status === "normal" && (
        <div className="statusBox">
          <h3 className="normal">Your Weight is Normal 👍</h3>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922688.png"
            alt="normal"
          />
        </div>
      )}

      {status === "over" && (
        <div className="statusBox">
          <h3 className="over">You are Overweight</h3>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1048/1048949.png"
            alt="overweight"
          />
        </div>
      )}
    </div>
  );
}

export default BMI;