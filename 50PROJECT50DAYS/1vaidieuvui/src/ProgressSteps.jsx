// src/ProgressSteps.jsx
import { useState } from "react";
import "./ProgressSteps.css";



const ProgressSteps = ({ totalSteps = 4 }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="progress-container">
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        ></div>
      </div>

      <div className="circles">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div
            key={step}
            className={`circle ${step <= currentStep ? "active" : ""}`}
          >
            {step}
          </div>
        ))}
      </div>

      <div className="buttons">
        <button
          className="btn"
          disabled={currentStep === 1}
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="btn"
          disabled={currentStep === totalSteps}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProgressSteps;
