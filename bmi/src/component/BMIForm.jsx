import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BMI.css";

function BMIForm() {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!height || !weight) return;

    let heightInMeters;
    let weightInKg;

    // Height conversion
    if (heightUnit === "cm") {
      heightInMeters = height / 100;
    } else {
      heightInMeters = height * 0.3048; // feet → meter
    }

    // Weight conversion
    if (weightUnit === "kg") {
      weightInKg = weight;
    } else {
      weightInKg = weight * 0.453592; // pounds → kg
    }

    const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);

    navigate("/result", {
      state: { name, bmi }
    });
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
      />

      <div className="row">
        <input
          type="number"
          placeholder="Height"
          onChange={(e) => setHeight(e.target.value)}
        />
        <select onChange={(e) => setHeightUnit(e.target.value)}>
          <option value="cm">cm</option>
          <option value="feet">feet</option>
        </select>
      </div>

      <div className="row">
        <input
          type="number"
          placeholder="Weight"
          onChange={(e) => setWeight(e.target.value)}
        />
        <select onChange={(e) => setWeightUnit(e.target.value)}>
          <option value="kg">kg</option>
          <option value="pounds">pounds</option>
        </select>
      </div>

      <button onClick={handleSubmit}>Calculate BMI</button>
    </div>
  );
}

export default BMIForm;