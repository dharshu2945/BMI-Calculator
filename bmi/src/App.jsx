import { Routes, Route } from "react-router-dom";
import BMIForm from "./component/BMIForm";
import BMIResult from "./component/BMIResult";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BMIForm />} />
      <Route path="/result" element={<BMIResult />} />
    </Routes>
  );
}

export default App;