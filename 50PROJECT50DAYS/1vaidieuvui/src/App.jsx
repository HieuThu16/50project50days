// src/App.jsx
import "./App.css";
import ProgressSteps from "./ProgressSteps";

function App() {
  return (
    <div className="App">
      <h1>Progress Steps</h1>
      <ProgressSteps totalSteps={4} />
    </div>
  );
}

export default App;
