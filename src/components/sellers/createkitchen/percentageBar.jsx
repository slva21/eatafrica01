import React from "react";

const PercentageBar = ({ currentStep, onCurrentPercentage }) => {
  return (
    <div className="progress mt-3">
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        style={{
          width: onCurrentPercentage(currentStep, 1, 4, 5, 100) + "%",
          backgroundColor: "gold",
        }}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  );
};

export default PercentageBar;
